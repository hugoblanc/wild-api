import { OauthResponse } from './oauth-response';
import { Injectable, HttpService } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { map, flatMap } from 'rxjs/operators';
import querystring = require('querystring');
import { AxiosRequestConfig } from 'axios';
import { OdysseyService } from '../../odyssey/odyssey.service';

@Injectable()
export class AuthService {

    static HOST = 'https://odyssey.wildcodeschool.com/';
    static OAUTH_HOST = AuthService.HOST + 'oauth/';

    constructor(
        private readonly http: HttpService,
        private readonly jwtService: JwtService,
        private readonly odysseyService: OdysseyService) {

    }

    handleOAuthCallback(code: string) {

        const oauth$ = this.getOauth(code);

        const user$ = oauth$.pipe(flatMap((odyResponse: OauthResponse) => {
            const axiosConfig = this.createBearerConfig(odyResponse.accessToken);
            return this.odysseyService.getCurrentUser(axiosConfig);
        }));

        const signedToken$ = user$.pipe(map((odysseyMeDto: OdysseyMeDTO) => {
            return this.login({ email: odysseyMeDto.email, id: odysseyMeDto.id });
        }));
        return signedToken$;

    }

    /**
     * *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     * *                                      Récupération des crédential Oauth
     * *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */

    private getOauth(code: string) {
        const config = this.createOauthConf(code);

        return this.http.post(AuthService.OAUTH_HOST + 'token', config.data, config)
            .pipe(map((response) => {
                return new OauthResponse(response.data);
            }));
    }

    login(user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    private createOauthConf(code: string) {
        const credentials = {
            code,
            redirect_uri: 'http://localhost:3000/auth/oauth',
            grant_type: 'authorization_code',
            client_secret: '44f6416225beb466428c70c92e0a7a50c42c88573f2f99784b24095ba446c2dd',
            client_id: '0dd2e3ce72b4e0345c8f41c23b4e1da2a9e81f95d6a50b14e2c0053a95b47cc1',
        };

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: querystring.stringify(credentials),
        };

        return config;
    }

    /**
     * *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     * *                      Récupération des informations utilisateur
     * *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */

    private createBearerConfig(token: string): AxiosRequestConfig {
        const axiosConfig: AxiosRequestConfig = {
            headers: this.createAuthHeader(token),
        };
        return axiosConfig;
    }
    private createAuthHeader(token: string): any {
        const authHeader = {
            Authorization: `Bearer ${token}`,
        };
        return authHeader;
    }

}

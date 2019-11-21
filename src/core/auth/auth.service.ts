import { HttpService, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AxiosRequestConfig } from 'axios';
import { from } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { OdysseyService } from '../../odyssey/odyssey.service';
import { User } from '../../users/user.entity';
import { UsersService } from '../../users/users.service';
import { OauthResponse } from './oauth-response';
import querystring = require('querystring');

@Injectable()
export class AuthService {

    static HOST = 'https://odyssey.wildcodeschool.com/';
    static OAUTH_HOST = AuthService.HOST + 'oauth/';
    static ROUTE_AUTH = AuthService.OAUTH_HOST + 'authorize?client_id=0dd2e3ce72b4e0345c8f41c23b4e1da2a9e81f95d6a50b14e2c0053a95b47cc1&response_type=code';
    static GLOBAL_AUTH = AuthService.ROUTE_AUTH + '&redirect_uri=https%3A%2F%2Fwild-api.witpoc.com%2Fauth%2Foauth';
    // static GLOBAL_AUTH = AuthService.ROUTE_AUTH + '&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Foauth';

    readonly logger = new Logger(AuthService.name);

    constructor(
        private readonly http: HttpService,
        private readonly jwtService: JwtService,
        private readonly odysseyService: OdysseyService,
        private readonly userService: UsersService) {

    }

    handleOAuthCallback(path: string, code: string) {

        // Get token
        const oauth$ = this.getOauth(path, code);

        // Get du user via token
        const odysseyDTO$ = oauth$.pipe(flatMap((odyResponse: OauthResponse) => {
            const axiosConfig = this.createBearerConfig(odyResponse.accessToken);
            this.logger.log('Get odyssey answer: OK');
            return this.odysseyService.getCurrentUser(axiosConfig);
        }),
            catchError((error) => {
                throw error;
            },
            ));

        // Save ou update du user
        const user$ = odysseyDTO$.pipe(
            flatMap((odyDTO: OdysseyMeDTO) =>
                from(this.userService.save((new User()).assignOdysseyDTo(odyDTO))),
            ),
        );

        // Génération du jwt
        const signedToken$ = user$.pipe(map((user: User) => {
            return this.login(user);
        }));

        return signedToken$;

    }

    /**
     * *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     * *                                      Récupération des crédential Oauth
     * *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */

    private getOauth(path: string, code: string) {
        const config = this.createOauthConf(path, code);

        return this.http.post(AuthService.OAUTH_HOST + 'token', config.data, config)
            .pipe(map((response) => {
                this.logger.log('Get Oauth data: ok');
                const result = new OauthResponse(response.data);
                this.logger.log('Parsing Oauth data: ok');
                return result;
            }));
    }

    login(user: any) {
        return {
            access_token: this.jwtService.sign({ payload: user }),
        };
    }

    private createOauthConf(path: string, code: string) {
        const credentials = {
            code,
            redirect_uri: `https://wild-api.witpoc.com/auth/${path}/oauth`,
            // redirect_uri: 'http://localhost:3000/auth/oauth',
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

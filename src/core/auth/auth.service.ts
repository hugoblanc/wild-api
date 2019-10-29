import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import querystring = require('querystring');

@Injectable()
export class AuthService {

    static HOST = 'https://odyssey.wildcodeschool.com/oauth/';

    constructor(private readonly http: HttpService) {

    }

    handleOAuthCallback(code: string) {

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

        return this.http.post(AuthService.HOST + 'token', querystring.stringify(credentials), config)
            .pipe(map((response) => {
                return response.data;
            }));
    }
}

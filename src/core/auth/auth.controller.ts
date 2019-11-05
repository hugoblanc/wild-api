import { AuthService } from './auth.service';
import { Controller, Get, Param, Redirect, Query } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(private readonly service: AuthService) {

    }

    @Get('oauth')
    @Redirect('http://localhost:4200/')
    async setupOAuth(@Query('code') query) {

        const token = await this.service.handleOAuthCallback(query).toPromise();
        console.log('http://localhost:4200/auth/' + token.access_token);

        return { url: 'http://localhost:4200/auth/' + token.access_token };
    }

    @Get()
    @Redirect(AuthService.OAUTH_HOST + 'authorize?client_id=0dd2e3ce72b4e0345c8f41c23b4e1da2a9e81f95d6a50b14e2c0053a95b47cc1&response_type=code&redirect_uri=https%3A%2F%2Fwild-api.witpoc.com%2Fauth%2Foauth', 302)
    getAuth() {

        return { url: AuthService.OAUTH_HOST + 'authorize?client_id=0dd2e3ce72b4e0345c8f41c23b4e1da2a9e81f95d6a50b14e2c0053a95b47cc1&response_type=code&redirect_uri=https%3A%2F%2Fwild-api.witpoc.com%2Fauth%2Foauth' };
    }

}

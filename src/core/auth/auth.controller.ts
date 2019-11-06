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
    @Redirect(AuthService.GLOBAL_AUTH, 302)
    getAuth() { }

}

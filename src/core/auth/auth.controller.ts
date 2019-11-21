import { Controller, Get, Query, Redirect, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly service: AuthService) {

    }

    @Get('ticket/oauth')
    @Redirect('https://ticket-tracker.witpoc.com/')
    async setupTicketOAuth(@Query('code') query) {
        const token = await this.service.handleOAuthCallback('ticket', query).toPromise();
        return { url: 'https://ticket-tracker.witpoc.com/auth/' + token.access_token };
    }

    @Get('watcher/oauth')
    @Redirect('https://watcher.witpoc.com/')
    async setupWatcherOAuth(@Query('code') query) {
        const token = await this.service.handleOAuthCallback('watcher', query).toPromise();
        return { url: 'https://watcher.witpoc.com/auth/' + token.access_token };
    }

    @Get()
    @Redirect(AuthService.GLOBAL_AUTH, 302)
    getAuth() { }

    @Get('ticket')
    @Redirect(AuthService.TICKET_AUTH, 302)
    getAuthTicket() { }

}

export class OauthResponse {

    accessToken: string;
    tokenType: string;
    expiresIn: number;
    scope: string;
    createdAt: Date;

    constructor(input: any) {
        this.accessToken = input.access_token;
        this.tokenType = input.token_type;
        this.expiresIn = input.expires_in;
        this.scope = input.scope;
        this.createdAt = new Date(input.created_at);
    }

}

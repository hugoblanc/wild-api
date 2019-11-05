import { Injectable, HttpService } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OdysseyService {

    static HOST = 'https://odyssey.wildcodeschool.com/api/v2/';
    static ME_URL = OdysseyService.HOST + 'me';

    constructor(private readonly http: HttpService) { }

    getCurrentUser(axiosConfig: AxiosRequestConfig): Observable<OdysseyMeDTO> {
        return this.http.get(OdysseyService.ME_URL, axiosConfig).pipe(map((result: AxiosResponse<OdysseyMeDTO>) => result.data));
    }

}

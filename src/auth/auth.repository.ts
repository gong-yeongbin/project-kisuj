import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class AuthRepository {
	constructor(private readonly httpService: HttpService) {}

	async token(): Promise<TokenDto> {
		const { data } = await firstValueFrom(this.httpService.post('/oauth2/token'));
		return data;
	}
}

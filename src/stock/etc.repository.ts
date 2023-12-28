import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { T8436Dto } from './dto/t8436.dto';

@Injectable()
export class EtcRepository {
	constructor(private readonly httpService: HttpService) {}

	// 주식종목조회 API용
	async t8436(token: string, gubun: string = '0'): Promise<T8436Dto> {
		const { data } = await firstValueFrom(
			this.httpService.post(
				'/stock/etc',
				{ t8436InBlock: { gubun: gubun } },
				{
					headers: {
						authorization: `Bearer ${token}`,
						tr_cd: 't8436',
					},
				}
			)
		);

		return data;
	}
}

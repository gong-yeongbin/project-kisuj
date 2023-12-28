import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ChartRepository {
	constructor(private readonly httpService: HttpService) {}

	async t8410(token: string, shcode: string) {
		const { data } = await firstValueFrom(
			this.httpService.post(
				'/stock/chart',
				{ t8410InBlock: { shcode: shcode, gubun: '2', qrycnt: 100, sdate: '20231228', edate: '20231228', cts_date: '20231228', comp_yn: 'N', sujung: 'Y' } },
				{
					headers: {
						authorization: `Bearer ${token}`,
						tr_cd: 't8410',
					},
				}
			)
		);

		return data;
	}
}

import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TradingRepository {
	constructor(
		private readonly configService: ConfigService,
		private readonly httpService: HttpService
	) {}

	// /uapi/domestic-stock/v1/trading/order-cash
	async orderCash(pdno: string, ordQty: string = '1', type: string) {
		const gubun: string = this.configService.get<string>('env');

		return this.httpService
			.post(
				'/order-cash',
				{
					CANO: this.configService.get<string>('cano'),
					ACNT_PRDT_CD: this.configService.get<string>('acnt_prdt_cd'),
					PDNO: pdno,
					ORD_DVSN: '01',
					ORD_QTY: ordQty,
					ORD_UNPR: '0',
				},
				{
					headers: {
						'Content-Type': 'application/json; charset=UTF-8',
						authorization: 'Bearer ',
						appkey: this.configService.get<string>('appKey'),
						appsecret: this.configService.get<string>('appSecret'),
						tr_id: `${gubun}${type == '0' ? 'TTC0802U' : 'TTC0801U'}`,
					},
				}
			)
			.pipe(map((response) => response.data));
	}

	// /uapi/domestic-stock/v1/trading/inquire-balance
	inquireBalance() {
		const gubun: string = this.configService.get<string>('env');

		return this.httpService
			.get('/inquire-balance', {
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
					authorization: 'Bearer ',
					appkey: this.configService.get<string>('appKey'),
					appsecret: this.configService.get<string>('appSecret'),
					tr_id: `${gubun}TTC8434R`,
				},
				params: {
					CANO: this.configService.get<string>('cano'),
					ACNT_PRDT_CD: this.configService.get<string>('acnt_prdt_cd'),
					AFHR_FLPR_YN: 'N',
					OFL_YN: '',
					INQR_DVSN: '02',
					UNPR_DVSN: '01',
					FUND_STTL_ICLD_YN: 'N',
					FNCG_AMT_AUTO_RDPT_YN: 'N',
					PRCS_DVSN: '00',
					CTX_AREA_FK100: '',
					CTX_AREA_NK100: '',
				},
			})
			.pipe(map((response) => response.data));
	}
}

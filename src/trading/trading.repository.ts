import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class TradingRepository {
	constructor(private readonly httpService: HttpService) {}

	// /uapi/domestic-stock/v1/trading/order-cash
	async orderCash(cano: string, acntPrdtCd: string, pdno: string, ordDvsn: string = '01', ordQty: string = '1', ordUnpr: string = '0') {
		return this.httpService
			.post(
				'/order-cash',
				{
					CANO: cano,
					ACNT_PRDT_CD: acntPrdtCd,
					PDNO: pdno,
					ORD_DVSN: ordDvsn,
					ORD_QTY: ordQty,
					ORD_UNPR: ordUnpr,
				},
				{ headers: { 'Content-Type': 'application/json; charset=UTF-8', authorization: 'Bearer ', appkey: '', appsecret: '', tr_id: '매수/매도' } }
			)
			.pipe(map((response) => response.data));
	}

	// /uapi/domestic-stock/v1/trading/inquire-balance
	inquireBalance(
		cano: string,
		acntPrdtCd: string,
		afhrFlprYn: string,
		oflYn: string,
		inqrDvsn: string,
		unprDvsn: string,
		fundSttlIcldYn: string,
		fncgAmtAutoRdptYn: string,
		prcsDvsn: string,
		ctxAreaFk100: string,
		ctxAreaNk100: string
	) {
		return this.httpService
			.get('/inquire-balance', {
				headers: { 'Content-Type': 'application/json; charset=UTF-8', authorization: 'Bearer ', appkey: '', appsecret: '', tr_id: '주식잔고조회' },
				params: {
					CANO: cano,
					ACNT_PRDT_CD: acntPrdtCd,
					AFHR_FLPR_YN: afhrFlprYn,
					OFL_YN: oflYn,
					INQR_DVSN: inqrDvsn,
					UNPR_DVSN: unprDvsn,
					FUND_STTL_ICLD_YN: fundSttlIcldYn,
					FNCG_AMT_AUTO_RDPT_YN: fncgAmtAutoRdptYn,
					PRCS_DVSN: prcsDvsn,
					CTX_AREA_FK100: ctxAreaFk100,
					CTX_AREA_NK100: ctxAreaNk100,
				},
			})
			.pipe(map((response) => response.data));
	}
}

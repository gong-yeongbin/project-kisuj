import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthRepository } from './auth/auth.repository';
import { EtcRepository } from './stock/etc.repository';
import { TokenDto } from './auth/dto/token.dto';
import { T8436Dto } from './stock/dto/t8436.dto';
import { ChartRepository } from './stock/chart.repository';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly authRepository: AuthRepository,
		private readonly etcRepository: EtcRepository,
		private readonly chartRepository: ChartRepository
	) {}

	@Get()
	async getHello(): Promise<string> {
		// const auth: TokenDto = await this.authRepository.token();
		// const itemInfo: T8436Dto = await this.etcRepository.t8436(auth.access_token);
		// console.log(itemInfo);
		// const chart = await this.chartRepository.t8410(auth.access_token, data.t8436OutBlock[0].shcode);
		// console.log(chart);

		return this.appService.getHello();
	}
}

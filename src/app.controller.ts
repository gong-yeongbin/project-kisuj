import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EtcRepository } from './stock/etc.repository';
import { AuthRepository } from './auth/auth.repository';
import { T8436Dto } from './stock/dto/t8436.dto';
import { TokenDto } from './auth/dto/token.dto';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly authRepository: AuthRepository,
		private readonly etcRepository: EtcRepository
	) {}

	@Get()
	async getHello(): Promise<string> {
		const auth: TokenDto = await this.authRepository.token();
		const data: T8436Dto = await this.etcRepository.t8436(auth.access_token);

		return this.appService.getHello();
	}
}

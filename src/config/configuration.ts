import * as process from 'process';

export default () => ({
	env: process.env.ENV,
	port: parseInt(process.env.PORT, 10) || 3000,
	appKey: process.env.APPKEY,
	appSecret: process.env.APPSECRET,
	cano: process.env.CANO,
	acnt_prdt_cd: process.env.ACNT_PRDT_CD,
});

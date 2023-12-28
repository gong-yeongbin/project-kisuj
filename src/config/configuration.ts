import * as process from 'process';

export default () => ({
	env: process.env.ENV,
	port: parseInt(process.env.PORT, 10) || 3000,
	ebest: { appKey: process.env.EBEST_APPKEY, secretKey: process.env.EBEST_APPSECRET, domain: process.env.EBEST_DOMAIN },
	kis: { appKey: process.env.APPKEY, appSecret: process.env.APPSECRET, cano: process.env.CANO, acnt_prdt_cd: process.env.ACNT_PRDT_CD },
});

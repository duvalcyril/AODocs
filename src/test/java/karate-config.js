function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
	bearerToken: 'ya29.a0ARrdaM-NkhkpKPJX2PUiTP2vyhETkVhkbtpq6x8z5Y4xgDpJrnMJ9IjxuCf-Y2RECS1qU2Mnfosk8fbpP2Ct1SaoRcGdhNw_cspFqnLdff2B-7ksHSsT9squya8JrrVd4LTlipiOzB2bTz6cmFRm1SgrW9FN',
    driveUrl:"https://www.googleapis.com/drive/v3/files/"
  }
  return config;
}
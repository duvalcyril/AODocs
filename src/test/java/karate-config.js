function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
	bearerToken: 'YOUR_API_TOKEN',
    driveUrl:"https://www.googleapis.com/drive/v3/files/"
  }
  return config;
}
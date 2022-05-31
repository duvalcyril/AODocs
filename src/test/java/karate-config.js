function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
	bearerToken: 'ya29.a0ARrdaM98M-GU3MUYA1X4CpvcgWRDLpKKcB1JzGjn5lmzhSpPLfw5w_XFsz4MaolKMsC9aw98ckC3L4K8cPiAQ7AAh-xaeK4UIs9JLc0N1liT7n0YZlmLpR418yOj8__vh6xeIOlGaqTFSGaFMYhonPy5zs69cw',
    driveUrl:"https://www.googleapis.com/drive/v3/files/"
  }
  return config;
}
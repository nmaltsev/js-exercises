function	delay$(delay) {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve();
		}, delay);
	}); 
}


class Client {
	// This method will simulate an asynchronious API:
	getToken$() {
		return delay$(10000).then(() => Math.random());
	}
}

class TokenManager {
	constructor(api) {
		this.token = null;
	    this.isLock = false;
	    this.queue = [];
		this.api = api;
	}
  
	getToken$() {
	    if (this.isLock) {
	      return new Promise((resolve) => {
	        this.queue.push(resolve);
	      });
	    }
	    if (this.token) return Promise.resolve(this.token);
	    return this.refreshTokenCallback$();
	 }

  /*
  @return {Promise<String>} token
  */
  refreshTokenCallback$() {
    this.isLock = true;
    return this.api.getToken$().then((token) => {
      this.token = token || Math.random();
      this.isLock = false;
      let queueIndex = this.queue.length - 1;
      // In case you want all future subscribers to fire after the first (initial) subscriber you should organize the following part of the code
      while (queueIndex > -1) {
        this.queue[queueIndex](this.token);
        queueIndex -= 1;
      }
      this.queue.length = 0;
      return this.token;
    });
  }
	
} 

let tm = new TokenManager(new Client());
// This request will be resolved in 10 s
tm.getToken$().then((t) => console.log('Token #0 %s', t));

// before fulfilling the promise, there will be several intermediate queries   
[100, 500, 1000].forEach(function(time, i) {
	delay$(time).then(() => {
		console.log('Requesting token #%s', i);
		tm.getToken$().then((t) => console.log('Token #%s %s', i, t));
	});
});
console.log('RUN'); 

'use strict'

const request = require('request');

function retryRequest(options,i) {
    request(options, function(error, response, body) {
	if (!body['ok'] && i < 30) {
	    retryRequest(options,i);
	}
	console.log(body);
    });
}
const Slack = function(url, token) {
    this.url = url;
    this.token = token;
    this.changeStatus = function(emoji,text) {
	var options = {
	    url: this.url,
	    method: 'POST',
	    json: true,
	    timeout: 2000,
	    form: {
		"token": this.token,
		"profile": JSON.stringify({
		    "status_emoji": emoji,
		    "status_text" : text
		})
	    }
	};
	retryRequest(options,0);
    }
}

module.exports = Slack;

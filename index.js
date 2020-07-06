
let Swagger = require('swagger-client');
let apix = require("./apix.json");

exports.main = function () {

	Swagger.http({
		url: `https://services.${apix.domain}/api-sandbox/application/token`,
		method: 'post',
		query: {},
		headers: { "Accept": "*/*", "Content-Type": "application/json" },
		body: JSON.stringify({
			"userName": apix.credentials.username,
			"password": apix.credentials.password
		})
	}).then((response) => {
		var access_token = "bearer " + response.body.access_token;
		console.log(access_token);
		// Insert new API calls here to call with APIX Access Token
		
	}).catch((err) => {
		console.error(err);
	});

}

this.main();
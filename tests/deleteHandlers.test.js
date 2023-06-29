// eslint-disable-next-line no-undef

const config = require('../config');

const requestBody = 
{
	"name": "Nadia",
	"cardId": 2
  }

test('status code should return 200 ', async () => {

	let actualResponseBody;
	let kitID;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		}); 
	actualResponseBody = await response.json();
	kitID = await actualResponseBody["id"];

	} catch (error) {
		console.error(error);
	}

	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitID}`, {
			method: 'DELETE',
			
		});
		actualStatusCode = await response.status;

	} catch (error) { 
		console.error(error);
	}

	await expect(actualStatusCode).toBe(200);

});


test('response body should return "ok" ', async () => {


	let actualStatusCode;
	let actualResponseBody;
	let kitID;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		}); 
	actualStatusCode = await response.status;
	actualResponseBody = await response.json();
	kitID = await actualResponseBody["id"];

	} catch (error) {
		console.error(error);
	}
	
	let actualResponseBody2;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitID}`, {
			method: 'DELETE',
			
		});
		actualResponseBody2 = await response.json();

	} catch (error) { 
		console.error(error);
	}
		await expect(actualResponseBody2.ok).toBe(true);
		
});

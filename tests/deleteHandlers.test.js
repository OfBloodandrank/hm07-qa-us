// eslint-disable-next-line no-undef

const config = require('../config');

const requestBody = 
{
	"name": "Nadia",
	"cardId": 2
  }

//* Before kit can be deleted, it has to be created first within the same test /*
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
//* Delete Test 1 checks that deleting an existing order returns a 200 status code /*
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
//* Before kit can be deleted, it has to be created first within the same test /*
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
//* Delete Test 2 checks that deleting an existing order returns a body response "ok" /*	
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

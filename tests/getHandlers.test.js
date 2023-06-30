// eslint-disable-next-line no-undef
const config = require('../config');

//* Get Test 1 checks that grabbing an existing order returns a 200 status code /*
test('Should Return 200 Status Code.', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


//* Get Test 2 checks that grabbing an existing order returns the the proper body response (the correct order name) /*
test('Body Response Should Contain For Picnic.', async () => {
	let actualBodyResponse;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualBodyResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualBodyResponse.name).toBe("For picnic");
});
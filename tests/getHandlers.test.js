// eslint-disable-next-line no-undef
const config = require('../config');

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



test('Body Should Contain For Picnic.', async () => {
	let actualBodyResponse;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualBodyResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualBodyResponse.name).toBe("For picnic");
});
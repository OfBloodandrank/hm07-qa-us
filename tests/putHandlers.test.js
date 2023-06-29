// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "productsList": [
        {
            "id": 3,
            "quantity": 1
        }
    ]
}

test('Status Code Should Return 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('Response Body Should Contain Fresh Food', async () => {
	let actualBodyResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/12`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualBodyResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualBodyResponse.wareHouse).toBe("Fresh Food");
});

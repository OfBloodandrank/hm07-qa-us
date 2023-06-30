// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "productsList": [
        {
            "id": 4,
            "quantity": 3
        }
    ]
}

//* Post Test 1 checks that creating a new order returns a 200 status code /*
test('Status Code Should Be 201', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(201);
});

//* Post Test 2 checks that creating a new order returns the correct courier service that can service the order /*
test('Response Body Should Contain Order and Go', async () => {
	let actualBodyResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualBodyResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualBodyResponse.courierService).toBe("Order and Go");
});

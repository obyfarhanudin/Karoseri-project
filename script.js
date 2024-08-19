document.getElementById('postAnggota').addEventListener('submit', function (e) {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const alamat = document.getElementById('alamat').value;

	const data = new URLSearchParams();
	data.append('name', name);
	data.append('email', email);
	data.append('phone', phone);
	data.append('alamat', alamat);

	const scriptURL =
		'https://script.google.com/macros/s/AKfycbzsuoUBY8nIGqFnDT7liA7lIFiCrHbDS0D1YffQuLQUWL1RNnQEsNP_98_rPOHlWP4/exec';

	// Tampilkan pesan loading
	document.querySelector('.loading').style.display = 'block';
	document.querySelector('.error-message').style.display = 'none';
	document.querySelector('.sent-message').style.display = 'none';

	fetch(scriptURL, {
		method: 'POST',
		body: data,
	})
		.then((response) => response.text())
		.then((data) => {
			console.log('Success:', data);

			// Mengosongkan input
			document.getElementById('name').value = '';
			document.getElementById('email').value = '';
			document.getElementById('phone').value = '';
			document.getElementById('alamat').value = '';

			// Sembunyikan pesan loading dan tampilkan pesan sukses
			document.querySelector('.loading').style.display =
				'none';
			document.querySelector('.sent-message').style.display =
				'block';
		})
		.catch((error) => {
			console.error('Error:', error);

			// Sembunyikan pesan loading dan tampilkan pesan error
			document.querySelector('.loading').style.display =
				'none';
			document.querySelector(
				'.error-message'
			).style.display = 'block';
		});
});

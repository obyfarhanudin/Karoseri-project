document.getElementById('postPengajuan').addEventListener('submit', function (e) {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const alamat = document.getElementById('alamat').value;
	const model = document.getElementById('model').value;
	const merek = document.getElementById('merek').value;
	const tahunbuat = document.getElementById('tahunbuat').value;
	const nopol = document.getElementById('nopol').value;
	const norank = document.getElementById('norank').value;
	const layanan = document.getElementById('layanan').value;
	const masalah = document.getElementById('masalah').value;
	const jadwal = document.getElementById('jadwal').value;
	const lokasi = document.getElementById('lokasi').value;
	const persetujuan = document.getElementById('persetujuan').value;

	const data = new URLSearchParams();
	data.append('name', name);
	data.append('email', email);
	data.append('phone', phone);
	data.append('alamat', alamat);
	data.append('merek', merek);
	data.append('model', model);
	data.append('tahunbuat', tahunbuat);
	data.append('nopol', nopol);
	data.append('norank', norank);
	data.append('layanan', layanan);
	data.append('masalah', masalah);
	data.append('jadwal', jadwal);
	data.append('lokasi', lokasi);
	data.append('persetujuan', persetujuan);

	const scriptURL =
		'https://script.google.com/macros/s/AKfycbwwyKlS2bVWS8jB-2QcWeUXOc1nL-dnFa_mMY5QUGFLsk1_UxMQgiQap5pVQm7HMAu4/exec';

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
			document.getElementById('merek').value = '';
			document.getElementById('model').value = '';
			document.getElementById('tahunbuat').value = '';
			document.getElementById('nopol').value = '';
			document.getElementById('norank').value = '';
			document.getElementById('layanan').value = '';
			document.getElementById('masalah').value = '';
			document.getElementById('jadwal').value = '';
			document.getElementById('lokasi').value = '';
			document.getElementById('persetujuan').checked = false;

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

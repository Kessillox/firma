let clipbrd = new ClipboardJS('#sign');

clipbrd.on('success', (e) => {
	// console.log(e.text);
	e.clearSelection();
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: '¡Copiado!',
		showConfirmButton: false,
		timer: 1000
	  })
});

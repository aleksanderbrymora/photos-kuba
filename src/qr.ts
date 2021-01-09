import qrcode from 'qrcode-generator';

export const generateQR = () => {
	const link = window.location.href;
	const qr = qrcode(3, 'L');
	qr.addData(link);
	qr.make();
	document.getElementById('qr')!.innerHTML = qr.createSvgTag();
};

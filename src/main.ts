import { imagesAction } from './images';
import { generateQR } from './qr';

window.onload = () => {
	imagesAction();
	generateQR();
};

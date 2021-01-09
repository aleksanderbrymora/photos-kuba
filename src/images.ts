import { storage } from './fire';
import { analytics } from './analytics';

export const imagesAction = async () => {
	let search = new URLSearchParams(window.location.search);
	const title = search.get('page');
	if (title) {
		const links = await getImageLinks(title);
		appendImagesToSite(links, title);
	}
};

const getImageLinks = async (url: string): Promise<string[]> => {
	const imagesRef = storage.ref(url);
	const images = await imagesRef.listAll();
	const links = await Promise.all(
		images.items.map((img) => img.getDownloadURL()),
	);
	return links as string[];
};

const appendImagesToSite = (links: string[], title: string) => {
	const imageContainer = document.querySelector('main')!;

	const noPageError = () => {
		const noPage = document.createElement('h1');
		noPage.innerText = `We're sorry, there's no page ${title}`;
		imageContainer.appendChild(noPage);
	};

	const addImages = () => {
		links.forEach((link) => {
			const image = document.createElement('img');
			image.src = link;
			imageContainer.appendChild(image);
		});
		analytics(title);
	};
	// this is just so if anyone is too curious and just wants
	// to browse random links they are greeted with error
	links.length === 0 || title === 'qr' ? noPageError() : addImages();
};

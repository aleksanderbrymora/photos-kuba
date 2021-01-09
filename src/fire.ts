import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const fire = firebase.initializeApp({
	apiKey: 'AIzaSyBkNfoB9nmj-89U3w0Clx2kVRisYHOhnSw',
	authDomain: 'photos-kuba.firebaseapp.com',
	databaseURL: 'https://photos-kuba.firebaseio.com',
	projectId: 'photos-kuba',
	storageBucket: 'photos-kuba.appspot.com',
	messagingSenderId: '225907280117',
	appId: '1:225907280117:web:12d93daf788332765a9dbc',
	measurementId: 'G-SGL5KLZ4XK',
});

export const db = firebase.firestore();
export const storage = fire.storage();

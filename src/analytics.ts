import { firestore } from 'firebase/app';
import { db } from './fire';

/**
 * Used for analytics
 * adds a statistic how many times a page had been visited
 * Can be viewed by going to the firebase/firestore dashboard
 * It's only triggered if a folder with photos exists in the storage bucket
 * @param {string} page string telling us the title of the page
 * */
export const analytics = async (page: string): Promise<void> => {
	await db
		.collection('reads')
		.doc(page)
		.update({
			reads: firestore.FieldValue.increment(1),
			lastViewed: firestore.Timestamp.now(),
		});
};

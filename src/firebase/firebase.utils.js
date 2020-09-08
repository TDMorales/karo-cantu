import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4W5l66cyRJ248Bw5kX88hXs1a-K9v8CY",
    authDomain: "karo-db.firebaseapp.com",
    databaseURL: "https://karo-db.firebaseio.com",
    projectId: "karo-db",
    storageBucket: "karo-db.appspot.com",
    messagingSenderId: "896021176115",
    appId: "1:896021176115:web:1d296aaf66e512a4f6e846",
    measurementId: "G-K5XKT7CNTD"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    const collectionSnapshot = await collectionRef.get();
    console.log ({ collection: collectionSnapshot.docs.map(doc => doc.data())})

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();   
        try {
         await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData
         })
        } catch (error) {
         console.log('error creating user', error.message);
        }
    }   
    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(obj.title);
        batch.set(newDocRef, obj);
    });

    return await batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

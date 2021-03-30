import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const settings= {timestampsInSnapshots: true};
const config={
    apiKey: "AIzaSyA0RtK_wQIribKXU6tpMDFVA1kCLi3-HVQ",
    authDomain: "react-web-app-2dca2.firebaseapp.com",
    databaseURL: "https://react-web-app-2dca2.firebaseio.com",
    projectId: "react-web-app-2dca2",
    storageBucket: "react-web-app-2dca2.appspot.com",
    messagingSenderId: "654254450538"

}
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
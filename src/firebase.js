import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBP5yLj7e9ucI3WYHaSSmcwyf28MRC7BMc",
    authDomain: "reactapp-f33ff.firebaseapp.com",
    databaseURL: "https://reactapp-f33ff.firebaseio.com",
    projectId: "reactapp-f33ff",
    storageBucket: "reactapp-f33ff.appspot.com",
    messagingSenderId: "146001335441",
    appId: "1:146001335441:web:f38e309681a52cc2529b30",
    measurementId: "G-KQ6L14WKW4"
};

class Firebase {
	constructor(){
		firebase.initializeApp(firebaseConfig);

		this.app = firebase.database();
	}

	login(email, password){
		return firebase.auth().signInWithEmailAndPassword(email, password);
	}

	async register(nome, email, password){
		await firebase.auth().createUserWithEmailAndPassword(email, password);
		const uid = firebase.auth().currentUser.uid;
		return firebase.database().ref('usuarios').child(uid).set({nome: nome, email: email});
	}

	isInitialized(){
		return new Promise(resolve => {
			firebase.auth().onAuthStateChanged(resolve);
		});
	}

}

export default new Firebase();
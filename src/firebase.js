import firebase from 'firebase'


firebase.initializeApp(Config.firebase)
export default firebase.database().ref()

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAvERc_Pr3nTlDlihzVyDdSlaWkUpsM1gg',
  authDomain: 'raghib-s-wedding-invitation.firebaseapp.com',
  projectId: 'raghib-s-wedding-invitation',
  storageBucket: 'raghib-s-wedding-invitation.appspot.com',
  messagingSenderId: '708497364986',
  appId: '1:708497364986:web:69eff496b7b0a964af3643',
  measurementId: 'G-Y238BJRV6Q',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

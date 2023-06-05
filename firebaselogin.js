const firebaseConfig = {
  apiKey: "AIzaSyBB1Y-mcvDlqEebKRZL9ruppKQl-WiwE14",
  authDomain: "gym-management-system-b4293.firebaseapp.com",
  projectId: "gym-management-system-b4293",
  storageBucket: "gym-management-system-b4293.appspot.com",
  messagingSenderId: "850338902229",
  appId: "1:850338902229:web:f585bb67ddea5c294ab25c",
  measurementId: "G-DT674VELC2"
};

firebase.initializeApp(firebaseConfig);

function normallogin() {
  // const email = document.getElementById('username').value;
  // const password = document.getElementById('password').value;

  // firebase.auth().signInWithEmailAndPassword(email, password)
  //   .then(result => {
  //     const user = result.user;
  //     const greetingElement = document.getElementById('greeting');
  //     greetingElement.textContent = `Hello, ${user.email}`;
  //     setTimeout(() => {
        window.parent.parent.location.href = 'admin.html';
    //   }, 4500);
    // })
    // .catch((error) => {
    //   alert(`Error signing in`);
    // });
}

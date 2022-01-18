import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1C-KTDp6jJhZ0cdpv2JCU1u9YkwBFUv4",
  authDomain: "myweb-project-dd218.firebaseapp.com",
  databaseURL: "https://myweb-project-dd218-default-rtdb.firebaseio.com",
  projectId: "myweb-project-dd218",
  storageBucket: "myweb-project-dd218.appspot.com",
  messagingSenderId: "34607647958",
  appId: "1:34607647958:web:6951cea4c45a8b48a28d77",
  measurementId: "G-HWD9K6YNQZ"
};

const lineToken = "48tmUiFhEWTQCEr4FsuESZMMC7Kd4URK92AhD6HosKD"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// reference messages collection
var messagesRef = firebase.database().ref('messages');

// listen for a submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    //save message
    saveMessage(name, email, message);
}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save messages to Firebase
function saveMessage(name, email, message){
  let newMessageRef = messagesRef.push();

  newMessageRef.set({
    Name: name,
    Email: email,
    Message: message,
  });
}

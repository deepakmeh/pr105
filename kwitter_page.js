//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBND1ONyb-aEzu24xkT0-pZ-zmc8cxdras",
    authDomain: "anant-8f69b.firebaseapp.com",
    databaseURL: "https://anant-8f69b-default-rtdb.firebaseio.com",
    projectId: "anant-8f69b",
    storageBucket: "anant-8f69b.appspot.com",
    messagingSenderId: "517751273272",
    appId: "1:517751273272:web:750251b10dfc5137d073cd"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */

    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}

function getData()
{
firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.ad)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});
});
}
getData();

function addRoom(){
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    })
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
    }

    function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }

  localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");

var x = localStorage.getItem("mytime");

// Simulate a mouse click:
window.location.href = "http://www.w3schools.com";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.ad)'>#"+ Room_names +"</div><hr>";
   //End code
   });});}
getData();

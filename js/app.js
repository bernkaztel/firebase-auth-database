$(document).ready(function () {
    //Listener para cambio de estado de Autenticación
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('user-div').classList.remove('invisible');
        document.getElementById('login-div').classList.add('invisible');
     document.getElementById('welcome-user').innerHTML = 'Welcome user: ' + user.email;
    } else {
        document.getElementById('login-div').classList.remove('invisible');
        document.getElementById('user-div').classList.add('invisible');
    }
  });
}); //final funcion ready

//Función para iniciar sesión con usuario y contraseña
function login () {
    var userEmail = document.getElementById('email-field').value;
    var userPassword = document.getElementById('password-field').value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
window.alert('There was an error: ' +errorMessage)      });
    getUserInfo();
}

//Funciín para obtener información del usuario logueado
function getUserInfo () {
    var user = firebase.auth().currentUser;
if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}
}

//Función para cerrar sesión universal
function logout () {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        window.alert('There was an error: ' +errorMessage)   
        // An error happened.
      });
}


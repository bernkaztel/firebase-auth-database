// Get a reference to the database service
  const database = firebase.database();

  //Función para escribir en la base de datos
  function writeUserData() {
    //Se coloca la referencia del JSON en el que se quiere escribir 
    firebase.database().ref('user-1').set({
      token: 'name',
      userEmail: 'email',
    });
  }


function desconectar(){

    localStorage.clear(); ///Borra todo el localStorage 
    signOut(); // Desconecto de Google
    location.href="index.html"; //Nos devuelve a a la pantalla de login

}
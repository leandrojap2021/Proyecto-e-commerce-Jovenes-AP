//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){

});
function redirection(){
   let usuario = document.getElementById("usuario");

let contrasena = document.getElementById("contrasena");

if (usuario.value.trim()===""){
    //Aca va a ser cuando esto esta vacio no se va a  poder avanzar de pagina
} else{
    location.href="home.html";
}

    }
    

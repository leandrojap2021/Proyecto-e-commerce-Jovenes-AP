//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let user = JSON.parse(localStorage.getItem("usuario"));

function perfil() {

    
    user.name = document.getElementById("firstName").value;
    user.secondName = document.getElementById("secondName").value;
    user.edad = document.getElementById("edad").value;
    user.mail = document.getElementById("mail").value;
    user.cel = document.getElementById("cel").value;



    
    localStorage.setItem("usuario", JSON.stringify(user));
    
}


document.addEventListener("DOMContentLoaded", () => {
showData();
});
function showData(){
    if(user.name == undefined){
        user.name = "";
        user.secondName = "";
        user.edad = "";
        user.cel = "";
        user.mail = "";
    }else{
    document.getElementById("innerAge").innerHTML = user.edad;
    document.getElementById("innerLastName").innerHTML = user.secondName;
    document.getElementById("innerName").innerHTML = user.name;
    document.getElementById("innerMail").innerHTML = user.mail;
    document.getElementById("innerCel").innerHTML = user.cel;
} }
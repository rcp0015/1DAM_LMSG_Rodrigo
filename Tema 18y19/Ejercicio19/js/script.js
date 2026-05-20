function addUser(){
    var usuario = document.getElementById("username");
    var contraseña = document.getElementById("password");
    var contraseña2 = document.getElementById("confirmPassword");

    // Le da a registrarse y falta rellenar un hueco
    if(usuario.value == "" || contraseña.value == "" || contraseña2.value == "")
        alert("Falta algun dato");
    else if(contraseña.value != contraseña2.value){
        
        // Poner el color del fondo rojo
        contraseña.style.backgroundColor = "red";
        contraseña2.style.backgroundColor = "red";

        // Mensaje de las contraseñas, no coinciden
        contraseña.value = "La contraseña no coincide";
        contraseña2.value = "La contraseña no coincide";
        contraseña.type = "text";
        contraseña2.type = "text";
    
    }else{

        var userinfo = document.getElementById("registeredUsers");
        var parrafo = document.createElement ("p");
        parrafo.innerHTML = "Usuario: " + usuario.value + "-" + "Contraseña: " + contraseña.value;

        userinfo.appendChild(parrafo);
        usuario.value = "";
        contraseña.value = "";
        contraseña2.value = "";

        
    }

}

//let usuarios = [{nombre:"Mali",saldo=200, password: "A1234"},{nombre="Gera", saldo=290, password: "B4321"}]
let numero, operador;

function CapturarDatos(id){
    //variables locales
    let Imppassword = document.getElementById("'contrasena'");

    if(id == "Aceptar"||id == "Borrar"||id == "Cancelar")
    {
  
    }else{
        numero = (id);
        Imppassword.innerText = numero;
    }
}

//Capturamos los select desde el html
let anio1 = document.getElementById("select1");
let anio2 = document.getElementById("select2");

//Iteramos para crear años
for(let i=2000;i<=2020;i++){
    //Select 1
    let option = document.createElement('option');//Creamos un option para agregarlo en el select
    option.value = i;
    option.text= i;
    option.id="opcion1";
    anio1.appendChild(option);
    //Select 2
    let option2 = document.createElement('option'); 
    option2.value = i;
    option2.text= i;
    option2.id="opcion2";
    anio2.appendChild(option2);
}

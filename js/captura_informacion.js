
let btn_guardar = document.getElementById("guardar");

btn_guardar.addEventListener("click",(e)=>{
    e.preventDefault();
    let institucion = document.getElementById("institucion").value;
    let anio_desde = document.getElementById("select1").value;
    let anio_hasta = document.getElementById("select2").value;
    let cargo = document.getElementById("cargo").value;
    let descripcion_cargo = document.getElementById("descripcion").value;
    if(!institucion || !anio_desde || !anio_hasta || !cargo || !descripcion_cargo){
        alert("No estan todos los campos completos");
    }else{
        crear_tags(institucion,anio_desde,anio_hasta,cargo,descripcion_cargo);
        ventana_agregar.style.display = "none";
        ventana_agregar.style.transition = "all 300ms";
    }
    
});

function crear_tags(inst,anio_desde,anio_hasta,cargo,descripcion){
   
    let div_dom = document.getElementsByClassName("experiencias")[0];
    
    let div = document.createElement("div");//Contenedor padre
    div.className = "experiencias";
    div.className = "contenido";
    
    let h3 = document.createElement("h3"); //Creamos un h3
    h3.innerText = cargo + " - "+inst;
    
    let cite = document.createElement("cite");//Creamos cite
    cite.innerText = anio_desde + " - "+ anio_hasta;
    
    let p = document.createElement("p");//Creamos un parrafo
    p.innerText = descripcion;
    //Agregamos todos los los elementos al elemento creado

    div.appendChild(h3);
    div.appendChild(cite);
    div.appendChild(p);

    div_dom.appendChild(div);
    alert("Experiencia agregada exitosamente");
    limpiar_campos();
}

function limpiar_campos(){
    let institucion = document.getElementById("institucion").value="";
    let anio_desde = document.getElementById("select1").value="";
    let anio_hasta = document.getElementById("select2").value="";
    let cargo = document.getElementById("cargo").value="";
    let descripcion_cargo = document.getElementById("descripcion").value="";

}
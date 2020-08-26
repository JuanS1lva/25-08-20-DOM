function mensajeAlert(){
    alert("Hello pana miguel");
}
function cajaTexto(){
    let name=prompt("Tu nombre");
    document.write("<h1> Tu nombre es: "+ name +"</h1")
}
function confirmar(){

    let conf=confirm("Desea eliminar el archivo?");
    if(conf==true){
        return alert("Se fue a la verga");
    }
    return alert("No se fue a la verga");
}

    let imagen=document.getElementById("perro");
    imagen.addEventListener("click",()=>{
        alert("Se fue a la verga");
        imagen.style.width="100px";
    })

    let cuadro=document.getElementById("box");
    cuadro.addEventListener("mouseover",()=>{
        cuadro.classList.replace("box","box2")
    })
    cuadro.addEventListener("mouseleave",()=>{
        cuadro.classList.replace("box2","box")
    })
    cuadro.addEventListener("mousemove",()=>{
        console.log("Muevoooooo")
    })

    let teclado = document.getElementById("teclado")
    teclado.addEventListener("keydown",()=>{
        console.log("Teclaaaa")
    })
    teclado.addEventListener("keyup",(e)=>{
        console.log(e.key)
        if(e.key == "w"){
            console.log("Arriba")
        }
    })

    let caja = document.getElementById("caja")
    caja.addEventListener("click",(e)=>{
        let random = Math.floor(Math.random() * 5);
        if(random == 0){
            e.target.style.background="red"
        }
        else if(random == 1){
            e.target.style.background="green"
        }
        else if(random == 2){
            e.target.style.background="blue"
        }
        else if(random == 3){
            e.target.style.background="yellow"
        }
        else{
            e.target.style.background="white"
        }
        
    })


    let lista =document.getElementById("lista")
    let agregar =document.getElementById("agregar")
    agregar.addEventListener('click',()=>{
        let texto = document.getElementById("listaAgregar").value;
        let etiqueta = document.createElement("li");
        etiqueta.textContent=texto;
        lista.appendChild(etiqueta)
    })
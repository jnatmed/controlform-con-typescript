import { Gestor } from "./gestor";

let gestor = new Gestor();
let input : any = gestor.$('#enviar')
let paises : any = {"argentina" : 50, "uruguay" : 60, "chile" : 70}
let datos : any = [];

input.addEventListener('click', function handleClick(e : any) {
  e.preventDefault();
  let formularioValido = true;
  ['#nombre','#apellido','#edad','#evento','#pais','#cantidad'].forEach(input => {
      let campo : string = input.split('#')[1];
      if(gestor.$(input).value==""){
        gestor.mostrarCartel(`EL CAMPO "${(campo).toLocaleUpperCase()}" ESTA VACIO`)
        formularioValido = false;
      }else{
        datos[campo] = gestor.$(input).value
      }
      
      if(campo=="edad" && gestor.$(input).value<18){
        gestor.mostrarCartel(`EL CAMPO ${(campo).toLocaleUpperCase()} DEBE SER MAYOR A 18`)
        formularioValido = false;
      }    

      if(campo=="cantidad" && gestor.$(input).value > paises[gestor.$('#pais').value]){
        gestor.mostrarCartel(`Cantidad no permitida para ${gestor.$('#pais').value}`)
        formularioValido = false;
      }
  // })
    
  });
  if(formularioValido){
    gestor.mostrarCartel('FORMULARIO VALIDADO, felicitaciones')
    console.log(datos)
    let auxEvn : any = localStorage.getItem('eventos');
    let listaEventos : any = JSON.parse(auxEvn) || [];
    listaEventos.push({
      "nombre" : datos['nombre'],
      "apellido" : datos['apellido'],
      "edad" : datos['edad'],
      "evento" : datos['evento'],
      "pais" : datos['pais'],
      "cantidad" : datos['cantidad']
    });
    console.log(listaEventos);
    localStorage.setItem('eventos', JSON.stringify(listaEventos));    
  }else{
    gestor.mostrarCartel('FORMULARIO NO COMPLETO O LLENADO DE MANERA INCORRECTA')
  }
  
})




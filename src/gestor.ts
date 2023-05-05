import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
export class Gestor{
    $(idElement : any){
        return document.querySelector(idElement);
    }
    $create(nameElement : any){
        return document.createElement(nameElement);
    }
    consola(msj : any){
        console.log(msj)
    }
    mostrarCartel(cartel : string, duracion : number = 5000){
        Toastify({
            text: cartel,
            duration: duracion,
            className: "info",
            gravity: "bottom", // `top` or `bottom`
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    };

}
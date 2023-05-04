import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
export class Gestor{
    $(idElement){
        return document.querySelector(idElement);
    }
    $create(nameElement){
        return document.createElement(nameElement);
    }
    consola(msj){
        console.log(msj)
    }
    mostrarCartel(cartel, duracion = 5000){
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
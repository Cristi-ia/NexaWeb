window.addEventListener("load", function () {

    console.log("NexaWeb Solutions cargado correctamente");

});

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach((tarjeta) => {

    tarjeta.addEventListener("mouseenter", () => {

        tarjeta.style.transform = "translateY(-10px)";
        tarjeta.style.transition = "0.3s";

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.transform = "translateY(0px)";

    });

});

const boton = document.querySelector(".btn-primary");

if (boton) {

    boton.addEventListener("click", () => {

        alert("Gracias por elegir NexaWeb Solutions. Muy pronto nos pondremos en contacto contigo.");

    });

}
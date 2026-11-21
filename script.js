function selectCategory(chosenCategory) {
    let cards = document.querySelectorAll(".assets-list > a"); //Obtiene todas las targetas

   switch (chosenCategory) { // Ocultar los titulos no deseados y mostrar el deseado
        case "inspo":
            document.getElementById("fonts-title").classList.add("hidden"); //Obtener elementos y ocultarlos
            document.getElementById("tools-title").classList.add("hidden");
            document.getElementById("inspo-title").classList.remove("hidden");

            cards.forEach((card) => { // ciclo para recorrer todas las tarjetas
                if (!card.id.includes("inspo")) { // Los card cuyos id no incluyen la palabra inspo - "si card no incluye inspo"
                    card.classList.add("hidden"); // Ocultar lo que no sea inspo
                } else {
                    card.classList.remove("hidden") // Mostrar inspo
                }
            })
            return;
        case "fonts":
            document.getElementById("inspo-title").classList.add("hidden");
            document.getElementById("tools-title").classList.add("hidden");
            document.getElementById("fonts-title").classList.remove("hidden");

            cards.forEach((card) => {
                if (!card.id.includes("fonts")) {
                    card.classList.add("hidden");
                } else {
                    card.classList.remove("hidden")
                }
            })
            return;
        case "tools":
            document.getElementById("inspo-title").classList.add("hidden");
            document.getElementById("fonts-title").classList.add("hidden");
            document.getElementById("tools-title").classList.remove("hidden");

            cards.forEach((card) => {
                if (!card.id.includes("tools")) {
                    card.classList.add("hidden");
                } else {
                    card.classList.remove("hidden")
                }
            })
            return;
   }

}

const inspoOption = document.getElementById("inspo"); //Obtener elementos de la navegacion
const fontsOption = document.getElementById("fonts");
const toolsOption = document.getElementById("tools");


inspoOption.addEventListener("click", () => selectCategory("inspo")); //Detectar click en cada opcion opcion de navegacion para ejecutar funcion
fontsOption.addEventListener("click", () => selectCategory("fonts"));
toolsOption.addEventListener("click", () => selectCategory("tools"));


/* const Variables que no cambian de valor */
/* let Variables locales, dentro de una funcion */
/* var Variables globales, que se acceden dentro y fuera de las funciones */
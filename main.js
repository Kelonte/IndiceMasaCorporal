let corbata = true;
let elPeso = 0;
let laAltura = 0;
let IMC = 0;


function verBoton(){
    switch(this.id){
        case "hombre":
            corbata = true;
            imagenSalida.src = "./img/H2.png";
            validarInputs();
            break
        case "mujer":
            corbata = false;
            imagenSalida.src = "./img/M2.png";
            validarInputs();
            break
        case "calcular":
            validarInputs();
            break
    }
}

function verTecla(tecla){
    // alert(document.activeElement);
    switch(tecla.key){
        case "Enter":
            if(peso === document.activeElement){
                altura.focus();
            } else if(altura === document.activeElement){
                if(peso.value === ""){
                    peso.focus();
                } else {
                    calcular.focus();
                }
            } else if(calcular === document.activeElement){
                // validarInputs();
            } else if (document.body === document.activeElement){
                peso.focus();
            }
            break
        case "ArrowUp":
            peso.focus();
            break
        case "ArrowDown":
            altura.focus()
            break
    }
}

function validarInputs(){
    elPeso = peso.value;
    laAltura = altura.value;
    if((elPeso > 0 && elPeso < 250) && (laAltura > 0 && laAltura < 250)){
        calcularIMC();
    } else {
        peso.focus;
        indice.textContent = "";
        titulo.textContent = "";
        texto.textContent = "";

    }
}

function calcularIMC(){
    IMC = elPeso/(laAltura*laAltura/10000);
    if(IMC<75 && IMC > 10) {
            indice.textContent = " Tu IMC es " + Math.round(IMC*10)/10;
        if(corbata){
            if(IMC < 18.5){
                titulo.textContent = "Menos de 18.5 es bajo de peso."
                imagenSalida.src = "./img/H1.png";
                texto.textContent = "Asegúrate de consumir una variedad de alimentos saludables y ricos en nutrientes. Incluye frutas, verduras, proteínas magras, granos enteros y grasas saludables en tu dieta. Considera aumentar la frecuencia de tus comidas y refrigerios para incrementar tu ingesta calórica."
            } else if(IMC >= 18.5 && IMC < 23){
                titulo.textContent = "Entre 18.5 y 23 es un peso saludable." 
                texto.textContent = "Sigue consumiendo una dieta equilibrada y nutritiva. Asegúrate de incluir una variedad de frutas, verduras, proteínas magras, granos enteros y grasas saludables en tus comidas. Mantén un equilibrio entre tus necesidades calóricas y tu ingesta diaria."
                imagenSalida.src = "./img/H2.png";
            } else if(IMC >= 23 && IMC < 27){
                titulo.textContent = "Entre 23 y 27 es un ligero sobrepeso."
                texto.textContent = "Asegúrate de seguir una alimentación equilibrada y nutritiva. Incrementa el consumo de frutas, verduras, granos enteros y proteínas magras. Reduce la ingesta de alimentos procesados, azúcares y grasas saturadas. Mantén un control de las porciones y evita comer en exceso."
                imagenSalida.src = "./img/H3.png";
            } else if(IMC >= 27 && IMC < 30){
                titulo.textContent = "Entre 27 y 30 es un notorio sobrepeso."
                texto.textContent = "Consulta con un profesional de la salud: Es importante buscar la orientación de un médico o un dietista registrado. Ellos podrán evaluar tu situación de manera personalizada y brindarte un plan de alimentación y ejercicio adecuado a tus necesidades individuales."
                imagenSalida.src = "./img/H4.png";
            } else if(IMC > 30){
                titulo.textContent = "Más de 30 es un peso excesivo." 
                texto.textContent = "Te animo a que consultes con un médico, un dietista registrado o un especialista en obesidad. Ellos podrán evaluar tu situación de manera integral y proporcionarte un plan de alimentación, ejercicio y seguimiento adaptado a tus necesidades específicas."
                imagenSalida.src = "./img/H5.png";
            }
        } else {
            if(IMC < 19){
                titulo.textContent = "Menos de 19 es baja de peso."
                imagenSalida.src = "./img/M1.png";
                texto.textContent = "Asegúrate de consumir una variedad de alimentos saludables y ricos en nutrientes. Incluye frutas, verduras, proteínas magras, granos enteros y grasas saludables en tu dieta. Considera aumentar la frecuencia de tus comidas y refrigerios para incrementar tu ingesta calórica."
            } else if(IMC >= 19 && IMC < 24){
                titulo.textContent = "Entre 19 y 24 es un peso saludable." 
                texto.textContent = "Sigue consumiendo una dieta equilibrada y nutritiva. Asegúrate de incluir una variedad de frutas, verduras, proteínas magras, granos enteros y grasas saludables en tus comidas. Mantén un equilibrio entre tus necesidades calóricas y tu ingesta diaria."
                imagenSalida.src = "./img/M2.png";
            } else if(IMC >= 24 && IMC < 29){
                titulo.textContent = "Entre 24 y 29 es un ligero sobrepeso."
                texto.textContent = "Asegúrate de seguir una alimentación equilibrada y nutritiva. Incrementa el consumo de frutas, verduras, granos enteros y proteínas magras. Reduce la ingesta de alimentos procesados, azúcares y grasas saturadas. Mantén un control de las porciones y evita comer en exceso."
                imagenSalida.src = "./img/M3.png";
            } else if(IMC >= 29 && IMC < 35){
                titulo.textContent = "Entre 29 y 35 es un notorio sobrepeso." 
                texto.textContent = "Consulta con un profesional de la salud: Es importante buscar la orientación de un médico o un dietista registrado. Ellos podrán evaluar tu situación de manera personalizada y brindarte un plan de alimentación y ejercicio adecuado a tus necesidades individuales."
                imagenSalida.src = "./img/M4.png";
            } else if(IMC > 35){
                titulo.textContent = "Más de 35 es un peso excesivo."
                texto.textContent = "Te animo a que consultes con un médico, un dietista registrado o un especialista en obesidad. Ellos podrán evaluar tu situación de manera integral y proporcionarte un plan de alimentación, ejercicio y seguimiento adaptado a tus necesidades específicas."
                imagenSalida.src = "./img/M5.png";
            }
        }
    } else {
        alert("¡alguno de los datos ingresados no es correcto!");
    }
}

let hombre = document.querySelector("#hombre");
let mujer = document.querySelector("#mujer");
let imagenSalida = document.querySelector("#salida");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let calcular = document.querySelector("#calcular");
let titulo = document.querySelector("#titulo");
let indice = document.querySelector("#indice");
let texto = document.querySelector("#texto");

hombre.addEventListener("click", verBoton);
mujer.addEventListener("click", verBoton);
calcular.addEventListener("click", verBoton);

document.addEventListener("keydown", function(tecla){
    verTecla(tecla);
});
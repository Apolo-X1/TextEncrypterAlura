const encriptaciones = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const desencriptaciones = {};
for (let key in encriptaciones) {
    desencriptaciones[encriptaciones[key]] = key;
}

const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedormunieco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".btn-copiar");

botonEncriptar.onclick = () => procesarTexto(encriptarTexto);
botonDesencriptar.onclick = () => procesarTexto(desencriptarTexto);
btnCopiar.addEventListener("click", () => copiarTexto(resultado.textContent));

function procesarTexto(funcionTexto) {
    ocultarElementos();
    resultado.textContent = funcionTexto(recuperarTexto());
}

function recuperarTexto() {
    return document.querySelector(".cajatexto").value;
}

function ocultarElementos() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    return mensaje.replace(/[aeiou]/g, caracter => encriptaciones[caracter] || caracter);
}

function desencriptarTexto(mensaje) {
    return mensaje.replace(/ai|enter|imes|ober|ufat/g, grupo => desencriptaciones[grupo] || grupo);
}

function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => console.log("Texto copiado al portapapeles"))
        .catch(error => console.error("Error al copiar el texto:", error));
}
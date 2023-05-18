const encryptions = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const desencryptions = {};
for (let key in encryptions) {
    desencryptions[encryptions[key]] = key;
}

const bEncrypt = document.querySelector(".btn-encriptar");
const bDecrypted = document.querySelector(".btn-desencriptar");
const muneco = document.querySelector(".c-muneco");
const container = document.querySelector(".c-paragra");
const result = document.querySelector(".result-t");
const bCopy = document.querySelector(".btn-copiar");

bEncrypt.onclick = () => procesarTexto(encriptarTexto);
bDecrypted.onclick = () => procesarTexto(desencriptarTexto);
bCopy.addEventListener("click", () => copiarTexto(result.textContent));

function procesarTexto(funcionTexto) {
    hideElements();
    result.textContent = funcionTexto(textRecover());
    bCopy.style.display = "block";
}

function textRecover() {
    return document.querySelector(".c-text").value;
}

function hideElements() {
    muneco.classList.add("hide");
    container.classList.add("hide");

}

function encriptarTexto(message) {
    return message.replace(/[aeiou]/g, caracter => encryptions[caracter] || caracter);
}

function desencriptarTexto(message) {
    return message.replace(/ai|enter|imes|ober|ufat/g, grupo => desencryptions[grupo] || grupo);
}

function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => console.log("Text copied to clipboard"))
        .catch(error => console.error("Error copying text:", error));
}
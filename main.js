function validarFormulario() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    var mensagemErro = document.getElementById("mensagemErro");
    var mensagemSucesso = document.getElementById("mensagemSucesso");

    if (isNaN(campoA) || isNaN(campoB) || campoB <= campoA) {
        mensagemErro.innerHTML = "Campo B deve ser maior que Campo A";
        mensagemSucesso.innerHTML = "";
        return false;
    } else {
        mensagemSucesso.innerHTML = "Formulário valido!";
        mensagemErro.innerHTML = "";
        return false;
    }
}
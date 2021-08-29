function validar () {
    var nome = document.querySelector('#nome').value
    var cpf = document.querySelector('#cpf').value
    var telWhats = document.querySelector('#telWhats').value
    var email = document.querySelector('#email').value
    var dataNascimento = document.querySelector('#dataNascimento').value
    var nomeResponsavel = document.querySelector('#nomeResponsavel').value
    var cpfResponsavel = document.querySelector('#cpfResponsavel').value
    var tituloFoto = document.querySelector('#tituloFoto').value
    var nomeFotografa = document.querySelector('#nomeFotografa').value
    var nomeFoto = document.querySelector('#nomeFoto').value
    
    let d = new Date();
    let nA = $('#dataNascimento').val().split("-");
    let n = new Date(nA[1] + '-' + nA[2] + '-' + nA[0]);
    let ano = d.getFullYear() - n.getFullYear();
    let m = d.getMonth() - n.getMonth();
    if (m < 0 || (m === 0 && d.getDate() < n.getDate())) {
      ano--;
    }

    if (nome =="") {
        alert("Preencha seu nome")
        return false;
    }

    if (cpf.length != 11) {
        alert("CPF inválido")
        return false;
    }

    if (telWhats.length != 11) {
        alert("O telefone tem que ter 11 dígitos (DDD + número)")
        return false;
    }

    if (email =="") {
        alert("Preencha o email")
        return false;
    }

    if (dataNascimento =="") {
        alert("Preencha a data de nascimento")
        return false;
    }

    if (ano < 18) {
        if(nomeResponsavel =="") {
            alert("Preencha o nome do responsável")
            return false;
        }
        if(cpfResponsavel.length != 11) {
            alert("CPF do responsável inválido")
            return false;
        }
    }

    if(tituloFoto =="") {
        alert("Insira o título da fotografia")
        return false;
    }
    
    if(nomeFotografa =="") {
        alert("Insira o nome do fotógrafo(a)")
        return false;
    }

    if(nomeFoto =="") {
        alert("Adicione uma foto")
        return false;
    }
    
}
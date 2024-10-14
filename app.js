let listaDeNumerosSorteados = []
let contador = 1;
let numeroLimite = 100;
let numeroSecreto = gerarNumerosAleatorios();
console.log(numeroSecreto);

// retorna um numero
function gerarNumerosAleatorios(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    console.log(`o numero escolhido é: ${numeroEscolhido}`)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista === numeroLimite){
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        // função recursiva, chama ela mesma.
        return gerarNumerosAleatorios;
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

let tentativas = 1;

// verificar resposta
function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    if(chute == numeroSecreto){
        substituir('h1','Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto após ${tentativas} ${palavraTentativa} `
        substituir('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else {
        if(chute > numeroSecreto)
            {substituir('p','O numero secreto é menor!');
            tentativas++
            limparCampo();
            }
        else{
            substituir('p','O numero secreto é maior');
            tentativas++
            limparCampo();
        }
    }  
}

// função que não retorna e com parâmetros
function substituir(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
// chamando a função em sí.
function exibirMensagemInicial(){
substituir('h1', 'Jogo do numero secreto');
substituir('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

// limpar jogo
function limparCampo(){
    chute = document.querySelector('input');
    chute.value='';
}

// reiniciar jogo
function reiniciarJogo(){
    limparCampo();
    exibirMensagemInicial();
    numeroSecreto = gerarNumerosAleatorios();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
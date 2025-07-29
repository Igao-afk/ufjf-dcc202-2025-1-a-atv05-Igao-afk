const tabuleiro = ['branco', 'branco', 'branco', '', 'preto', 'preto', 'preto'];

let selecionado = null;

export function getSelecionado() {
    if(selecionado === null || selecionado === posicao)
        selecionado = posicao ;
    else {
        mover(selecionado, posicao);
        selecionado = null;
    }
}

export function getTabuleiro() {
return [...tabuleiro];
}    

function mover(origem, destino) {
    console.log("mover", origem, destino);
    if (tabuleiro[origem] === '') return;
    if (tabuleiro[destino] !== '') return;
    if (Math.abs(destino - origem === 1)) {
        tabuleiro[destino] = tabuleiro[origem];
        tabuleiro[origem] = '';
    }
    if (destino - origem === 2 && tabuleiro[origem+1] !== '') {
                tabuleiro[destino] = tabuleiro[origem];
                tabuleiro[origem] = '';
            }
            
        
        if(destino - origem === -2 && tabuleiro[origem-1] !== '') {
                tabuleiro[destino] = tabuleiro[origem];
                tabuleiro[origem] = '';
            }
    }


function revelar() {
    const imagem = document.querySelector('.card-img-top');
    imagem.src = 'img/_vinicius_junior.png';

    const spanNome = document.querySelector('#Nome .placeholder');
    spanNome.textContent = 'Vinícius José Paixão de Oliveira Júnior';

    const spanRank = document.getElementById('Rank');
    spanRank.textContent = '9,5';

    spanData.textContent = '12/07/2000 (25 anos)';

    const spanAltura = document.getElementById('Altura'); 
    spanAltura.textContent = '1,76 m';

    const spanPosicao = document.getElementById('Posição '); 
    spanPosicao.textContent = 'Ponta-esquerda / Atacante';

    const elementosPlaceholder = [spanNome, spanData, spanAltura, spanPosicao];
    
    elementosPlaceholder.forEach(elemento => {
        elemento.classList.remove('placeholder', 'col-6', 'col-4');
        
        elemento.classList.add('card-text');
    });

    document.getElementById('Nome').classList.remove('placeholder-glow');
    document.querySelector('p.placeholder-glow').classList.remove('placeholder-glow');
}
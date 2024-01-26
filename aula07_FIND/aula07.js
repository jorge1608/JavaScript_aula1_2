const P_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')
// ///////////////////////////////////////////////////////////////////////////////////////
const elementos_array = [10, 13, 6, 2, 9, 15, 20];
//////////////////////////////////////////////////////////////////////////////////////////
P_array.innerHTML = '[' + elementos_array + ']';
btnPesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = "valor não encontrado";
    const retorno = elementos_array.find((e, i) => {
        if (e == txt_pesquisar.value) {
            resultado.innerHTML = "o valor encontrado: " + e + " na posição " + (i)
            return e;
        }
    })
    console.log(retorno);
})

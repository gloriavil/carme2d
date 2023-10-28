function tocasompom (idelementoaudio) {
      document.querySelector(idelementoaudio).play();
}

const listade teclas = Document.queryselectorall('.tecla');

let contador = 0;

//enquanto
while(conador < listadeteclas.length) {

    const tecl = listadeteclas[contador];
    const instrumento = tecla.classlist[1];
    //template string
    const idaudio = '#som_${instrumento}';

    //console.log(idaudio);

    tecla.onclick = function () {
        tocasompom(idaudio);
    }
    
    contador = contador + 1;

    //console.log(contador);

}

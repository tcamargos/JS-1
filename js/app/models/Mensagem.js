class Mensagem 
{

    //Parametro default, é adotado caso nada seja passado;
    constructor(texto='') {

        this._texto = texto;
    }

    get texto() {

        return this._texto;
    }

    set texto(texto) {

        this._texto = texto;
    }
}
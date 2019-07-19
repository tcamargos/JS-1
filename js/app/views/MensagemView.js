class MensagemView extends View
{

    //Ficar atento ao uso do super para alimentar o construtor do pai;

    template(model)
    {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p` : '<p></p>';
    }

}
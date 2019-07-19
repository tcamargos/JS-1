class NegociacoesView extends View {
    
    //Ficar atento ao uso do super para alimentar o construtor do pai;

    template(model)
    {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(n => `
                
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>    

                `).join('')/*O retorno de map é um array, o join transforma em string*/}
            </tbody>
            
            <tfoot>
                <td colspan="3">TOTAL</td>
                <td>${model.negociacoes.reduce(function(total, n){
                    return total + n.volume;
                },0)}</td>
                
            </tfoot>
        </table>
    `;     
    }
}
/*

${model.negociacoes.reduce((total,n)=> total + n.volume, 0)}
    
*/
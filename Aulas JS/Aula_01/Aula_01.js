function onOpen() {
    // Comentario de uma linha
    /* comentario de varias linhas */

    /* Variaveis sao pedacos de memoria onde se armazena dados que podem variar */

    /* Regras para nomear variaveis: 
    
    > Nao comecar com Numeros;
    > Nao conter acentos;  
    > Se for palavra composta, comecar segunda palavra com letra maiuscula 
    
    
    
    */


    //Numeros
    var n_01 = 1        //inteiro - number
    var n_02 = 2.08     //float
    var n_03 = 1/2      //float

    var string = "teste 01"                 //string
    var dicts = {"chave":"valor"}           //object / dicionario

    var vector = ["teste 01","teste 02"]    //Arrays

    // bools --> Booleano > 0 ou 1
    var x = true
    var y = false

    
    var nulo = null
    var indefinido = undefined


    //Logger.log("A variavel n_01 e do tipo number?\n" .concat(typeof n_01 === 'number'))
    //Logger.log("A variavel n_02 e do tipo number?\n" .concat(typeof n_01 === 'number'))
    //Logger.log("A variavel n_01 e igual e do mesmo de tipo number?\n" .concat(typeof n_01 === 'number'))
   // Logger.log("A variavel n_02 e igual e do mesmo tipo number?\n" .concat(typeof n_01 === 'number'))

    // =    -> Atribuicao de valor
    // ==   -> Compara valores
    // ===  -> Compara valor e tipo

    //Operadores Logicos

    //not --> !
    //or  --> ||
    //and --> &&

    //Operadores Relacionais
    
    // ==   < Compara Valor (E igual?)
    // ===  < Compara valor e tipo
    // !=   < Compara valor (E Diferente?)
    // <    < Menor que
    // >    < Maior que
    // <=   < Menor ou Igual
    // >=   < Maior ou Igual

        //Exemplo de Usabilidade

        var numero = 10
        var numeroD = 20

        // Template String Literals
        Logger.log(`E ${(numero <= numeroD)} que o numero e menor que o numeroD`)


        function numeroPrimo(numeroP){
            numeroP
            Logger.log(`O numero ${numeroP} eh primo`)
            Logger.log(`O numero ${numeroP} nao eh primo`)

        //- usar conceitos que nao foram vistos em aula
        //- if, %, etc
        //- Numero primo eh divisivel por 1 e por ele mesmo 
        }
        
}

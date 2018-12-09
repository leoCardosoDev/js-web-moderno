function tratarError(erro){
  //throw new Error('error: ...');
  //throw 10
  //throw true
  //throw "Mensagem"
  throw{
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}

function imprimirNomeCaps(obj){
  try{
    console.log(obj.nome.toUpperCase() + '!!!')
  }catch(e){
    tratarError(e);
  }finally{
    console.log("FIM")
  }
}

const obj = {name: 'Leo Cardoso'}

imprimirNomeCaps(obj)
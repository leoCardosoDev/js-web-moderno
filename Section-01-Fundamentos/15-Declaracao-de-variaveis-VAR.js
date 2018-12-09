{
    {
        {
            {
                var sera = 'Sera??';
            }
        }
    }
}

console.log(sera);

function teste(){
    var local = 123;
}
//console.log(local);

//fuja do scopo global

var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
}
console.log('Fora = ', numero);
import React from 'react'
import ReactDOM from 'react-dom'


import Pai from './componentes/Pai'
import Filho from './componentes/Filho';

ReactDOM.render(
    <div>
        <Pai nome="Leo" sobrenome="Cardoso">
            {/* Como passar os componentes aqui */}
            <Filho nome="Carla" />
            <Filho nome="João" />
            <Filho nome="Maria" />
        </Pai>
    </div>
    , document.querySelector('#root')
);







/* 
import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Leo Cardoso"/>
    </div>
    , document.querySelector('#root')
)
 */
/** 
    ** ReactDOM.render('', document.querySelector('#root')) 
**/

//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//import {BoaTarde, BoaNoite} from './componentes/Multiplos'

//ReactDOM.render( < BomDia nome='Leo Cardoso' idade={37} / > , document.querySelector('#root'))
/* 
ReactDOM.render(
<div>
    <BoaTarde nome="Leo" />
    <BoaNoite nome="Priscila" />
</div>
,document.querySelector('#root'))
 */
/**
import Multi, {BoaNoite} from './componentes/Multiplos'

//ReactDOM.render( < BomDia nome='Leo Cardoso' idade={37} / > , document.querySelector('#root'))
ReactDOM.render(
<div>
    <Multi.BoaTarde nome="Leo" />
    <BoaNoite nome="Pri" />
</div>
,document.querySelector('#root'))
*/
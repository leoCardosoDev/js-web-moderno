//import React, { Fragment } from 'react'
import React from 'react'

export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Parabéns pelos {props.idade} anos</h2>,
    <p>Até Breve!</p>,
]

/* 
<React.Fragment>
    <h1>Bom dia {props.nome}!</h1>
    <h2>Parabéns pelos {props.idade} anos</h2>
    <p>Até Breve!</p>
</React.Fragment>
 */


/* 
<Fragment>
    <h1>Bom dia {props.nome}!</h1>
    <h2>Parabéns pelos {props.idade} anos</h2>
    <p>Até Breve!</p>
</Fragment>
 */
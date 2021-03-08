import React from 'react';
import './Calculadora.css';
class Calculadora extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div >
                    <h1 class="division">Calculadora</h1>
                    <div class="division">
                    <input placeholder="input1" id="input1" class="celdas"></input>
                    <input placeholder="input2" id="input2" class="celdas"></input>
                    <label class="celdas">=</label>
                    <input placeholder="inputResultado" id="inputResultado" class="celdas"></input>
                    </div>
                    <div class="division">
                        <button id="BotonSuma" text="+" class="botones">+</button>
                        <button id="BotonResta" text="-" class="botones">-</button>
                        <button id="BotonMultiplicacion" text="*" class="botones">*</button>
                        <button id="BotonDivision" text="/" class="botones">/</button>
                        <button id="BotonResultado" text="=" class="botonResultado">=</button>
                    </div>
                </div>

    }



}
export default Calculadora;
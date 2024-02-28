
import { useState } from 'react';
import './App.css';
import {ReactComponent as Setad} from "./assets/arrow-right-wide-line.svg"
import {ReactComponent as Setae} from "./assets/arrow-left-wide-line.svg"
import classNames from 'classnames';
import { Giros } from './components/Giros'

export const App = () => {
  const giro = Giros();
  const botao = () => {
    return <div> 
    <button className='Botao b1' onClick={!giro.execInit&&!giro.execFinal?giro.vazio:giro.handleExecInit}><Setae/></button>
    <button className='Botao b2' onClick={giro.handleExecFinal}><Setad/></button> </div>
  }
   
  
  return (
    <div className="Body">
      <div className='CPai' >
        <div className='Cfilho'> 
          <div className={classNames('Box',giro.execInit && 'init', giro.execFinal && 'final')}>
            <h1 className='Login'>Login</h1>
            <div className='Caixas'>
              <input placeholder=" " type="email" className='caixa email'/>
              <h1 className='femail'>Email</h1>
              <input type="password" placeholder= " " className='caixa senha' />
              <h1 className='fsenha'>Senha</h1>
            </div>
          </div>
          {(giro.execFinal||giro.execInit) &&< div className={classNames('Box2',giro.execInit &&  'init2', giro.execFinal && 'final2')}>
            <h1>usuario</h1>
            
          </div > }
          {botao ()}
        </div>
      </div>
      
    </div>
  );
}

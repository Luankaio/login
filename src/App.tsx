
import { useState } from 'react';
import './App.css';
import {ReactComponent as Setad} from "./assets/arrow-right-wide-line.svg"
import {ReactComponent as Setae} from "./assets/arrow-left-wide-line.svg"
import classNames from 'classnames';
import { Giros } from './components/Giros'

export const App = () => {
  const giro = Giros();
  
  
  return (
    <div className="Body">
      <div className='Cpai'>
        <div className={classNames('Box',giro.execInit && 'init', giro.execFinal && 'final')}>
          <h1 className='Login'>Login</h1>
          <div className='Caixas'>
            <h1 className='femail'>Email</h1>
            <input type="email" className='caixa email'/>
            <input type="password" className='caixa senha' />
          </div>
        </div>
        <div className={classNames('Box2',giro.execInit &&  'init2', giro.execFinal && 'final2')}>
          {(giro.execFinal||giro.execInit) && <h1>usuario</h1>}
        </div >  
        
        <div className='Ai'><button disabled={!giro.execFinal} className='Botao b1' onClick={giro.handleExecInit}><Setae/></button></div>
        <div className='Ai'><button className='Botao b2' onClick={giro.handleExecFinal}><Setad/></button></div>
      </div>
      
     
    </div>
  );
}

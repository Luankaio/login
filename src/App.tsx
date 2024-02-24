
import { useState } from 'react';
import './App.css';
import {ReactComponent as Setad} from "./assets/arrow-right-wide-line.svg"
import {ReactComponent as Setae} from "./assets/arrow-left-wide-line.svg"
import classNames from 'classnames';

export const App = () => {

  const [virado, setVirado] = useState(true);

  const [execInit, setExecInit] = useState(false)
  const [execFinal, setExecFinal] = useState(false)

  function handleExecInit() {
    setExecInit(true)
  setExecFinal(false)
  }

  function handleExecFinal() {
    setExecInit(false)
  setExecFinal(true)
  }

  return (
    <div className="Body">
      <div className='Cpai'>
        <div className={classNames('Box',execInit && 'init', execFinal && 'final')}>
          <h1 className='Login'>Login</h1>
          <div className='Caixas'>
            <h1 className='femail'>Email</h1>
            <input type="email" className='caixa email'/>
            <input type="password" className='caixa senha' />
          </div>
        </div>
        <div className={classNames('Box2',execInit &&  'init2', execFinal && 'final2')}>
          {(execFinal||execInit) && <h1>usuario</h1>}
        </div >  
        
        <div className='Ai'><div className='Botao b1' onClick={handleExecInit}><Setae/></div></div>
        <div className='Ai'><div className='Botao b2' onClick={handleExecFinal}><Setad/></div></div>
      </div>
      
     
    </div>
  );
}

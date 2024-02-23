
import { useState } from 'react';
import './App.css';
import {ReactComponent as Setad} from "./assets/arrow-right-wide-line.svg"
import {ReactComponent as Setae} from "./assets/arrow-left-wide-line.svg"
export const App = () => {

  const [virado, valor] = useState(false);
  

  return (
    <div className="Body">
      <div className='Cpai'>
        <div className={virado ? 'Box-init' : 'Box-final'}>
          <h1 className='Login'>Login</h1>
          <div className='Caixas'>
            <input type="text" className='caixa senha' />
            <input type="password" className='caixa email'/>
          </div>
        </div>
        <div className={virado ? 'Box2-init' : 'Box2-final'}>
          
        </div >  
      </div>
      
      <div className='Botao b1' onClick={() => valor(true)}><Setae/></div>
      <div className='Botao b2' onClick={() => valor(false)}><Setad/></div>
    </div>
  );
}

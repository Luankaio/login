
import { useState } from 'react';
import './App.css';
import {ReactComponent as Setad} from "./assets/arrow-right-wide-line.svg"
import {ReactComponent as Setae} from "./assets/arrow-left-wide-line.svg"
export const App = () => {

  const [virado, valor] = useState(true);
  

  return (
    <div className="Body">
      <div className='Cpai'>
        <div className={virado ? 'Box init' : 'Box final'}>
          <h1 className='Login'>Criar conta</h1>
          <div className='Caixas'>
            <input type="text" className='caixa email'/>
            <input type="password" className='caixa senha' />
          </div>
        </div>
        <div className={virado ? 'Box init2' : 'Box final2'}>
          <h1>oidsadsa</h1>
        </div >  
        <div className='Ai'><div className='Botao b1' onClick={() => valor(true)}><Setae/></div></div>
        <div className='Ai'><div className='Botao b2' onClick={() => valor(false)}><Setad/></div></div>
      </div>
      
     
    </div>
  );
}

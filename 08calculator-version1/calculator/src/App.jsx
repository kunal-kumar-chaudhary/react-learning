import styles from './App.module.css';
import { useState } from 'react';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
  const [text, setText] = useState('');
  const onClick = (name)=>{
    
    if (name === "C"){
      setText("");
    }
    else if (name === "="){
     const result = eval(text);
     setText(result);
    }
    else{
      setText(text + name); 
    }
    
  }
  return (
    <div className={styles.calculator}>
      <Display text={text}/>
      <ButtonsContainer onClick={onClick}/>
    </div>
  )
}

export default App

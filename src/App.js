import './App.css';
import A from './components/A';
import { createContext } from 'react';

const name = createContext();

function App() {

  const fname = 'ronak';
  const lname = 'savaliya';

  function sum(a,b){
  return a+b;
  }

  // value ni andar game e mokli sakiye, function,state,object

  return (
    <>
    
      <name.Provider value={{ fname, lname,sum }}>
      <A />
      </name.Provider>
    </>

  );
}

export default App;
export { name }


import './App.css';
import LuasSegitiga from './components/LuasSegitiga';
import  LuasLingkaran  from './components/LuasLingkaran';
import { useState } from 'react';
import { Counter } from './components/counter';
import { CounterProvider } from './context/CounterProvider';
import { CounterTwoNumber } from './components/CounterTwoNumber';
import { FormText } from './components/FormText';
import { Nilai } from './components/Nilai';

function App() {
  const [page, setPage] = useState ('luasSegitiga')

  return (
    <div className='App'>
      <CounterProvider>
        <button onClick={() => setPage ('luasSegitiga')}>Luas Segitiga</button>
        <button onClick={() => setPage ('luasLingkaran')}>Luas Lingkaran</button>
        {
          page === 'luasSegitiga' ? <LuasSegitiga/> : <LuasLingkaran/>
        }
        <Counter/>
      </CounterProvider>
      <CounterTwoNumber/>
      <FormText/>
      <Nilai/>
    </div>
  );
}
export default App;
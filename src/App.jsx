import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  function handleClick() {
    setToggle(!toggle);
  }

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 100);

    return () => {
      //clear timeout
    };
  }, []);

  return (
    <div className=''>
      {toggle && <div data-testid='toggle-div'>toogle</div>}
      {data && <p>data</p>}
      <h1 style={{ color: 'red' }}>Hello world!</h1>
      <h2 style={{ color: 'red' }} data-testid='value'>
        {value}
      </h2>
      <button data-testid='button1' onClick={handleClick}>
        click me
      </button>
      <input
        type='text'
        placeholder='enter name'
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;

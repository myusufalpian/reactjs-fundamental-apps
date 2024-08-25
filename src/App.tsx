import { useState } from 'react';
import Button from './components/elements/Button';

const App = () : JSX.Element => {
  const [count, setCount] : [number, React.Dispatch<React.SetStateAction<number>>] = useState(0)
  const onClickHandler = () : void => setCount(count + 1)
  return (
    <div className='flex justify-center bg-neutral-800 min-h-screen items-center'>
      <p className="text-3xl text-white">Welcome to my react apps</p>
      <Button children={"Submit"} variant={"bg-blue-500"} text={"text-white"} classname={"mx-5"} onClick={onClickHandler} />
      <p className="text-3xl text-white">{count}</p>
    </div>
  )
}

export default App;
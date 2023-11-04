
import Button from './components/Button'
import Heading from './components/Heading';
import Loader from './components/Loader';
import './App.css';

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black '>
      {/* <Loader/> */}
      <div className=' pt-28 pb-20'>
      <Heading/>
      </div>
    <div className='pt-8'>
      <Button/>
    </div>
    </div>    
  );
}

export default App;

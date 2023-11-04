

import Button from './Button'
import Heading from './Heading';

function Wallet() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black border-dotted border-2 border-color: rgb(229 231 235) '>
      <div className=' pb-28'>
      <Heading/>
      </div>
    <div className=' pb-40'>
      <Button/>
    </div>
    </div>  
  );
}

export default Wallet;

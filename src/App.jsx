 import React, { useEffect, useState } from 'react';

function App() {

  const [time, settime] = useState( new Date() );

  useEffect((()=>{

    const timer = setInterval(() => {

      settime(new Date() );
      1
    }, 1000);
return ()=>clearInterval(timer)



  }),[])


  return (
    <>

<div className='flex h-screen justify-center items-center ' > 

<div className='bg-green-600 px-3 rounded-md py-2' >
   
   this is digital clock
   <h1 className='text-white ' >
    {time.toLocaleTimeString() }
    </h1>




</div>


</div>
    
  
    </>
  );
}

export default App;
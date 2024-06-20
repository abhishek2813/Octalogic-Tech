import { useState } from 'react'

import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='px-60'>
       <Button>click</Button>
       </div>
    </>
  )
}

export default App

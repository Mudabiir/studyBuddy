import React from 'react'
import { Link } from 'react-router-dom'
import Scheduler from './Scheduler'
function Home() {
  return (
    < >
    <body className='bg-slate-400'>
      
   
    <Link to='/profile'>profile</Link>
    <Link to='/resources/flashcards'>create flashCards</Link>
      <section className=" bg-slate-700 absolute top-20 right-0 h-70" >
        <Scheduler />
      </section>
      </body>
    </>
  )
}

export default Home
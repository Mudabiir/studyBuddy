import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <Link to='/profile'>profile</Link>
    <Link to='/resources/flashcards'>create flashCards</Link>
      <div>
           ok
      </div>
    </>
  )
}

export default Home
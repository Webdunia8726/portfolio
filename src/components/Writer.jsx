import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
function Writer() {
    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: 0
    })
  return (
  <>
  <div className='App'>
      <span>{text}</span>
    </div>
  </>
  )
}

export default Writer;

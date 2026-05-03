import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <section className='flex-center h-screen'>
      hello
    </section>
  )
}

export default App

import React from 'react'
import me from '../../../images/me.png'
import Typist from 'react-text-typist';
function Landing() {
  return (
    <div className="flex flex-wrap-reverse justify-center my-10 sm:justify-between">
      <div className="text-infomation">
          <h2 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight bg-gray-200 dark:bg-gray-600 rounded w-40 text-center p-2">Hi, I'm Mavin 👨‍💻</h2>
          <h1 className="text-4xl md:text-5xl my-5 title dark:text-white mt-5">iOS + Web {' '}
              <Typist className="dark:text-white mt-5" pauseTime={2000} typingSpeed={200} cursorClassName={'myCursor'} sentences={['Developer', 'Instructor']} loop={true} /></h1>
          <h2 className="text-xl dark:text-white mt-5">from Korea Software HRD Center, Cambodia.</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">I specialize in Mobile development and Web development Subject. </p>
      </div>
      <div className="rounded-full">
          <img src={me} alt="profile" className="w-56 my-8 md:my-2 md:w-60" />
      </div>
    </div>

  )
}

export default Landing
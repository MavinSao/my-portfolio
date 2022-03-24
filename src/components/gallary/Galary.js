import React from 'react'

function Galary() {
  return (
    <div className="flex items-center my-5">
        <div className="grid grid-cols-8 gap-x-4 gap-y-1">
            <div className="col-span-full mb-3">
            <p className="text-xl text-gray-800"> Today's popular searches </p>
            </div>
            <div className="col-span-2">
            <a href="">
                <img src="https://picsum.photos/seed/1/2000/1000" className="rounded-xl brightness-75" />
            </a>
            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> thick soup </p>
            </div>
            
            <div className="col-span-2">
            <a href="">
                <img src="https://picsum.photos/seed/1/2000/1000" className="rounded-xl brightness-75" />
            </a>
            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> thick soup </p>
            </div>
            <div className="col-span-2">
            <a href="">
                <img src="https://picsum.photos/seed/2/2000/1000" className="rounded-xl brightness-75" />
            </a>
            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> egg </p>
            </div>
            <div className="col-span-2">
            <a href="">
                <img src="https://picsum.photos/seed/3/2000/1000" className="rounded-xl brightness-75" />
            </a>
            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> french toast </p>
            </div>

            <div className="col-span-2">
            <a href="">
                <img src="https://picsum.photos/seed/4/2000/1000" className="rounded-xl brightness-75" />
            </a>
            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> bread </p>
            </div>
            <div className="col-span-2">
            <a href="">
                <img src="https://picsum.photos/seed/5/2000/1000" className="rounded-xl brightness-75" />
            </a>
            <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> pasta </p>
            </div>

        </div>
    </div>
  )
}

export default Galary
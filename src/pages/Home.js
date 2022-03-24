import React, { useState, useEffect } from 'react'
import GitRepo from '../components/section/gitcode/GitRepo';
import Landing from '../components/section/landing/Landing';

function Home() {

    return (
        <main className="px-10 mx-auto max-w-6xl">
            <Landing/>
            <GitRepo/>
        </main>
    )
}

export default Home

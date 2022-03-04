import React, { useState, useEffect } from 'react'
import me from '../images/me.png'
import Typist from 'react-text-typist';
import figma from '../images/figma.png'
import figmaScreen from '../images/figma-2.png'
import hrdLogo from '../images/HRD-logo.png'
import mathFo from '../images/Math-logo.jpeg'
import { GithubRepoCard } from '../components/repocard/GithubRepoCard';
import { getLatestRepos } from '../service/git.service';
import SkillCard from '../components/card/SkillCard';
import SkillBar from 'react-skillbars';

function Home() {

    const [repos, setRepos] = useState()
    const [skills, setSkills] = useState([
        { type: "iOS", level: 95 },
        { type: "React JS", level: 90 },
        { type: "Node JS", level: 80 },
        { type: "Spring", level: 75 },
        { type: "ReactNative", level: 70 },
    ])

    const colors = {
        bar: '#ef4444',
        title: {
            text: '#abc123',
            background: '#fff',
        }
    }

    useEffect(async () => {

        let lastrepos = await getLatestRepos()

        setRepos(lastrepos)


    }, [])

    return (
        <main className="px-10 mx-auto max-w-6xl">
            <div className="flex flex-wrap-reverse  md:justify-between">
                <div className="text-infomation">
                    <h2 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight bg-gray-200 dark:bg-gray-600 rounded w-40 text-center p-2">Hi, I'm Mavin 👨‍💻</h2>
                    <h1 className="text-6xl my-5 title dark:text-white mt-5">iOS + Web {' '}
                        <Typist className="dark:text-white mt-5" pauseTime={2000} typingSpeed={200} cursorClassName={'myCursor'} sentences={['Developer', 'Instructor']} loop={true} /></h1>
                    <h2 className="text-xl dark:text-white mt-5">from Korea Software HRD Center, Cambodia.</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">I specialize in Mobile development and Web development Subject. </p>
                </div>
                <div className="profile bg-slate-200 rounded-full">
                    <img src={me} alt="profile" className="w-80" />
                </div>
            </div>
            <h1 className="text-4xl subtitle dark:text-white my-16">Lastest Code</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto lg:-mt-10 gap-y-10">
                {/* Single github Repo */}
                {repos &&
                    repos.map((latestRepo, idx) => (
                        <GithubRepoCard latestRepo={latestRepo} key={idx} />
                    ))}
            </div>
            <h1 className="text-4xl subtitle dark:text-white my-16">Skills</h1>

            <SkillBar colors={colors} skills={skills} />




            <h1 className="text-4xl subtitle dark:text-white my-16">Lastest Project 👾👨‍💻</h1>

            <div className="my-5">
                <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
                    <div>
                        <img src={figmaScreen} alt="fotbook-UI" />
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Home

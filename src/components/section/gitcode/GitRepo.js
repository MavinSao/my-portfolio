import React,{useState, useEffect} from 'react'
import { GithubRepoCard } from '../../repocard/GithubRepoCard';
import { getLatestRepos } from '../../../service/git.service';
function GitRepo() {

    const [repos, setRepos] = useState()
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
    <>
        <h1 className="text-4xl subtitle dark:text-white my-16">Github Repositories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto lg:-mt-10 gap-y-10">
            {/* Single github Repo */}
            {repos &&
                repos.map((latestRepo, idx) => (
                    <GithubRepoCard latestRepo={latestRepo} key={idx} />
                ))}
        </div>
    </>
  )
}

export default GitRepo
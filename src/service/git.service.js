import axios from "axios";

export const getLatestRepos = async () => {
    try {
        const res = await axios.get(
            `https://api.github.com/search/repositories?q=user:mavinsao+sort:author-date-asc`
        );

        let repos = res.data.items;
        let latestSixRepos = repos.splice(0, 6);
        return latestSixRepos;
    } catch (err) {
        console.log(err);
    }
};

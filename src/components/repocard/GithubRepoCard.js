import React from "react";
import {BsGithub} from "react-icons/bs"
export const GithubRepoCard = ({ latestRepo }) => {
    return (
        <div className="flex justify-between text-gray-900 dark:text-white text-base tracking-tight bg-gray-100 dark:bg-gray-600 rounded p-8">
            <div>
                <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                    {latestRepo.name}
                </h1>
                <p className="text-base font-normal my-4 text-gray-500">
                    {latestRepo.description}
                </p>
                <a
                    href={latestRepo.clone_url}
                    className="font-semibold group flex flex-row space-x-2 w-full items-center"
                >
                    <p>View Repository </p>
                    <div className="transform  group-hover:translate-x-2 transition duration-300">
                        &rarr;
                    </div>
                </a>
            </div>
            <div> <BsGithub size={'50px'}/></div>
        </div>
    );
};
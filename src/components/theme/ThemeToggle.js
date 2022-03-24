import React from 'react';
import { FcIdea } from "react-icons/fc";
import { FaSun } from "react-icons/fa";
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <FcIdea
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="rounded bg-gray-200 text-2xl cursor-pointer"
                />
            ) : (
                <FaSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="rounded text-2xl cursor-pointer"
                />
            )}
        </div>
    );
};

export default Toggle;
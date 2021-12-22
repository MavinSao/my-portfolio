import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SkillCard({ skill }) {
    return (
        <div className="bg-gray-200 rounded p-5">
            <CircularProgressbar value={skill.percentage} text={`${skill.percentage}%`} />
        </div>
    )
}

export default SkillCard

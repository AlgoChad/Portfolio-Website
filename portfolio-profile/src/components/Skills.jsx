import React from 'react';
import skills from '../data/skills';
import SkillsItem from './SkillsItem';
import Title from './Title';

function Skills(){
    return(
        <div className='justify-center my-5'>
            <div className='w-full md:w-7/15'>
            <Title>Skills</Title>
            {skills.map(item => (
                <SkillsItem
                    title={item.title}
                    stack={item.stack}
                />
            ))}
            </div>
        </div>
    )
}

export default Skills;
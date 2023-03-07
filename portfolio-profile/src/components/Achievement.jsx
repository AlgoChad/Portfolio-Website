import React from 'react';
import achievement from '../data/achievements';
import AchievementItem from './AchievementItem';
import Title from './Title';

function Achievement(){
    return(
        <div className='flex flex-col md:flex-row justify-center my-20'>
            <div className='w-full md:w-7/14'>
            <Title>Achievements</Title>
            {achievement.map(item => (
                <AchievementItem
                    year={item.year}
                    achievement={item.achievement}
                    details={item.details}
                />
            ))}
            </div>
        </div>
    )
}

export default Achievement;
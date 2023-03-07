import React from 'react';
import timeline from '../data/timeline';
import AchievementItem from './AchievementItem';
import Title from './Title';

function Timeline(){
    return(
        <div className='flex flex-col md:flex-row justify-center my-20'>
            <div className='w-full md:w-7/14'>
            <Title>Timeline</Title>
            {timeline.map(item => (
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

export default Timeline;
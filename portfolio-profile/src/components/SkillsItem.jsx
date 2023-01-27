import React from 'react';

function TimelineItem({title, stack}){
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700"/>
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                        {title}
                    </span>
                </p>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white my-2">
                {stack.map(item => (
                    <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        {item}
                    </span>
                ))}
                </p>
            </li>
        </ol>
    )
}

export default TimelineItem;
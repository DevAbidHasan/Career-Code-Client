import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobs}) => {

    return (
        <div className='w-11/12 mx-auto my-18'>
            <h2 className='text-center font-black text-blue-500 text-2xl md:text-3xl lg:text-4xl mb-18'>Available Hot Jobs</h2>
           <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10'>
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
           </div>
        </div>
    );
};

export default HotJobs;
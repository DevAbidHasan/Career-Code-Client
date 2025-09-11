import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const job =useLoaderData();
    console.log(job);
    return (
        <div className='my-10 w-11/12 mx-auto'>
            <h2 className="md:text-4xl text-2xl text-blue-600 font-bold">{job.title}</h2>
            <h2 className="text-xl">{job.company}</h2>
            <div className='flex justify-end'>
            <Link to={`/jobs/${job._id}`} className='btn hover:btn-secondary btn-primary'>Apply Now</Link>
            </div>
        </div>
    );
};

export default JobDetails;
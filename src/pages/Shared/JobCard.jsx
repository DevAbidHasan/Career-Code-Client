import React from 'react';
import { IoLocation } from "react-icons/io5";
import { Link } from 'react-router';

const JobCard = ({job}) => {
    return (
        <div className="card pt-7 mx-auto bg-base-100 shadow-sm">
            <div className='flex items-center justify-evenly'>
                <figure>
                <img
                    src={job.company_logo}
                    className='w-18'
                    alt="company logo" />
                </figure>
                <div>
                    <h2 className='text-blue-600 font-bold text-xl'>{job.company}</h2>
                    <h2 className='text-gray-500 flex items-center justify-between gap-2 '><IoLocation className='text-amber-500'/>{job.location}</h2>
                </div>
            </div>
        <div className="card-body">
    <h2 className="card-title">
      {job.title}
      <div className="badge badge-secondary">Hot</div>
    </h2>
    <p>Salary : {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}</p>
    <p>{job.description}</p>
    <div className="card-actions justify-start">
      {
        job.requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
      }
      
    </div>
    <div className='flex justify-end'>
        <Link to={`/jobs/${job._id}`} className='btn hover:btn-secondary btn-primary'>View Details</Link>
    </div>
  </div>
</div>
    );
};

export default JobCard;
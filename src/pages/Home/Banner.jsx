import React from 'react';
import { motion, scale } from 'motion/react';
import team1 from "../../assets/team/celebration-1.png";
import team2 from "../../assets/team/celebration-2.png";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
    <motion.img
    animate = {{
        y : [60,120,60],
        transition : {repeat : Infinity, duration : 5},
        
    }}
      src={team1}
      className="max-w-sm border-blue-700 border-b-8 border-s-8 rounded-br-[40px] rounded-t-[40px] shadow-2xl"
    />
    <motion.img
    animate = {{
        x : [50,150,50],
        
        transition : {repeat : Infinity, delay:5, duration : 8},
        
    }}
      src={team2}
      className="max-w-sm border-blue-700 border-b-8 border-s-8 rounded-br-[40px] rounded-t-[40px] shadow-2xl"
    />
    </div>
    <div className='flex-1'>
      {/* <motion.h1
       animate ={{
        rotate : 180,
        x : 200,
        y : -100,
        transition : {duration: 2},
        scale: 1
    }}
      className="text-5xl font-bold">Latest <motion.span
      animate = {{
        color : ['#F0310C', '#0E7AC2', '#CC1BCF'],
        transition : { duration : 2, repeat : Infinity}
    }}
      >Jobs</motion.span> For you!</motion.h1> */}
      <motion.h1
       initial = {{scale : 0}}
       whileHover={{scale: 1}}
       whileTap={{scale:1}}
       animate = {{
        scale : 0.8,
        transition : {duration : 3, repeat : Infinity},
        color :['#F0390C', '#0E7AC2', '#CC1BCF']
       }}
      className="text-5xl font-bold">Remote Jobs For you!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;
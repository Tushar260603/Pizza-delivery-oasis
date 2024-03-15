import React from 'react'
import {motion} from "framer-motion"
import imgg from "../images/pizza5.jpg"

const Design = () => {
  return (
   <>
   <div className='dess'>
<div>
{/* <motion.div animate={{scale:1}} initial={{scale:0}}> */}
<motion.div
      initial={{ x: +10000, opacity: 0 }} // Initial state: off-screen to the left and invisible
      animate={{ x: 0, opacity: 1 }} // Final state: on-screen and visible
      transition={{ duration: 0.5 }} // Animation duration
    >
    <img style={{width:"100%"}}   src={imgg}    alt='' />
</motion.div>

</div>

{/* <div className='dessr'>
<motion.div
      initial={{ x: +10000, opacity: 0 }} // Initial state: off-screen to the left and invisible
      animate={{ x: 0, opacity: 1 }} // Final state: on-screen and visible
      transition={{ duration: 1 }} // Animation duration
    >
      <h1>Your Text Here</h1>
      <h1>Your Text Here</h1>
      <h1>Your Text Here</h1>
      <h1>Your Text Here</h1>
      <h1>Your Text Here</h1>
      <h1>Your Text Here</h1>
    </motion.div>

    
</div> */}


   </div>
   
   
   </>
  )
}

export default Design

// import {FaEnvelope,FaUser,FaLock} from 'react-icons/fa'\
import { useState } from "react"

const Loginpage = () => {
    
   const [action,setAction] = useState('Sign Up')

    return(
        <article className='flex flex-col m-auto mt-[100px] bg-slate-300 w-[600px] h-screen mb-9'>
     <div className='flex flex-col items-center gap-2 w-full mt-8'>
      <div className=' text-3xl font-semibold'>{action}</div>
      <div className='w-[61px] h-[6px] bg-slate-300 rounded-lg'></div>
     </div>
     <div className='mt-14 flex flex-col gap-5'>
      {action === "Login" ? <div></div> : <div className='flex items-center m-auto w-[480px] h-20 bg-slate-600 rounded-md'>
         {/* < FaUser className='ml-4'/> */}
         <input type='text' placeholder='Name' className='ml-5'></input>
      </div> }
      <div className='flex items-center m-auto w-[480px] h-20 bg-slate-600 rounded-md'>
         {/* <FaEnvelope className='ml-4'/> */}
         <input type='email' placeholder='Email Id' className='ml-5'></input>
      </div>
      <div className='flex items-center m-auto w-[480px] h-20 bg-slate-600 rounded-md'>
         {/* <FaLock className='ml-4'/>  */}
         <input type='password' placeholder='Password' className='ml-5'></input>
      </div>
     </div>
     {action==="Sign Up"? <div></div>:<div className='pl-[62px] mt-7 '>Forgot password ? <span>Click Here</span></div> }
     <div className='submit-container'>
      <div className={action==='Login'? "gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
      <div className={action==='Sign Up'? " gray": "submit"} onClick={() => {setAction("Login")}}>Login</div>
     </div>
    </article>
    )
}

export default Loginpage;
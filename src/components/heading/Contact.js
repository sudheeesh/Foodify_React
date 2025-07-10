
const Contact = () => {
  return (
    <div className="p-32 flex justify-evenly bg-zinc-500">
      <div>
      <h4 className='mb-2 text-lg font-serif font-medium text-amber-400'>Enter Your Name:</h4><input className='p-2 m-auto mb-5 w-[400px] h-12 rounded-md' type='Text' placeholder='Name'></input>
      <h4 className='mb-2 text-lg font-serif font-medium text-amber-400' >Your Phone Number:</h4><input className='p-2 m-auto mb-5 w-[400px] h-12 rounded-md' type='Number' placeholder='Number'></input>
      <h4 className='mb-2 text-lg font-serif font-medium text-amber-400'>Enter Message:</h4><input className='p-2 m-auto w-[400px] h-32 rounded-md' type='Text' placeholder='Message'></input>
      <div className='mt-4 p-4  border-solid rounded-lg bg-black text-teal-400 text-center text-lg font-serif font-medium cursor-pointer'>
        <button>Send Message</button>
        </div>  
      </div>
      <div> 
        <div className='ml-36'>
        <h4 className='mb-16 font-serif text-3xl text-amber-400'>Contact Us:</h4>
        <h6 className='mb-8 text-xl font-serif'>Contact us in convenient Way</h6>
        <div className='mb-8'>
          <h4 className='text-lg font-serif text-amber-400'>Phone:</h4>
          <p className='font-mono'>8778064437</p>
          <p className='font-serif'>Info@jumbacart.com</p>
        </div>
        <h4 className='mb-5 font-mono'>Available: <span>8:00 - 23:00</span></h4>
        <h5 className='mb-5 font-serif border-solid rounded-lg bg-black text-teal-400 text-center text-lg cursor-pointer'>Request a Call</h5>
        </div>
      </div>
    </div>
  )
}

export default Contact 
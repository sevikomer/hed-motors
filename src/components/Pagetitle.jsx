import React from 'react'

const Pagetitle = ({ icon, title, content }) => {
    return (
      <div className='bg-slate-100 font-sans lg:m-16 m-4 rounded-3xl items-center place-content-center lg:p-16 p-12 '>
        <div className='flex items-center justify-center mb-2'>
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-light-blue text-white">
            <div className='h-8 w-8'>{icon}</div>
          </div>
        </div>
      <div className='lg:text-4xl text-3xl font-extrabold uppercase text-center mb-2'>{title}</div>
        <div className='mt-2 text-lg text-grey text-center'> 
          {content}
        </div>
      </div>
        
    );
  };
export default Pagetitle
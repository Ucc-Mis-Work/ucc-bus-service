import React from 'react'

export default function TestPage() {
  return (
    <div className='h-screen flex'>


        {/* TODO: Aside */}
        <aside className='bg-[#212327] w-[17%]'>
            Aside
        </aside>


        {/* TODO: Main */}
        <main className='bg-[#292A2D] flex-1 flex item items-center justify-center text-white text-center'>
            <div>
                <h1 className='text-lg mb-2'>Hi, I'm Deepseek.</h1>
            <h1 className='text-sm mb-5'>How can i help you today?</h1>
            <input type="text" className='bg-[#404045] p-10 rounded-2xl
            ' />
            </div>


        </main>




    </div>
  )
}



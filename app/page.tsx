import React from 'react'
import Feed from '@/components/Feed'

const Home = () => {
  return (
<>
<div className='flex flex-col justify-center text-center font-bold mt-2 text-2xl'>
<h1>Discover & Share </h1>
{/* <br className='max-md:hidden'/> */}
<span className='bg-gradient-to-r bg-clip-text text-transparent from-red-500 to-yellow-500 text-3xl'>AI Powered Prompts</span>
<p className='m-auto mt-5'>Promptopia is an open source AI prompting tool for modern world to discover,create and modify prompts.</p>
</div>
<Feed/>
</>  
)
}

export default Home
import React from 'react'
import Header from './__components/Header'
import EditorPanel from './__components/EditorPanel'
import OutputPanel from './__components/OutputPanel'

function page() {
  return (
    <div className='min-h-screen'>
      <div className='max-w=[1800px] mx-auto p-4'>
        <Header/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <EditorPanel/>
        <OutputPanel/>
      </div>
    </div>
  )
}

export default page

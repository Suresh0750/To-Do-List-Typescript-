import React from 'react'

interface input {
    inputVal : string,
    setInputVal : React.Dispatch<React.SetStateAction<string>>,
    type? : 'text' | 'color' | 'checkbox'
}
const input = ({ inputVal,setInputVal} : input) => {
  return (
    <div>
       <input type="text" value={inputVal} onChange={(e :React.ChangeEvent)=>setInputVal(e.target.value)} className='w-full p-2 rounded-sm mb-2 text-yellow-700'/>
    </div>
  )
}

export default input

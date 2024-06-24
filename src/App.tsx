
import {useState} from 'react'
import Input from './component/Input.tsx'

import './App.css'
import Button from './component/Button.tsx'
import { Items } from './types/utils.ts'
import {Itemslist} from './component/Itemslist.tsx'


function App() {

 

  const [items,setItems] = useState<Items[]>([])
  const [inputVal,setInputVal] = useState<string>('')

  const hadleSubmit = (e:React.FormEvent)=>{
    e.preventDefault()
    if(!(inputVal).trim().length)  return
    setItems((prev)=>[...prev,{title:inputVal, id:Date.now().toString()}])
    // console.log(items)
    // alert(inputVal)
    setInputVal('')
  }

  return (
    <div className='flex flex-col h-[100vh] justify-center items-center'>
      <div className='w-[350px]'>
        <h2 className='text-3xl text-green-300'>To-Do-List</h2>
        <form className='mb-5' onSubmit={hadleSubmit}>
         <Input type="text" inputVal={inputVal} setInputVal={setInputVal} />
          {/* <button className='bg-gray-700 w-full p-2'></button> */}
          <Button className="btn-4" >Add </Button>
        </form>
        <div className={ items.length>=4 ? 'bg-gray-500 h-52 overflow-y-auto': 'h-52'}>
            <Itemslist items={items} setItems={setItems}  />
        </div>
    </div>
    </div>
  )
}

export default App

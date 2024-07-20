import  { useState } from 'react'
 import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Todo.module.css'
const Todo = () => {
    const [input,setInput] = useState('')
    const [items,setitems] = useState([])

    const addItem =()=>{
        if(input){

            setitems([...items,input])
            setInput("")
            return
        }
    }

    const deleteAll = ()=>{
        setitems([])
    }

    const deleteSingleItem = (index)=>{

        const filterData = items.filter((e,i)=>{
            return index !== i
        })
        setitems(filterData)
    }
    
  return (
    <div className={styles.body}>
    <div className='w-50 mx-auto'>
        
     <h1  className={styles.heading}>Todo App</h1>
      <div className={styles.box}>

      <input className= {styles.input} value={input} type="text" placeholder='Enter items..' onChange={(e)=>{
        setInput(e.target.value)
      }}/>
      <IoIosAddCircle onClick={addItem} style={{fontSize:30,marginLeft:5}}/>
      <MdDelete onClick={deleteAll} style={{fontSize:30,marginLeft:5}}/>
      
{
    items.map((element,index)=>{
        return(
            
            <li key={index}>
                {element}<MdDelete onClick={()=>deleteSingleItem(index)}/>
            </li>
        )
    })
}
</div>
    </div>
    </div>
  )
}

export default Todo
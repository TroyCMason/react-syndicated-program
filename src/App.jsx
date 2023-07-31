import './App.css';
import Todo from './Components/Todo.jsx'
import Title from './Components/Title.jsx'
import Modal from './Components/Modal';
import React, {useState, useEffect} from 'react';
import Counter from "./Components/Counter.jsx"

function App() {
const [showModal, setShowModal] = useState(false);

function onToDoDelete(){
  setShowModal(true);
}

function cancelModal() {
  setShowModal(false);
}

function confirmModal(){
  setShowModal(false);
}

useEffect(()=> {
  console.log("ONLY on mount")
  setShowModal(!showModal)
}, [])

useEffect (()=>{
  console.log('on mount AND on ${showModal} change')
}, [showModal])

useEffect(() => {
  console.log ('EVERY render')
  // setShowModal(!showModal)
})

  return (
    <>
     <Title/>
     <div>
      <input type="text" onChange={(event)=>{
      console.log(event.target.value)
      }}/>
        <button onClick ={()=> setShowModal(true)}>Add todo</button>
     </div>
     <div className='todo__wrapper'>
     <Todo onToDoDelete={onToDoDelete} title="Finish Frontend Simplified"
     paragraph="Code along with Frontend Simplified"/>
     <Todo title="Complete Interview Section"
     paragraph="Finish every interview question"
     />
    <Todo onToDoDelete={onToDoDelete}  title="Land a 100k a year job"
     paragraph="Apply to 100 jobs"/>
     <Todo title="Pay off Debt"/>
     <Todo title="Pay off Taxes" />
     <Todo title="Save my Family" />
     </div>
     {false && <Modal title="Confirm Delete?"/>}
     </>
  );
}

export default App;

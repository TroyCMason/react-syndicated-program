import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo.jsx'
import Title from './Components/Title.jsx'
import React, {useState} from 'react';

function App() {
 const [showModal, setShowModal] = useState(false)
 setShowModal(false)
  return (
    <>
     <Title/>
     <div>
      <input type="text" onChange={(event)=>{
      console.log(event.target.value)
      }}/>
        <button>Add todo</button>
     </div>
     <div className='todo__wrapper'>
     <Todo title="Finish Frontend Simplified"
     paragraph="Code along with Frontend Simplified"/>
     <Todo title="Complete Interview Section"
     paragraph="Finish every interview question"
     />
     <Todo title="Land a 100k a year job"
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

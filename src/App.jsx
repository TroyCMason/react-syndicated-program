import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo.jsx'
import Title from './Components/Title.jsx'

function App() {
  return (
    <>
     <Title/>
     <div className='todo__wrapper'>
      <div>
        <input type="text"  onChange={(event) => {
          console.log(event.target.value)
        }}/>
      </div>
      <button>Add todo</button>

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
     <Modal title="Are you sure?"/>
     </>
  );
}

export default App;
pp
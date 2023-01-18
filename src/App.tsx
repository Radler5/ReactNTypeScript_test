import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
export interface IState{
  people:{
    name: string
    age: number
    url: string
    note?: string

  }[]
}

function App() {
 const [people, setPeople] = useState<IState["people"]>([
  {
    name:"Marko Kumar",
    url:"https://media.pitchfork.com/photos/61d5fa911b710fb5ce48ed9f/1:1/w_600/The-Weeknd-Dawn-FM.jpg",
    age:22,
    note:"Kuku živjo"
  }
 ])
  

  return (
    <div className="App">
     <h1>People invited to my party</h1>
     <List people={people}/>
     <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;

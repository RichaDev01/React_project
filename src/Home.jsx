import { useState } from "react";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";

function Home() {
    const [showAddHabit, setShowAddHabit] = useState(false);
    const [todos, settodos] = useState([
        // INITIAL STATE OF OUR todos 
        {
            id: 1,
            text: 'Go For a Walk',
            day: 'Oct 5th at 7:00am',
            reminder: true
        },
        {
            id: 2,
            text: 'Going to Gym',
            day: 'Oct 5th at 8:00am',
            reminder: true
        },
        {
            id: 3,
            text: 'Start Studying',
            day: 'Oct 5th at 10:00am',
            reminder: true
        }
    ])


    // ADD todos

    const addHabit = (habit) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newHabit = { id, ...habit }
        settodos([...todos, newHabit]);
    }


    //DELETE todos

    const deleteHabit = (id) => {
        settodos(todos.filter((habit) => habit.id !== id));
    }


    //SWITCHING REMAINDER

    const switchReminder = (id) => {
        settodos(todos.map((habit) => habit.id === id ? { ...habit, reminder: !habit.reminder } : habit))
    }

    return (
        <div className="container">
            <Header onAdding={() => setShowAddHabit(!showAddHabit)} showAdd={showAddHabit} />

            {showAddHabit && <AddTodo onAdding={addHabit} />}

            {todos.length > 0 ? (<Todos todos={todos} onDelete={deleteHabit} onSwitch={switchReminder} />) : ('No todos to Track !')}
        </div>
    );
}

export default Home;
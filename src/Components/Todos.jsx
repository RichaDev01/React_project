/* eslint-disable react/prop-types */
import SingleTodo from '../Components/SingleTodo'

const Todos = ({ todos, onDelete, onSwitch }) => {
    return (


        <div>
            {todos.map((habit) => (
                <SingleTodo key={habit.id} habit={habit} onDelete={onDelete} onSwitch={onSwitch} />
            ))}
        </div>
    )
}

export default Todos
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const AddTodo = ({ onAdding }) => {


    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false);



    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a Habit')
            return
        }
        onAdding({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }


    return (


        <form className='add-habit' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Habit</label>
                <input type="text" placeholder='Add a new Habit' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value='Save Habit 💾' className='btn btn-block' />



            <section className='weekNames'>
                <div className='days'>
                    <p className='weeks'>Sunday </p>
                    <p className='weeks'>Monday</p>
                    <p className='weeks'>Tuesday</p>
                    <p className='weeks'>Wednesday</p>
                    <p className='weeks'>Thursday</p>
                    <p className='weeks'>Friday</p>
                    <p className='weeks'>Saturday</p>
                </div>

            </section>

        </form>
    )
}

export default AddTodo;
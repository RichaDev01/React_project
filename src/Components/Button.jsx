/* eslint-disable react/prop-types */
const Button = ({ color, text, onClick }) => {
    return (

        <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{text}</button>
    )
}
export default Button
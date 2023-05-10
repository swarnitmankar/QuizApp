import { useRef } from "react"

const Start = ({setUsername}) => {
    const inputRef = useRef();

    const handClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value)
    }
  return (
    <div className="start">
        <input placeholder="Enter Your Name" className="startInput" ref={inputRef}/>
        <button className="startButton" onClick={handClick}>Start</button>
    </div>
  )
}

export default Start
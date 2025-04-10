import { useState } from "react"

export default function Input(){
    const [input, setInput] = useState("")
    const [kiir, setKiir] = useState("")
    return (
        <div>
            <input type="text" data-testid="input" value={input} onChange={(event)=>{
                setInput(event.target.value)
            }}/>
            <button data-testid="button" onClick={()=>{
                setKiir(input)
            }}>Kiír</button>
            <p data-testid="p">
                {kiir.length > 0 && `Kiírva ${kiir}`}
            </p>
        </div>
    )
}
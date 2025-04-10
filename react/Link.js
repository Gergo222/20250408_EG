import { useState } from "react"

const statuses ={
    HOVER: "hovered",
    NORMAL: ""
}

export default function Link({
    page,
    children
}){
    const [status, setStatus] = useState();

    return (
        <a data-testid="link" href={page || "#"} className={status} onMouseEnter={()=>{
            setStatus(statuses.HOVER)
        }}
        onMouseLeave={()=>{
            setStatus(statuses.NORMAL)
        }}>
            {children}
        </a>
    )
}
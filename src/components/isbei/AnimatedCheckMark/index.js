import { useEffect, useState } from "react"
import "./index.css"

const AnimatedCheckMark = () => {

    const [showClass, setShowClass] = useState(false)

    useEffect(() => {
        let timer = setTimeout(() => {
            setShowClass(true)
        }, 1000);
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (<>
        <div className={`circle-loader ${showClass ? "load-complete" : ""}`}>
            <div className="checkmark draw" style={{ display: showClass ? "block" : "none" }} ></div>
        </div>
    </>)
}

export default AnimatedCheckMark
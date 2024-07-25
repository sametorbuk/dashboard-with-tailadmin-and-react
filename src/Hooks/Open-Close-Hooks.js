import { useState } from "react"





export const useOpenClose = () => {

    const [isOpen, setIsOpen] = useState(false)


    const clickHandler = () => {
        setIsOpen(!isOpen)
    }

    return [isOpen, clickHandler, setIsOpen]



}

import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const s1 = {
        "name": "Gaurav",
        "email": "gauravstr05@gmail.com"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setState({
                        "name": "Griva😘",
                        "email": "griva@gmail.com"
                    })
                }, 1000)
                setState({
                    "name": "Advik",
                    "email": "advik@gmail.com"
                })
            }, 1000)
            setState({
                "name": "Akshu",
                "email": "akshu07@gmail.com"
            })
        }, 1000)
    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
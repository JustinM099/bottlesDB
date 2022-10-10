import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBottle } from '../features/bottles/bottleSlice'

function BottleForm() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        
        dispatch(createBottle({ text }))
        setText('')
    }
    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">bottle</label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type="submit">submission</button>
                </div>
            </form>
        </section>
    )
}

export default BottleForm
import * as React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBottle } from '../features/bottles/bottleSlice'
import { Modal, Button, Card, CardContent } from '@mui/material'

function BottleForm() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createBottle({ text }))
        setText('')
    }
    return (
        <>
            <Button variant="contained" size="large" color="inherit" onClick={handleOpen}>add wine</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Card>
                    <CardContent>
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
                    </CardContent>
                </Card>
            </Modal>
        </>
    )
}

export default BottleForm
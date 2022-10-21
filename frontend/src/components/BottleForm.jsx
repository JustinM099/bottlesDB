import * as React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBottle } from '../features/bottles/bottleSlice'
import { Modal, Button, Card, CardContent } from '@mui/material'

function BottleForm() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [producer, setProducer] = useState('')
    const [vintage, setVintage] = useState('')
    const [wineName, setWineName] = useState('')
    const [variety, setVariety] = useState('')
    const [region, setRegion] = useState('')
    const [quantity, setQuantity] = useState('')
    const [notes, setNotes] = useState('')
    const [location, setLocation] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createBottle({ producer, vintage, wineName, variety, region, quantity, notes, location }))
    }
    return (
        <>
            <Button variant="outlined" size="large" color="inherit" onClick={handleOpen}>add wine</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Card style={{
                    width: '90%'
                }}>
                    <CardContent>
                        <section className="form">
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="producer">producer</label>
                                    <input
                                        type="text"
                                        name="producer"
                                        id="producer"
                                        value={producer}
                                        onChange={(e) => setProducer(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="producer">vintage</label>
                                    <input
                                        type="number"
                                        name="vintage"
                                        id="vintage"
                                        value={vintage}
                                        onChange={(e) => setVintage(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="producer">wine name</label>
                                    <input
                                        type="text"
                                        name="wineName"
                                        id="wineName"
                                        value={wineName}
                                        onChange={(e) => setWineName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="producer">variety</label>
                                    <input
                                        type="text"
                                        name="variety"
                                        id="variety"
                                        value={variety}
                                        onChange={(e) => setVariety(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="producer">region</label>
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="producer">quantity</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        id="quantity"
                                        min="0"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="producer">notes</label>
                                    <input
                                        type="text"
                                        name="notes"
                                        id="notes"
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="producer">cellar location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
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
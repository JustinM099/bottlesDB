import { useDispatch } from 'react-redux'
import * as React from 'react'
import { useState } from 'react'
import { editBottle, deleteBottle } from '../features/bottles/bottleSlice'
import { Card, CardContent, Modal, Divider } from '@mui/material'


const BottleItem = ({ bottle }) => {

    const dispatch = useDispatch()
    
    const [editOpen, setEditOpen] = React.useState(false)
    const handleEditOpen = () => setEditOpen(true)
    const handleEditClose = () => {
        setEditOpen(false)
        console.log('EDIT CLOSE TRIGGERED, EDIT OPEN STATUS: ', editOpen)
    }

    const [producer, setProducer] = useState(bottle.producer)
    const [vintage, setVintage] = useState(bottle.vintage)
    const [wineName, setWineName] = useState(bottle.wineName)
    const [variety, setVariety] = useState(bottle.variety)
    const [region, setRegion] = useState(bottle.region)
    const [quantity, setQuantity] = useState(bottle.quantity)
    const [notes, setNotes] = useState(bottle.notes)
    const [location, setLocation] = useState(bottle.location)


    const onSubmit = e => {
        const bottleId = bottle._id
        console.log('onSubmit bottleId: ', bottleId)

        e.preventDefault()
        console.log('BOTTLE IN ONSUBMIT FROM BOTTLEITEM: ', bottle)
        dispatch(editBottle({ bottleId, producer, vintage, wineName, variety, region, quantity, notes, location }))
    }

    return (
        <Card className="bottle" onClick={handleEditOpen}>

            {/* <div>
                {new Date(bottle.createdAt).toLocaleString('en-US')}
            </div> */}
            <h2>{bottle.producer}</h2>
            <p>{bottle.vintage ? 'vintage: ' + bottle.vintage : ''}</p>
            {bottle.vintage ? <Divider variant='middle' /> : ''}
            <p>{bottle.wineName ? 'name: ' + bottle.wineName : ''}</p>
            {bottle.wineName ? <Divider variant='middle' /> : ''}
            <p>{bottle.variety ? 'wine type: ' + bottle.variety : ''}</p>
            {bottle.variety ? <Divider variant='middle' /> : ''}
            <p>{bottle.region ? 'region: ' + bottle.region : ''}</p>
            {bottle.region ? <Divider variant='middle' />: ''}
            <p>{bottle.quantity ? 'quantity: ' + bottle.quantity : ''}</p>
            {bottle.quantity ? <Divider variant='middle' /> : ''}
            <p>{bottle.notes ? 'notes: ' + bottle.notes : ''}</p>
            {bottle.notes ? <Divider variant='middle' /> : ''}
            <p>{bottle.location ? 'cellar location: ' + bottle.location : ''}</p>
            <button className="close" onClick={() => dispatch(deleteBottle(bottle._id))}>x</button>
            <Modal
                open={editOpen}
                onClose={handleEditClose}
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
        </Card>
    )
}

export default BottleItem
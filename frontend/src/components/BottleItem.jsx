import { useDispatch } from 'react-redux'
import { deleteBottle } from '../features/bottles/bottleSlice'


const BottleItem = ({ bottle }) => {
    
    const dispatch = useDispatch()

    return (
        <div className="bottle">
            <div>
                {new Date(bottle.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{bottle.producer}</h2>
            <p>{bottle.vintage ? 'vintage: ' + bottle.vintage : ''}</p>
            <p>{bottle.wineName ? 'name: ' + bottle.wineName : ''}</p>
            <p>{bottle.variety ? 'wine type: ' + bottle.variety : ''}</p>
            <p>{bottle.region ? 'region: ' + bottle.region : ''}</p>
            <p>{bottle.quantity ? 'quantity: ' + bottle.quantity : ''}</p>
            <p>{bottle.notes ? 'notes: ' + bottle.notes : ''}</p>
            <p>{bottle.location ? 'cellar location: ' + bottle.location : ''}</p>
            <button className="close" onClick={() => dispatch(deleteBottle(bottle._id))}>x</button>
        </div>
    )
}

export default BottleItem
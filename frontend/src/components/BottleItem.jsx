import { useDispatch } from 'react-redux'
import { deleteBottle } from '../features/bottles/bottleSlice'

const BottleItem = ({ bottle }) => {
    
    const dispatch = useDispatch()

    return (
        <div className="bottle">
            <div>
                {new Date(bottle.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{bottle.text}</h2>
            <button className="close" onClick={() => dispatch(deleteBottle(bottle._id))}>x</button>
        </div>
    )
}

export default BottleItem
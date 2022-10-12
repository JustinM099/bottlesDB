import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BottleForm from '../components/BottleForm'
import Spinner from '../components/Spinner'
import { getBottles, reset } from '../features/bottles/bottleSlice'
import BottleItem from '../components/BottleItem'



function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { bottles, isLoading, isError, message } = useSelector((state) => state.bottles)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/login')
        }

        dispatch(getBottles())

        return () => {
            dispatch(reset)
        }

    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>hello, {user && user.name}</h1>
                <p>track your cellar here</p>
            </section>
            <BottleForm />

            <section className="content">
                {bottles.length > 0 ? (
                    <div className="bottles">
                        {bottles.map((bottle) => (
                            <BottleItem key={bottle._id}
                                bottle={bottle}
                            />
                        ))}
                    </div>
                ) : (
                    <h3>
                        no wines in your cellar. add some now.
                    </h3>
                )}
            </section>
        </>
    )
}

export default Dashboard
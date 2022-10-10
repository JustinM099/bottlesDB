import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BottleForm from '../components/BottleForm'

function Dashboard() {
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)
    
    useEffect(() => { 
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <>
            <section className="heading">
                <h1>hello, {user.name.charAt(0).toLowerCase() + user.name.slice(1)}</h1>
                <p>track your cellar here</p>
            </section>
            <BottleForm />
        </>
    )
}

export default Dashboard
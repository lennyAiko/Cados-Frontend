import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {

    const [advocates, setAdvocates] = useState([])

    useEffect(() => {
        getData()
    }, [])

    let getData = async () => {
        let response = await axios.get('http://localhost:8000/advocates/')
        setAdvocates(response.data)
    }

    return (
    <div>
        <h1>HomePage</h1>

        <div>
            {advocates.map((advocate, index) => (
                
                <div key={index}>
                    <strong>{advocate.username}</strong>
                    <Link to={`/advocates/${advocate.username}`}>View</Link>
                </div>
            ))}
        </div>
    </div>
    )
}

export default HomePage
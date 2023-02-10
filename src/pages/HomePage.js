import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {

    const [advocates, setAdvocates] = useState([])

    useEffect(() => {
        getData()
    }, [])

    let getData = async () => {
        let response = await axios.get('https://cados.up.railway.app/advocates/')                 
        setAdvocates(response.data.advocates)
    }
    
    return (
    <div>
        <h1>HomePage</h1>

        <div>
            {advocates.map((advocate, index) => (
                
                <div className='advocate__preview__wrapper' key={index}>
                    <img className='advocate__preview__image' src={advocate.profile_pic} />
                    <strong>{advocate.name}</strong>
                    <a href={advocate.twitter}>@{advocate.username}</a>
                    <Link to={`/advocates/${advocate.username}`}>View</Link>
                </div>
            ))}
        </div>
    </div>
    )
}

export default HomePage
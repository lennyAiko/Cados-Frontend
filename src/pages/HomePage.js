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
    <div className='main--container'>
        <h2>Search (ADD NUMBER HERE) developer advocates found by @lennyaiko webscrapper and the TwitterAPI.</h2>

        <div className='advocate__list'>
            {advocates.map((advocate, index) => (
                
                <div className='advocate__preview__wrapper' key={index}>
                    <div className='advocate__preview__header'>
                        <Link to={`/advocates/${advocate.username}`}>
                            <img className='advocate__preview__image' src={advocate.profile_pic} />
                        </Link>
                        <div>
                            <strong>{advocate.name}</strong>
                            <br/>
                            <a href={advocate.twitter}>@{advocate.username}</a>
                        </div>
                    </div>

                    <small className='bio__preview'>{advocate.bio}</small>
                </div>
            ))}
        </div>
    </div>
    )
}

export default HomePage
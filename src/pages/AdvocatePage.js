import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const AdvocatePage = () => {

    const params = useParams()
    const username = params.username

    const [advocate, setAdvocate] = useState(null)

    useEffect(() => {
        getData() 
    }, [username]) // when username changes, run that function

    let getData = async () => {
        let response = await axios.get(`https://cados.up.railway.app/advocates/${username}`)

        setAdvocate(response.data.advocate)
    }

    return ( 
    <>
        {advocate && (
            <div className='advocate__preview__wrapper'>
                
                <img className='advocate__preview__image' src={advocate.profile_pic} />
                
                <strong>{advocate.name}</strong>
                <br/>
                <a href={advocate.twitter}>@{advocate.username}</a>
                <small>{advocate.bio}</small>
            </div>
        )}
    </>
    )
}

export default AdvocatePage
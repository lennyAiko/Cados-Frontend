import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const AdvocatePage = () => {

    const params = useParams()
    const username = params.username

    const [advocate, setAdvocate] = useState(null)

    useEffect(() => {
        getData() 
    }, [username]) // when username changes, run that function

    let getData = async () => {
        let response = await axios.get(`http://localhost:8000/advocates/${username}`)

        setAdvocate(response.data)
    }

    return ( 
    <>
        {advocate && (
            <div className='advocate__preview__wrapper_detail'>

                    <div className='advocate__preview__header'>
                        <img className='advocate__preview__image' src={advocate.profile_pic} />
                        <div>
                            <strong>{advocate.name}</strong>
                            <br/>
                            <a href={advocate.twitter} target="_blank">@{advocate.username}</a>
                            <br />
                            <strong>Company: {advocate.company.name}</strong>
                        </div>
                    </div>
                
                <small>{advocate.bio}</small>

                <Link to={'/'}>
                    <p>Go back</p>
                </Link>
            </div>
        )}
    </>
    )
}

export default AdvocatePage
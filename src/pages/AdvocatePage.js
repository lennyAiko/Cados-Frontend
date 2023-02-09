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
        // let response = await axios.get(`http://localhost:8000/advocates/${username}`)
        let response = await axios.get(`http://localhost:8000/advocates/lennox`)
        setAdvocate(response.data)
    }

    return ( 
    <>
        {advocate && (
            <div>
                <h1>{advocate.username}</h1>
                <p>{advocate.bio}</p>
            </div>
        )}
    </>
    )
}

export default AdvocatePage
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {

    const [advocates, setAdvocates] = useState([])
    const [total, setTotal] = useState(0)
    const [query, setQuery] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    let getData = async (query = '') => {
        // let response = await axios.get(`https://cados.up.railway.app/advocates?query=${query}`)      
        let response = await axios.get(`http://localhost:8000/advocates?query=${query}`)
        setAdvocates(response.data["advocates"])
        setTotal(response.data["total"])
        if (response.data["total"] == response.data["query"]) setQuery('')
        else setQuery(response.data["query"])
    }

    let searchData = (e) => {
        e.preventDefault()
        let query = e.target.query.value
        getData(query)
    }

    let fetchAdvocate = async () => {
        let reponse = await axios.get('http://localhost:8000/get_advocate')
        window.location.reload()
    }
    
    return (
    <div className='main--container'>
        <h2>Search {total} developer advocates found by @lennyaiko webscrapper and the CadosDevAPI</h2>

        <p>{query} Developer advocates found</p>

        <div className='form__wrapper'>
            <form onSubmit={searchData} id="search_form">
                <input type="text" name="query" placeholder='Search advocates...' />
                <input type="submit" value="Search" className='btn__primary' />
            </form>
        </div>

        <button onClick={fetchAdvocate} className="btn">Get Advocate</button>

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
                            <a href={advocate.twitter} target="_blank">@{advocate.username}</a>
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
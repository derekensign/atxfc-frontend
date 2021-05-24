import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = (props) => {
    const [newAPOD, setNewAPOD] = useState([])

    const getAPOD = async () => {

        try {
            let response = await axios.get(`${process.env.REACT_APP_NASA_APOD_API_URL}`)

            setNewAPOD(response.data)

            
            } catch (error) {
                console.log(error)
            }

    }

    useEffect(() => {
        getAPOD()},[])

    console.log(newAPOD)



        return (
            <div className="apod-container">
                <h2>{newAPOD.title}</h2>
                <img className="apod-image" src={newAPOD.url}/>

                <p className="apod-desc">{newAPOD.explanation}</p>

            </div>
        )


}

export default Home

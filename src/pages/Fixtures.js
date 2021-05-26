import axios from 'axios'
import { useState, useEffect } from 'react'

const Fixtures = () => {
    const [schedule, setSchedule] = useState([])

    const getFixtures = async () => {
        try {
            let response = await axios.get(`${process.env.REACT_APP_API_FIXTURES_URL}`,
            { 
                credentials: 'include',
                method: 'GET',
                headers:
                {'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
                }
            })

            setSchedule(response.data.response)

            
            } catch (error) {
                console.log(error)
            }
    }

    useEffect(() => {
        getFixtures()},[])
    
    console.log(schedule)

    
    return (
        <div>
            Fixtures
        </div>
    )
}



export default Fixtures
import axios from 'axios'
import { useState, useEffect } from 'react'
import moment from 'moment'

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

    // {schedule.map((game, index) => (
    //     console.log(game.fixture.date)

    // )}
    
    return (
        <div>
            Fixtures
            {schedule.map((game, index) => (

            // game.fixture.date.getUTCDate()
            // game.fixture.date.getUTCFullYer()

                <div key={index}>
                    <h4>{moment(game.fixture.date).format('LL')}</h4>
                    <div className="fixture-box">
                        <div className="away-box">
                            <p>{game.teams.away.name}</p>
                            <img className="logo-img" src={game.teams.away.logo}></img>
                            <p>{game.goals.away}</p>
                        </div>
                        <div className="home-box">
                            <p>{game.teams.home.name}</p>
                            <img className="logo-img" src={game.teams.home.logo}></img>
                            <p>{game.goals.home}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default Fixtures
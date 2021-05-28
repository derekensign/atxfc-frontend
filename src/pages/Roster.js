import axios from 'axios'
import { useState, useEffect } from 'react'

const Roster = () => {
    const [roster, setRoster] = useState([])

    const getRoster = async () => {

        try {
            let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/roster`)

            setRoster(response.data.roster)

            
            } catch (error) {
                console.log(error)
            }
    }

    useEffect(() => {
        getRoster()},[])
    
    console.log(roster)

    
    return (
        <div className="roster-container">
            

            {roster.map((tile, i) => (

            <div key={i} className="roster-tile">
                <h4>{tile.name}</h4>
                <div className="image-container">
                    <img className="tile-image" src={tile.image}/>
                </div>
                <p><strong>{`#${tile.number}`}</strong></p>
                 <p>{`Age: ${tile.age}`}</p> 
                 <p>{`Position: ${tile.position}`}</p>
            </div>
            ))}
        </div>
    )
}


export default Roster
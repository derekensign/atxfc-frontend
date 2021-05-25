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
            Roster

            {roster.map((tile, i) => (

            <div key={i} className="roster-tile">
                <h5>{tile.name}</h5>
                <p>{`#${tile.number} \n Age: ${tile.age} \n Position: ${tile.position}`}</p>
                <div className="image-container">
                    <img className="tile-image zoom" src={tile.image}/>
                </div>
            </div>
            ))}
        </div>
    )
}


export default Roster
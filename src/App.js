import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Roster from './pages/Roster'
import Fixtures from './pages/Fixtures'
import Login from './pages/Login'
import Signup from './pages/Signup'

import {useEffect, useState} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'

function App() {
  const [user, setUser] = useState('')
  const [fixtureIds, setFixtureIds] = useState([])

  const getUser = async () => {
    const userId = localStorage.getItem('userId')
    try {
      let userInfo = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify` ,{
      headers:{
        authorization: userId
      }
    })
    console.log(userInfo)
    if(userInfo.data.user) {
      setUser(userInfo.data)  
    }
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    getUser()
  },[])


  const getMatches = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/fixtures`, {
        headers: {
          Authorization: user.id
        }
      })
      console.log(response)
      // setFixtureIds(response.data.favImages)

      // let favFixtures = []
      
      // for(let image of response.data.favImages) {
      //   favFixtures.push(fixture.fixture_id)
      // }

      setFixtureIds(favFixtures)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMatches()}, [user])

  const attendMatch = async (fixture_id, date, awaygoals, awayname, awaylogo, homegoals, homename, homelogo) => {
    try {
      let res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/fixtures`,
      {
        fixture_id: fixture_id,
        date: date,
        awaygoals: awaygoals,
        awayname: awayname,
        awaylogo: awaylogo,
        homegoals: homegoals,
        homename: homename,
        homelogo: homelogo
      },
      {
        headers: {
          Authorization: user.id
        }
      })
      getMatches()
    } catch (error) {
      console.log(error)
    }
  }

  const isSaved = (currentFixture) => {
  
    if(fixtureIds.includes(currentFixture)) {
      return true
    }
    return false
  }

  return (
    <div className="App">

    <Navbar user={user} setUser={setUser} />
    <Route exact path="/">
        <Home />
    </Route>
    <Route exact path="/roster">
      <Roster />
    </Route>
    <Route exact path="/profile">
        <Profile favImages={favImages} isStarred={isStarred} deletePicture={deletePicture}
        user={user} setUser={setUser}/>
    </Route>
    <Route exact path="/login">
      {user ? 
        <Redirect to="/profile" />
        :
          <Login user={user} setUser={setUser}/>
        }
    </Route>
    <Route exact path="/signup">
      <Signup user={user} setUser={setUser}/>
    </Route>
    <Route exact path="/fixtures">
      <Fixtures />
    </Route>


    </div>
  );
}

export default App;

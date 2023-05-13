// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {list1: [], isLoading: true}

  componentDidMount() {
    this.getTeamsDetails()
  }

  getTeamsDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    const updatedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({list1: updatedData, isLoading: false})
  }

  render() {
    const {list1, isLoading} = this.state

    return (
      <div className="ipl-dashboard">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="img"
            alt="ipl logo"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="ul">
            {list1.map(each => (
              <TeamCard matchDetails={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home

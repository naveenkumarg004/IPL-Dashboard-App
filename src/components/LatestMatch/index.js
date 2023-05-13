// Write your code here
import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props

    const {
      venue,
      umpires,
      date,
      competingTeam,
      competingTeamLogo,
      result,
      manOfTheMatch,
      firstInnings,
      secondInnings,
    } = latestMatch
    console.log(venue)

    return (
      <div className="bg">
        <div className="card1">
          <p className="h">{competingTeam}</p>
          <p className="p">{date}</p>
          <p className="p">{venue}</p>
          <p className="p">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="logo"
        />
        <div className="card2">
          <h1 className="h">FirstInnings</h1>
          <p className="p">{firstInnings}</p>
          <h1 className="h">secondInnings</h1>
          <p className="p">{secondInnings}</p>
          <h1 className="h">Man Of The Match</h1>
          <p className="p">{manOfTheMatch}</p>
          <h1 className="h">Umpires</h1>
          <p className="p">{umpires}</p>
        </div>
      </div>
    )
  }
}
export default LatestMatch

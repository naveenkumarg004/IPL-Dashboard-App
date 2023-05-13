// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {matchDetails} = this.props
    const {name, id, teamImageUrl} = matchDetails
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="li">
          <div className="match1">
            <img src={teamImageUrl} alt={`${name}`} className="image" />
            <p className="p">{name}</p>
          </div>
        </li>
      </Link>
    )
  }
}
export default TeamCard

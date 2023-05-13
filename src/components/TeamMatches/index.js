// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchItem: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchData = await response.json()

    const updatedData = {
      teamBannerUrl: fetchData.team_banner_url,
      latestMatchDetails: {
        id: fetchData.latest_match_details.id,
        venue: fetchData.latest_match_details.venue,
        date: fetchData.latest_match_details.date,
        manOfTheMatch: fetchData.latest_match_details.man_of_the_match,
        competingTeam: fetchData.latest_match_details.competing_team,
        competingTeamLogo: fetchData.latest_match_details.competing_team_logo,
        firstInnings: fetchData.latest_match_details.first_innings,
        secondInnings: fetchData.latest_match_details.second_innings,
        umpires: fetchData.latest_match_details.umpires,
        result: fetchData.latest_match_details.result,
        matchStatus: fetchData.latest_match_details.match_status,
      },
      recentMatches: fetchData.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        id: recentMatch.id,
        venue: recentMatch.venue,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
        date: recentMatch.date,
      })),
    }

    this.setState({matchItem: updatedData, isLoading: false})
  }

  renderLatestMatches = () => {
    const {matchItem} = this.state

    const {latestMatchDetails, teamBannerUrl} = matchItem
    return (
      <div className="team-matches">
        <img src={teamBannerUrl} alt="team banner" className="team-image" />
        <LatestMatch latestMatch={latestMatchDetails} />
        {this.renderRecentMatches()}
      </div>
    )
  }

  renderRecentMatches = () => {
    const {matchItem} = this.state
    const {recentMatches} = matchItem
    return (
      <ul className="ul1">
        {recentMatches.map(eachMatch1 => (
          <MatchCard matchData={eachMatch1} key={eachMatch1.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderLatestMatches()
        )}
      </div>
    )
  }
}
export default TeamMatches

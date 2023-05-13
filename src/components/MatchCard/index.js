// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {
    matchStatus,

    competingTeam,
    competingTeamLogo,
    result,
  } = matchData
  const status = matchStatus
  return (
    <li className="li1">
      <div>
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="logo3"
        />
        <p className="team">{competingTeam}</p>
        <p className="result">{result}</p>
        {status === 'Lost' ? (
          <p className="red">{matchStatus}</p>
        ) : (
          <p className="green">{matchStatus}</p>
        )}
      </div>
    </li>
  )
}
export default MatchCard

import Portal from './shared/Portal'

export default () => (
  <Portal
    name="Sports Team Portal"
    url="https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League"
    pick={d => d.teams}
    map={t => ({ id: t.idTeam, title: t.strTeam, sub: t.strStadium, img: t.strBadge, desc: t.strDescriptionEN, info: [['Stadium', t.strStadium], ['Country', t.strCountry], ['Founded', t.intFormedYear]] })}
    list={{ path: 'teams', label: 'Teams' }}
    pages={[['players', 'Players', 'Player data can be added from another API endpoint.']]}
  />
)

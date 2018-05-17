const URL = 'https://api.football-data.org/v1/competitions/398/teams'

function getTeams(){
	return fetch(URL)
		.then(response => response.json())
		.then(data => data.teams)
		.then (teams => teams.map(teams => ({
			name: teams.name,
			image:  teams.crestUrl,
			likes: 100,
			comments: 50,
		})))

}

export { getTeams }
var borders = { 
	'East Africa': { 'South Africa': true, 'Congo': true, 'North Africa': true, 'Egypt': true, 'Middle East': true, 'Madagascar': true}, 
	'Egypt': { 'East Africa': true, 'North Africa': true, 'Southern Europe': true, 'Middle East': true},
	'North Africa': { 'Egypt': true, 'East Africa': true, 'Congo':true, 'Western Europe':true, 'Southern Europe':true, 'Brazil':true},
	'Congo': {'South Africa':true, 'East Africa': true, 'North Africa':true },
	'South Africa': { 'Congo':true, 'East Africa':true, 'Madagascar':true},
	'Madagascar': {'East Africa':true, 'South Africa':true},
	'Argentina': {'Peru':true, 'Brazil':true},
	'Brazil': {'Venezuela':true, 'Peru':true, 'Argentina':true, 'North Africa':true},
	'Peru': {'Argentina':true, 'Brazil':true, 'Venezuela':true},
	'Venezuela': {'Peru':true, 'Brazil':true, 'Central America':true},
	'Central America': {'Venezuela':true, 'Western United States':true, 'Eastern United States':true},
	'Western United States': {'Central America':true, 'Eastern United States':true, 'Ontario':true, 'Alberta':true},
	'Eastern United States': {'Central America':true, 'Western United States':true, 'Ontario':true, 'Quebec':true},
	'Quebec': {'Eastern United States':true, 'Ontario':true, 'Greenland':true},
	'Ontario': {'Western United States':true, 'Eastern United States':true, 'Quebec':true, 'Alberta':true, 'Northwest Territory':true, 'Greenland':true},
	'Alberta': {'Western United States':true, 'Ontario':true, 'Northwest Territory':true, 'Alaska':true},
	'Alaska': {'Alberta':true, 'Northwest Territory':true, 'Kamchatka':true},
	'Northwest Territory': {'Alaska':true, 'Alberta':true, 'Ontario':true, 'Greenland':true},
	'Greenland': {'Northwest Territory':true, 'Ontario':true, 'Quebec':true, 'Iceland':true},
	'Iceland': {'Greenland':true, 'Scandinavia':true, 'Great Britain':true},
	'Scandinavia': {'Iceland':true, 'Great Britain':true, 'Northern Europe':true, 'Ukraine':true},
	'Ukraine': {'Scandinavia':true, 'Northern Europe':true, 'Afghanistan':true, 'Ural':true, 'Middle East':true},
	'Ural': {'Ukraine':true, 'Afghanistan':true, 'China':true, 'Siberia':true},
	'Siberia': {'Ural':true, 'China':true, 'Mongolia':true, 'Irkutsk':true, 'Yakutsk':true},
	'Yakutsk': {'Siberia':true, 'Irkutsk':true, 'Kamchatka':true},
	'Irkutsk': {'Yakutsk':true, 'Siberia':true, 'Mongolia':true, 'Kamchatka':true},
	'Kamchatka': {'Yakutsk':true, 'Irkutsk':true, 'Mongolia':true, 'Japan':true, 'Alaska':true},
	'Japan': {'Kamchatka':true, 'Mongolia':true},
	'Mongolia': {'Japan':true, 'Kamchatka':true, 'Irkutsk':true, 'Siberia':true, 'China':true},
	'China': {'Mongolia':true, 'Siberia':true, 'Ural':true, 'Afghanistan':true, 'India':true, 'Siam':true},
	'Afghanistan': {'Ural':true, 'Ukraine':true, 'Middle East':true, 'India':true, 'China':true},
	'Middle East': {'Ukraine':true, 'Southern Europe':true, 'Egypt':true, 'East Africa':true, 'India':true, 'Afghanistan':true},
	'India': {'Siam':true, 'China':true, 'Afghanistan':true, 'Middle East':true},
	'Siam': {'China':true, 'india':true, 'Indonesia':true},
	'Indonesia': {'Siam':true, 'Western Austrailia':true, 'New Guniea':true},
	'New Guniea': {'Indonesia':true, 'Western Austrailia':true, 'Eastern Austrailia':true},
	'Eastern Austrailia': {'New Guniea':true, 'Western Austrailia':true},
	'Western Austrailia': {'Eastern Austrailia':true, 'New Guniea':true, 'Indonesia':true},
	'Great Britain': {'Iceland':true, 'Scandinavia':true, 'Northern Europe':true, 'Western Europe':true},
	'Western Europe': {'Great Britain':true, 'North Africa':true, 'Southern Europe':true, 'Northern Europe':true},
	'Northern Europe': {'Scandinavia':true, 'Western Europe':true, 'Southern Europe':true, 'Ukraine':true},
	'Southern Europe': {'Northern Europe':true, 'Western Europe':true, 'North Africa':true, 'Egypt':true, 'Middle East':true, 'Ukraine':true}
};

function attackable(attacker, defender){
//Returns true if country "attacker" borders, or has a connection to, country "defender"
	if (borders[attacker][defender])
		return true;
	return false;
}
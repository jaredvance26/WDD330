

const links = [
	{
		label: 'Week 1 code exercise',
		url: 'week01/'
	},
	{
		label: 'Week 2 code exercise',
		url: 'week02/'
	},
	{
		label: 'Week 3 notes',
		url: 'week03/'
	},
	{
		label: 'Week 4 notes',
		url: 'week04/'
	}
];

const listOfLinks = document.querySelector('ol');

for(link of links) {
	const linkLabel = document.createElement('li');

	const linkUrl = document.createElement('a');
	linkUrl.innerText = link.label;
	linkUrl.href = link.url;

	linkLabel.appendChild(linkUrl);

	listOfLinks.appendChild(linkLabel);
};
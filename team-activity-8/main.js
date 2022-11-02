let page = 1;

const container = document.querySelector("div.characters");

const prevButton = document.querySelector("button.prev");
const nextButton = document.querySelector("button.next");

const getPrevious = (page) => {
	if(page !== 1) {
	return (page -= 1);
	}
	return page
};

const getNext = (page) => {
	if(page !== 9) {
	return (page += 1);
	}
	return page;
};

prevButton.onclick = () => {
	container.textContent = '';
	page = getPrevious(page);
	fetchData();
};

nextButton.onclick = () => {
	container.textContent = '';
	page = getNext(page);
	fetchData();
};


const fetchData = () => {
	let url = `https://swapi.dev/api/people/?page=${page}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			for (person of data.results) {
				const name = document.createElement("h3");
				name.textContent = person.name;
				name.onclick = ()=> {
					description.style.display = description.style.display === 'none' ? 'block' : 'none';
				}

				const description = document.createElement('ul');
				description.style.display = 'none';

				const height = document.createElement('li');
				height.textContent = `Height: ${person.height}`

				const mass = document.createElement('li');
				mass.textContent = `Mass: ${person.mass}`;

				const hair_color = document.createElement('li');
				hair_color.textContent = `Hair Color: ${person.hair_color}`;

				const skin_color = document.createElement('li');
				skin_color.textContent = `Skin Color: ${person.skin_color}`;

				const eye_color = document.createElement('li');
				eye_color.textContent = `Eye Color: ${person.eye_color}`;

				const birth_year = document.createElement('li');
				birth_year.textContent = `Birth Year: ${person.birth_year}`;

				const gender = document.createElement('li');
				gender.textContent = `Gender: ${person.gender}`;

				const created = document.createElement('li');
				created.textContent = `Created: ${person.created}`;

				const edited = document.createElement('li');
				edited.textContent = `Edited: ${person.edited}`;


				description.appendChild(height);
				description.appendChild(mass);
				description.appendChild(hair_color);
				description.appendChild(skin_color);
				description.appendChild(eye_color);
				description.appendChild(birth_year);
				description.appendChild(gender);
				description.appendChild(created);
				description.appendChild(edited);

				container.appendChild(name);
				container.appendChild(description);

			}
		});
};

fetchData();



const findButton = document.querySelector('button.find');
const saveButton = document.querySelector('button.save');
const displayButton = document.querySelector('button.display');

const loadStory = () => {
	var storyName = document.getElementById('storyName').value;
	var story = localStorage.getItem(storyName);
	document.getElementById('story').value = story;
};

const saveStory = () => {
	var storyName = document.getElementById('storyName').value;
	var story = document.getElementById('story').value;
	localStorage.setItem(storyName, story)
}

const displayStory = (story) => {
	var story = document.getElementById('story').value;
	document.querySelector('section.displayStory').innerHTML = story;
};

findButton.onclick = () => {loadStory()};
saveButton.onclick = () => {saveStory()};
displayButton.onclick = () => {displayStory()};

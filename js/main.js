const links = [
  {
    label: "Week 1 code exercise",
    url: "week01/",
  },
  {
    label: "Week 2 code exercise",
    url: "week02/",
  },
  {
    label: "Week 3 notes",
    url: "week03/",
  },
  {
    label: "Week 4 notes",
    url: "week04/",
  },
  {
    label: "Week 5 notes",
    url: "week05/",
  },
  {
    label: "Week 6 Project",
    url: "week06/",
  },
  {
    label: "Week 7 notes",
    url: "week07/",
  },
  {
    label: "Week 8 notes",
    url: "week08/",
  },
  {
    label: "Week 9 notes",
    url: "week09/",
  },
  {
    label: "Week 10 notes",
    url: "week10/",
  },
  {
    label: "Block 2 Project",
    url: "final-project/",
  },
];

const listOfLinks = document.querySelector("ol");

for (link of links) {
  const linkLabel = document.createElement("li");

  const linkUrl = document.createElement("a");
  linkUrl.innerText = link.label;
  linkUrl.href = link.url;

  linkLabel.appendChild(linkUrl);

  listOfLinks.appendChild(linkLabel);
}

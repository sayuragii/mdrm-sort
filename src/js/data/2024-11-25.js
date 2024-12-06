dataSetVersion = "2024-11-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Branch",
    key: "branch",
    tooltip: "Check this to restrict to certain branches.",
    checked: false,
    sub: [
      { name: "Wings", key: "wing" },
      { name: "Associations", key: "assoc" },
      { name: "Alumni", key: "alum" },
    ]
  },
  {
    name: "Filter by Association Sector",
    key: "sector",
    tooltip: "Check this to restrict to certain sectors of the Associations.",
    checked: false,
    sub: [ { name: "North", key: "north" }, { name: "East", key: "east" }, { name: "South", key: "south" }, { name: "West", key: "west" },
    ]
  }
];

dataSet[dataSetVersion].characterData = [
{
  name: "Cytohela Kiara",
  img: "kiara.png",
  opts: {
    branch: ["wing"],
	sector: [],
  }
},
{
  name: "Woo Yebin",
  img: "yebin.png",
  opts: {
    branch: ["wing"],
	sector: [],
  }
},
{
  name: "Tonakai Rinne",
  img: "rinne.png",
  opts: {
    branch: ["wing"],
	sector: [],
  }
},
{
  name: "Tallula Hourglass",
  img: "tallula.png",
  opts: {
    branch: ["wing"],
	sector: [],
  }
},
{
  name: "Kosui Urara",
  img: "urara.png",
  opts: {
    branch: ["wing"],
	sector: [],
  }
},
{
  name: "Kang Haneul",
  img: "haneul2.png",
  opts: {
    branch: ["assoc"],
    sector: ["south"],
  }
},
{
  name: "Mathilda Klein",
  img: "mathilda.png",
  opts: {
    branch: ["assoc"],
    sector: ["south"],
  }
},
{
  name: "Sato Narumi",
  img: "narumi.png",
  opts: {
    branch: ["assoc"],
    sector: ["south"],
  }
},
{
  name: "Camille Allard",
  img: "camille.png",
  opts: {
    branch: ["assoc"],
    sector: ["south"],
  }
},
{
  name: "Zhao Qiqi",
  img: "qiqi.png",
  opts: {
    branch: ["assoc"],
    sector: ["south"],
  }
},
{
  name: "Nana Alcott",
  img: "nana.png",
  opts: {
    branch: ["assoc"],
    sector: ["south"],
  }
},
{
  name: "Annemarie Abate",
  img: "annemarie.png",
  opts: {
    branch: ["assoc"],
    sector: ["south"],
  }
},
{
  name: "Nadia Haberlin",
  img: "nadia.png",
  opts: {
    branch: ["assoc"],
    sector: ["south"],
  }
},
{
  name: "Jitsuko Kagami",
  img: "kagami.png",
  opts: {
    branch: ["alum"],
	sector: [],
  }
},
{
  name: "Petra Iglesias",
  img: "petra.png",
  opts: {
    branch: ["wing"],
	sector: [],
  }
},
{
  name: "Anya Dochenko",
  img: "anya.png",
  opts: {
    branch: ["assoc"],
	sector: ["north"],
  }
}
];

// JSON - resume data (bio, work, projects and education)
var bio = {
		"name": "George Kanchanavaleerat",
		"role": "Front End Web Developer",
		"welcomeMessge": "Hello there!",
		"contacts": {
			/*"mobile": "360-111-1111",*/
			"email": "gkandoit-0001@yahoo.com",
			"twitter": "@gkanch",
			"github": "gkanch",
			"location": "Vancouver, WA",
		},
		"skills": ["Programming", "Youth Ministry Leadership", "Montessori Preschool Teacher"],
		"bioPic": "images/georgesm.jpg"
	};

var work = {
	"jobs": [
	{
		"employer": "Siam First Tour",
		"title": "Operation Manager",
		"location": "Bangkok, Thailand",
		"dates": "from 1/1/1995 to 12/1/1995",
		"description": "Operation manager at a long distance bus company."
	},
	{
		"employer": "Nike",
		"title": "Technology Manager",
		"location": "Beaverton, OR",
		"dates": "from 8/1/1996 to 7/1/2012",
		"description": "Design, roll out, and maintain project tracking application."
	}]
};

var projects = {
	"projects": [
	{
		"title": "PCC Project Tracking",
		"dates": "2002",
		"description": "Track and report on projects in PCC departments",
		"images": "images/project01.jpg"
	},
	{
		"title": "Shoe drawing",
		"dates": "2006",
		"description": "Draw shoes per designers specification",
		"images": "images/project02.jpg"
	}]
};

var education = {
	"schools": [
        {
            "name": "Washington State U.",
			"location": "Pullman, WA",
			"degree": "BS",
            "majors": ["Mechanical Engineering"],
            "gradYear": 1994,
            "url": "http://www.wsu.edu"
        },
        {
            "name": "Loyola University Maryland",
			"location": "Baltimore, MD",
			"degree": "MA",
            "majors": ["Education"],
            "gradYear": 2012,
            "url": "http://www.loyola.edu"
        }],
	"onlineClasses": [
		{
			"title": "Start Up Business (EP245)",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com/course/ep245"
		}
	]
};

// Header
function populateHeader() {
	var formattedHeaderBio;
	formattedHeaderBio = HTMLbioPic.replace("%data%", bio.bioPic);
	formattedHeaderBio += HTMLheaderName.replace("%data%", bio.name);
	formattedHeaderBio += HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderBio);
	
	// Header Summary of Skills
	$("#header").append(HTMLskillsStart);
	if (bio.skills !== undefined) {
		
		var formattedSkill;
		for (var skill in bio.skills) {
			if (formattedSkill === undefined) {
				formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			} else {
				formattedSkill += HTMLskills.replace("%data%",bio.skills[skill]);
			}
		}
		$("#skills").append(formattedSkill);
	}
	
	// Contacts
	var formattedContacts;
	//formattedContacts = HTMLmobile.replace("%data%", bio.contacts.mobile);
	formattedContacts = HTMLemail.replace("%data%", bio.contacts.email);
	formattedContacts += HTMLtwitter.replace("%data%", bio.contacts.twitter);
	formattedContacts += HTMLgithub.replace("%data%", bio.contacts.github);
	formattedContacts += HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedContacts);
}

// Work History
function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
	
	for (job in work.jobs) {
		HTMLworkStart += (work.jobs[job].employer);
	};
}

// Capitalize lastname
function inName() {
	var name = bio.name;
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] + " " + name[1];
}

// Projects
projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
//			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);
//			}
		}
	}
}

// Education - schools
function populateEducation() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedDegree);
		
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].gradYear);
		$(".education-entry:last").append(formattedDates);
		
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		
		var formattedMajor; 
		for (var major in education.schools[school].majors) {
			if (formattedMajor === undefined || formattedMajor === "") {
				formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			}
			else {
				formattedMajor += HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			}
		}
		$(".education-entry:last").append(formattedMajor);
		formattedMajor = "";
	}
	
	// Education - online classes
	//var HTMLonlineClasses = "<h3>Online Classes</h3>";
	//var HTMLonlineTitle = "<a href='#'>%data%";
	//var HTMLonlineSchool = " - %data%</a>";
	//var HTMLonlineDates = "<div class='date-text'>%data%</div>";
	//var HTMLonlineURL = "<br><a href='#'>%data%</a>";
	for (var onlineClass in education.onlineClasses) {
		$(".education-entry:last").append(HTMLonlineClasses);
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
		var formattedSchoolName = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
		$(".education-entry:last").append(formattedTitle + formattedSchoolName);
		
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
		$(".education-entry:last").append(formattedDate);
		
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
		$(".education-entry:last").append(formattedUrl);
	}
}

// Google maps
function AddMap() {
	$("#mapDiv").append(googleMap);
	initializeMap();
}

// Add data to form
populateHeader();
displayWork();
projects.display();
populateEducation();
AddMap();

// Add Button to automate Capitalization of all lastname letters
$('#main').append(internationalizeButton);

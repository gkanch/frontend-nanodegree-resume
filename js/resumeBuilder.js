// JSON - resume data (bio, work, projects and education)
var bio = {
	"name": "George Kanchanavaleerat",
	"role": "develop Front End Web applications.",
	"welcomeMessage": "Hello!",
	"contacts": {
		/*"mobile": "360-111-1111",*/
		"email": "gkandoit-0001@yahoo.com",
		"twitter": "@gkanch",
		"github": "gkanch",
		"location": "Vancouver, WA",
		"locationLatLng": new google.maps.LatLng(45.6387281, -122.66148609999999)
	},
	"skills": ["Programming", "Youth Ministry Leadership", "Montessori Preschool Teacher", "Chinese Language Coach"],
	"bioPic": "images/logo.png"
};

var work = {
	"jobs": [
	{
		"employer": "Siam First Tour",
		"title": "Operation Manager",
		"location": "Bangkok, Thailand",
		"locationLatLng": new google.maps.LatLng(13.7278956, 100.52412349999997),
		"dates": "from 1/1/1995 to 12/1/1995",
		"description": "Operation manager at a long distance bus company."
	},
	{
		"employer": "Nike",
		"title": "Footwear Engineer and Technology Manager",
		"location": "Beaverton, OR",
		"locationLatLng": new google.maps.LatLng(45.48706199999999, -122.80371020000001),
		"dates": "from 8/1/1996 to 7/1/2012",
		"description": "Draw shoes & design, roll out and maintain project tracking applications."
	},
	{
		"employer": "Portland Montessori School",
		"title": "Montessori Teacher",
		"location": "Portland, OR",
		"locationLatLng": new google.maps.LatLng(45.5234515, -122.6762071),
		"dates": "from 1/3/2013 to present",
		"description": "Guide preschoolers to learning about themselves and their surroundings."
	},
	{
		"employer": "American West Vancovuer Chinese School",
		"title": "Principal, PTO Chair, Teacher & Advisor",
		"location": "Vancouver, WA",
		"locationLatLng": new google.maps.LatLng(45.6387281, -122.66148609999999),
		"dates": "from 9/3/2000 to present",
		"description": "Support school in serving Vancouver community according to its needs."
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
			"locationLatLng": new google.maps.LatLng(46.7297771, -117.18173769999999),
			"degree": "BS",
            "majors": ["Mechanical Engineering"],
            "gradYear": 1994,
            "url": "http://www.wsu.edu"
        },
        {
            "name": "Loyola University Maryland",
			"location": "Baltimore, MD",
			"locationLatLng": new google.maps.LatLng(39.2903848, -76.61218930000001),
			"degree": "MA",
            "majors": ["Education"],
            "gradYear": 2012,
            "url": "http://www.loyola.edu"
        },
		{
            "name": "Montessori Institute Nortwest",
			"location": "Portland, OR",
			"locationLatLng": new google.maps.LatLng(45.5234515, -122.6762071),
			"degree": "Ed.",
            "majors": ["Montessori Primary Guide"],
            "gradYear": 2012,
            "url": "http://montessori-nw.org/"
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
function displayHeader() {
	var formattedHeaderBio;
	formattedHeaderBio = HTMLbioPic.replace("%data%", bio.bioPic);
	formattedHeaderBio += HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	formattedHeaderBio += HTMLheaderName.replace("%data%", bio.name);
	formattedHeaderBio += HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderBio);
	
	// Contacts
	var formattedContacts;
	formattedContacts = HTMLcontactStart;
	//formattedContacts = HTMLmobile.replace("%data%", bio.contacts.mobile);
	formattedContacts += HTMLemail.replace("%data%", bio.contacts.email);
	formattedContacts += HTMLtwitter.replace("%data%", bio.contacts.twitter);
	formattedContacts += HTMLgithub.replace("%data%", bio.contacts.github);
	formattedContacts += HTMLlocation.replace("%data%", bio.contacts.location);
	formattedContacts += HTMLcontactEnd;
	$("#header").append(formattedContacts);
	
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
	
}

// Work History
function displayWork() {
	for (job in work.jobs) {
		//$("#workExperience").append(HTMLworkStart2);
		HTMLworkExperience = HTMLworkStart;
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		//$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		//$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		//$(".work-entry:last").append(formattedEmployerTitle + formattedDates + formattedDescription);
		HTMLworkExperience += formattedEmployerTitle + formattedDates + formattedDescription;
		$("#workExperience").append(HTMLworkExperience);
	}
	
}

// Projects
projects.display = function() {
	for (var project in projects.projects) {
		//$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		//$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		//$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		//$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
//			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$("#projects").append(HTMLprojectStart + formattedTitle + formattedDates + formattedDescription + formattedImage);
				//$(".project-entry:last").append(formattedImage);
//			}
		}
		else {
			$(".projects:last").append(HTMLprojectStart + formattedTitle + formattedDates + formattedDescription);
		}
	}
}

// Education - schools
function displayEducation() {
	for (var school in education.schools) {
		//$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		//$(".education-entry:last").append(formattedSchoolName + formattedDegree);
		
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].gradYear);
		//$(".education-entry:last").append(formattedDates);
		
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		//$(".education-entry:last").append(formattedLocation);
		
		var formattedMajor; 
		for (var major in education.schools[school].majors) {
			if (formattedMajor === undefined || formattedMajor === "") {
				formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			}
			else {
				formattedMajor += HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			}
		}
		$("#education:last").append(HTMLschoolStart + formattedSchoolName + formattedDegree + 
				formattedDates + formattedLocation + formattedMajor);
		//$(".education-entry:last").append(formattedMajor);
		formattedMajor = "";
	}
	
	// Education - online classes
	for (var onlineClass in education.onlineClasses) {
		$("#education:last").append(HTMLonlineClasses);
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
		var formattedSchoolName = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
		//$("#education:last").append(formattedTitle + formattedSchoolName);
		
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
		//$("#education:last").append(formattedDate);
		
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
		//$("#education:last").append(formattedUrl);
		$("#education:last").append(formattedTitle + formattedSchoolName + formattedDate + formattedUrl);
	}
}

// Google maps
function displayMap() {
	$("#mapDiv").append(googleMap);
	initializeMap();
}

// Capitalize lastname
function inName() {
	var name = bio.name;
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] + " " + name[1];
}

// Add data to form
displayHeader();
displayWork();
projects.display();
displayEducation();
displayMap();

// Add Button to automate Capitalization of all lastname letters
$('#main').append(internationalizeButton);

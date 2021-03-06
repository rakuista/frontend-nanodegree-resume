var work = {
    "jobs" : [
        {
            "employer" : "Intuit",
            "title" : "Technical Communications Manager",
            "location" : "Mountain View, CA",
            "dates" : "2013-Present",
            "description" : "Manage a team of two technical writers, improving documentation processes for internal development teams who are writing their own docs. Responsible for product marketing to internal stakeholders about APIs and services developed by Central Technology Org through multiple channels, including  slide decks, newsletters, templates for Product Management socialization, and internal marketing websites. Coach-in-training for quarterly internal Lean Startup events (3 days/quarter) in our org."
        },
        {
            "employer" : "TheIcebreak",
            "title" : "Editorial Director, UI Designer",
            "location" : "Mountain View, CA",
            "dates" : "2011-2012",
            "description" : "Set editorial vision and brand voice for social networking site and mobile app for couples. Created articles and infographics to engage the site\'s 20,000+ users through social media and the blogosphere. Led the majority of front-end web development; coded several homepage redesigns and functional features. Designed UI and features targeted to engage the user community and increase site and app usage. Successfully introduced process and workflow improvements in a fast-paced development environment."
        },
        {
            "employer" : "YouTube",
            "title" : "Lead UX Writer, Technical Writer",
            "location" : "San Bruno, CA",
            "dates" : "2006-2011",
            "description" : "Wrote and/or edited UX copy for most new features on YouTube, with views scaling up to 3 billion daily. Led front-end localization efforts, launching 10 different language versions in under three months. Created the localization process and best practices wiki, used in scaling to over 40 languages in three years and directly contributing to a five-fold reduction in localization engineering hours. Managed all content creation for YouTube\'s initial Help Center, reducing customer support email volume from 15K to 1K daily. Pre-acquisition hire."
        },
        {
            "employer" : "PayPal",
            "title" : "Content Architect , Manager, Product Content",
            "location" : "San Jose, CA",
            "dates" : "2003-2006",
            "description" : "Directly managed content teams (up to seven total staff) across multiple product verticals, including International, PayPal China and Merchant Services. Quintupled the size of the content team (to 25 total staff) in under one year through aggressive hiring and training. Collectively saved over $120,000 in development costs by creating a working group to troubleshoot the content development process. Created the API manual for the patented Merchant-Initiated Online Payments feature; also wrote and edited instructional and user interface copy."
        }
    ]
}

var projects = {
    "projs" : [
        {
            "title" : "Refuge Restrooms",
            "dates" : "2013",
            "description" : "Hackathon project from Lesbians Who Code conference. I contributed a little Ruby code and designed PDFs of restroom signs.",
            "images" : ["images/rr-001.png","images/rr-002.png"]
        },
        {
            "title" : "imgix Documentation",
            "dates" : "2013",
            "description" : "Wrote documentation for signup process and v1 of API.",
            "images" : ["images/iix-001.png"]
        }
    ]
}

var bio = {
    "name" : "Carol Gunby",
    "role" : "Web Developer",
    "welcomeMessage" : "Looking for a front end dev with lots of UX experience? Look no further.",
    "contacts" : {
        "mobile" : "408-464-7147",
        "email" : "carol.gunby@gmail.com",
        "github": "rakuista",
        "twitter" : "@rakuista",
        "location" : "San Jose, CA"
    },
    "skills" : ["HTML", "CSS", "JavaScript/jQuery", "Adobe Creative Suite", "Git/Perforce/SVN", "WordPress"],
    "image" : "images/headshot.jpg"
}

var education = {
    "schools" : [
        {
            "name" : "UC Berkeley Extension",
            "location" : "Berkeley, CA",
            "degree" : "Professional Certificate",
            "majors" : ["Copyediting"],
            "dates" : "2011-2012"
        },
        {
            "name" : "Pacifica Graduate Institute",
            "location" : "Carpinteria, CA",
            "degree" : "MA",
            "majors" : ["Engaged Humanities"],
            "dates" : "2008-2010"
        },
        {
            "name" : "San Jose State University",
            "location" : "San Jose, CA",
            "degree" : "BA",
            "majors" : ["Creative Arts"],
            "dates" : "1988-1992"
        }
   ],
    "onlineCourses" : [
        {
            "title" : "Front End Web Development Nanodegree",
            "school" : "Udacity",
            "dates" : "2014",
            "url" : "https://www.udacity.com/course/nd001"
        },
        {
            "title" : "UX Design Immersive",
            "school" : "General Assembly",
            "dates" : "2013",
            "url" : "https://generalassemb.ly/education/user-experience-design-immersive/san-francisco"
        }
    ]
}

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);
    }
}
work.display();

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%",bio.image);
    var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").prepend(formattedName,formattedRole);
    $("#topContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);
    $("#footerContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);
    $("#header").append(formattedPic,formattedWelcome,HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}
bio.display();

projects.display = function() {
    for (proj in projects.projs) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projs[proj].title);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projs[proj].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projs[proj].description);
        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
        for (image in projects.projs[proj].images) {
            var formattedImage = HTMLprojectImage.replace("%data%",projects.projs[proj].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
}
projects.display();

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedSchoolDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedSchoolDegree,formattedLocation,formattedDates,formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        var formattedSchoolTitle = formattedTitle + formattedSchool
        var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedSchoolTitle,formattedDates,formattedURL);
    }
}
education.display();
logClicks();

$("#mapDiv").append(googleMap);

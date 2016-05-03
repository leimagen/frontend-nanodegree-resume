var bio = {
    "name" : "Luis Escobar",
    "role" : "Web Developer",
    "contactInfo" : {
        "mobile": "+507 6003-2921",
        "email": "luis.escobar.dev@gmail.com",
        "github": "leimagen",
        "twitter": "@luiti",
        "location": "Panama, Panama"
    },
    "pictureUrl" : "https://goo.gl/zPBVhE",
    "welcomeMessage" : "Hello, welcome to my resume.",
    "skills" : ["Autolearner","Curious","Great Mood","Aesthetic","Creative"]
};

var work = {
    "jobs": [
        {
            "employer": "Latinpago",
            "title": "Graphic Designer",
            "location": "Panama, Panama",
            "dates": "Actual",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices bibendum pharetra. Fusce lobortis laoreet ante et tristique. Praesent tortor dui, tristique at leo sed, aliquet facilisis mi. "
        },
        {
            "employer": "Revi",
            "title": "Web Designer",
            "location": "Panama, Panama",
            "dates": "2016",
            "description": "Proin lacus tortor, blandit volutpat risus nec, congue elementum sem. Donec tempor metus ac lorem aliquet vehicula."
        },
        {
            "employer": "Nex",
            "title": "Graphic Designer",
            "location": "Panama, Panama",
            "dates": "2015",
            "description": "Phasellus arcu dolor, aliquam in tellus eu, dictum malesuada neque. Aliquam aliquam tempus ultricies."
        },
        {
            "employer": "ModOp",
            "title": "Actionscript Developer",
            "location": "Panama, Panama",
            "dates": "2012 - 2015",
            "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus ornare lorem massa, sit amet fringilla est faucibus ut. Duis ac sem sit amet neque accumsan scelerisque."
        },
        {
            "employer": "AG Video",
            "title": "Graphic Designer / Animator",
            "location": "Panama, Panama",
            "dates": "2009 - 2012",
            "description": "Proin risus leo, sollicitudin nec congue vel, vestibulum vestibulum ante. Ut ligula felis, condimentum quis nibh vitae, consectetur tristique dui. Nulla quis mauris vel lorem ullamcorper porta a in neque. In vel pulvinar enim, at dictum quam. Mauris fringilla, sapien sed elementum sagittis, metus ligula congue arcu, at gravida sem eros a metus."
        }
    ],
    "display": function(){
        for(job in work.jobs){
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);
            //$(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

var projects = {
    "projects": [
        {
            "title": "Good Year - Es Asi - Fortera",
            "dates": "2008",
            "description": "Campania para Good Year",
            "images": [
                "http://leimagen.com/wp-content/uploads/2015/01/GoodYear_arte01_esasi.jpg",
                "http://leimagen.com/wp-content/uploads/2015/01/GoodYear_arte02_esasi.jpg"
            ]
        },
        {
            "title": "Panama Pacific Logistic",
            "dates": "2010",
            "description": "Ad Campaign / Car paint",
            "images": [
                "http://leimagen.com/wp-content/uploads/2015/01/PanamaPacificLogistic.jpg",
                "http://leimagen.com/wp-content/uploads/2015/01/newRotB.jpg"
            ]
        },
        {
            "title": "Myuto Arts & Media",
            "dates": "2015",
            "description": "Logo",
            "images": [
                "http://leimagen.com/wp-content/uploads/2015/01/MyutoLogo.jpg"
            ]
        }
    ],
    "display": function(){
        for(project in projects.projects){
            $("#projects").append(HTMLprojectStart);
            
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            
            for(var i=0; i < projects.projects[project].images.length; i++){
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
}

var education = {
    "schools": [
        {
            "name": "Capeira",
            "location": "Guayaquil, Ecuador",
            "degree": "BA",
            "major": ["CompSci", "English"],
            "dates": "2000 - 2003",
            "url": "https://www.facebook.com/pages/Colegio-Particular-Mixto-Heidi-School-Capeira/367751236619550"
        },
        {
            "name": "La Salle",
            "location": "Valencia, Venezuela",
            "degree": "BA",
            "major": ["CompSci"],
            "dates": "2003 - 2008",
            "url": "http://www.colegiolasalleguaparo.com.ve/home/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "April 2016",
            "url": "https://classroom.udacity.com/courses/ud804"
        },
        {
            "title": "The Essencial Git Course",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/essential-git/learn/v4/"
        },
        {
            "title": "Professional Python Web Development Using Flask",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/python-flask-course/learn/v4/overview"
        },
        {
            "title": "Fun and creative web engineering with Python ",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/web-engineering-with-python-and-web2py/learn/v4/overview"
        },
        {
            "title": "Python programming quick look",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/python-programming-quick-look/learn/v4/overview"
        },
        {
            "title": "Rock Paper Scissors - Python Tutorial",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/rock-paper-scissors-python/learn/v4/overview"
        },
        {
            "title": "Learn Javascript & JQuery From Scratch",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/learn-javascript-jquery-from-scratch/learn/v4/overview"
        },
        {
            "title": "AngularJS For Beginners",
            "school": "Udemy",
            "dates": "2016",
            "url": "https://www.udemy.com/angularjs-for-beginners-udemy/learn/v4/overview"
        }
    ],
    "display": function(){
        for(school in education.schools){
            $("#education").append(HTMLschoolStart);
            
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    
            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedMajor);
            $(".education-entry:last").append(formattedDates);
        }
        
        for(course in education.onlineCourses){
            $("#education").append(HTMLschoolStart);
            
            var formattedTitle = HTMLschoolName.replace("%data%", education.onlineCourses[course].title);
            var formattedSchool = HTMLschoolLocation.replace("%data%", education.onlineCourses[course].school);
            var formattedDates = HTMLschoolDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedURL = HTMLschoolMajor.replace("%data%", education.onlineCourses[course].url);
            
            $(".education-entry:last").append(formattedTitle);
            $(".education-entry:last").append(formattedSchool);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedURL);
        }
    }
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

var formattedPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedPic);

$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    for(i=0; i < bio.skills.length; i++ ){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

work.display();
education.display();
projects.display();


$("#mapDiv").append(googleMap);
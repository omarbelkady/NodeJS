const express = require("express");
const router = express.Router();
const {projects} = require("../data");
const {authUser} = require("../basicAuth");
const {canViewTheProject, canDeleteProject, scopedProjects} = require("../permissions/project");

router.get("/", authUser, (request, response) =>{
	//response.json(projects);
	//instead of returning all the projects I will return a project tailored to that user
	response.json(scopedProjects(request.user, projects));
});


//only allow access to users to access this resource only if they are signed in 
router.get("/:projectId", setProject,authUser, authGetProject, (request, response) =>{
	response.json(request.project);
});

//only give authenticated users to access this
router.delete("/:projectId", setProject, authUser,authDeleteProject, (request,response) =>{
	response.send("Deleted Project");
});

function setProject(request, response, next){
	const projectId=parseInt(request.params.projectId);
	request.project = projects.find(project => project.id === projectId);
	

	if(request.project == null){
		response.status(404);
		return(response.send("Project Not Here!"));
	}
	next();
}

//middleware function meaning it has a request, response and callback
function authGetProject(request,response, next){
	if(!canTheViewProject(request.user, request.project)){
		response.status(401);
		return(response.send("Not Allowed Go Learn Pintos"));
	}
	next();
}


function authDeleteProject(request,response, next){

	if(!canDeleteProject(request.user, request.project)){
		response.status(401);
		return(response.send("Not Allowed Go Learn Pintos"));
	}
	next();

}
module.exports = router;

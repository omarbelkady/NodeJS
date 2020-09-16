const {ROLE } = require("../data");

function canViewTheProject(user, project){
	//return true or false if user has admin permission
	return(
		user.role === ROLE.ADMIN  || 
		project.userId === user.id
	);
}

//takes user as input and a list of projects that we want to see what the passed in user has access to
function scopedProjects(user, the_projects){
	//return all the project because user has sudo privelleges
	if(user.role === ROLE.ADMIN) return the_projects;
	
	//else if they are not admin limit their visibility return only the projects with the same user id as their scope
	return the_projects.filter(my_project => my_project.userId===user.id);
}

//only the creator of the project can delete the project
function canDeleteProject(user, project){
	return project.userId === user.id;
}
module.exports = {
	canViewTheProject,
	scopedProjects,
	canDeleteProject
}

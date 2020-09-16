function authUser(request, response, next){
	//Check if user is authenticated else throw an error
	if(request.user == null){
		//means you do not have access to 
		response.status(403);
		return response.send("You need to be signed in");
	}
	next();
}

function authRole(role){
	//returning a middleware
	return(request,response, next) => {
		//checking if the role is not equal to the role I pass in to the auth role function
		if(request.user.role !== role)
		{
			//forbidden no permission
			response.status(401);
			return response.send("You are not allowed Go Learn 2 63526 and 727225!");
		}

		//everthing worked out perfectly
		next();
	}
}
module.exports ={
	authUser,
	authRole
};

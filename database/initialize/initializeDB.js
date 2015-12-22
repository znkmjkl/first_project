import password from '../model/password.js'

var initializeDB = function()
{ 
	var adminAccount = new password({loginName : 'admin3', password : 'fghj'});
	adminAccount.save(function(error) {
		if (error)
		{ 
			console.log('adminAccount cannot be saved to mongodb database');
		}
		else 
		{
			console.log('adminAccount saved successfully to mongodb database');
		}
	});
}

export default initializeDB 
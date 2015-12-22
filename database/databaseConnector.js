import mongoose from 'mongoose';

var connectToMongoDB = function(config)
{
	var connectionString = 'mongodb://'+config.database_server + ':' + config.database_port + '/' + config.database_name;
	var connection = mongoose.connection;
	connection.on('error', function(error) {
		console.log('Cannot connect to database : ' + connectionString);
		console.log('---> ' + error);
	});
	connection.once('open', function(){
		console.log('connection to database was opened successfuly : ' + connectionString);
	});
	mongoose.connect(connectionString);	
}; 

export default connectToMongoDB
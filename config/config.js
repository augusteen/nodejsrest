var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: 'aug23982',
      database: 'rest'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      if(err){
        connection.release(); 
        throw err;
      }
      callback(err, connection);
    });
  };
}

module.exports = new Connection();
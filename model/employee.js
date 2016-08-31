var connection = require('../config/config');

var Employee = function() {

    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query('select * from employee', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function(todo, res) {
        connection.acquire(function(err, con) {
            console.log(todo);
            con.query('insert into employee set ?', todo, function(err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'TODO creation failed' });
                } else {
                    res.send({ status: 0, message: 'TODO created successfully' });
                }
            });
        });
    };

    this.update = function(todo, res) {
        connection.acquire(function(err, con) {
            con.query('update employee set ? where id = ?', [todo, todo.id], function(err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'TODO update failed' });
                } else {
                    res.send({ status: 0, message: 'TODO updated successfully' });
                }
            });
        });
    };

    this.delete = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('delete from employee where id = ?', [id], function(err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Failed to delete' });
                } else {
                    res.send({ status: 0, message: 'Deleted successfully' });
                }
            });
        });
    };

}

module.exports = new Employee();

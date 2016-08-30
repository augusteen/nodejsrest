var employee = require('../model/employee');


module.exports = {
    configure: function(app) {
        app.get('/', function(req, res, next) {
            res.render('index', { title: 'Express' });
        });

        app.get('/', function(req, res, next) {
            res.send('respond with a resource');
        });

        app.options('/api/employee/', function(req, res) {
            employee.get(res);
        });

 		app.get('/api/employee/', function(req, res) {
            employee.get(res);
        });

        app.post('/api/employee/', function(req, res) {
            employee.create(req.body, res);
        });

        app.put('/api/employee/:id/', function(req, res) {
            employee.update(req.body, res);
        });

        app.delete('/api/employee/:id/', function(req, res) {
            employee.delete(req.params.id, res);
        });

    }
}

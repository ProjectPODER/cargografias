require('dotenv').load();
// var createError = require('http-errors');
var express = require('express');
var http = require('http');
var compression = require('compression');
var swig = require('swig');
var fichasController = require('./controllers/fichas.js')
var embedController = require('./controllers/embed.js')
// Spanish
var aboutController = require('./controllers/about.js')
var homeController = require('./controllers/home.js')
var coahuilaController = require('./controllers/coahuila.js')
var veracruzController = require('./controllers/veracruz.js')
var datosController = require('./controllers/datos.js')
// English
var homeEnController = require('./controllers/home-en.js')
var coahuilaEnController = require('./controllers/coahuila-en.js')
var veracruzEnController = require('./controllers/veracruz-en.js')
// Iframes
var iframe1Controller = require('./controllers/iframe-luna.js')
var iframe2Controller = require('./controllers/iframe-desvio.js')
var iframe3Controller = require('./controllers/iframe-munoz.js')
// Iframes-en
var iframe4Controller = require('./controllers/iframe-luna-en.js')
var iframe5Controller = require('./controllers/iframe-desvio-en.js')
var iframe6Controller = require('./controllers/iframe-munoz-en.js')

var conn = require('./db.js');

swig.setDefaults({
    cache: false,
    locals: {
        config: {
            baseStaticPath: process.env.BASE_STATIC_PATH
        }
    }
});
var Q = require('q');

var instancesMap = null;
var allInstances = null;


var app = express();

app.engine('swig', swig.renderFile);
app.set('view engine', 'swig');
app.set('views', __dirname + "/views");

// all environments
app.set('port', process.env.PORT || 3000);
app.use(require('body-parser').urlencoded({
    extended: true,
    limit: '5mb'
}));
app.use(require('body-parser').json({
    limit: '5mb'
}));

// Routes

// Spanish
app.get('/', homeController.index);
app.get('/about', aboutController.index);
app.get('/coahuila', coahuilaController.index)
app.get('/veracruz', veracruzController.index)
app.get('/datos', datosController.index)

// English
app.get('/en', homeEnController.index);
app.get('/en/coahuila', coahuilaEnController.index)
app.get('/en/veracruz', veracruzEnController.index)

// Iframes
app.get('/iframe-luna-canales', iframe1Controller.index);
app.get('/iframe-desvio', iframe2Controller.index);
app.get('/iframe-munoz', iframe3Controller.index);

// Iframes-en
app.get('/en/iframe-luna-canales', iframe4Controller.index);
app.get('/en/iframe-desvio', iframe5Controller.index);
app.get('/en/iframe-munoz', iframe6Controller.index);

app.use(express.static(__dirname + '/web'));

app.get('/:instanceName', instanceRouteHandler);

function instanceRouteHandler(req, res) {

    var instances = conn.getDb().collection('cargoinstances');
    instances.find({instanceName: req.params.instanceName}).toArray(function(err, instances) {
        if (err) {
            res.send('error');
            console.log(err);
        } else {
            if(instances.length > 0){
                if (req.params.instanceName.toLowerCase() === 'cargografias'){
                    res.render('index', instances[0])    
                }
                else {
                    res.render('legacy', instances[0])
                }
                
            }else{
                res.status(404).render('instancenotfound');
            }
        }
    });

}

app.get('/d/:instanceName', function(req, res) {

    var instances = conn.getDb().collection('cargoinstances');
    instances.find({instanceName: req.params.instanceName}).toArray(function(err, instances) {
        if (err) {
            res.send('error');
            console.log(err);
        } else {
            if(instances.length > 0){
                res.send(instances[0])
            }else{
                res.status(404).render('instancenotfound');
            }
        }
    });

});

app.get('/:instanceName/person/:personId/:nameslug?', fichasController.person)
app.get('/:instanceName/organization/:organizationId/:nameslug?', fichasController.organization)

app.get('/:instanceName/embed/:id', embedController.index)
app.post('/createEmbedUrl', embedController.createEmbedUrl)
app.post('/createShortUrl', embedController.createShortUrl)

app.disable('etag');
var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

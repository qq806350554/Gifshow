var express = require('express');
var app = express();
var url = require('url'); //解析操作url
var superagent = require('superagent'); //这三个外部依赖不要忘记npm install
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
var engines = require('consolidate');//别忘记添加这个和mustache
var targetUrl = 'http://api.ksapisrv.com/rest/n/feed/list?mod=Xiaomi(Redmi%20Note%203)&lon=116.391666&country_code=CN&did=ANDROID_f73609be66b97b5b&app=0&net=WIFI&oc=XIAOMI&ud=0&c=XIAOMI&sys=ANDROID_5.0.2&appver=4.49.1.2199&language=zh-cn&lat=39.579171&ver=4.49&id=7282&token=&pv=false&client_key=3c2cd3f3&count=20&page=1&type=7&os=android&sig=d5802c18038077d2295b68a94645d3dc&';
var ab=[];
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.set('views', __dirname + '/views');
app.use(express.static('views'))
//app.use(express.static(path.join(__dirname, 'views')));
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.get('/',function(req,res){

	res.render('index');
})
app.get('/json', function(req, res){
	
superagent.get(targetUrl)
    .end(function (err, res) {
var $ = cheerio.load(res.text);

	 ab=JSON.parse(res.text);
	 return ab;
    });

res.json(ab);
});

app.listen(process.env.PORT||5000);
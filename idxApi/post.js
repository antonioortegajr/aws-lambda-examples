

var https = require('https');
var querystring = require('querystring');


exports.handler = (event, context, callback) => {
    // TODO implement
    apiKey = event.headers.accesskey;
    console.log(apiKey);
    var bod = event.body;
    console.log(bod);
    
    
    var url = 'api.idxbroker.com';
    postData = {'dynamicURL': 'http://test.com' };
    postBody = querystring.stringify(bod);
    
    options = {
        host: url,
       //your options which have to include the two headers
       headers : {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': postBody.length,
          'accesskey':apiKey,
          'apiversion':'1.4.0'
       }
};

    var postreq = https.request(options, function (res) {
        //Handle the response
        console.log(res.code);
    });
    postreq.write(postBody);
    postreq.end();
    callback(null, 'I made an API call');
    

};

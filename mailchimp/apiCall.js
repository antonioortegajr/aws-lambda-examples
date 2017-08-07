var https = require('https');

exports.handler = function(event, context, callback) {

    //Add this contact to mailchimp
    var body = '{"members" : [{"email_address": "bishop@buster.com", "status": "subscribed"}],"update_existing":true}';

    // the post options
    var options = {
        host: 'us12.api.mailchimp.com',
        path: '/3.0/lists/efbe158449',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'apikey MyAPIKey-Region',
        }
    };

    var reqPost = https.request(options, function(res) {
        
        console.log("statusCode: ", res.statusCode);
        res.on('data', function (chunk) {
            body += chunk;
        });
        
        res.on("end", function () {
            console.log(res.body.toString());
        });
        
        context.succeed(JSON.stringify(res.responseText));

    });

    reqPost.write(body);
    reqPost.end();

    
};

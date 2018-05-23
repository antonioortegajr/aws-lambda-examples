import json
import urllib2
import ssl

def lambda_handler(event, context):
    meetup = 'https://api.meetup.com/yourGroup/events?photo-host=public&page=1&sig_id=yourSigId&status=upcoming&sig=yourSig'
    req = urllib2.Request(meetup)
    response = urllib2.urlopen(req)
    the_page = response.read()
    return the_page

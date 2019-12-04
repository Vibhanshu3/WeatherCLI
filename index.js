#!/usr/bin/env node

var forecast = require("./cmds/forecast")
var help = require("./cmds/help")
var version = require("./cmds/version")
var today = require("./cmds/today")
var minimist = require("minimist")

var modifiedArgv = minimist(process.argv.slice(2))

var cmd = modifiedArgv['_'][0]
var location = modifiedArgv['l'] || modifiedArgv['location']

//syntax :-
// cool today         :- for current location weather
// cool today -l city :- for particular city weather
// cool forecast
// cool forecast -l city
// cool help
// cool version

if (cmd == "help") {
    help()

} else if (cmd == "version") {
    version()

} else if (cmd == "today") {
    today(location)

} else if (cmd == "forecast") {
    forecast(location)

} else {
    console.log("Wrong Commands")
}



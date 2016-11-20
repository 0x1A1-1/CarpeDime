var monday = {};
var tuesday = {};
var wednesday = {};
var thursday = {};
var friday = {};
var totalTime = 0;
var classes = [];
var settings = require('./settings');

function fillClasses(){
 // 	var request = gapi.client.calendar.events.list({
  //         'calendarId': 'primary',
  //         'timeMin':settings.begDate,
  //         'timeMax':settings.begDate.getDate() + 7, //FIX THIS
  //         'showDeleted': false,
  //         'singleEvents': true,
  //         'orderBy': 'startTime'
  //       });
 // 	request.execute(function(resp){ //fills classes
 	var events = resp.items;

 	for (i = 0; i < events.length; i++) {
 		if(events[i].description == "class"){
 			classes.append(event);
 		}
 	}
 	});
}

function fillDays(){ //fill dictionary, add to totalTime
	for (i = 0; i < classes.length; i++) {
		var event = classes[i];
		var startTime = new Date(event.start.dateTime).getTime();
		var endTime = new Date(event.end.dateTime).getTime();
		var duration = Math.abs(endTime - startTime)/60000;
		totalTime += duration;

		if(startTime.getDay() == 1){
			monday[start.getHours()] = duration;
		} else if(startTime.getDay() == 2){
			tuesday[start.getHours()] = duration;
		} else if(startTime.getDay() == 3){
			wednesday[start.getHours()] = duration;
		} else if(startTime.getDay() == 4){
			thursday[start.getHours()] = duration;
		} else if(startTime.getDay() == 5){
			friday[start.getHours()] = duration;
		}
	}
}

function getRate(){
	return settings.tuition/totalTime;
}

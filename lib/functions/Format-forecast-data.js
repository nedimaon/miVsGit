// name: Format forecast data
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var fcdata = {};
var units=flow.get('units');
if (units===undefined)
{
  units="imperial";
}

function formatTemp(high, low){
    if (units == "imperial") {
        if (low){
          temp = parseFloat(high).toFixed() + '/' + parseFloat(low).toFixed()
        }
        else {
          temp = parseFloat(high).toFixed() + '°F'
        }
    }
    else { // metric
        if (low){
          temp = parseFloat(high).toFixed() + '/' + parseFloat(low).toFixed()
        }
        else {
          temp = parseFloat(high).toFixed() + '°C'
        }
    }
    return temp;
}

function dayName(unixTime){
  var dateObject = new Date(unixTime * 1000);
  return dateObject.toLocaleString(flow.get('lang'), { timezone: msg.payload.timezone, weekday: 'short'});
  // If the line above is not producing the correct short weekday names for the language set by 'lang',
  //   you can try upgrading to NodeJS version 13 or higher (when full international support was added for the toLocaleString function),
  //   or you can use the code below which is an example for French short weekday names.
/*  
  switch (dateObject.toLocaleString('en', { timezone: msg.payload.timezone, weekday: 'short'})) {
    case 'Mon':
      return 'Lun';
    case 'Tue':
      return 'Mar';
    case 'Wed':
      return 'Mer';
    case 'Thu':
      return 'Jeu';
    case 'Fri':
      return 'Ven';
    case 'Sat':
      return 'Sam';
    case 'Sun':
      return 'Dim';
  }
*/
}

function timeConvert(UNIX_timestamp){
  var dateObject = new Date(UNIX_timestamp * 1000);
  if (flow.get('hour12')) {  // 12 hour time format
    return dateObject.toLocaleString('en', { timezone: msg.payload.timezone, hour12: true, hour: 'numeric'}).toLowerCase();
  } else {  // 24 hour time format
    return dateObject.toLocaleString('en', { timezone: msg.payload.timezone, hour12: false, hour: 'numeric'}) + ':00';
  }      
}

// prepare forecast data for CSS based ui widget
fcdata.payload = {
  rowtext: {
  	data01: {
      cell01: timeConvert(msg.payload.hourly[1].dt),
      cell02: timeConvert(msg.payload.hourly[2].dt),
      cell03: timeConvert(msg.payload.hourly[3].dt),
      cell04: timeConvert(msg.payload.hourly[4].dt),
      cell05: timeConvert(msg.payload.hourly[5].dt),
      cell06: timeConvert(msg.payload.hourly[6].dt),
      cell07: dayName(msg.payload.daily[1].dt),
      cell08: dayName(msg.payload.daily[2].dt),
      cell09: dayName(msg.payload.daily[3].dt),
      cell10: dayName(msg.payload.daily[4].dt),
  	},
  	data02: {
       cell01: formatTemp(msg.payload.hourly[1].temp),
       cell02: formatTemp(msg.payload.hourly[2].temp),
       cell03: formatTemp(msg.payload.hourly[3].temp),
       cell04: formatTemp(msg.payload.hourly[4].temp),
       cell05: formatTemp(msg.payload.hourly[5].temp),
       cell06: formatTemp(msg.payload.hourly[6].temp),
       cell07: formatTemp(msg.payload.daily[1].temp.max, msg.payload.daily[0].temp.min),
       cell08: formatTemp(msg.payload.daily[2].temp.max, msg.payload.daily[1].temp.min),
       cell09: formatTemp(msg.payload.daily[3].temp.max, msg.payload.daily[2].temp.min),
       cell10: formatTemp(msg.payload.daily[4].temp.max, msg.payload.daily[3].temp.min),
  	}
  },
  rowicons: {
  	data01: {
  		cell01: msg.payload.hourly[1].weather[0].icon,
  		cell02: msg.payload.hourly[2].weather[0].icon,
  		cell03: msg.payload.hourly[3].weather[0].icon,
  		cell04: msg.payload.hourly[4].weather[0].icon,
  		cell05: msg.payload.hourly[5].weather[0].icon,
  		cell06: msg.payload.hourly[6].weather[0].icon,
  		cell07: msg.payload.daily[1].weather[0].icon,
  		cell08: msg.payload.daily[2].weather[0].icon,
  		cell09: msg.payload.daily[3].weather[0].icon,
  		cell10: msg.payload.daily[4].weather[0].icon,
  	}
  }
}

return fcdata;
const fetch = require('node-fetch');
const chalk = require('chalk');
const prompt = require('prompt-sync')()

//Get ISS current position
fetch('http://api.open-notify.org/iss-now.json')
  .then(response => response.json())
  .then(result => {

    const iss_long = result.iss_position.longitude;
    const iss_lat = result.iss_position.latitude;

    //Reverse geocode from Mapbox
    const reverseURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${iss_long},${iss_lat}.json?access_token=pk.eyJ1Ijoiam9uYXRoYW4tc2ltcHNvbiIsImEiOiJja3A5cjRmOTMwbGsxMm9tcHZwdDZieDFkIn0.jtEWOmsA06oxjQkMiDwDxw`

    fetch(reverseURL)
      .then(response => response.json())
      .then(result => {

        if(result.features[0] == undefined){
          console.log(chalk.bgRed("Sorry - it's over the ocean right now!"))
        } else {
        console.log(chalk.bgYellow(`The ISS is currently over ${result.features[0].place_name}`))
        }


      })

  });

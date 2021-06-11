# Node App which tells you the exact spot on the surface of Earth that the ISS is above right now.

#### I wanted to be know the exact spot over which the ISS currently is above, but have that information presented to me as a location, not in terms of latitude and longitude as it's usually done. ISS location data is taken from 'http://api.open-notify.org/iss-now.json', but then is then reverse geocoded by Mapbox. The location is then presented in the terminal. If the space station is over the ocean the app reflects that in it's output.

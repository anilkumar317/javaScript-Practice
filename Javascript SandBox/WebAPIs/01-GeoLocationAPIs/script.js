function curSuccess(pos) {
  const coords = pos.coords;
  console.log(pos);

  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Accuracy: ${coords.accuracy} meters`);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  // Use GPS if available
  enableHighAccuracy: true,
  // Time to wait to stop trying for location
  timeout: 5000,
  //    Do not use a cached position
  maximunAge: 0,
};

// navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// Watch Position

const target = {
  latitude: 41.3874387,
  longitude: -71.394839,
};

function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You have reached your destination!');
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  // Use GPS if available
  enableHighAccuracy: true,
  // Time to wait to stop trying for location
  timeout: 5000,
  //    Do not use a cached position
  maximunAge: 0,
};

const id = navigator.geolocation.getCurrentPosition(
  watchSuccess,
  watchError,
  watchOptions
);

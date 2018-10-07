var Wemo = require('../index');
var wemo = new Wemo();

function foundDevice(err, device) {
  if (device.deviceType === Wemo.DEVICE_TYPE.Insight) {
    console.log('Wemo Insight Switch found: %s', device.friendlyName);

    // Keeping track of Switch's state
    var state = 'off';
    var client = this.client(device);

    client.on('insightParams', function(state, power) {
      console.log('%s’s power consumption: %s W',
        this.device.friendlyName,
        Math.round(power / 1000)
      );
    });
  }
}

function buzz(device) {
  var client = this.client(device);
  setInterval(function() {
      client.setBinaryState(1);
      }, 5000);
  client.setBinaryState(0);
}

wemo.discover(foundDevice);

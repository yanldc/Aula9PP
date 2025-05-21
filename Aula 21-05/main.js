const Vehicle = require('./Vehicle');
const VehicleStorageAdapter = require('./VehicleStorageAdapter');

const vehicle = new Vehicle('123', 'Volvo FH', 2020);

const adapter = new VehicleStorageAdapter();
adapter.saveVehicleData(vehicle);
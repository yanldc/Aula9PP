const IVehicleStorage = require('./IVehicleStorage');
const OldVehicleStorage = require('./OldVehicleStorage');

class VehicleStorageAdapter extends IVehicleStorage {
  constructor() {
    super();
    this.oldStorage = new OldVehicleStorage();
  }

  saveVehicleData(vehicle) {
    // Converte o objeto Vehicle em uma string compatível com a lib legada
    const data = `ID: ${vehicle.id}, Model: ${vehicle.model}, Year: ${vehicle.year}`;
    this.oldStorage.storeVehicleData(data);
  }
}

module.exports = VehicleStorageAdapter;
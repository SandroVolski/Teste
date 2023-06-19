import Drone from "../vehicle/aerial/Drone";
import IAircraft from "../vehicle/aerial/interface/IAircraft";
import Scooter from "../vehicle/land/Scooter";
import ILandVehicle from "../vehicle/land/interface/ILandVehicle";
import ITransportFactory from "./interface/ITransportFactory";

export default class Lime implements ITransportFactory {

    createTransportVehicle(): ILandVehicle {
        console.log("Transporte Via Lime");
        return new Scooter();
    }
    createTransportAircraft(): IAircraft {
        console.log("Transporte Via Lime");
        return new Drone();
    }

}
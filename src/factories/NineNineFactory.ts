import Helicopter from "../vehicle/aerial/Helicopter";
import IAircraft from "../vehicle/aerial/interface/IAircraft";
import Motorcycle from "../vehicle/land/Motorcycle";
import ILandVehicle from "../vehicle/land/interface/ILandVehicle";
import ITransportFactory from "./interface/ITransportFactory";

export default class NineNineFactory implements ITransportFactory {

    createTransportVehicle(): ILandVehicle {
        console.log("Transporte Via 99");
        return new Motorcycle(); //Vai ter um if, ou case para escolher
    }
    createTransportAircraft(): IAircraft {
        console.log("Transporte Via 99");
        return new Helicopter();
    }

}
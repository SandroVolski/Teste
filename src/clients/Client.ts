import ITransportFactory from "../factories/interface/ITransportFactory";
import IAircraft from "../vehicle/aerial/interface/IAircraft";
import ILandVehicle from "../vehicle/land/interface/ILandVehicle";

export default class Client {

    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory : ITransportFactory /*vai ter 3 parametros*/){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute(){
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }

    //Aqui tem uma parte
    //Colocar alguns ifs
}
import IAircraft from "../../vehicle/aerial/interface/IAircraft";
import ILandVehicle from "../../vehicle/land/interface/ILandVehicle";

export default interface ITransportFactory {
    createTransportVehicle(): ILandVehicle;
    createTransportAircraft(): IAircraft;
}
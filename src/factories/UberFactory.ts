import Airplane from "../vehicle/aerial/Airplane";
import IAircraft from "../vehicle/aerial/interface/IAircraft";
import Car from "../vehicle/land/Car";
import ILandVehicle from "../vehicle/land/interface/ILandVehicle";
import ITransportFactory from "./interface/ITransportFactory";

export default class UberFactory implements ITransportFactory {
    createTransportVehicle(/*Aqui ta o negocio da tarefa*/): ILandVehicle {
        console.log("Transporte Via UBER");
        return new Car();
    }
    createTransportAircraft(): IAircraft {
        console.log("Transporte Via UBER");
        return new Airplane();
    }

}


//Escolher se é terrester ou aereo
//Inicia transporte Uber e este transporte vai iciar ao mesmo tempp um carro e um aviao, 
//entao é pra fazer com que o usuario escolha para que inicie somente um carro ou aviao
//Que o usuario possa estanciar via Uber quanto carro quanto 99 

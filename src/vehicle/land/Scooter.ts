import ILandVehicle from "./interface/ILandVehicle";

export default class Scooter implements ILandVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Patinete: Iniciando a rota!");
    }
    getCargo(): void {
        console.log("Patinete: Passageiro chegou ao seu destino!");
    }
}
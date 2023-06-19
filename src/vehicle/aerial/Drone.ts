import IAircraft from "./interface/IAircraft";

export default class Drone implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: iniciando o trejeto...");
    }
    getCargo(): void {
        console.log("Drone: Entrega realizada!");
    }
    checkWind(): void {
        console.log("Drone: Ventos a 15 Km/h, ventos ok!");
    }

}
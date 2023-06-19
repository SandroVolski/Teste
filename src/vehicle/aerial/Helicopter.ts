import IAircraft from "./interface/IAircraft";

export default class Helicopter implements IAircraft {
    
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicoptero: iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Helicoptero: Passageiros embarcados! Ligando helices");
    }
    checkWind(): void {
        console.log("Helicoptero: Ventos a 23 Km/h, Sul, ventos ok!");
    }

}
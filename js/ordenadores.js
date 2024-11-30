class Ordenador {
    constructor(marca, modelo, procesador, cantidadDeRAM, capacidadDiscoDuro){
        this.marca = marca;
        this.modelo = modelo;
        this.procesador = procesador;
        this.cantidadDeRAM = cantidadDeRAM;
        this.capacidadDiscoDuro = capacidadDiscoDuro;
    }
    getMarca(){
        return this.marca;
    }
    getModelo(){
        return this.modelo;
    }
    getProcesador(){
        return this.procesador;
    }
    getCantidadDeRAM(){
        return this.cantidadDeRAM;
    }
    getCapacidadDiscoDuro(){
        return this.capacidadDiscoDuro;
    }
    setProcesador(nuevoProcesador){
        this.procesador = nuevoProcesador;
    }
    setCantidadDeRAM(cantidadNuevo){
        this.cantidadDeRAM = cantidadNuevo;
    }
    setCapaidadDiscoDuro(capacidadNuevo){
        this.capacidadDiscoDuro = capacidadNuevo;
    }
    
    tostring(){
        let mostrar = `El ordenador de ${this.marca} 
                       \n Modelo ${this.modelo}
                       \nTiene un procesador ${this.procesador}
                       \nTiene memoria de RAM ${this.cantidadDeRAM} 
                       \nCapacidad de dico duro es ${this.capacidadDiscoDuro}.`;
        return mostrar;
    }
    runningProgram(program){
        return `El ordenador ${this.marca} ${this.modelo} este momento ejutando ${program}`;
    }
}
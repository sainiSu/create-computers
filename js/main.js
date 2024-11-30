function crearOrdenadores() {
    // ordenador-1:
    let marca1 = prompt("Introduce la marca del ordenador:");
    let modelo1 = prompt("Introduce el modelo del ordenador:");
    let procesador1 = prompt("Introduce el tipo de procesador:");
    let cantidadDeRAM1 = prompt("Introduce la memoria de RAM del ordenador:");
    let capacidadDiscoDuro1 = prompt("Introduce la capacidad de disco duro del ordenador:");
    let ordenador1 = new Ordenador(marca1, modelo1, procesador1, cantidadDeRAM1, capacidadDiscoDuro1);

    console.log(ordenador1);
    console.log(ordenador1.getMarca());
    console.log(ordenador1.getModelo());
    console.log(ordenador1.getProcesador());
    console.log(ordenador1.getCantidadDeRAM());
    console.log(ordenador1.getCapacidadDiscoDuro());

    //ordenador-2:
    let marca2 = prompt("Introduce la marca del ordenador:");
    let modelo2 = prompt("Introduce el modelo del ordenador:");
    let procesador2 = prompt("Introduce el tipo de procesador:");
    let cantidadDeRAM2 = prompt("Introduce la memoria de RAM del ordenador:");
    let capacidadDiscoDuro2 = prompt("Introduce la capacidad de disco duro del ordenador:");
    let ordenador2 = new Ordenador(marca2, modelo2, procesador2, cantidadDeRAM2, capacidadDiscoDuro2);

    console.log(ordenador2);
    console.log(ordenador2.getMarca());
    console.log(ordenador2.getModelo());
    console.log(ordenador2.getProcesador());
    console.log(ordenador2.getCantidadDeRAM());
    console.log(ordenador2.getCapacidadDiscoDuro());

    //get the data para los ordenadores:
    let data1 = ordenador1.tostring();
    alert(data1);
    alert(ordenador1.runningProgram("FireFox."))

    let data2 = ordenador2.tostring();
    alert(data2);
    alert(ordenador2.runningProgram("Chrome."));

    procesador1 = prompt("Entra nuevo procesador de ordenador1:", "Intel Xeon Platinum");
    capacidad1 = prompt("Entra la nueva cantidad de memoria de ordenador1:", "50Tb");
    cantidad1 = prompt("Entra la nueva capacidad de disco duro de ordenador1:", "500Gb");
    ordenador1.setProcesador(procesador1);
    ordenador1.setCantidadDeRAM(cantidadDeRAM1);
    ordenador1.setCapaidadDiscoDuro(capacidadDiscoDuro1);
    alert('ordenador1');
}
function mostraInfo() {
    
    // ordenador-1:
    let marca1 = prompt("Introduce la marca del ordenador:");
    let modelo1 = prompt("Introduce el modelo del ordenador:");
    let procesador1 = prompt("Introduce el tipo de procesador:");
    let cantidadDeRAM1 = prompt("Introduce la memoria de RAM del ordenador:");
    let capacidadDiscoDuro1 = prompt("Introduce la capacidad de disco duro del ordenador:");
    let ordenador1 = new Ordenador(marca1, modelo1, procesador1, cantidadDeRAM1, capacidadDiscoDuro1);
    let resulatdo1 = ordenador1.tostring();
    document.getElementById('result').innerHTML = resulatdo1;
    document.getElementById('image').style.display = "block";
}


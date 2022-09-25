import React, { useState, useEffect } from "react";

const opciones = ["Piedra", "Papel", "Tijera"];

const Ejercicio3 = () => {
	const [miEleccion, setMiEleccion] = useState("");
	const [eleccionAdversario, setEleccionAdversario] = useState("");
    const [resultado, setResultado] = useState("");
    const obtenerNroRandom = (maximo) => Math.floor(Math.random() * maximo);
    let indiceRival;
    let miEleccionAux;
    let eleccionAdversarioAux;
    
	const elegirMiOpcion = async (miIndice) => {
        setMiEleccion(opciones[miIndice]);
        elegirOpcionAdversario();
        miEleccionAux = (opciones[miIndice]);
        definirResultado();

        console.log(resultado);
	};
    
    const elegirOpcionAdversario = async () => {
        indiceRival = obtenerNroRandom(3);
        setEleccionAdversario(opciones[indiceRival]);
        eleccionAdversarioAux = opciones[indiceRival];
    }

    const definirResultado = async () => {
        miEleccionAux === opciones[0]
            ? eleccionAdversarioAux === opciones[1] //si yo elijo piedra y mi rival papel
                ? (setResultado("Piedra - Papel"))
                : eleccionAdversarioAux === opciones[2] //si yo elijo piedra y mi rival elige tijera
                ? (setResultado("Piedra - Tijera"))
                : (setResultado("Piedra - Piedra")) //si yo elijo piedra y mi rival elige piedra
            : miEleccionAux === opciones[1]
            ? eleccionAdversarioAux === opciones[1] //si ambos elegimos papel
                ? (setResultado("Papel - Papel"))
                : eleccionAdversarioAux === opciones[2] //si yo elijo papel y mi rival elige tijera
                ? (setResultado("Papel - Tijera"))
                : (setResultado("Papel - Piedra")) //si yo elijo papel y mi rival elige piedra
            : eleccionAdversarioAux === opciones[1] //si yo elijo tijera y mi rival elige papel
            ? (setResultado("Tijera - Papel"))
            : eleccionAdversarioAux === opciones[2] // si ambos elegimos tijera
            ? (setResultado("Tijera - Tijera"))
            : (setResultado("Tijera - Piedra")); //si yo elijo tijera y mi rival elige piedra
        };
        

	return (
		<div>
			<h1>PIEDRA, PAPEL O TIJERA</h1>
			<h2>Su adversario eligió: {eleccionAdversario}</h2>
			<h2>Su eleccion es: {miEleccion}</h2>
			<button onClick={() => elegirMiOpcion(0)}>Piedra</button>
			<button onClick={() => elegirMiOpcion(1)}>Papel</button>
			<button onClick={() => elegirMiOpcion(2)}>Tijera</button>
			<h2>Entonces {resultado}</h2>
		</div>
    );
};

export default Ejercicio3;

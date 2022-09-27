import React, { useState } from "react";

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
                ? (setResultado("Has perdido"))
                : eleccionAdversarioAux === opciones[2] //si yo elijo piedra y mi rival elige tijera
                ? (setResultado("Has ganado"))
                : (setResultado("Es un empate")) //si yo elijo piedra y mi rival elige piedra
            : miEleccionAux === opciones[1]
            ? eleccionAdversarioAux === opciones[1] //si ambos elegimos papel
                ? (setResultado("Es un empate"))
                : eleccionAdversarioAux === opciones[2] //si yo elijo papel y mi rival elige tijera
                ? (setResultado("Has perdido"))
                : (setResultado("Has ganado")) //si yo elijo papel y mi rival elige piedra
            : eleccionAdversarioAux === opciones[1] //si yo elijo tijera y mi rival elige papel
            ? (setResultado("Has ganado"))
            : eleccionAdversarioAux === opciones[2] // si ambos elegimos tijera
            ? (setResultado("Es un empate"))
            : (setResultado("Has perdido")); //si yo elijo tijera y mi rival elige piedra
        };
        

	return (
		<div className="div" >
			<h1 className="titulo">PIEDRA, PAPEL O TIJERA</h1>
			<h2 className="eleccion">Su elección es: {miEleccion}</h2>
			<h2 className="eleccion">Su adversario eligió: {eleccionAdversario}</h2>
            <div className="botonera">
			<button onClick={() => elegirMiOpcion(0)} className="boton">Piedra</button>
			<button onClick={() => elegirMiOpcion(1)} className="boton">Papel</button>
			<button onClick={() => elegirMiOpcion(2)} className="boton">Tijera</button>
            </div>
			<h2 className="resultado">{resultado}</h2>
		</div>
    );
};

export default Ejercicio3;

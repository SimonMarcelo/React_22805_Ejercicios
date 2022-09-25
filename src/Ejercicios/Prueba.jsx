import React, { useState } from "react";

const ppt = ["PIEDRA", "PAPEL", "TIJERA"];

// generar un numero pseudoaleatorio entre 0 y max (no incluido)
const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};

const Ppt = () => {
	const [resultado, setResultado] = useState("");
	const [machine, setMachine] = useState(ppt[getRandomInt(3)]);

	const getMachine = () => {
		setMachine(ppt[getRandomInt(3)]);
	};

	const piedra = async () => {
		await getMachine();
        
		console.log(`Yo eleji PIEDRA y ella ${machine}`);

		if (machine === ppt[0]) {
			setResultado("Volve a Elejir ya que la máquina también elijió PIEDRA");
		}
		if (machine === ppt[1]) {
			setResultado("La máquina GANA ya que ella elijió PAPEL y vos PIEDRA");
		}
		if (machine === ppt[2]) {
			setResultado(
				"VOS le GANAS a la máquina ya que ella elijió TIJERA y vos PIEDRA"
			);
		}
	};

    
	return (
		<>
			<h1>PIEDRA,PAPEL y TIJERA ... EL JUEGO!!!</h1>
			<h2>
				resultado:<br></br> {resultado}
			</h2>
			<h3>Tu Elección</h3>
			<button onClick={piedra}>Piedra </button>
			{/* <button onClick={papel}>Papel</button>
			<button onClick={tijera}>Tijera</button> */}
		</>
	);
};

export default Ppt;
        // const papel = async () => {
        //     await getMachine();
        //     console.log(`Yo eleji PAPEL y ella ${machine}`);
        //     if (machine === ppt[0]) {
        //         setResultado(
        //             "VOS le GANAS a la máquina ya que ella elijió PIEDRA y vos PAPEL"
        //         );
        //     }
        //     if (machine === ppt[1]) {
        //         setResultado("Volve a Elejir ya que la máquina también elijió PAPEL");
        //     }
        //     if (machine === ppt[2]) {
        //         setResultado("La máquina GANA ya que ella elijió TIJERA y vos PAPEL");
        //     }
        // };
    
        // const tijera = async () => {
        //     await getMachine();
        //     console.log(`Yo eleji TIJERA y ella ${machine}`);
        //     if (machine === ppt[0]) {
        //         setResultado("La máquina GANA ya que ella elijió PIEDRA y vos TIJERA");
        //     }
        //     if (machine === ppt[1]) {
        //         setResultado(
        //             "VOS le GANAS a la máquina ya que ella elijió PAPEL y vos TIJERA"
        //         );
        //     }
        //     if (machine === ppt[2]) {
        //         setResultado(
        //             "Volve a Elejir ya que la máquina también elijió TIJERA y vos TIJERA"
        //         );
        //     }
        // };

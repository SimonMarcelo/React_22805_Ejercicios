import React, { useState } from "react";
import { GoTasklist } from "react-icons/go";
import Formulario from "./ToDoApp_Form";
import Tarea from "./ToDoApp_Tarea";

let tareas = [
	{
		id: 0,
		checked: false,
		titulo: "Lavar ropa",
		descripcion: "Llevar a lavar la ropa al lavadero.",
	},
	{
		id: 1,
		checked: false,
		titulo: "Estudiar React",
		descripcion: "Estudiar y practicar cómo armar diferentes componentes y comunicarlos.",
	},
	{
		id: 2,
		checked: false,
		titulo: "Armar listado",
		descripcion: "Pensar en las actividades para armar el listado y después escribirlas en el archivo.",
	},
];
let id = 10;

const ToDo = () => {
	const [form, setForm] = useState({
		id: Number(id),
		checked: false,
		titulo: "",
		descripcion: "",
	});

	const [auxiliar, setAuxiliar] = useState(0);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.titulo !== "" && form.descripcion !== "") {
			tareas.push(form);
			form.id++;
			console.log(tareas);
			setAuxiliar(auxiliar + 1);
		}
	};

	const handleDeleteItem = (idToDelete) => {
		// setTimeout(() => {
			const tareasFiltradas = tareas.filter((tarea) => tarea.id !== idToDelete);
			tareas = tareasFiltradas;
			setAuxiliar(auxiliar + 1);
		// }, 2000);
	};

	return (
		<div id="ToDoApp">
			<h1 className="title">
				ToDo List App <GoTasklist />
			</h1>
			<div className="nuevaTarea">
				<h3>Nueva Tarea:</h3>
				<Formulario handleSubmit={handleSubmit} handleChange={handleChange} />
			</div>
			<h3>Lista de tareas: </h3>
			<div className="tabla">
				{tareas.map((tarea, id) => (
					<Tarea tarea={tarea} id={id} handleDeleteItem={handleDeleteItem} />
				))}
			</div>
		</div>
	);
};

export default ToDo;

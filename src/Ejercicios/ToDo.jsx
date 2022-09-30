import React, { useState} from "react";

let tareas = [{id: 0, titulo: "Lavar ropa", descripcion: "Llevar a lavar la ropa en el lavadero"}];
let id = 1;

const ToDo = () => {
	const [form, setForm] = useState({
        id: Number(id),
		titulo: "",
		descripcion: "",
	});


	const handleChange = (e) => {
		const {name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

    // const [tareasAux, setTareasAux] = useState(tareas)

    
	const handleSubmit = (e) => {
        e.preventDefault();
        if (form.titulo !== "" && form.descripcion !== "") {
            tareas.push(form);
            form.id++;
            console.log(tareas)
        }
	};

	return (
		<div id="ToDoApp">
			<h1>ToDo List App</h1>
			<div>
				<h3>Nueva Tarea:</h3>
				<form onSubmit={handleSubmit}>
					<input type="text" name="titulo"onChange={handleChange}/>
					<input type="text" name="descripcion" onChange={handleChange}/>
					<button type="submit">Añadir +</button>
					<p>* Es necesario completar ambos campos para añadir</p>
				</form>
			</div>
			<h3>Lista de tareas: </h3>   
            <ul>{
                tareas.map((tarea, id) => (
                    <li key={id}>
                        <input type="checkbox" id={id}/>
                        <span>Título: {tarea.titulo}</span>{" "}
                        <span>Descripcion: {tarea.descripcion}</span>
                    </li>
                ))
                }</ul>             
		</div>
	);
};

export default ToDo;

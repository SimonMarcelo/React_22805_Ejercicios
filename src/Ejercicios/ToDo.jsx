import React, { useState} from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import { MdAddTask } from "react-icons/md";


let tareas = [{id: 0, checked: false, titulo: "Lavar ropa", descripcion: "Llevar a lavar la ropa en el lavadero"}];
let id = 1;

const ToDo = () => {
	const [form, setForm] = useState({
        id: Number(id),
        checked: false,
		titulo: "",
		descripcion: "",
	});

    const [auxiliar , setAuxiliar] = useState(0);

	const handleChange = (e) => {
		const {name, value } = e.target;

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
        console.log(tareas)
        const tareasFiltradas = tareas.filter((tarea) => tarea.id !== idToDelete);
        tareas = tareasFiltradas;
        setAuxiliar(auxiliar + 1);
    }

	return (
		<div id="ToDoApp">
			<h1 className="title">ToDo List App  <GoTasklist/></h1>
			<div className="nuevaTarea">
				<h3>Nueva Tarea:</h3>
				<form onSubmit={handleSubmit}>
					<input className="tituloTarea" type="text" name="titulo"onChange={handleChange}/>
					<input className="descripcionTarea" type="text" name="descripcion" onChange={handleChange}/>
					<button className="botonSubmit" type="submit"><MdAddTask/></button>
					<p>* Es necesario completar ambos campos para añadir</p>
				</form>
			</div>
			<h3>Lista de tareas: </h3>   
            <div className="tabla">{
                tareas.map((tarea, id) => (
                            <div className="tabla__div" key={id}>
                                <input className="tabla__checkbox" type="checkbox" id={id} />
                                <div className="titulo_y_descripcion"><p className="tabla__titulo">{tarea.titulo}</p><p className="tabla__descripcion">{tarea.descripcion} </p></div>
                                <div className="tabla__trash" onClick={() => handleDeleteItem(tarea.id)}><BsFillTrashFill/></div>
                            </div>
                ))
                }</div>             
		</div>
	);
};

export default ToDo;

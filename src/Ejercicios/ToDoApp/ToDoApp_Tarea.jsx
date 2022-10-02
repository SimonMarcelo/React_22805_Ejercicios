import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Tarea = (props) => {
	return (
		<div className="tabla__div" key={props.id}>
			<input className="tabla__checkbox" type="checkbox" id={props.id} />
			<div className="titulo_y_descripcion">
				<p className="tabla__titulo">{props.tarea.titulo}</p>
				<p className="tabla__descripcion">{props.tarea.descripcion} </p>
			</div>
			<div
				className="tabla__trash"
				onClick={() => props.handleDeleteItem(props.tarea.id)}
			>
				<BsFillTrashFill />
			</div>
		</div>
	);
};

export default Tarea;

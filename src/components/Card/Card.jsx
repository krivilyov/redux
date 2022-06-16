import React from "react";
import "./card.css";
import { useSelector } from "react-redux";

export const Card = () => {
	const { card } = useSelector((state) => state.card);

	return (
		<div className="card">
			<div className="card-title">{card.title}</div>
			<div className="card-description">{card.description}</div>
			<div className="card-status">{card.isOpen ? `OPEN` : `CLOSE`}</div>
		</div>
	);
};

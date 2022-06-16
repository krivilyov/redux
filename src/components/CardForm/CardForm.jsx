import React from "react";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import "./form.css";
import { useDispatch } from "react-redux";
import { cardActions } from "../../store/card";

export const CardForm = () => {
	const dispatch = useDispatch();

	const onFinish = (values) => {
		const card = {
			title: values.title,
			description: values.description,
		};

		dispatch(cardActions.setCard(card));
	};

	return (
		<div className="form-wrap">
			<Form onFinish={onFinish}>
				<Form.Item label="Title" name="title">
					<Input />
				</Form.Item>
				<Form.Item label="Description" name="description">
					<Input.TextArea />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

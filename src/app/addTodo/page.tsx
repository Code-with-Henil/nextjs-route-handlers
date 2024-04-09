"use client";

import { useState } from "react";

const TodoForm = () => {
	const [todoItem, setTodoItem] = useState<string>("");

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				try {
					const formdata = new FormData();
					formdata.append("newTask", todoItem);

					fetch("http://localhost:3000/api/todos", {
						method: "POST",
						body: formdata,
					})
						.then((response) => response.text())
						.then((result) => console.log(result))
						.catch((error) => console.log("error", error));
				} catch (error) {
					console.error(error);
				}
			}}
			className="my-8"
		>
			<input
				onChange={(e) => {
					e.preventDefault();
					setTodoItem(e.target.value);
				}}
				className="rounded-lg text-black"
				type="text"
				name="todoTask"
				placeholder="Add New Todo..."
			/>
			<br />
			<button className="mt-3 bg-green-600 rounded-md text-white px-3 py-1" type="submit">
				Add Todo
			</button>
		</form>
	);
};

export default TodoForm;

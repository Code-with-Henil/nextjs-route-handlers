type TodoType = {
	id: number;
	task: string;
	completed: boolean;
};

const getTodos = async () => {
	try {
		const response = await fetch("http://localhost:3000/api/todos", { cache: "no-store" });
		if (!response.ok) {
			console.log("Server Response is not OK!");
		}
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

const Todos = async () => {
	const todos = await getTodos();

	return (
		<div>
			{todos.map((eachTodo: TodoType) => (
				<div className="flex justify-start items-center space-x-8" key={eachTodo.id}>
					<p>
						{eachTodo.id}. {eachTodo.task}
					</p>
					<p className={`${eachTodo.completed ? "text-green-600" : "text-red-600"}`}>
						{eachTodo.completed + ""}
					</p>
				</div>
			))}
		</div>
	);
};

export default Todos;

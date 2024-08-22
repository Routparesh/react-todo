import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
	const handelEdit = () => {};
	const handelDelete = () => {};
	const handelAdd = () => {
		setTodos([...todos, { todo, isCompleteted: false }]);
		setTodo('');
		console.log(todo);
	};
	const handelChange = (e) => {
		setTodo(e.target.value);
	};

	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	return (
		<>
			<Navbar />

			<div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
				<div className="addTodo my-5">
					<h2 className="text-lg font-bold ">Add a Todo</h2>
					<input onChange={handelChange} value={todo} type="text" className="w-1/2 py-2" />
					<button
						onClick={handelAdd}
						className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6">
						Add
					</button>
				</div>

				<h2 className="text-lg font-bold">Your Todos</h2>

				<div className="todos">
					{todos.map((item) => (
						<div className="todo flex" key={item.id}>
							<div className="text">{item.todo}</div>
							<div className="buttons">
								<button
									onClick={handelEdit}
									className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">
									Edit
								</button>
								<button
									onClick={handelDelete}
									className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;

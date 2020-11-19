import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task';

import './task-list.css';

const TaskList = ({ todos, changeOfState, onDeleted }) => {
	const elements = todos.map((elem) => {
		const { state, id } = elem;

		return (
			<li key={id} className={state}>
				<Task
					{...elem}
					changeOfState={() => changeOfState(id)}
					onDeleted={() => onDeleted(id)}
				/>
			</li>
		);
	});
	return <ul className="todo-list">{elements}</ul>;
};

TaskList.defaultProps = {
	todos: [{ label: 'Complited tusk', state: 'active', id: 1, checked: false }],
};

TaskList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	changeOfState: PropTypes.func.isRequired,
	onDeleted: PropTypes.func.isRequired,
};

export default TaskList;

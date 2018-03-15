import React from 'react'
import PropTypes from 'prop-types'



const ToDo =  (complete, deleteTodo, toggleTodo, text)=> {
	return (
		<div>
			<div>
				<input
					complete={complete}
					className="todo_completion"
					onChange={toggleTodo}
					type="checkbox"
				/>
				{}
			</div>
			{text}
		</div>
	)
}

ToDo.propTypes = {
	complete: PropTypes.bool.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	toggleTodo: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
}


export default ToDo
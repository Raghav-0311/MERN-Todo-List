import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
    state = {
        action: '',
    };

    addTodo = () => {
        const task = { action: this.state.action };

        if(task.action && task.action.length > 0) {
            axios.post('http://localhost:5000/api/todos', task)
                .then((res) => {
                    if (res.data) {
                        this.props.getTodos();
                        this.setState({ action: '' });
                    }
                })
                .catch((err) => console.error(err));
        } else {
            console.log('Input field required');
        }
    };

    handleChange = (e) => {
        this.setState({
            action: e.target.value,
        });
    };

    render() {
        let { action } = this.state;
        return(
            <div>
                <input 
                    type="text"
                    onChange={this.handleChange}
                    value={action} 
                />
                <button onClick={this.addTodo}>Add Todo</button>
            </div>
        );
    }
}

export default Input;

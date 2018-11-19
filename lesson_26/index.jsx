import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component{
    render(){
        return(
            <div>
                <section class = "todoapp">
                    <header class = 'header'>
                        <h1 class = 'ttl'>todos</h1>
                        <input 
                            class = 'new-todo'
                            type="text"
                            placeholder = 'What needs to be done?'
                        />
                    </header>
                    <section class = 'main' style = {{display: 'none'}}>
                        <input id = "toggle-all" class = "toggle-all" type = "checkbox"/>
                        <label htmlFor="toggle-all"></label>
                        <ul class = "todo-list"></ul>
                    </section>
                    <footer class= "footer" style = {{display: 'none'}}>
                        <span class = "todo-count">
                        <strong></strong>
                        "items left"
                        </span> 
                        <ul>
                            <li><a href="#/" class = "selected">All</a></li>
                            <li><a href="#/active">Active</a></li>
                            <li><a href="#/completed">Completed</a></li>
                        </ul>
                        <button class = "clear-completed" style = {{display: 'none'}}></button>
                    </footer>
                </section>
                <footer class = "info">
                    <p>Double-click to edit a todo</p>
                    <p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
                    <p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
                    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>

                </footer>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
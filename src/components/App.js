import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core//TextField';
import Button from '@material-ui/core/Button';
import List from './List';
import '../App.css';

class App extends Component {
  state = {
    query: '',
    inputValue: '',
    todos: [{ value: 'Нарисовать картину', done: false }, { value: 'Погладить кота', done: true }],
    direction: 'row',
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  removeMe = index => {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== index),
    });
  };

  searchChanged = evt => {
    this.setState({ query: evt.target.value });
  };

  handleSubmit = evt => {
    if (evt.keyCode === 13 && this.state.inputValue) {
      const newTodo = {
        value: this.state.inputValue,
        done: false,
      };
      const todos = this.state.todos.concat(newTodo);
      this.setState({ todos: todos, inputValue: '' });
    }
  };

  handleSubmitBtn() {
    if (this.state.inputValue) {
      const newTodo = {
        value: this.state.inputValue,
        done: false,
      };
      const todos = this.state.todos.concat(newTodo);
      this.setState({ todos: todos, inputValue: '' });
    }
  }

  render() {
    const stylebtn = {
      marginLeft: 20,
    };
    const styleTextField = {
      width: 440,
    };
    const styleAppBar = {
      flexDirection: 'center',
    };
    const styleList = {
      marginTop: 90,
    };

    return (
      <Grid>
        <div className="App">
          <Typography
            type="body1'"
            color="inherit"
            text-align="left"
            component={'span'}
            variant={'body2'}
          >
            <AppBar position="static" color="default" style={styleAppBar}>
              <Toolbar>
                <TextField
                  style={styleTextField}
                  placeholder="Добавить задание"
                  onChange={this.handleChange}
                  inputValue={this.state.inputValue}
                  onKeyDown={this.handleSubmit}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  style={stylebtn}
                  onClick={this.handleSubmitBtn.bind(this)}
                >
                  добавить
                </Button>
              </Toolbar>
            </AppBar>
          </Typography>
          <Paper>
            <List
              style={styleList}
              removeMe={this.removeMe}
              todos={this.state.todos}
              query={this.state.query}
            />
          </Paper>
        </div>
      </Grid>
    );
  }
}

export default App;

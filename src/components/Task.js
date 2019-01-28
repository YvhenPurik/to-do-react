import React, { Component } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core//IconButton';
import Divider from '@material-ui/core//Divider';
import Checkbox from '@material-ui/core//Checkbox';

const style = {
  checked: {
    textDecoration: 'line-through',
  },
  unChecked: {
    color: 'green',
  },
};

class Task extends Component {
  state = {
    direction: 'row',
    justify: 'space-between',
    alignItems: 'space-between',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checked: false,
    };
  }

  handleChange(event) {
    this.setState({ checked: event.target.checked });
  }
  render() {
    const styleTask = {
      display: 'block',
      height: 60,
      paddingTop: 30,
      fontSize: 20,
    };
    const styleIconButton = {
      float: 'right',
      marginTop: -10,
    };
    const styleDivider = {
      marginTop: 35,
    };
    const styleCheckbox = {
      float: 'left',
      marginTop: -10,
    };

    return (
      <div className="Task" style={styleTask}>
        <Checkbox style={styleCheckbox} type="checkbox" onChange={this.handleChange} />
        <span style={this.state.checked ? style.checked : style.unChecked}>
          {this.props.label}
          {this.props.todo.value}
        </span>
        <Tooltip id="tooltip-icon" title="Удалить" placement="bottom">
          <IconButton
            style={styleIconButton}
            onClick={() => this.props.removeMe(this.props.index)}
            aria-label="Delete"
          >
            <SvgIcon>
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </SvgIcon>
          </IconButton>
        </Tooltip>
        <Divider style={styleDivider} />
      </div>
    );
  }
}

export default Task;

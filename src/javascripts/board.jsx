'use strict';
import React from 'react';
import PropTypes from 'prop-types';

class Board extends React.Component {
  constructor (props) {
    super(props);

    props.store.register(this.updateState.bind(this));
  }

  updateState () {
    const newState = this.props.store.getState('gameboard');
    this.setState(newState);
  }

  gameBoard () {
    const gameboard = this.props.store.getState('gameboard');

    return gameboard.map((row, rowIndex) => {
      return row.map((square, sqIndex) => {
        const handleClick = this.clickHandler.bind(this, sqIndex, rowIndex);
        return (
          <div className='square' onClick={handleClick}>
            {square}
          </div>
        );
      });
    });
  }

  render () {
    const gameboard = this.gameBoard();
    return (
      <div>
        <div id='messages'>{this.props.store.getState('message')}</div>
          <div id='gameBoard'>
            {gameboard}
          </div>
        <div className='replay' onClick={this.clickHandler}></div>
      </div>
    );
  }

  clickHandler (x, y) {
    this.props.store.action({
      type: 'turn',
      x,
      y,
    });
  }
}

Board.propTypes = {
  store: PropTypes.object,
  getState: PropTypes.func,
  setSquare: PropTypes.func,
  register: PropTypes.func,
};

export default Board;

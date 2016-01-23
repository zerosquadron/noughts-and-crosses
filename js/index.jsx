'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

let Game = React.createClass({

	displayName: 'SquareBoard'

	, getInitialState: function() {

		return { 
			squares : ['','','','','','','','','']
			, turn 	: 'O'
		}
	}
	
	, render: function() {
		let gameboard = this.gameBoard();

		console.log('render', this);
		return (
			<div>
				{gameboard}
			</div>
		);
	}

	, clickHandler: function(index, move) {
		let squares = this.state.squares;
		if(squares[index] === 'O' || squares[index] === 'X') {
			return;
		}
		squares[index] = move;
		this.checkWin(index, move)
		this.setState({
			squares : squares
			, turn 	: move === 'O' ? 'X' : 'O'
		});
	}

	, gameBoard: function() {

		return <div id='gameBoard'> {
			this.state.squares.map(function(square, i) {
				return (
					<Square key={i} index={i} status={square} turn={this.state.turn} clicker={ this.clickHandler }/>
				);
		}, this)} </div>
	}

	, checkWin: function (index, move) {
		let squares = this.state.squares;
console.log('Move', move)
		let winArr = [
			[0,1,2]
			, [0,3,6]
			, [0,4,8]
			, [1,4,6]
			, [2,5,8]
			, [2,4,6]
			, [3,4,5]
			, [6,7,8]
		];
		for (let i = 0; i < winArr.length; i++) {
			let currArr = winArr[i];
debugger;
			if(currArr[0] === currArr[1] && currArr[0] === currArr[2] && currArr[0] != '') {
				console.log('Winner!! the ' + move +'\'s win!')
			}
		}
	}
});

ReactDOM.render(
	<Game />, document.getElementById('container')
);
import React, { Component } from 'react';
import CheckBoard from './board/CheckBoard';
import Info from './list/Info';
import StepList from './list/StepList';
import '../style/style.scss';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'X',
      current: Array.from({ length: 3 }, () => (new Array(3).fill(null))),
      step: 0,
      history: [
        [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ]
      ],
    }
  }

  deepClone = (arr) => {
    let res = [];
    for (let item of arr) {
      if (Array.isArray(item)) {
        res.push(this.deepClone(item))
      } else {
        res.push(item)
      }
    }
    return res;
  }

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[Math.floor(a / 3)][a % 3] &&
        squares[Math.floor(a / 3)][a % 3] === squares[Math.floor(b / 3)][b % 3] &&
        squares[Math.floor(a / 3)][a % 3] === squares[Math.floor(c / 3)][c % 3]) {
        return squares[Math.floor(a / 3)][a % 3];
      }
    }
    return null;
  }

  btnClick = (row, col) => {
    if (this.state.current[row][col] || this.calculateWinner(this.state.current)) return;
    this.setState((prev) => {
      let current = this.deepClone(prev.current);
      current[row][col] = prev.player;
      let hist = this.deepClone(prev.history).slice(0, prev.step + 1)

      return {
        // 此处要创建新的数组（不同内存地址）更新数据。
        // 因为数组是引用类型，通过 push 等方法更新数组，数组内存地址没有改变，因此 setState 会认为数组没有更新。
        current,
        step: ++prev.step,
        player: prev.player === 'X' ? 'O' : 'X',
        history: [...hist, current],
      }
    })
  }

  backTrack = (idx) => {
    let current = this.state.history[idx]
    this.setState({
      step: idx,
      player: (idx % 2) === 0 ? 'X' : 'O',
      current,
    })
  }

  render() {
    let winner = this.calculateWinner(this.state.current)
    let status;
    if (winner) {
      status = `Winner: ${winner}`
    } else {
      status = `Next player: ${this.state.player}`
    }
    return (
      <div>
        <CheckBoard btnClick={this.btnClick} current={this.state.current} />
        <Info player={status} />
        <StepList backTrack={this.backTrack} history={this.state.history} />
      </div>
    );
  }
}

export default Container;
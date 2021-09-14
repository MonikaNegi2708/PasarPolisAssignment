import '../App.css';
import React from 'react';

class Dashboard extends React.Component {
	state = {
		arr: [],
	}

	onChangeHandler = (e) => {
		if (e.target.id === "inputValue") {
			this.setState({ inputValue: e.target.value })
		}
		else if (e.target.id === "emptyArray") {
			this.setState({ arr: [], inputValue: "", result: "" })
		}
		else {
			let arr = this.state.arr;
			arr.push(this.state.inputValue)
			this.setState({ inputValue: "", result: "", arr })
		}
	}

	getSecondLargestNumber = () => {
		let arr = this.state.arr;
		let largest = 0;
		let secondLargest = -1;
		let i;

		if (arr.length > 0) {
			for (i = 1; i < arr.length; i++) {
				if (arr[i] > arr[largest])
					largest = i;
			}
			for (i = 0; i < arr.length; i++) {
				if (arr[i] != arr[largest]) {
					if (secondLargest == -1)
						secondLargest = i;
					else if (arr[i] > arr[secondLargest])
						secondLargest = i;
				}
			}
		}
		if (secondLargest == -1) {
			this.setState({ result: -1 })
		}
		else {
			this.setState({ result: arr[secondLargest] })
		}
	}

	render() {
		return (
			<React.Fragment>
				<input id="inputValue" type="number" maxlength="1024" value={this.state.inputValue || ''} onChange={this.onChangeHandler} />
				<button type="button" onClick={this.onChangeHandler} disabled={!this.state.inputValue}>Click To Push Value Into Array</button>
				<h5>Your array is : </h5>
				<ul>{this.state.arr.map(el => <li>{el}</li>)}</ul>
				<button type="button" onClick={this.getSecondLargestNumber} >Click To Find Second Largest Value</button>
				<h5>Second largest Value is:</h5> <p>{this.state.result}</p>
				<button type="button" id="emptyArray" onClick={this.onChangeHandler} disabled={!this.state.arr.length}>Click To Empty The Array</button>
			</React.Fragment >
		);
	}
}

export default Dashboard;
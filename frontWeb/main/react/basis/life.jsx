var Life = React.createClass({
	getDefaultProps: function() {
		console.log("getDefaultProps");
		return {
			say: "I like you"
		}
	},
	getInitialState: function() {
		console.log("getInitialState");
		return {
			name: "sky",
			age: 26
		};
	},
	componentWillMount: function() {
		console.log("componentWillMount");
		this.state.food = "meat";
	},
	componentDidMount: function() {
		console.log("componentDidMount");
		var desDom = ReactDOM.findDOMNode(this.refs.des);
		setTimeout(function() {
			desDom.style.color = "red";
			this.setState({age : 27});	//修改state的值，使其状态发生改变
		}.bind(this), 1000);
	},
	render: function() {
		return ( < div >
				< p > Hello, {
					this.props.tip
				}
				World, {
					this.props.say
				} < /p> < p ref = "des" > My name is {
				this.state.name
			}, and age is {
				this.state.age
			},
			I like {
				this.state.food
			} < /p> < /div >
		)
	},
	componentWillReceiveProps: function() {
		console.log("componentWillReceiveProps");
	},
	shouldComponentUpdate: function() {
		console.log("shouldComponentUpdate");
		return true;
	},
	componentWillUpdate: function() {
		console.log("componentWillUpdate");
	},
	componentDidUpdate: function() {
		console.log("componentDidUpdate");
	}
});
ReactDOM.render( < Life tip = "Ms" / > , document.getElementById('container'));
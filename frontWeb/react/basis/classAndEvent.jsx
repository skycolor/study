var ShowAndHide = React.createClass({
	render : function () {
		return (
			<div className="demo1">
				<span ref="tip">显示｜隐藏</span> 
				<button onClick={this.clickEvent} >click</button>				
			</div>
		)
	} ,
	clickEvent : function(e) {
		var tip = ReactDOM.findDOMNode(this.refs.tip) ,
			display = tip.style.display;
		tip.style.display = display != "none" ? "none" : '';
	}

});
var InputAndShow = React.createClass({
	getInitialState: function() {
		return {
			tip: ""
		};
	},
	render : function () {
		var spanStyle = {color : "red"};
		return (
			<div>
				<input onChange={this.changeEvent} />
				<span style={spanStyle} >{this.state.tip}</span>
			</div>
		)
	} ,
	changeEvent : function(e) {
		this.setState({tip : e.target.value});
	}
});
ReactDOM.render( <div>
					<ShowAndHide / >
					<InputAndShow / >
				 </div>	 , document.getElementById('container'));
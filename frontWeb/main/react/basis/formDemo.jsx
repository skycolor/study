var FormBox = React.createClass({
    handleSubmitRequest : function(obj){
    	console.log("提交数据到XXX服务器，数据为" + JSON.stringify(obj));
    } ,
    render : function() {
        return (
            <div>
            	<h1>表单提交</h1>
            	<FormSubmit submitRequest={this.handleSubmitRequest} />
            </div>
        );
    }
});
var FormSubmit = React.createClass({
	getInitialState: function() {
		return {
			name: "",
			age: ""
		};
	},
	changeValue : function(e){			//目的是为了保证前端的数据跟后端保持一致
		var dom = e.target , obj = {};
		obj[dom.getAttribute("data-name")] = dom.value;
		this.setState(obj);
	} ,
	toSubmit : function(e){
		e.preventDefault();
		var name = this.state.name.trim() ,
			age = this.state.age.trim();
			if(!name || !age){
				alert("不能为空");
				return;
			}
			this.props.submitRequest({name : name , age : age});	//此处回调了上级组建的函数
			this.setState({name : "" , age : ""});
	} ,
	render : function() {
        return (
            <form onSubmit={this.toSubmit}>
            	<p>
            		<span>姓名</span>
            		<input value={this.state.name}
            			data-name="name"
            			onChange={this.changeValue}
            			placeholder="input your name" />
            	</p>
            	<p>
            		<span>年龄</span>
            		<input value={this.state.age}
            			data-name="age"
            			onChange={this.changeValue}
            			placeholder="input your age" />
            	</p>
            	<p>
            		<input type="submit" value="提交" />
            	</p>
            </form>
        );
    }
}); 
ReactDOM.render( <FormBox / > , document.getElementById('container'));




/**
*   网络请求，在reactDOM渲染完成后进行
*   当ajax请求成功后，重新设置组建的state进而重新绘制页面
*/
var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
      $.ajax({
        url: this.props.url  ,
        type: 'get' ,
        dataType: 'html' 
      }).done(function(data){
          console.log("req suc");
          var obj = JSON.parse(data);
          this.setState({data : obj});
      }.bind(this)).fail(function(){
          console.log("req err");
      });
  },
  render: function() {
    return (
      <div>
        <h2>comments</h2>
        <CommentList data={this.state.data} />
      </div>
    );
  }
});
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {    //map为循环的方法
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span>{this.props.children}</span>
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox url="requestUrl.json" />,
  document.getElementById('container')
);
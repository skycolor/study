/**
* 循环数据采用map方法，类似于jQuery中的each，这个demo中采用多个组件循环的嵌套
*/
var data = [      //数据源
  {id: 1 , author: "sky", text: "I like sky"},
  {id: 2 , author: "hf", text: "My name is hf"}
];
var CommentBox = React.createClass({
  render: function() {
    return (
      <div>
        <h2>comments</h2>
        <CommentList data={this.props.data} />
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
  <CommentBox data={data} />,
  document.getElementById('container')
);
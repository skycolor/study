require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

/*
* 获取图片的相关数据，并且初始化
*/
const imageDatas = ((arr) => {
    for(let i = 0 , item ; item = arr[i++];)
        item.imageURL = require('../images/' + item.fileName);
    return arr;
})(require('json!../data/imageDatas.json'))

/*
* 单个图片组件
*/
class ImageFigure extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        return (
            <figure>
                <img  src={this.props.data.imageURL}  alt={this.props.data.title} />
                <figcaption>
                    <h2>{this.props.data.title}</h2>
                    <div>
                        {this.props.data.desc}
                    </div>
                </figcaption>
            </figure>
        )
    }
}

/*
* 底部导航条组件
*/
class ControllerUnit extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
        return (
            <span class='unitClassName'></span>
        )
    }
}

/*
* 页面主体
*/
class MainPhotoWall extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        let imgFigures = [];
        for(let i = 0 , figure; figure = imageDatas[i++];){
            imgFigures.push(<ImageFigure data={figure}  />)
        }

        return (
            <section>
                <section className="index">
                    {imgFigures}
                </section>
                <nav>

                </nav>
            </section>
        );
    }
}


MainPhotoWall.defaultProps = {
};

export default MainPhotoWall;

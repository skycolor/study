require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';
import ReactDOM from 'react-dom';

/*
* 获取图片的相关数据，并且初始化
*/
const imageDatas = ((arr) => {
    for(let i = 0 , item ; item = arr[i++];)
        item.imageURL = require('../images/' + item.fileName);
    return arr;
})(require('json!../data/imageDatas.json'))
const snowImg = require('../images/snow.png');



/*定义几个公共常用方法*/
let getRangeRandom = (low , high) => {          //获取某个左闭右开区间内的随机值,[low , high)
    return Math.floor(Math.random()*(high - low) + low);
}
let get30DegRandom = () => {      //获取 0到30 的任意正负值
    return ((Math.random() > 0.5 ? "+" : "-") + Math.ceil(Math.random() * 30));
}
/*
* 单个图片组件
*/
class ImageFigure extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){       //处理图片控件的点击事件
        if(this.props.arrange.isCenter){
            this.props.inverse()
        }else{
            this.props.center();
        }
        e.stopPropagation();
        e.preventDefault();
    }
    render(){
        let styleObj = {} , arrange = this.props.arrange;
        //设置图片的位置
        if(arrange && arrange.pos) styleObj = arrange.pos;
        //设置图片的旋转角度
        if(arrange && arrange.rotate){
            ['Moz', 'Ms', 'Webkit', ''].forEach((val) => {
                styleObj[val + 'Transform'] = 'rotate(' + this.props.arrange.rotate + 'deg)';
            });
        }
        //设置中心图片的z-index
        if(arrange && arrange.isCenter) styleObj.zIndex = 99;
        //设置class
        let className = "img-figure" + (this.props.arrange.isInverse ? " is-inverse" : "");
        return (
            <figure className={className} style={styleObj}  onClick={this.handleClick} >
                <img  src={this.props.data.imageURL}  alt={this.props.data.title} />
                <figcaption>
                    <h2 className="img-title">{this.props.data.title}</h2>
                    <div className="img-back">
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
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){    /*处理点击*/
        if (this.props.arrange.isCenter) {
            this.props.inverse()
        }else{
            this.props.center();
        }
        e.stopPropagation();
        e.preventDefault();
    }
    render(){     /*渲染函数*/
        let className = "controller-unit" + (this.props.arrange.isCenter ? " is-center" : "")
            + (this.props.arrange.isInverse ? " is-inverse" : "");
        return (
            <span className={className} onClick={this.handleClick} ></span>
        )
    }
}
/*
* canvas效果
*/
class CanvasEffect extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.setCanvas1Attr();
        this.setCanvas2Attr();
        this.setCanvas3Attr();
        $(".snow-canvas").snow();
    }
    setCanvas1Attr(){
        let canvasDOM = ReactDOM.findDOMNode(this.refs.canvas1) , canvas = $(canvasDOM);
        canvas.attr({
            speed : "1" ,
            interaction : "false" ,
            size : "5" ,
            count : "100" ,
            opacity : "0.00001" ,
            "wind-power" : "0" ,
            image : "false" ,
            width : "1272" ,
            height : "150"
        });
    }
    setCanvas2Attr(){
        let canvasDOM = ReactDOM.findDOMNode(this.refs.canvas2) , canvas = $(canvasDOM);
        canvas.attr({
            speed : "3" ,
            interaction : "true" ,
            size : "10" ,
            count : "45" ,
            opacity : "0.00001" ,
            "wind-power" : "3" ,
            image : "false" ,
            width : "1272" ,
            height : "150"
        });
    }
    setCanvas3Attr(){
        let canvasDOM = ReactDOM.findDOMNode(this.refs.canvas3) , canvas = $(canvasDOM);
        canvas.attr({
            speed : "3" ,
            interaction : "true" ,
            size : "12" ,
            count : "35" ,
            "wind-power" : "-5" ,
            image : snowImg ,
            width : "1272" ,
            height : "150"
        });
    }
    render(){     /*渲染函数*/
        let countArr = [80 , 30 , 20];
        return (
            <div>
                <canvas ref="canvas1" className="snow-canvas"></canvas>
                <canvas ref="canvas2" className="snow-canvas"></canvas>
                <canvas ref="canvas3" className="snow-canvas"></canvas>
            </div>
        )
    }
}

/*
* 页面主体
*/
class MainPhotoWall extends React.Component {
    constructor(props) {      /*构造函数*/
        super(props);
        this.Constant = {       //定义界面图片的显示范围的坐标
            centerPos: {    //中心位置
                left : 0 ,
                right : 0
            } ,
            hPosRange: {      //水平方向的取值范围，分为左边的部分和右边的部分
                leftSecX : [0 , 0] ,
                rightSecX : [0 , 0] ,
                y : [0 , 0]
            } ,
            vPosRange: {      //垂直方向的取值范围
                x : [0 , 0],
                topY : [0 , 0]
            }
        };
        this.state = {
            imgsArrangeArr : []
        };
    }
    rearrange(index){       /*图像排列，index为中心图片的索引*/
        let imgsArrangeArr = this.state.imgsArrangeArr , Constant = this.Constant ,
            centerPos = Constant.centerPos , hPosRange = Constant.hPosRange ,
            vPosRange = Constant.vPosRange;
        //第一步：处理位于中心的图片
        let centerImgArr = imgsArrangeArr.splice(index , 1);
        centerImgArr[0] = {
            pos : centerPos ,
            rotate : 0 ,
            isCenter : true
        }
        //第二步：处理中心轴的图片
        let topImgNum = Math.floor(Math.random() * 2);    //即1或0
        let topImgIndex = Math.floor(Math.random() * (imgsArrangeArr.length - topImgNum));
        let topImgArr = imgsArrangeArr.splice(topImgIndex , topImgNum);
        topImgArr.forEach( (val , index) => {
            topImgArr[index] = {
                pos : {
                    top : getRangeRandom(vPosRange.topY[0] , vPosRange.topY[1]) ,
                    left : getRangeRandom(vPosRange.x[0] , vPosRange.x[1])
                } ,
                rotate : get30DegRandom() ,
                isCenter : false
            }
        });
        //第三步：处理左右两侧的图片
        for(let i = 0 , j = imgsArrangeArr.length , k = j/2 ; i < j ; i++){
            let xPosRange = i < k ? hPosRange.leftSecX : hPosRange.rightSecX;
            imgsArrangeArr[i] = {
                pos : {
                    top : getRangeRandom(hPosRange.y[0] , hPosRange.y[1]) ,
                    left : getRangeRandom(xPosRange[0] , xPosRange[1])
                } ,
                rotate : get30DegRandom() ,
                isCenter : false
            }
        }
        //第四步：拼接数组，并重新设置到state中
        if(topImgArr && topImgArr[0]) imgsArrangeArr.splice(topImgIndex , 0 , topImgArr[0]);
        imgsArrangeArr.splice(index , 0 , centerImgArr[0]);
        this.setState({
            imgsArrangeArr : imgsArrangeArr
        });

    }
    inverse(index){      /*图片翻转*/
        return () => {
            let imgsArrangeArr = this.state.imgsArrangeArr;
            imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
            this.setState({
                imgsArrangeArr : imgsArrangeArr
            });
        }
    }
    center(index){      /*图片居中*/
        return () => {
            this.rearrange(index);
        }
    }
    componentDidMount(){     /*渲染完成执行函数*/
        //获取整个界面的高宽，以及相关参数
        let stageDOM = ReactDOM.findDOMNode(this.refs.stage) ,
            stageW = stageDOM.scrollWidth , stageH = stageDOM.scrollHeight ,
            halfStageW = Math.ceil(stageW/2) , halfStageH = Math.ceil(stageH/2);
        //获取imgFigure的高宽，以及相关参数
        let imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0) ,
            imgW = imgFigureDOM.scrollWidth , imgH = imgFigureDOM.scrollHeight ,
            halfImgW = Math.ceil(imgW/2) , halfImgH = Math.ceil(imgH/2);
        //中心图片的位置
        this.Constant.centerPos = {
            left : halfStageW - halfImgW ,
            top : halfStageH - halfImgH
        }
        //左右两边图片位置的取值范围
        this.Constant.hPosRange.leftSecX[0] = -halfImgW;
        this.Constant.hPosRange.leftSecX[1] = halfStageW - 3 * halfImgW;
        this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
        this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
        this.Constant.hPosRange.y[0] = -halfImgH;
        this.Constant.hPosRange.y[1] = stageH - halfImgH;
        //中轴线图片位置取值范围
        this.Constant.vPosRange.x[0] = halfStageW - imgW;
        this.Constant.vPosRange.x[1] = halfStageW;
        this.Constant.vPosRange.topY[0] = -halfImgH;
        this.Constant.vPosRange.topY[0] = halfStageH - 3 * halfImgH;
        //通过随机数获取中心图片索引
        let centerIndex = Math.ceil(Math.random()*10);
        this.rearrange(centerIndex);
    }
    render() {       /*渲染函数*/
        let imgFigures = [] , controlUnits = [];
        imageDatas.forEach((val , index) => {
            if(!this.state.imgsArrangeArr[index]){
                this.state.imgsArrangeArr[index] = {
                    pos : {

                    } ,
                    rotate : 0 ,
                    isInverse : false ,
                    isCenter : false
                };
            }
            imgFigures.push(<ImageFigure data={val}  key={index} ref={'imgFigure' + index}
                        arrange={this.state.imgsArrangeArr[index]}
                        inverse={this.inverse(index)} center={this.center(index)}  />)
            controlUnits.push(<ControllerUnit data={val}  key={index}
                        arrange={this.state.imgsArrangeArr[index]}
                        inverse={this.inverse(index)} center={this.center(index)}  />)
        });

        return (
            <section className="stage" ref="stage" >
                <section className="img-sec">
                    {imgFigures}
                </section>
                <nav className="controller-nav" >
                    {controlUnits}
                </nav>
                <CanvasEffect />
            </section>
        );
    }
}


MainPhotoWall.defaultProps = {
};

export default MainPhotoWall;

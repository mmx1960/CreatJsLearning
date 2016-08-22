/**
 * Created by Administrator on 2016/8/22 0022.
 */

//声明画布元素
var canvas;
//声明舞台
var stage;
//声明文字
var text;
//声明矩形
var rect;

//计数器
var count = 0;




//拿到画布元素
canvas = document.getElementById("gameView");
//创建舞台
stage = new createjs.Stage(canvas);

//创建文字
text = new createjs.Text("Hello World ...","20px Aril","#FFF");
text.x = 150;
text.y = 150;
text.rotation = 20;
stage.addChild(text);
//创建矩形
rect = new createjs.Shape();
stage.addChildAt(rect,0);
//创建定时器
//设定fps
createjs.Ticker.setFPS(100);
createjs.Ticker.addEventListener("tick",handlerTick);
function handlerTick(e)
{

    rect.graphics.clear().beginFill("#f00").drawRect(-10,-10,text.getMeasuredWidth(),50);
    count++;
    text.rotation++;
    rect.x = text.x;
    rect.y = text.y;
    rect.rotation = text.rotation;
    text.text = "Hello World ..."+count+"!";
    stage.update(e);
}
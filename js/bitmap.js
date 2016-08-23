/**
 * Created by Administrator on 2016/8/22 0022.
 */
var stage  = new createjs.Stage("gameView");
var container = new createjs.Container();
var change = true;
stage.addChild(container);
var img = new createjs.Bitmap("img/shabi.png");
var img2 = new createjs.Bitmap("img/shabi2.png");
container.addChild(img2);
createjs.Ticker.setFPS(1);
createjs.Ticker.addEventListener("tick",function(){
    stage.update();
    if(!change){
        container.removeChild(img);
        container.addChild(img2);
        change = true;
    }else
    {
        container.removeChild(img2);
        container.addChild(img);
        change = false;
    }
})

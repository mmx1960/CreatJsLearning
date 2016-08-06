/**
 * Created by Administrator on 2016/8/7.
 */
var stage = new createjs.Stage("gameView");
var gameView = new createjs.Container();
stage.addChild(gameView);

var rect = new createjs.Shape();
rect.graphics.beginFill("#ff0000");
rect.graphics.drawRect(0,0,50,50);
gameView.addChild(rect);

stage.update();



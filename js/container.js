/**
 * Created by Administrator on 2016/8/7.
 */
var stage = new createjs.Stage("gameView");
var gameView = new createjs.Container();
stage.addChild(gameView);

var c = new ChildContainer();
gameView.addChild(c);
stage.update();



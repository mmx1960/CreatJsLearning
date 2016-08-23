/**
 * Created by Administrator on 2016/8/23 0023.
 */

var stage = new createjs.Stage("gameView");
createjs.Ticker.addEventListener("tick",stage);
var mc = new createjs.MovieClip(null,0,true,{start:0});
stage.addChild(mc);
var child1 = new createjs.Shape(
    new createjs.Graphics().beginFill("#999999")
        .drawCircle(30,30,30));
var child2 = new createjs.Shape(
    new createjs.Graphics().beginFill("#5a9cfb")
        .drawCircle(30,30,30));

mc.timeline.addTween(
    createjs.Tween.get(child1)
        .to({x:0}).to({x:60}, 50).to({x:0}, 50));
mc.timeline.addTween(
    createjs.Tween.get(child2)
        .to({x:60}).to({x:0}, 50).to({x:60}, 50));

mc.gotoAndPlay("start");
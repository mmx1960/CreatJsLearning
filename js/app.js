/**
 * Created by Administrator on 2016/8/6.
 */
var stage = new createjs.Stage("gameView");
var text = new createjs.Text("Hello easeljs","36px Arial","#777");
stage.addChild(text);
stage.update();
circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 40);
//Set position of Shape instance.
circle.x = circle.y = 50;
//Add Shape instance to stage display list.
stage.addChild(circle);
//Update stage will render next frame
stage.update();
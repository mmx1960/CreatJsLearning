/**
 * Created by Administrator on 2016/8/7.
 */

function ChildContainer()
{
    var rect = new createjs.Shape();
    rect.graphics.beginFill("#ff0000");
    rect.graphics.drawRect(0,0,50,50);
    rect.graphics.endFill();
    var text  = new createjs.Text("云","30px Arial","#ffffff");
    this.addChild(rect);
    this.addChild(text);
}

ChildContainer.prototype = new createjs.Container();
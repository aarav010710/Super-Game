var canvas = new fabric.Canvas('myCanvas');

var super_y = 10;
var super_x = 10;

block_image_width = 30;
block_image_height = 30;

var super_object = "";
var block_object = "";

function player_update()
{
    fabric.Image.fromURL("avenger_bg.jpg",function(Img)
    {
        super_object = Img;
        super_object.scaleToWidth(150);
        super_object.scaleToHeight(140)
        super_object.set({
            top;super_y,
            left;super_x,
        });
canvas.add(super_object);
    });
}
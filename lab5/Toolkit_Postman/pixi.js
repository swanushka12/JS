// прямоугольник
const app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0xffffff, view: document.getElementById('canvas') });
const rectangle = new PIXI.Graphics();
rectangle.beginFill(0x00bfff); 
rectangle.drawRect(0, 0, 100, 150);
rectangle.endFill();
rectangle.x = app.renderer.width / 2 - 50; 
rectangle.y = app.renderer.height / 2 - 100; 

app.stage.addChild(rectangle);
app.ticker.add(() => 
{
    rectangle.rotation += 0.02; 
});
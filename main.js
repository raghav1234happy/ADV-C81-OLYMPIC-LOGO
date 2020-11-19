canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");


color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.rect(150, 143, 430, 200, 2 );
ctx.stroke();

color = "grey";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "purple";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

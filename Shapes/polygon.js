const PI2 = Math.PI * 2;

const COLORS = [
  	'#483D8B',
 	  '#9400D3',
 	  '#00FFFF',
 	  '#1E90FF',
 	  '#6495ED',
 	  '#bf0040',
 	  '#b2004c',
 	  '#a60059',
 	  '#990066',
 	  '#8c0073',
 	  '#800080',
 	  '#73008c',
]; // color of shapes

export class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }

  animate(ctx, moveX) {
    ctx.save();
    // ctx.fillStyle = '#000'; //color of shape
    // ctx.beginPath();

    const angle = PI2 / this.sides;
    const angle2 = PI2 / 4;

    ctx.translate(this.x, this.y);

    this.rotate -= moveX * 0.008;
    ctx.rotate(this.rotate);

    for(let i = 0 ; i < this.sides; i++){
      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);

      //when spin Rect shape
      ctx.save();
      ctx.fillStyle = COLORS[i];
      ctx.translate(x, y);
      ctx.rotate(((360 / this.sides) * i + 45) * Math.PI / 180);
      ctx.beginPath();
      for (let j = 0; j < 4; j++){
        const x2 = 160 * Math.cos(angle2 * j);
        const y2 = 160 * Math.sin(angle2 * j);
        (j == 0) ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
      }
      ctx.fill();
      ctx.closePath();
      ctx.restore();;
      //when spin Several Rect shape

      // (i == 0) ? ctx.moveTo(x,y) : ctx.lineTo(x, y); //for spin one shapes

      // ctx.beginPath(); // for Spin Several circles
      // ctx.arc(x, y, 30, 0, PI2, false); // for Spin Several circles
      // ctx.fill(); // for Spin Several circles
    }

  // ctx.fill(); //for spin one shapes
  // ctx.closePath(); //for spin one shapes
     ctx.restore();
  }
}
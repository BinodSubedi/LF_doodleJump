export interface BricksInput{
    height:number;
    width:number;
    x:number;
    y:number;
    // src:string
}

export class Bricks{

    width:number;
    height:number;
    x:number;
    y:number;
    color:string = 'white';
    // src:string;

    constructor(input:BricksInput | undefined){

        this.width = input == undefined ? 10 : input.width;
        this.height = input== undefined ? 10 : input.height;
        this.x = input== undefined ? 0 : input.x;
        this.y = input == undefined ? 0 : input.y;
        // this.src = input == undefined ? './assets/doodle_brick-single.png' : input.src;

    }


    create(ctx:CanvasRenderingContext2D){

        // console.log('building rectangle')
        ctx.fillStyle = 'white'
        ctx.fillRect(this.x,this.y,this.width,this.height)

    }

    update(ctx: CanvasRenderingContext2D, x: number | null, y: number | null) {


        if (x != null) {
            this.x = x;
        } else if (y != null) {
            this.y = y;
        }

        ctx.fillRect(this.x, this.y, this.width, this.height);

        // }




    }


}
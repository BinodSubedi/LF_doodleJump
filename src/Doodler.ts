export interface DoodlerInput{
    height:number;
    width:number;
    x:number;
    y:number;
    src:string
}



export class Doodler {

    width: number;
    height: number;
    x: number;
    y: number;
    src: string;
    // image: null | HTMLImageElement = null;

    constructor(input: DoodlerInput | undefined) {

        this.width = input == undefined ? 10 : input.width;
        this.height = input == undefined ? 10 : input.height;
        this.x = input == undefined ? 0 : input.x;
        this.y = input == undefined ? 0 : input.y;
        this.src = input == undefined ? './assets/soccer-left.png' : input.src;

    }


    create(ctx:CanvasRenderingContext2D){

        const image = new Image();

        image.src = this.src;

        // this.image =image;

        image.onload = () => {

            ctx.drawImage(image, this.x,this.y, this.width, this.height);

        }


    }

    update(ctx:CanvasRenderingContext2D, x:number | null, y:number | null){

        // ctx.clearRect(this.x,this.y,this.width,this.height);

        if(x !== null){
            this.x = x;
        }else if(y !== null){
            this.y = y;
        }

        // console.log("x and y::",x,y)

        const image = new Image();

        image.src = this.src;

        // image.onload = () => {

            ctx.drawImage(image, this.x, this.y, this.width, this.height);

        // }



    }

    moveLeft(ctx:CanvasRenderingContext2D){

        const image = new Image();

        image.src = this.src;

        this.x -= 8;

        // image.onload = () => {

        ctx.drawImage(image, this.x, this.y, this.width, this.height);



    }


    moveRigth(ctx: CanvasRenderingContext2D) {

        const image = new Image();

        image.src = this.src;

        this.x += 8;

        // image.onload = () => {

        ctx.drawImage(image, this.x, this.y, this.width, this.height);


    }


    jump(ctx: CanvasRenderingContext2D) {

        const image = new Image();

        image.src = this.src;

        this.y -= 60;

        // image.onload = () => {

        ctx.drawImage(image, this.x, this.y, this.width, this.height);


    }


}
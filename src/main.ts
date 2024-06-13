import './style.css'
import { Bricks, BricksInput } from './Bricks';
import { Doodler, DoodlerInput } from './Doodler';
import Canvas from './Canvas';


const bricksInput:BricksInput = {
  height: 3,
  width: 60,
  x:40,
  y:110,
  // src: './assets/doodle_brick-single.png'
}



interface CanvasInput {
  height: number,
  width: number
}

const canvasInput:CanvasInput = {
  height:600,
  width:380
}

const doodlerInput: DoodlerInput = {
  height: 18,
  width: 60,
  x: 40,
  y: 125,
  src: './assets/soccer-left.png'

}

const doodler = new Doodler(doodlerInput);


// const bricks1 = new Bricks(bricksInput);

const bricksArr:Bricks[] = []

// const levelBricksSpeed = {
//   10: 0.4,
//   20:0.6,
// }


const levelBrickSpeed = (speed:number)=>{

  if(speed < 10){
    return 0.2;
  }else if(speed < 20){
    return 0.4;
  }else if (speed <40){
    return 0.7;
  }else{
    return 0.8;
  }

}

for(let i=0; i<6; i++){

  if(i >0){

  bricksInput.y -= (30)

  }

  bricksArr.push(new Bricks(bricksInput));

}

let score = 0;

enum GameStage{
  start,
  playing
};

let gameStage:GameStage = GameStage.start;

const mainCanvas = new Canvas(`${canvasInput.height}px`,`${canvasInput.width}px`,'canvas','app');
const canvas: HTMLCanvasElement = mainCanvas.create();

const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

const backgroundImage = new Image();

backgroundImage.src = './assets/soccer-bck.png';

if(ctx != null){

  
  // backgroundImage.onload = ()=>{

  // ctx.drawImage(backgroundImage, 0,0,canvasInput.width, canvasInput.height);

  // // const checkRect = new Bricks(undefined);
  // // checkRect.create(ctx);


  //       bricksArr.forEach((el,i)=>{

  //         // switch(score){
  //         //   case (score < 20):
            

  //         // }

  //         console.log(el)

  //         el.create(ctx);

  //       })


  //   const doodlerHolderBrick = new Bricks({ x: doodler.x, y: doodler.y + doodler.height+ 2, height: 3, width: 60 })
  //   doodlerHolderBrick.create(ctx);




  // }






  

  const playerUpdater = ()=>{

  }

 
  const doodlerHolderBrick = new Bricks({ x: doodlerInput.x, y: doodlerInput.y + doodlerInput.height, height: 3, width: 60 })


  const bricksRandomizer = ()=>{

    const x = 20 + Math.floor(Math.random() * 100);

    // const y = 

  }

  const gravity = () => {
    let stopUpdating = false;

    ctx.clearRect(0,0, canvasInput.width, canvasInput.height);

    // backgroundImage.onload = ()=>{


   ctx.drawImage(backgroundImage, 0, 0, canvasInput.width, canvasInput.height);


      bricksArr.forEach((el, i) => {

        // switch(score){
        //   case (score < 20):


        // }

        // console.log(el)

        el.create(ctx);

          // console.log("diff::",doodler.y+doodler.height - el.y);

          // if(i == 0){
          //   console.log('el.y::', doodler.y - doodler.height)
          //   // console.log((doodler.y - doodler.height) - (el.y - el.height))
          // }


          // FIXME: here is the problem, probably in the x-axis we will come back to it later
        if(((doodler.y - doodler.height) - (el.y- el.height) >= -2 && (doodler.y - doodler.height) - (el.y- el.height) <= 0  )&& ((el.x + el.width) >= doodler.x && ((el.x - el.width)+2 <= doodler.x))){

          console.log('main-checker::',(doodler.y - doodler.height) - (el.y- el.height));
          console.log("el.y, doodler.y, el.height, doodler.height",el.y,doodler.y, el.height, doodler.height)

          stopUpdating = true;

        }

      })


      // doodlerHolderBrick.create(ctx);

    if(!stopUpdating){
      // if(gravityState == GravityWorking.still){
        // gravityState = GravityWorking.moving;
      // }

      if(doodler.y == 180){
        window.alert(`Game Over!!! score:${score}`)
        window.location.reload()
      }

     doodler.update(ctx, null, doodler.y + 1)

    }else{
      // if(gravityState == GravityWorking.moving){

      // doodler.update(ctx,null, doodler.y-2)
      // console.log('down down down')
      // gravityState = GravityWorking.still;
      // }
      doodler.update(ctx,null, null)
    }


    //  bricksArr.forEach((el)=>{
    //   if(Math.abs(el.y - doodler) )
    //  })


   ctx.font = "14px serif";
  ctx.fillStyle = 'white'
  ctx.fillText(score.toString(), 24,15, 30);
  
   
  }



  const levelMover = ()=>{

     ctx.clearRect(0,0, canvasInput.width, canvasInput.height);

    // backgroundImage.onload = ()=>{


   ctx.drawImage(backgroundImage, 0, 0, canvasInput.width, canvasInput.height);


      bricksArr.forEach((el, i) => {


        if (el.y > 180) {

          score++;
          
          el.update(ctx, null, 0);

        } else {

          el.update(ctx, null, el.y + levelBrickSpeed(score));
          console.log(el.y);

        }


      })   

    //  doodlerHolderBrick.update(ctx, null, doodlerHolderBrick.y + 0.2) 

  }

  const updateFrames = () => {


    levelMover();
     gravity();
 

    requestAnimationFrame(updateFrames);

  }


 backgroundImage.onload = () => {

      ctx.drawImage(backgroundImage, 0, 0, canvasInput.width, canvasInput.height);

      // const checkRect = new Bricks(undefined);
      // checkRect.create(ctx);

      bricksArr.forEach((el, i) => {

        // switch(score){
        //   case (score < 20):


        // }

if(i == 2){
          
          el.x = 140;
          doodler.x = el.x;
          doodler.y = el.y - 25;

        }else{

        // console.log(el)
        const x = 20 + Math.floor(Math.random() * 120);
        el.x = x;

        }

        el.create(ctx);

      })


      // const doodlerHolderBrick = new Bricks({ x: doodlerInput.x, y: doodlerInput.y + doodler.height + 2, height: 3, width: 60 })
      // doodlerHolderBrick.create(ctx);


      updateFrames();

    
    }




}

window.addEventListener('keydown',(e)=>{
  switch(e.key){
    case 'ArrowLeft':
      doodler.moveLeft(ctx!);
      break;
    case 'ArrowRight':
      doodler.moveRigth(ctx!);
      break;
    case 'ArrowUp':
      doodler.jump(ctx!);
      break;
  }
})
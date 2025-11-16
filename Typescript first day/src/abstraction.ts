// ! abstraction means like sarangsho. you will get a idea of it not the full implementation
//* there are two to do it. 1. interface    && 2. abstract class



// ? WAY-1:
// idea
// interface MediaPlayer {
//     play():void;
//     pause():void;
//     stop():void;
// }


// // implementation
// class MusicPlayer implements MediaPlayer{
//     play() {
//         console.log("Music playing....");
//     }
//     pause() {
//         console.log("Music paused....");
//     }
//     stop() {
//         console.log("Music stoped");
//     }
// }






// ? WAY 2:

// idea
abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}


// implementation
class MusicPlayer extends MediaPlayer{
     play() {
        console.log("Music playing....");
    }
    pause() {
        console.log("Music paused....");
    }
    stop() {
        console.log("Music stoped");
    }
}


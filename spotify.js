console.log('Welcome to spotify')
//Initialize the vairiable
let songIndex=0;
let audioElement=new Audio('ed.mp3');
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songItems=Array.from(document.getElementsByClassName('songItem'))
let next=document.getElementById('next')
let masterSongName=document.getElementById('masterSongName')
let previous=document.getElementById('previous')
let songs=[
    {
        songName: "Photograph-Ed sheeran",
        filePath: "./ed.mp3"
    },
    {
        songName: "I dont wanna live forever",
        filePath: "./lo.mp3"
    },
    {
        songName: " I wanna grow old with you",
        filePath: "./me.mp3"
    },
    {
        songName: "lover",
        filePath: "./so.mp3"
    },
    {
        songName: "august",
        filePath: "./1.mp3"
    },
    {
        songName: "right now",
        filePath: "./2.mp3"
    }
]
songItems.forEach((element,i)=>{
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName
})
//audioElement.play();
//handle play and pause play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0

    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //updateseekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress)
    myProgressBar.value=progress


})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
//listen to song items
const makeAllPlays=()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        makeAllPlays()
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        masterSongName.innerText=songs[songIndex].songName
        audioElement.src=songs[songIndex].filePath
        audioElement.currentTime=0
        audioElement.play()
        gif.style.opacity=1
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')

    })

})
next.addEventListener('click',()=>{
    if(songIndex>5){
        songIndex=0;
        audioElement.src=songs[songIndex].filePath
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime=0
        audioElement.play()
        gif.style.opacity=1
    }
    else{
        songIndex=songIndex+1
        audioElement.src=songs[songIndex].filePath
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime=0
        audioElement.play()
        gif.style.opacity=1
    }

})
previous.addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=5;
        audioElement.src=songs[songIndex].filePath
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime=0
        audioElement.play()
        gif.style.opacity=1
    }
    else{
        songIndex=songIndex-1
        audioElement.src=songs[songIndex].filePath
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime=0
        audioElement.play()
        gif.style.opacity=1
    }

})
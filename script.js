function timeNow(){
    let now = new Date()
    const hour = ((now.getHours()<10?'0':'') + now.getHours())
    const minutes = ((now.getMinutes()<10?'0':'') + now.getMinutes())
    const seconds = ((now.getSeconds()<10?'0':'') + now.getSeconds()) //fazer 0 aparecer para segundos menores que 10

    let time = (hour + ":" + minutes + ":" + seconds)
    
    document.getElementById("time").innerText = time
    let t = setTimeout(function(){ timeNow() }, 1000); //1000ms = 1s //refresh de 1s 

}

timeNow()

function timeNowTokyo(){
    let now = new Date()
    let tokyohour = now.getHours() + 12
    if (tokyohour > 23) {
        tokyohour = now.getHours()-12
    }
    const hour = (((tokyohour)<10?'0':'') + tokyohour)
    const minutes = ((now.getMinutes()<10?'0':'') + now.getMinutes())
    const seconds = ((now.getSeconds()<10?'0':'') + now.getSeconds()) //fazer 0 aparecer para segundos menores que 10

    let time = (hour + ":" + minutes + ":" + seconds)
    
    document.getElementById("timetokyo").innerText = time
    let t = setTimeout(function(){ timeNowTokyo() }, 1000); //1000ms = 1s //refresh de 1s 

}

timeNowTokyo()

function timeNowLondon(){
    let now = new Date()
    let londonhour = now.getHours() + 4
    if (londonhour > 23) {
        londonhour = now.getHours()- 4
    }
    const hour = (((londonhour)<10?'0':'') + londonhour)
    const minutes = ((now.getMinutes()<10?'0':'') + now.getMinutes())
    const seconds = ((now.getSeconds()<10?'0':'') + now.getSeconds()) //fazer 0 aparecer para segundos menores que 10

    let time = (hour + ":" + minutes + ":" + seconds)
    
    document.getElementById("timelondon").innerText = time
    let t = setTimeout(function(){ timeNowLondon() }, 1000); //1000ms = 1s //refresh de 1s 

}

timeNowLondon()
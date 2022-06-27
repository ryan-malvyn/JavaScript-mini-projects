

function workout() {

    const exercise = ['Chest','Legs','Back','Biceps and Triceps','Shoulders','Rest','Cardio']
    const day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    const duration = ['2 hours','90 minutes','60 minutes','30 minutes']

    let randExercise = exercise[Math.floor(Math.random()*7)].toLowerCase();
    let randDay = day[Math.floor(Math.random()*7)]
    let randTime = duration[Math.floor(Math.random()*4)]

    if(randExercise == 'Rest'){
        console.log('Today is ' + randDay +', you should ' + exercise[5].toLowerCase() + '.')
    } else {
        console.log('Today is ' + randDay +', you should train ' + randExercise + ' for ' + randTime)
    }
    
    
}

workout()
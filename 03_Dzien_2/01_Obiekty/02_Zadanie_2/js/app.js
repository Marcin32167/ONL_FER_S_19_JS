const timeMachine = {
    shape: 'square',
    model: 'DeLorean',
    run(date, place){
        console.log(date, place)
    }
}

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run('1780', 'Los Angeles');
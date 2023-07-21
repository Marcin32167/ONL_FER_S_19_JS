// pole/field, to samo co attribute, property

const stairs = {
    step: 0,
    up(){
        this.step++;
    },
    down(){
        this.step--;
    },
    printStep(){
        returnthis.step;
    }
}

stairs.up()
stairs.up()
stairs.up()
stairs.down()
console.log(stairs.printStep())
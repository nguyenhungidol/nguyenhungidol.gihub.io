const fullName = document.querySelector('.aov4n071 .lzcic4wl')
const listNames = [
    '=))',
    'Lap Trinh Vien',
    'Developer',
    'Coder',
    '1+1 =?',
    'I Love You',
]
const objects = []
const listcolors = ['#2199dc', '#225e3', '#22e3d4', '#aa22e3']
var index = 0
class Infor {
    constructor() {
        this.text = listNames[Math.floor(Math.random() * listNames.length)]
        this.color = listcolors[Math.floor(Math.random() * listcolors.length)]
    }
    create() {
        fullName.innerHTML = `<span style = 'color:${this.color}'>${this.text} </span> `
    }
}
function addName() {
    for (let i = 0; i < 20; i++) {
        objects.push(new Infor())
    }
}
addName()
setInterval(() => {
    objects[index].create()
    index++
    if (index == objects.length) {
        index = 0;
    }
}, 200)

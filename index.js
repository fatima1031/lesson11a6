

const weekContainer = document.querySelector('.wrap-week');

const week =[
    "sun",
    "mon",
    "tue",
    "web",
    "thu",
    "fri",
    "sat",
]
const   d = new Date();
const  currentWeekIndex= d . getDay()
console.log(currentWeekIndex,'-index week')
weekContainer.innerHTML=week.map (w => {
     let klass = "" //class
    if (currentWeekIndex ===index){
        klass = "active"
    } else {
        klass = ""
    }

    return`<h4 class="${klass}">${w}</h4>)`.join('')

})
setInterval(showWatch , 1000)

function showWatch (){
    const   d = new Date();
    watch.innerHTML= "<h2>" +d.getHous()+':'+d.getMinutes() + ":" + d.getSeconds() +"<h2>"
}

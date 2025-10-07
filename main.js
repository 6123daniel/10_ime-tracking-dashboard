let subtitles = ['work','play','study','exercise','social','selfCare'];
let period = ['daily','weekly','monthly'];
let time = ['current','previous'];
let previousText;

fetch('data.json').then((response) => {
    if(!response.ok) return console.log('Error retrieving data.json');
    return response.json();

}).then((data) => {
    console.log(data);
    let work = data[0];
    // console.log(work);

    // for each subtitle ['work','play','study','exercise','social','selfCare']
    for (let i=0; i<data.length; i++){
        console.log(data[i]);

        // for each period ['daily','weekly','monthly']
        for (let j=0; j<period.length; j++){
            previousText = setPreviousText(period[j])

            // current or previous
            for (let k=0; k<time.length; k++){
                if (time[k] === 'current'){
                    setCurrentData(subtitles[i], period[j], time[k], data[i]);
                }
                else if (time[k] === 'previous'){
                    setPreviousData(subtitles[i], period[j], time[k], data[i]);
                }
            }
        }
    }
});

function setPreviousText(period) {
    if(period==='daily') {return 'Yesterday - ';}
    else if(period==='weekly') {return 'Last Week - ';}
    else {return 'Last Month - ';} 
}

function setCurrentData(subtitles, period, time, data) {
    document.getElementById(subtitles + '__' + period).innerHTML = (data['timeframes'][period][time]) + 'hrs';
}

function setPreviousData(subtitles, period, time, data) {
    document.getElementById(subtitles + '__' + period + '__previous').innerHTML = (previousText + data['timeframes'][period][time]  + 'hrs');
}

const daily = document.getElementById('option--daily');
const weekly = document.getElementById('option--weekly');
const monthly = document.getElementById('option--monthly');
const dailyData = document.getElementsByClassName('daily');
const dailyPreviousData = document.getElementsByClassName('daily__previous');
const weeklyData = document.getElementsByClassName('weekly');
const weeklyPreviousData = document.getElementsByClassName('weekly__previous');
const monthlyData = document.getElementsByClassName('monthly');
const monthlyPreviousData = document.getElementsByClassName('monthly__previous');


daily.addEventListener ('click', function() {
    // change selector option colors
    daily.style.color = 'white';
    weekly.style.color = 'var(--Purple500)';
    monthly.style.color = 'var(--Purple500)';

    //change data displayed
    for (let i=0;i<dailyData.length;i++){
        setDisplayBlock(dailyData[i]);
        setDisplayBlock(dailyPreviousData[i]);
        setDisplayNone(weeklyData[i]);
        setDisplayNone(weeklyPreviousData[i]);
        setDisplayNone(monthlyData[i]);
        setDisplayNone(monthlyPreviousData[i]);
    }
})

weekly.addEventListener ('click', function() {
    // change selector option colors
    daily.style.color = 'var(--Purple500)';
    weekly.style.color = 'white';
    monthly.style.color = 'var(--Purple500)';

    //change data displayed
    for (let i=0;i<dailyData.length;i++){
        setDisplayNone(dailyData[i]);
        setDisplayNone(dailyPreviousData[i]);
        setDisplayBlock(weeklyData[i]);
        setDisplayBlock(weeklyPreviousData[i]);
        setDisplayNone(monthlyData[i]);
        setDisplayNone(monthlyPreviousData[i]);
    }
})

monthly.addEventListener('click', function() {
    // change selector option colors
    daily.style.color = 'var(--Purple500)';
    weekly.style.color = 'var(--Purple500)';
    monthly.style.color = 'white';

    //change data displayed
    for (let i=0;i<dailyData.length;i++){
        setDisplayNone(dailyData[i]);
        setDisplayNone(dailyPreviousData[i]);
        setDisplayNone(weeklyData[i]);
        setDisplayNone(weeklyPreviousData[i]);
        setDisplayBlock(monthlyData[i]);
        setDisplayBlock(monthlyPreviousData[i]);
    }
})

function setDisplayNone(data) {
    data.style.display = 'none';
}

function setDisplayBlock(data) {
    data.style.display = 'block';
}
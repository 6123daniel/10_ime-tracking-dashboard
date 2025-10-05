let subtitles = ['work','play','study','exercise','social','selfCare'];
let period = ['daily','weekly','monthly'];
let time = ['current','previous'];
let previousText;

fetch('data.json').then((response) => {
    if(!response.ok) return console.log('Error retrieving data.json');
    return response.json();
    // return JSON.parse(response);
}).then((data) => {
    console.log(data);
    let work = data[0];
    console.log(work);

    // for each subtitle ['work','play','study','exercise','social','selfCare']
    for (let i=0; i<data.length; i++){
        console.log(data[i]);

        // for each period ['daily','weekly','monthly']
        for (let j=0; j<period.length; j++){
            if(period[j]==='daily'){
                previousText = 'Yesterday - ';
            }
            else if(period[j]==='weekly'){
                previousText = 'Last Week - ';
            }
            else {
                previousText = 'Last Month - ';
            } 

            // current or previous
            for (let k=0; k<time.length; k++){
                if (time[k] === 'current'){
                    document.getElementById(subtitles[i] + '__' + period[j]).innerHTML = (data[i]['timeframes'][period[j]][time[k]]) + 'hrs';
                }
                else if (time[k] === 'previous'){
                    document.getElementById(subtitles[i] + '__' + period[j] + '__previous').innerHTML = (previousText + data[i]['timeframes'][period[j]][time[k]]  + 'hrs');
                }
            }
        }
    }
});

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
        dailyData[i].style.display = 'block';
        dailyPreviousData[i].style.display = 'block';
        weeklyData[i].style.display = 'none';
        weeklyPreviousData[i].style.display = 'none';
        monthlyData[i].style.display = 'none';
        monthlyPreviousData[i].style.display = 'none';
    }
})

weekly.addEventListener ('click', function() {
    // change selector option colors
    daily.style.color = 'var(--Purple500)';
    weekly.style.color = 'white';
    monthly.style.color = 'var(--Purple500)';

    //change data displayed
    for (let i=0;i<dailyData.length;i++){
        dailyData[i].style.display = 'none';
        dailyPreviousData[i].style.display = 'none';
        weeklyData[i].style.display = 'block';
        weeklyPreviousData[i].style.display = 'block';
        monthlyData[i].style.display = 'none';
        monthlyPreviousData[i].style.display = 'none';
    }
})

monthly.addEventListener('click', function() {
    // change selector option colors
    daily.style.color = 'var(--Purple500)';
    weekly.style.color = 'var(--Purple500)';
    monthly.style.color = 'white';

    //change data displayed
    for (let i=0;i<dailyData.length;i++){
        dailyData[i].style.display = 'none';
        dailyPreviousData[i].style.display = 'none';
        weeklyData[i].style.display = 'none';
        weeklyPreviousData[i].style.display = 'none';
        monthlyData[i].style.display = 'block';
        monthlyPreviousData[i].style.display = 'block';
    }
})

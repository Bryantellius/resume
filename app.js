let name='Ben Bryant';
let career='Full Stack Developer/ Student';
let descrip='Born the year of the Fire Ox';
let interests= ['Running', 'Sports', 'All works by Patrick Rothfuss', 'Hanging with Friends'];
let positions=[{compName: 'Trak Shak', jobTitle: 'Sales Associate', jobInfo: 'Sell and promote running shoes and accesories.'},
    {compName: 'Xpress Timing', jobTitle: 'Staff', jobInfo: 'Use MeetManager and FieldLynx software to time local track and field races.'},
    {compName: 'Birmingham Barons', jobTitle: 'Ticket Associate', jobInfo: 'Sold gameday tickets for home baseball games.'}];
let skills=[{sk: 'Lynx Meet Manager', cool: true},{sk: 'FieldLynx', cool: false}, {sk: 'JavaScript', cool: false}, {sk: 'Piano', cool: true},{sk: 'Public Speaking/Presentation', cool:false}];

function displayInterests(array){
    for(i=0;i<interests.length;i++){
        console.log('* ' + interests[i]);
    };
};

// Alternate function for displaying position values
// function displayPosition(array){
//     for(i=0;i<positions.length;i++){
//         // console.log(i);
//         console.log('* ' + positions[i].jobTitle + ' at ' + positions[i].compName + '- ' + positions[i].jobInfo);
//     };
// };
function displayPosition(compName, jobTitle, jobInfo){
    console.log('* ' + jobTitle + ' at ' + compName + '- ' + jobInfo);
};

function displaySkill(sk, cool){
    if(cool){
        console.log('* Bam: ' + sk);
    }else{
        console.log('* ' +sk)
    };
};

console.log(name);
console.log(career);
console.log(descrip);
console.log('Interests:')
displayInterests(interests);
console.log('Past/Present Positions:')
displayPosition(positions[0].compName, positions[0].jobTitle, positions[0].jobInfo);
displayPosition(positions[1].compName, positions[1].jobTitle, positions[1].jobInfo);
displayPosition(positions[2].compName, positions[2].jobTitle, positions[2].jobInfo);
console.log('Skills:');
displaySkill(skills[0].sk, skills[0].cool);
displaySkill(skills[1].sk, skills[1].cool);
displaySkill(skills[2].sk, skills[2].cool);
displaySkill(skills[3].sk, skills[3].cool);
displaySkill(skills[4].sk, skills[4].cool);
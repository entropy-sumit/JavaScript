//UC1 
const IS_ABSENT=0
let empCheck1=Math.floor(Math.random()*10)%2;
if(empCheck1==IS_ABSENT){
    console.log("Employee isAbsent ");

}else{
    console.log("Employee is Present");
}

//UC2
//const IS_PART_TIME=1;
//const IS_FULL_TIME=2;
//const PART_TIME_HOURS=4;
//const FULL_TIME_HOURS=8;
//const WAGE_PER_HOUR=20;
//{
    //let empHrs=0;
    //let empCheck=Math.floor(Math.random()*10)%3;
    //switch(empCheck){
       // case IS_PART_TIME:
        //empHrs=PART_TIME_HOURS;
        //break;
        //case IS_FULL_TIME:
        //empHrs=FULL_TIME_HOURS;
        //break;
        //default:
           // empHrs=0;
    //}

    //let empWage=empHrs*WAGE_PER_HOUR;
    //console.log("UC2 - Employee wage: "+ empWage);
//}

//UC3
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs=0;
function getWorkingHours(empCheck)
{
    switch(empCheck){
        case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        return empHrs;
      
        case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        return empHrs;
        default:
            empHrs=0;
            return empHrs;

    }
}

let empCheck=Math.floor(Math.random()*10)%3;
let TotalempHrs=getWorkingHours(empCheck);
let empWage=TotalempHrs*WAGE_PER_HOUR;
//console.log("UC3 - Employee wage: "+ empWage);

//UC4
const NUM_OF_WORKING_DAYS=2;
let empHrs1=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs1 += getWorkingHours(empCheck);

}
let TotalempWage=empHrs1*WAGE_PER_HOUR;
//console.log("UC4 - Total Hours "+ TotalempWage);

//uc5
const MAX_HRS_IN_MONTH=100;
let totalempHrs=0;
let totalempHrs1=0;
let totalWorkingDays=0;
while(totalempHrs<=MAX_HRS_IN_MONTH && totalempHrs<=NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    totalempHrs1+=getWorkingHours(empCheck);
}
let empWage2=totalempHrs1*WAGE_PER_HOUR;
console.log("Uc5- Total Days:"+totalWorkingDays+" Total Hours:"+totalempHrs + "EmpWages:"+empWage2);


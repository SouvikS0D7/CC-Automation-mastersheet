page1_def =
`Phase 1 Version 1 Application
<br>
A .html file that loads screens for manual validation and helps the Engineer collect the screenshots in a .pdf file
`
page2_def =
`Phase 2 Version 1 Application
<br>
A .exe file that automatically navigates, validates and reports the Smoke Test status in a .word file while maintaining logs of activity
`
page3_def =
`Phase 2 Version 1 Application
<br>
A .exe file that monitors Outlook and maintains a .xlsx file and a .html dashboard showing status of recent tickets and IU reception
`
page4_def =
`Phase 2 Version 1 Application
<br>
A .exe file that takes in a standard file and matches it with the database to propose a query to update the database with latest data 
`
function load_page_1()
{
    window.open("https://souviks0d7.github.io/Smoke-Test-Automation/");
}
function load_page_2()
{
    window.open("https://souviks0d7.github.io/Smoke-Test-Automation-v2.0/");
}
function load_page_3()
{
    window.open("https://souviks0d7.github.io/TicketTracker/");
}
function load_page_4()
{
    window.open("https://souviks0d7.github.io/DMS-Circuit-Capabilities/");
}

function restore()
{
    document.getElementById('description').innerHTML = "";
    document.getElementById('description').style.padding = "0%";
}

function page1()
{
    document.getElementById('description').innerHTML = page1_def;
    document.getElementById('description').style.padding = "1%";
}
function page2()
{
    document.getElementById('description').innerHTML = page2_def;
    document.getElementById('description').style.padding = "1%";
}
function page3()
{
    document.getElementById('description').innerHTML = page3_def;
    document.getElementById('description').style.padding = "1%";
}
function page4()
{
    document.getElementById('description').innerHTML = page4_def;
    document.getElementById('description').style.padding = "1%";
}

function message()
{
    console.log("This page runs of HTML-CSS-Javascript and is hosted on Github as a Static Webpage")
    console.log("This dashboard is made and maintained by S0D7 as are the applications\nPlease reach out in case of any concern or query")
    console.log("The background image is from Unplash by Steve Johnson")
    console.log('https://unsplash.com/@steve_j?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash')
}



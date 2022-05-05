var events = [
    {'Date': new Date(2022, 3, 30), 'Title': 'Spring Semester is about to end'},
    {'Date': new Date(2022, 3, 1), 'Title': '1 Week till the interim report due', },
    {'Date': new Date(2022, 3, 8), 'Title': 'Interim report due (Soft deadline)', },
    {'Date': new Date(2022, 3, 15), 'Title': 'Spring Break Starts', },
    {'Date': new Date(2022, 3, 22), 'Title': 'Spring Break Ends', },
  ];
  var settings = {};
  var element = document.getElementById('caleandar');
  caleandar(element, events, settings);
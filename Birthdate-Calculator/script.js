function calculateBirthday() {
  // Get the birth date value from the input field
  var birthDate = document.getElementById('birthDate').value;
  
  // Extract the year, month, and day from the birth date
  var year = birthDate.substring(0, 4);
  var month = birthDate.substring(5, 7);
  var day = birthDate.substring(8, 10);

  // Create a Date object representing the birth date
  var birthDateObj = new Date(year, month - 1, day);
  
  // Get the day of the week for the birth date
  var birthDayOfWeek = getDayOfWeek(birthDateObj);

  // Get the current year
  var currentYear = new Date().getFullYear();
  
  // Find the future years where the birthdate falls on the same day of the week
  var futureYears = [];
  
  for (var i = currentYear; i <= currentYear + 130; i++) {
    var currentDate = new Date(i, month - 1, day);
    if (currentDate.getDay() === birthDateObj.getDay()) {
      futureYears.push(i);
    }
  }
  
  // Display the results
  displayResults(birthDayOfWeek, futureYears);
}

// Function to get the day of the week from a Date object
function getDayOfWeek(date) {
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[date.getDay()];
}

// Function to display the results in the HTML
function displayResults(birthDayOfWeek, futureYears) {
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  // Create a heading for the results section
  var messageHeading = document.createElement('h2');
  messageHeading.textContent = 'Results:';
  resultDiv.appendChild(messageHeading);

  // Display the day of the week for the birth date
  var messageParagraph1 = document.createElement('p');
  messageParagraph1.textContent = 'You were born on a ' + birthDayOfWeek + '.';
  resultDiv.appendChild(messageParagraph1);

  // Display the future years where the birthdate falls on the same day
  var messageParagraph2 = document.createElement('p');
  messageParagraph2.textContent = 'In the following years, your birthdate will fall on the same day:';
  resultDiv.appendChild(messageParagraph2);

  // Create a list for the future years
  var yearList = document.createElement('ul');
  futureYears.forEach(function(year) {
    var yearItem = document.createElement('li');
    yearItem.textContent = year;
    yearList.appendChild(yearItem);
  });

  // Display the list of future years
  resultDiv.appendChild(yearList);
}


function calculateBirthday() {
  // Get the birth date value from the input field
  var birthDate = document.getElementById('birthDate').value;
  
  // Extract the year, month, and day from the birth date
  var year = birthDate.substring(0, 4);
  var month = birthDate.substring(5, 7);
  var day = birthDate.substring(8, 10);

  // Create a Date object representing the birth date
  var birthDateObj = new Date(year, month - 1, day);
  
  // Get the day of the week for the birth date
  var birthDayOfWeek = getDayOfWeek(birthDateObj);

  // Get the current year
  var currentYear = new Date().getFullYear();
  
  // Find the future years where the birthdate falls on the same day of the week
  var futureYears = [];
  
  // Display the "Please wait" message
  displayWaitMessage();
  
  // Delay the execution of the results by 3 seconds
  setTimeout(function() {
    for (var i = currentYear; i <= currentYear + 130; i++) {
      var currentDate = new Date(i, month - 1, day);
      if (currentDate.getDay() === birthDateObj.getDay()) {
        futureYears.push(i);
      }
    }
  
    // Display the results
    displayResults(birthDayOfWeek, futureYears);
  }, 3000); // Delay for 3 seconds
}

// Rest of the code...

function displayWaitMessage() {
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  var waitMessage = document.createElement('p');
  waitMessage.textContent = 'Please wait. We are generating results for you...';

  resultDiv.appendChild(waitMessage);
}


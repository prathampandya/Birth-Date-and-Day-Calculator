
    function calculateBirthday() {
      var birthDate = document.getElementById('birthDate').value;
      var year = birthDate.substring(0, 4);
      var month = birthDate.substring(5, 7);
      var day = birthDate.substring(8, 10);

      var birthDateObj = new Date(year, month - 1, day);
      var birthDayOfWeek = getDayOfWeek(birthDateObj);

      var currentYear = new Date().getFullYear();
      var futureYears = [];
      for (var i = currentYear; i <= currentYear + 100; i++) {
        var currentDate = new Date(i, month - 1, day);
        if (currentDate.getDay() === birthDateObj.getDay()) {
          futureYears.push(i);
        }
      }

      displayResults(birthDayOfWeek, futureYears);
    }

    function getDayOfWeek(date) {
      var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return daysOfWeek[date.getDay()];
    }

    function displayResults(birthDayOfWeek, futureYears) {
      var resultDiv = document.getElementById('result');
      resultDiv.innerHTML = '';

      var messageHeading = document.createElement('h2');
      messageHeading.textContent = 'Results:';
      resultDiv.appendChild(messageHeading);

      var messageParagraph1 = document.createElement('p');
      messageParagraph1.textContent = 'You were born on a ' + birthDayOfWeek + '.';
      resultDiv.appendChild(messageParagraph1);

      var messageParagraph2 = document.createElement('p');
      messageParagraph2.textContent = 'In the following years, your birthday will fall on the same day:';
      resultDiv.appendChild(messageParagraph2);

      var yearList = document.createElement('ul');
      futureYears.forEach(function(year) {
        var yearItem = document.createElement('li');
        yearItem.textContent = year;
        yearList.appendChild(yearItem);
      });

      resultDiv.appendChild(yearList);
    }

// Function to save assistant data to local storage
function saveAssistant(event) {
  event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var code = document.getElementById('code').value;
    var email = document.getElementById('email').value;
    var studyLevel = document.getElementById('studyLevel').value;
    var course = document.getElementById('course').value;
  
    // Create assistant object
    var assistant = {
      name: name,
      code: code,
      email: email,
      course: course,
      studyLevel: studyLevel
    };
  
    // Check if local storage is available
    if (typeof(Storage) !== 'undefined') {
      // Retrieve existing assistant data from local storage or initialize empty array
      var assistants = JSON.parse(localStorage.getItem('assistants')) || [];
  
      // Add new assistant to the array
      assistants.push(assistant);
  
      // Save updated assistant data to local storage
      localStorage.setItem('assistants', JSON.stringify(assistants));
  
      // Clear the form fields
      document.getElementById('name').value = '';
      document.getElementById('code').value = '';
      document.getElementById('email').value = '';
      document.getElementById('studyLevel').value = '';
      document.getElementById('course').value = '';
  
      // Refresh the assistant table
      displayassistant();
    } else {
      console.log('Local storage is not supported.');
    }
  }
  
  // Function to display assistants in the table
  function displayassistant() {
    var assistantTableBody = document.getElementById('assistantTableBody');
    assistantTableBody.innerHTML = '';
  
    // Check if local storage is available
    if (typeof(Storage) !== 'undefined') {
      // Retrieve assistant data from local storage
      var assistants = JSON.parse(localStorage.getItem('assistants')) || [];
  
      // Iterate over each assistant and create a table row
      for (var i = 0; i < assistants.length; i++) {
        var assistant = assistants[i];
  
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + assistant.name + '</td>' +
                        '<td>' + assistant.code + '</td>' +
                        '<td>' + assistant.email + '</td>' +
                        '<td>' + assistant.course + '</td>' +
                        '<td>' + assistant.studyLevel + '</td>' +
                        '<td>' +
                          '<button class="badge bg-info text-white" onclick="editassistant(' + i + ')">Edit</button> ' +
                          '<button class="badge bg-danger text-white" onclick="deleteassistant(' + i + ')">Delete</button>' +
                        '</td>';
  
        assistantTableBody.appendChild(row);
      }
    } else {
      console.log('Local storage is not supported.');
    }
  }
  
  // Function to delete a assistant from the table and local storage
  function deleteassistant(index) {
    // Check if local storage is available
    if (typeof(Storage) !== 'undefined') {
      // Retrieve assistant data from local storage
      var assistants = JSON.parse(localStorage.getItem('assistants')) || [];
  
      // Remove the assistant at the specified index from the array
      assistants.splice(index, 1);
  
      // Save updated assistant data to local storage
      localStorage.setItem('assistants', JSON.stringify(assistants));
  
      // Refresh the assistant table
      displayassistant();
    } else {
      console.log('Local storage is not supported.');
    }
  }
  
  // Function to edit a assistant's information
  function editassistant(index) {
    // Check if local storage is available
    if (typeof(Storage) !== 'undefined') {
      // Retrieve assistant data from local storage
      var assistants = JSON.parse(localStorage.getItem('assistants')) || [];
  
      // Get the assistant at the specified index
      var assistant = assistants[index];
  
      // Set the form values with the assistant's information
      document.getElementById('name').value = assistant.name;
      document.getElementById('code').value = assistant.code;
      document.getElementById('email').value = assistant.email;
      document.getElementById('course').value = assistant.course;
      document.getElementById('studyLevel').value = assistant.studyLevel;
  
      // Delete the assistant from the array
      assistants.splice(index, 1);
  
      // Save updated assistant data to local storage
      localStorage.setItem('assistants', JSON.stringify(assistants));
  
      // Refresh the assistant table
      displayassistant();
    } else {
      console.log('Local storage is not supported.');
    }
  }
  
  // Call the displayassistant() function to populate the table on page load
  displayassistant();
  
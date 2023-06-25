// Store the user data
var users = [];


function toggleFormFields() {
  var userType = document.getElementById("userType").value;
  var professorFields = document.getElementById("professorFields");
  var studentFields = document.getElementById("studentFields");
  var tutorFields = document.getElementById("tutorFields");
  var employeeFields = document.getElementById("employeeFields");

  // Hide all form fields
  professorFields.style.display = "none";
  studentFields.style.display = "none";
  tutorFields.style.display = "none";
  employeeFields.style.display = "none";

  // Show the selected user type form fields
  if (userType === "professor") {
    professorFields.style.display = "block";
  } else if (userType === "student") {
    studentFields.style.display = "block";
  } else if (userType === "tutor") {
    tutorFields.style.display = "block";
  } else if (userType === "employee") {
    employeeFields.style.display = "block";
  }
}

function addUser() {
  var userType = document.getElementById("userType").value;
  var name, code, email, course, year, age;

  if (userType === "professor") {
    name = document.getElementById("professorName").value;
    code = document.getElementById("professorCode").value;
    email = document.getElementById("professorEmail").value;
    course = document.getElementById("course").value;
    year = document.getElementById("year").value;
    age = document.getElementById("professorAge").value;
  } else if (userType === "student") {
    name = document.getElementById("studentName").value;
    code = document.getElementById("studentCode").value;
    email = document.getElementById("studentEmail").value;
    year = document.getElementById("studentYear").value;
    age = document.getElementById("studentAge").value;
  } else if (userType === "tutor") {
    name = document.getElementById("tutorName").value;
    code = document.getElementById("tutorCode").value;
    email = document.getElementById("tutorEmail").value;
    course = document.getElementById("tutorCourse").value;
    year = document.getElementById("tutorYear").value;
    age = document.getElementById("tutorAge").value;
  } else if (userType === "employee") {
    name = document.getElementById("employeeName").value;
    code = document.getElementById("employeeCode").value;
    email = document.getElementById("employeeEmail").value;
    age = document.getElementById("employeeAge").value;
  }

  // Create a user object
  var user = {
    userType: userType,
    name: name,
    code: code,
    email: email,
    course: course || "",
    year: year || "",
    age: age,
  };

  // Add user to the array
  users.push(user);

  // Clear form fields
  document.getElementById("userForm").reset();

  // Display the user data in the table
  displayUserData();
}
function displayUserData() {
  var table = document.getElementById("userDataBody");
  var tableHTML = ""; // Variable to store the table HTML

  // Clear table body
  table.innerHTML = "";

  // Generate table rows with user data
  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    // Create a row HTML string
    var rowHTML = `
      <tr>
        <td>${user.userType}</td>
        <td>${user.name}</td>
        <td>${user.code}</td>
        <td>${user.email}</td>
        <td>${user.course || ""}</td>
        <td>${user.year || ""}</td>
        <td>${user.age}</td>
        <td>
          <button class="badge bg-danger text-white" onclick="deleteUser(${i})">Delete</button>
          <button class="badge bg-primary mx-2 text-white" onclick="editUser(${i})">
          Edit
          
          </button>
        </td>
      </tr>
    `;

    // Append the row HTML to the table HTML
    tableHTML += rowHTML;
  }

  // Set the table HTML
  table.innerHTML = tableHTML;

  // Show the table
  document.getElementById("userData").style.display = "table";
}

// function displayUserData() {
//   var table = document.getElementById("userDataBody");

//   // Clear table body
//   table.innerHTML = "";

//   // Add user data to the table
//   for (var i = 0; i < users.length; i++) {
//     var user = users[i];

//     var row = table.insertRow(i);
//     row.insertCell(0).textContent = user.userType;
//     row.insertCell(1).textContent = user.name;
//     row.insertCell(2).textContent = user.code;
//     row.insertCell(3).textContent = user.email;
//     row.insertCell(4).textContent = user.course || "";
//     row.insertCell(5).textContent = user.year || "";
//     row.insertCell(6).textContent = user.age;
//   }
//   // Create the delete button
//   var deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete";

//   deleteButton.addEventListener("click", function () {
//     // Get the index of the clicked row
//     var rowIndex = this.parentNode.parentNode.rowIndex;

//     // Remove the corresponding user from the users array
//     users.splice(rowIndex - 1, 1);

//     // Update the table display
//     displayUserData();
//   });
//   row.insertCell(7).appendChild(deleteButton);

//   // Show the table
//   document.getElementById("userData").style.display = "table";
// }
// function displayUserData() {
//   var table = document.getElementById("userDataBody");

//   // Clear table body
//   table.innerHTML = "";

//   // Add user data to the table
//   for (var i = 0; i < users.length; i++) {
//     var user = users[i];

//     var row = table.insertRow(i);

//     // Create cells for each column
//     var userTypeCell = row.insertCell(0);
//     var nameCell = row.insertCell(1);
//     var codeCell = row.insertCell(2);
//     var emailCell = row.insertCell(3);
//     var courseCell = row.insertCell(4);
//     var yearCell = row.insertCell(5);
//     var ageCell = row.insertCell(6);
//     var actionsCell = row.insertCell(7);

//     // Set the cell values
//     userTypeCell.textContent = user.userType;
//     nameCell.textContent = user.name;
//     codeCell.textContent = user.code;
//     emailCell.textContent = user.email;
//     courseCell.textContent = user.course || "";
//     yearCell.textContent = user.year || "";
//     ageCell.textContent = user.age;

//     // Create the delete button
//     var deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.classList.add("badge", "bg-danger", "text-white");
//     deleteButton.addEventListener("click", (function(index) {
//       return function() {
//         deleteUser(index);
//       };
//     })(i));

//     // Create the edit button
//     var editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.classList.add("badge", "bg-primary","mx-2", "text-white");
//     editButton.addEventListener("click", (function(index) {
//       return function() {
//         editUser(index);
//       };
//     })(i));

//     // Add the buttons to the actions cell
//     actionsCell.appendChild(deleteButton);
//     actionsCell.appendChild(editButton);
//   }

//   // Show the table
//   document.getElementById("userData").style.display = "table";
// }

function deleteUser(index) {
  // Remove the user from the users array based on the index
  users.splice(index, 1);

  // Refresh the displayed user data
  displayUserData();
}

document
  .getElementById("buttonSubmit")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addUser();
  });

// Function to filter and update the table based on user type
function filterTable() {
  var filterInput = document.getElementById("filterUserType");
  var selectedUserType = filterInput.value;
  var table = document
    .getElementById("userDataBody")
    .getElementsByTagName("tr");

  // Loop through all table rows and show/hide based on user type
  for (var i = 0; i < table.length; i++) {
    var row = table[i];
    var userTypeCell = row.getElementsByTagName("td")[0];
    var userType = userTypeCell.textContent || userTypeCell.innerText;

    if (selectedUserType === "all" || userType === selectedUserType) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

// Listen for changes in the filter select input
document
  .getElementById("filterUserType")
  .addEventListener("change", function () {
    filterTable();
  });

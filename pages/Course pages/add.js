// Define an empty array to store the form data
const formData = [];
const courseForm = document.querySelector(".course-form")
// Get a reference to the form element
const submitCourse = document.getElementById("submit-course");

// Add an event listener to the form's submit event
submitCourse.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the input values
  const name = document.getElementById("nameInput").value;
  const code = document.getElementById("codeInput").value;
  const description = document.getElementById("descriptionInput").value;
  const image = document.getElementById("imageInput").value;
  const studyLevel = document.getElementById("studyLevelInput").value;
  const semester = document.getElementById("semesterInput").value;

  // Create an object to store the form data
  const entry = {
    name: name,
    code: code,
    description: description,
    image: image,
    studyLevel: studyLevel,
    semester: semester,
  };

  // Add the entry to the formData array
  formData.push(entry);

  // Reset the form
  courseForm.reset();

  // Display the form data (you can modify this part to suit your needs)
  console.log(formData);
  
});

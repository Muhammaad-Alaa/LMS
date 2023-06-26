// Retrieve the stored form data from the local storage
const storedData = localStorage.getItem("formData");
const formData = storedData ? JSON.parse(storedData) : [];

// Function to display the array of courses
function displayCourses() {
  const courseList = document.querySelector(".list-courses");
  courseList.innerHTML = "";

  formData.forEach((course, index) => {
    courseList.innerHTML += `
    <div  class="col-sm-12 pb-3 col-md-6 col-lg-4 ">
                          <div style="height:380px" class="card shadow w-100">
                             <img
                             style="object-fit: contain"
                               class="card-img-top w-100 p-2"
                           src=${course.image}
                           alt="Card image cap"
                         />
                         <div class="card-body d-flex flex-column justify-content-between ">
                              <h5 class="card-title">${course.name}</h5>
                              <p class="card-text">
                              ${course.description}
                              </p>
                              <a href="/pages/Course pages/course.html?name=${encodeURIComponent(
                                course.name
                              )}" class="btn btn-primary">View The Content</a>
                              <button class="btn btn-danger mt-2 mb-2" onClick="deleteCourse(${index})">delete</button>
                            </div>
                          </div>
                        </div>
    `;
  });
}
// Function to delete a course
function deleteCourse(index) {
  formData.splice(index, 1);
  localStorage.setItem("formData", JSON.stringify(formData));
  displayCourses();
}
displayCourses();

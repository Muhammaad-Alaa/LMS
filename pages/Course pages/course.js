
// Get the course name from the URL query parameter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const courseName = urlParams.get("name");

// Update the element with the course name
const courseNameElement = document.getElementById("course-name");
courseNameElement.textContent = courseName;// Add Content button
const addContentBtn = document.getElementById('add-content-btn');
addContentBtn.addEventListener('click', () => {
  const contentForm = document.getElementById('content-form');
  contentForm.style.display = 'block';

  const assignmentForm = document.getElementById('assignment-form');
  assignmentForm.style.display = 'none';
});

// Add Assignment button
const addAssignmentBtn = document.getElementById('add-assignment-btn');
addAssignmentBtn.addEventListener('click', () => {
  const contentForm = document.getElementById('content-form');
  contentForm.style.display = 'none';

  const assignmentForm = document.getElementById('assignment-form');
  assignmentForm.style.display = 'block';
});

// // Submit Content button
// const submitContentBtn = document.getElementById('submit-content-btn');
// submitContentBtn.addEventListener('click', () => {
//   const contentNameInput = document.getElementById('content-name');
//   const contentFileInput = document.getElementById('content-file');
  
//   const contentName = contentNameInput.value;
//   const contentFile = contentFileInput.files[0];

//   // Create a new div to display the content
//   const contentDiv = document.createElement('div');
//   contentDiv.style.cssText = 'margin-bottom: 10px; background-color: white; display: block';

//   const contentNameSpan = document.createElement('span');
//   contentNameSpan.style.cssText = 'margin-bottom: 10px; display: block';
//   contentNameSpan.textContent = contentName;

//   // Create a link to open the file in a new tab
//   const openLink = document.createElement('a');
//   openLink.href = URL.createObjectURL(contentFile);
//   openLink.target = "_blank";
//   openLink.textContent = "view content";

//   // Create a button to download the file
//   const downloadBtn = document.createElement('button');
//   downloadBtn.textContent = "Download";
//   downloadBtn.addEventListener('click', () => {
//     const downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(contentFile);
//     downloadLink.download = contentFile.name;
//     downloadLink.click();
//   });

//   // Add the content name, open link, and download button to the content div
//   contentDiv.appendChild(contentNameSpan);
//   contentDiv.appendChild(openLink);
//   contentDiv.appendChild(downloadBtn);

//   // Add the content div to the content list
//   const contentList = document.getElementById('content-list');
//   contentList.appendChild(contentDiv);

//   // Reset the form and hide it
//   contentNameInput.value = '';
//   contentFileInput.value = '';
//   const contentForm = document.getElementById('content-form');
//   contentForm.style.display = 'none';
// });

// // Submit Assignment button
// const submitAssignmentBtn = document.getElementById('submit-assignment-btn');
// submitAssignmentBtn.addEventListener('click', () => {
//   const assignmentFileInput = document.getElementById('assignment-file');
//   const assignmentFile = assignmentFileInput.files[0];

//   // Create a new div to display the assignment
//   const assignmentDiv = document.createElement('div');
//   const assignmentNameSpan = document.createElement('span');
//   assignmentNameSpan.textContent = "Assignment: " + assignmentFile.name;

//   // Create a link to download the assignment file
//   const downloadBtn = document.createElement('button');
//   downloadBtn.textContent = "Download";
//   downloadBtn.addEventListener('click', () => {
//     const downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(assignmentFile);
//     downloadLink.download = assignmentFile.name;
//     downloadLink.click();
//   });

//   // Add the assignment name and download button to the assignment div
//   assignmentDiv.appendChild(assignmentNameSpan);
//   assignmentDiv.appendChild(downloadBtn);

//   // Add the assignment div to the content list
//   const contentList = document.getElementById('content-list');
//   contentList.appendChild(assignmentDiv);

//   // Reset the form and hide it
//   assignmentFileInput.value = '';
//   const assignmentForm = document.getElementById('assignment-form');
//   assignmentForm.style.display = 'none';
// });

// // Delete All Content button
// const deleteAllContentBtn = document.getElementById('delete-all-content-btn');
// deleteAllContentBtn.addEventListener('click', () => {
//   const contentList = document.getElementById('content-list');
//   contentList.innerHTML = '';
// });
// Submit Content button
const submitContentBtn = document.getElementById('submit-content-btn');
submitContentBtn.addEventListener('click', () => {
  const contentNameInput = document.getElementById('content-name');
  const contentFileInput = document.getElementById('content-file');
  
  const contentName = contentNameInput.value;
  const contentFile = contentFileInput.files[0];

  // Create the HTML code as a string
  const contentDiv = `<div class="p-3 shadow rounded d-flex flex-column justify-content-between " style="margin-bottom: 10px; background-color: white" >
                        <h4 class="mb-2 text-danger">${contentName}</h4>
                        <a class="mb-2" href="${URL.createObjectURL(contentFile)}" target="_blank">view content</a>
                        <svg class="text-danger" onclick="downloadFile('${URL.createObjectURL(contentFile)}', '${contentFile.name}')" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cloud-download-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                      </svg>
                                         
                      </div>`;
  
  // Add the content div to the content list by setting the innerHTML
  const contentList = document.getElementById('content-list');
  contentList.innerHTML += contentDiv;

  // Reset the form and hide it
  contentNameInput.value = '';
  contentFileInput.value = '';
  const contentForm = document.getElementById('content-form');
  contentForm.style.display = 'none';
});

// Submit Assignment button
const submitAssignmentBtn = document.getElementById('submit-assignment-btn');
submitAssignmentBtn.addEventListener('click', () => {
  const assignmentFileInput = document.getElementById('assignment-file');
  const assignmentFile = assignmentFileInput.files[0];
 // Create the HTML code as a string

  const assignmentDiv = `<div class="d-flex shadow rounded flex-column p-3" style="margin-bottom: 10px; background-color: white">
                            <span>Assignment: ${assignmentFile.name}</span>
                             <svg class="text-danger" onclick="downloadFile('${URL.createObjectURL(assignmentFile)}', '${assignmentFile.name}')" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
                             <path  d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                           </svg>
                        </div>`;




  // Add the assignment div to the content list by setting the innerHTML
  const contentList = document.getElementById('content-list');
  contentList.innerHTML += assignmentDiv;

  // Reset the form and hide it
  assignmentFileInput.value = '';
  const assignmentForm = document.getElementById('assignment-form');
  assignmentForm.style.display = 'none';
});



// Function to download a file
function downloadFile(url, fileName) {
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = fileName;
  downloadLink.click();
}

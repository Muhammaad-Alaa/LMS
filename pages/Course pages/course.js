// Add Content button
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
  const contentDiv = `<div class="p-3 d-flex flex-column justify-content-between " style="margin-bottom: 10px; background-color: white" >
                        <h4 class="mb-2 text-danger">${contentName}</h4>
                        <a class="mb-2" href="${URL.createObjectURL(contentFile)}" target="_blank">view content</a>
                        <button  class="btn btn-primary w-25" onclick="downloadFile('${URL.createObjectURL(contentFile)}', '${contentFile.name}')">Download</button>
                        
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
  const assignmentDiv = `<div class="d-flex flex-column">
                            <span>Assignment: ${assignmentFile.name}</span>
                            <button class="btn btn-danger mt-2 w-25" onclick="downloadFile('${URL.createObjectURL(assignmentFile)}', '${assignmentFile.name}')">Download</button>
                        </div>`;

  // Add the assignment div to the content list by setting the innerHTML
  const contentList = document.getElementById('content-list');
  contentList.innerHTML += assignmentDiv;

  // Reset the form and hide it
  assignmentFileInput.value = '';
  const assignmentForm = document.getElementById('assignment-form');
  assignmentForm.style.display = 'none';
});

// Delete All Content button
const deleteAllContentBtn = document.getElementById('delete-all-content-btn');
deleteAllContentBtn.addEventListener('click', () => {
  const contentList = document.getElementById('content-list');
  contentList.innerHTML = '';
});

// Function to download a file
function downloadFile(url, fileName) {
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = fileName;
  downloadLink.click();
}

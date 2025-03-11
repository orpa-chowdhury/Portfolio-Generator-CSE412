// ----------------------------
// REGEX VALIDATION & UTILITIES
// ----------------------------

const strRegex = /^[a-zA-Z\s]*$/; // letters and whitespace only
const numRegex = /^[0-9\s]*$/; // numbers and whitespace only
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex =
  /^[\+]?[(]?[0-9]{2,4}[)]?[-\s\.]?[0-9]{3,5}[-\s\.]?[0-9]{4,6}$/im;
const digitRegex = /^\d+$/;

const validType = {
  TEXT: "text",
  TEXT_EMP: "text_emp",
  EMAIL: "email",
  DIGIT: "digit",
  PHONENO: "phoneno",
  ANY: "any",
  NUMBER: "number",
};

// ----------------------------
// ELEMENT SELECTION
// ----------------------------

// Main form
const mainForm = document.getElementById("cv-form");

// Input elements from the form
let fullNameElem = mainForm.fullName,
  imageElem = mainForm.image,
  designationElem = mainForm.designation,
  addressElem = mainForm.address,
  emailElem = mainForm.email,
  phonenoElem = mainForm.phoneno,
  summaryElem = mainForm.summary,
  githubElem = mainForm.github,
  linkedinElem = mainForm.linkedin,
  facebookElem = mainForm.facebook;

// Preview display elements
let nameDsp = document.getElementById("fullname_dsp"),
  imageDsp = document.getElementById("image_dsp"),
  phonenoDsp = document.getElementById("phoneno_dsp"),
  emailDsp = document.getElementById("email_dsp"),
  addressDsp = document.getElementById("address_dsp"),
  designationDsp = document.getElementById("designation_dsp"),
  summaryDsp = document.getElementById("summary_dsp"),
  githubDsp = document.getElementById("github_dsp"),
  linkedinDsp = document.getElementById("linkedin_dsp"),
  facebookDsp = document.getElementById("facebook_dsp"),
  skillsDsp = document.getElementById("skills_dsp"),
  educationsDsp = document.getElementById("educations_dsp"),
  experiencesDsp = document.getElementById("experiences_dsp"),
  projectsDsp = document.getElementById("projects_dsp"),
  achievementsDsp = document.getElementById("achievements_dsp");

// ----------------------------
// HELPER FUNCTIONS
// ----------------------------

// Given attribute names and a list of node lists, create an array of objects with key/value pairs.
const fetchValues = (attrs, ...nodeLists) => {
  let elemsDataCount = nodeLists[0].length;
  let tempDataArr = [];
  for (let i = 0; i < elemsDataCount; i++) {
    let dataObj = {};
    for (let j = 0; j < attrs.length; j++) {
      dataObj[attrs[j]] = nodeLists[j][i].value;
    }
    tempDataArr.push(dataObj);
  }
  return tempDataArr;
};

// Validate an input element against a given type
function validateFormData(elem, elemType, elemName) {
  if (elemType === validType.TEXT) {
    if (!strRegex.test(elem.value) || elem.value.trim().length === 0)
      addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }
  if (elemType === validType.NUMBER) {
    if (!numRegex.test(elem.value) || elem.value.trim().length === 0)
      addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }
  if (elemType === validType.DIGIT) {
    if (!digitRegex.test(elem.value) || elem.value.trim().length === 0)
      addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }
  if (elemType === validType.TEXT_EMP) {
    if (!strRegex.test(elem.value)) addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }
  if (elemType === validType.EMAIL) {
    if (!emailRegex.test(elem.value) || elem.value.trim().length === 0)
      addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }
  if (elemType === validType.PHONENO) {
    if (!phoneRegex.test(elem.value) || elem.value.trim().length === 0)
      addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }
  if (elemType === validType.ANY) {
    if (elem.value.trim().length === 0) addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }
}

// Add error message to an element's next sibling (assumed to be the error container)
function addErrMsg(elem, msg) {
  if (elem.nextElementSibling) {
    elem.nextElementSibling.innerHTML = `${msg} is invalid`;
  }
}

// Remove error message
function removeErrMsg(elem) {
  if (elem.nextElementSibling) {
    elem.nextElementSibling.innerHTML = "";
  }
}

// Render a list of objects into a container element.
const showListData = (listData, container) => {
  container.innerHTML = "";
  listData.forEach((item) => {
    let itemElem = document.createElement("div");
    itemElem.classList.add("preview-item");
    for (let key in item) {
      let subItem = document.createElement("span");
      subItem.classList.add("preview-item-val");
      subItem.textContent = item[key];
      itemElem.appendChild(subItem);
    }
    container.appendChild(itemElem);
  });
};

// ----------------------------
// GET USER INPUTS
// ----------------------------

const getUserInputs = () => {
  // Experiences
  let expRoleElems = document.querySelectorAll(".exp_role"),
    expCompanyElems = document.querySelectorAll(".exp_company"),
    expStartDateElems = document.querySelectorAll(".exp_start_date"),
    expEndDateElems = document.querySelectorAll(".exp_end_date"),
    expDescriptionElems = document.querySelectorAll(".exp_description");

  // Educations
  let eduDegreeElems = document.querySelectorAll(".edu_degree"),
    eduSchoolElems = document.querySelectorAll(".edu_school"),
    eduStartDateElems = document.querySelectorAll(".edu_start_date"),
    eduEndDateElems = document.querySelectorAll(".edu_end_date"),
    eduDescriptionElems = document.querySelectorAll(".edu_description");

  // Projects
  let projTitleElems = document.querySelectorAll(".proj_title"),
    projLinkElems = document.querySelectorAll(".proj_link"),
    projDescriptionElems = document.querySelectorAll(".proj_description");

  // Achievements
  let achieveTitleElems = document.querySelectorAll(".achieve_title"),
    achieveDescriptionElems = document.querySelectorAll(".achieve_description");

  // Skills (both soft and technical)
  let softSkillElems = document.querySelectorAll(".soft_skill"),
    technicalSkillElems = document.querySelectorAll(".technical_skill");

  // Fetch values from repeater groups and combine the skills arrays
  let softSkills = fetchValues(["soft_skill"], softSkillElems);
  let technicalSkills = fetchValues(["technical_skill"], technicalSkillElems);
  let combinedSkills = [...softSkills, ...technicalSkills];

  return {
    fullName: fullNameElem.value,
    // For image, we return the File object (used later in previewImage)
    image: imageElem.files[0] ? imageElem.files[0] : null,
    designation: designationElem.value,
    address: addressElem.value,
    email: emailElem.value,
    phoneno: phonenoElem.value,
    summary: summaryElem.value,
    github: githubElem.value,
    linkedin: linkedinElem.value,
    facebook: facebookElem.value,
    experiences: fetchValues(
      [
        "exp_role",
        "exp_company",
        "exp_start_date",
        "exp_end_date",
        "exp_description",
      ],
      expRoleElems,
      expCompanyElems,
      expStartDateElems,
      expEndDateElems,
      expDescriptionElems
    ),
    educations: fetchValues(
      [
        "edu_degree",
        "edu_school",
        "edu_start_date",
        "edu_end_date",
        "edu_description",
      ],
      eduDegreeElems,
      eduSchoolElems,
      eduStartDateElems,
      eduEndDateElems,
      eduDescriptionElems
    ),
    projects: fetchValues(
      ["proj_title", "proj_link", "proj_description"],
      projTitleElems,
      projLinkElems,
      projDescriptionElems
    ),
    skills: combinedSkills,
    achievements: fetchValues(
      ["achieve_title", "achieve_description"],
      achieveTitleElems,
      achieveDescriptionElems
    ),
  };
};

// ----------------------------
// DISPLAY CV / UPDATE PREVIEW
// ----------------------------

const displayCV = (data) => {
  nameDsp.textContent = data.fullName;
  phonenoDsp.textContent = data.phoneno;
  emailDsp.textContent = data.email;
  addressDsp.textContent = data.address;
  designationDsp.textContent = data.designation;
  summaryDsp.textContent = data.summary;
  githubDsp.textContent = data.github;
  linkedinDsp.textContent = data.linkedin;
  facebookDsp.textContent = data.facebook;

  // Update list containers using helper function
  showListData(data.experiences, experiencesDsp);
  showListData(data.educations, educationsDsp);
  showListData(data.projects, projectsDsp);
  showListData(data.skills, skillsDsp);
  showListData(data.achievements, achievementsDsp);
};

// ----------------------------
// GENERATE & PRINT FUNCTIONS
// ----------------------------

// Called on keyup/onchange events to update preview
const generateCV = () => {
  let data = getUserInputs();
  displayCV(data);
  console.log(data);
};

// Display the selected image in preview using FileReader
function previewImage() {
  if (imageElem.files && imageElem.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      imageDsp.src = e.target.result;
    };
    reader.readAsDataURL(imageElem.files[0]);
  }
}

// Print the CV
function printCV() {
  window.print();
}

// ----------------------------
// OPTIONAL: ADD EVENT LISTENERS FOR VALIDATION
// ----------------------------

fullNameElem.addEventListener("keyup", (e) =>
  validateFormData(e.target, validType.TEXT, "Full Name")
);
designationElem.addEventListener("keyup", (e) =>
  validateFormData(e.target, validType.TEXT, "Designation")
);
addressElem.addEventListener("keyup", (e) =>
  validateFormData(e.target, validType.ANY, "Address")
);
emailElem.addEventListener("keyup", (e) =>
  validateFormData(e.target, validType.EMAIL, "Email")
);
phonenoElem.addEventListener("keyup", (e) =>
  validateFormData(e.target, validType.PHONENO, "Phone Number")
);
summaryElem.addEventListener("keyup", (e) =>
  validateFormData(e.target, validType.ANY, "Short Bio")
);
// Social links are optional; you can add validations if needed.
document.getElementById("downloadCV").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF({
    orientation: "portrait", // or "landscape" if needed
    unit: "px", // Change unit if needed
  });

  let cvElement = document.getElementById("cv-container"); // ID of the CV section

  html2canvas(cvElement, { scale: 2 }).then((canvas) => {
    let imgData = canvas.toDataURL("image/png");
    let imgWidth = doc.internal.pageSize.getWidth();
    let imgHeight = (canvas.height * imgWidth) / canvas.width;

    doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    doc.save("CV.pdf");
  });
});

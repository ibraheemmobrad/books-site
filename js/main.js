
function addService(serviceName) {

  service_container.classList.add("service");

  document.body.appendChild(service_container);
  services.appendChild(service_container);

  service_container.appendChild(service_name);
}
function addNewz(newzHead, newzDetails) {
  const newz = document.getElementById("tab8");
  const newz_container = document.createElement("div");
  const newz_head_container = document.createElement("h2");
  const newz_head = document.createTextNode(newzHead);
  const newz_details_container = document.createElement("p");
  const newz_details = document.createTextNode(newzDetails);

  newz_container.classList.add("newz");

  document.body.appendChild(newz_container);
  newz.appendChild(newz_container);
  newz_container.appendChild(newz_head_container);
  newz_head_container.appendChild(newz_head);
  newz_container.appendChild(newz_details_container);
  newz_details_container.appendChild(newz_details);
}
function addPhase(phaseId, phaseName, phaseTab) {
  const phases = document.getElementById(phaseTab);
  const phase_container = document.createElement("div");
  const phase_head_container = document.createElement("h2");
  const phase_head = document.createTextNode(phaseName);

  phase_container.setAttribute("id",phaseId)
  phase_container.classList.add("phase");

  document.body.appendChild(phase_container);
  phases.appendChild(phase_container);
  phase_container.appendChild(phase_head_container);
  phase_head_container.appendChild(phase_head);
}
function addClass(classId, className, classPhase) {
  const classes = document.getElementById(classPhase);
  const class_container = document.createElement("details");
  const class_name_container = document.createElement("summary");
  const class_name = document.createTextNode(className);
  const class_content = document.createElement("ul");

  class_container.classList.add("class");
  class_content.setAttribute("id",classId)
  class_content.classList.add("class-content");

  document.body.appendChild(class_container);
  classes.appendChild(class_container);
  class_container.appendChild(class_name_container);
  class_name_container.appendChild(class_name);
  class_container.appendChild(class_content);
}
function addClassContent(classContentName, classContentClass, classContentPath) {
  const class_contents = document.getElementById(classContentClass);
  const class_content_container = document.createElement("li");
  const class_content_name_container = document.createElement("a");
  const class_content_name = document.createTextNode(classContentName);

class_content_name_container.setAttribute("href",classContentPath)

document.body.appendChild(class_content_container);
class_contents.appendChild(class_content_container);
class_content_container.appendChild(class_content_name_container);
  class_content_name_container.appendChild(class_content_name)
}
addPhase("phase2","المرحلة المتوسطة","tab2");
addClass("class6","الصف السادس","phase2");
addClass("class7","الصف السابع","phase2");
addClass("class8","الصف الثامن","phase2");
addClass("class9","الصف التاسع","phase2");
addClassContent("الكويت والوطن العربي","class7","books/المرحلة المتوسطة/الصف السابع/كلى الفصلين/الكويت والوطن العربي - الصف السابع.docx")
addClassContent("التربية الإسلامية - الفصل الدراسي الثاني","class7","books/المرحلة المتوسطة/الصف السابع/الفصل الدراسي الثاني/التربية الإسلامية - الصف السابع - الفصل الدراسي الثاني.docx")
addClassContent("العلوم - الفصل الدراسي الثاني","class7","books/المرحلة المتوسطة/الصف السابع/الفصل الدراسي الثاني/العلوم - الصف السابع - الفصل الدراسي الثاني.docx")
addClassContent("التربية الإسلامية - الفصل الدراسي الأول","class8","books/المرحلة المتوسطة/الصف الثامن/الفصل الدراسي الأول/التربية الإسلامية - الصف الثامن - الفصل الدراسي الأول.docx")
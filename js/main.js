// add service function
function addService(serviceName) {
  const services = document.getElementById("services");
  const service_container = document.createElement("p");
  const service_name = document.createTextNode(serviceName);

  service_container.classList.add("service");

  document.body.appendChild(service_container);
  services.appendChild(service_container);

  service_container.appendChild(service_name);
}
// add phase function
function addPhase(phaseId, phaseName, phaseTab) {
  const phases = document.getElementById(phaseTab);
  const phase_container = document.createElement("div");
  const phase_head_container = document.createElement("h2");
  const phase_head = document.createTextNode(phaseName);

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
  class_content.classList.add("class-content");

  document.body.appendChild(class_container);
  classes.appendChild(class_container);
  class_container.appendChild(class_name_container);
  class_name_container.appendChild(class_name);
  class_container.appendChild(class_content);
}
function addBook(bookId, bookName, bookClass, bookPath) {
  const books = document.getElementById(bookClass);
  const book_container = document.createElement("li");
  const book_name_container = document.createElement("a");
  const book_name = document.createTextNode(bookName);

  document.body.appendChild(book_container);
  book_container.appendChild(book_name_container);
  book_name_container.appendChild(book_name);
}
addPhase(1,"المرحلة التجريبية","tab2")
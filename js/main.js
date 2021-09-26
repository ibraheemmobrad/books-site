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

  phase_container.setAttribute("id", phaseId);
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
  class_content.setAttribute("id", classId);
  class_content.classList.add("class-content");

  document.body.appendChild(class_container);
  classes.appendChild(class_container);
  class_container.appendChild(class_name_container);
  class_name_container.appendChild(class_name);
  class_container.appendChild(class_content);
}
function addClassContent(
  classContentName,
  classContentClass,
  classContentPath
) {
  const class_contents = document.getElementById(classContentClass);
  const class_content_container = document.createElement("li");
  const class_content_name_container = document.createElement("a");
  const class_content_name = document.createTextNode(classContentName);

  class_content_name_container.setAttribute("href", classContentPath);

  document.body.appendChild(class_content_container);
  class_contents.appendChild(class_content_container);
  class_content_container.appendChild(class_content_name_container);
  class_content_name_container.appendChild(class_content_name);
}
addPhase("phase2", "المرحلة المتوسطة", "tab2");
addClass("class6", "الصف السادس", "phase2");
addClass("class7", "الصف السابع", "phase2");
addClass("class8", "الصف الثامن", "phase2");
addClass("class9", "الصف التاسع", "phase2");
addClassContent(
  "الكويت والوطن العربي",
  "class7",
  "books/المرحلة المتوسطة/الصف السابع/كلى الفصلين/الكويت والوطن العربي - الصف السابع.docx"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الثاني",
  "class7",
  "books/المرحلة المتوسطة/الصف السابع/الفصل الدراسي الثاني/اللغة العربية - الصف السابع - الفصل الدراسي الثاني.docx"
);
addClassContent(
  "العلوم - الفصل الدراسي الثاني",
  "class7",
  "books/المرحلة المتوسطة/الصف السابع/الفصل الدراسي الثاني/العلوم - الصف السابع - الفصل الدراسي الثاني.docx"
);
addClassContent(
  "التربية الإسلامية - الفصل الدراسي الأول",
  "class8",
  "books/المرحلة المتوسطة/الصف الثامن/الفصل الدراسي الأول/التربية الإسلامية - الصف الثامن - الفصل الدراسي الأول.docx"
);
addClassContent(
  "الكويت والعالم",
  "class9",
  "books/المرحلة المتوسطة/الصف التاسع/كلى الفصلين/الكويت والعالم - الصف التاسع.docx"
);
addClassContent(
  "التربية الإسلامية - الفصل الدراسي الأول",
  "class9",
  "books/المرحلة المتوسطة/الصف التاسع/الفصل الدراسي الأول/التربية الإسلامية - الصف التاسع - الفصل الدراسي الاول.docx"
);
addClassContent(
  "الرياضيات - الفصل الدراسي الأول",
  "class9",
  "books/المرحلة المتوسطة/الصف التاسع/الفصل الدراسي الأول/الرياضيات - الصف التاسع - الفصل الدراسي الاول.docx"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الأول",
  "class9",
  "books/المرحلة المتوسطة/الصف التاسع/الفصل الدراسي الأول/اللغة العربية - الصف التاسع - الفصل الدراسي الاول.docx"
);
addPhase("phase3", "المرحلة الثانوية", "tab2");
addClass("class10", "الصف العاشر", "phase3");
addPhase("phase4", "المرحلة الإبتدائية", "tab3");
addClass("class13", "الصف الأول", "phase4");
addClassContent(
  "التربية الإسلامية - الفصل الدراسي الأول",
  "class13",
  "https://www.moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/1/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9%20%20%D8%B5%201%20%D8%AC%201.pdf"
);
addClassContent(
  "الخط العربي - الفصل الدراسي الأول",
  "class13",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/1/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AE%D8%B7%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%20%D8%B5%201.pdf"
);
addClassContent(
  "الرياضيات - الفصل الدراسي الأول",
  "class13",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/1/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B5%201%20%D8%AC%201.pdf"
);
addClassContent(
  "العلوم - الفصل الدراسي الأول",
  "class13",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/1/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%B5%201%20%D8%AC%201.pdf"
);
addClassContent(
  "القرآن الكريم",
  "class13",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/1/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D8%B5%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية تدريبات - الفصل الدراسي الأول",
  "class13",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/1/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%20%D8%B5%201%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية - الفصل الدراسي الأول",
  "class13",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/1/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D8%B5%201%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الأول",
  "class13",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/1/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%84%D8%BA%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%B5%201%20%D8%AC%201.pdf"
);
addClass("class14", "الصف الثاني", "phase4");
addClassContent(
  "التربية الإسلامية - الفصل الدراسي الأول",
  "class14",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/2/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9%20%D8%B5%202%20%D8%AC%201.pdf"
);
addClassContent(
  "الرياضيات - الفصل الدراسي الأول",
  "class14",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/2/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B5%202%20%D8%AC%201.pdf"
);
addClassContent(
  "العلوم - الفصل الدراسي الأول",
  "class14",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/2/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%B5%202%20%D8%AC%201.pdf"
);
addClassContent(
  "القرآن الكريم",
  "class14",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/2/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D8%B5%202.pdf"
);
addClassContent(
  "اللغة الإنجليزية تدريبات - الفصل الدراسي الأول",
  "class14",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/2/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%20%D8%B5%202%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية - الفصل الدراسي الأول",
  "class14",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/2/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D8%B5%202%20%D8%AC%201.pdf"
);
addClassContent(
  "الخط العربي - الفصل الدراسي الأول",
  "class14",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/2/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AE%D8%B7%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%20%D8%B5%202.pdf"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الأول",
  "class14",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/2/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%84%D8%BA%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%B5%202%20%D8%AC%201.pdf"
);
addClass("class15", "الصف الثالث", "phase4");
addClassContent(
  "التربية الإسلامية - الفصل الدراسي الأول",
  "class15",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/3/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9%20%D8%B5%203%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الأول",
  "class15",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/3/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AE%D8%B7%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%20%D8%B5%203.pdf"
);
addClassContent(
  "الرياضيات - الفصل الدراسي الأول",
  "class15",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/3/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B5%203%20%D8%AC%201.pdf"
);
addClassContent(
  "العلوم - الفصل الدراسي الأول",
  "class15",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/3/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%B5%203%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية تدريبات - الفصل الدراسي الأول",
  "class15",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/3/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%20%D8%B5%203%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية - الفصل الدراسي الأول",
  "class15",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/3/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%20%D8%B5%203%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية كراسة الكتبة",
  "class15",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/3/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D9%83%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%D8%A9%20%20%D8%B5%203.pdfhttps://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/3/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%84%D8%BA%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%B5%203%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الأول",
  "class15",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/3/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%84%D8%BA%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%B5%203%20%D8%AC%201.pdf"
);
addClassContent(
  "القرإن الكريم",
  "class15",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/3/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%85%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D8%B5%203.pdf"
);
addClass("class16", "الصف الرابع", "phase4");
addClassContent(
  "التربية الإسلامية - الفصل الدراسي الأول",
  "class16",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/4/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9%20%D8%B5%204%20%D8%AC%201.pdf"
);
addClassContent(
  "الخط العربي - الفصل الدراسي الأول",
  "class16",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/4/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AE%D8%B7%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%20%D8%B5%204.pdf"
);
addClassContent(
  "العلوم - الفصل الدراسي الأول",
  "class16",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/4/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%B5%204%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية تدريبات - الفصل الدراسي الأول",
  "class16",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/4/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%20%D8%B5%204%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية - الفصل الدراسي الأول",
  "class16",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/4/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D8%B5%204%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية كراسة الكتابة",
  "class16",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/4/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D9%83%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%D8%A9%20%D8%B5%204.pdf"
);
addClassContent(
  "بلادي الكويت - الفصل الدراسي الأول",
  "class16",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/4/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A8%D9%84%D8%A7%D8%AF%D9%8A%20%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA%20%D8%B5%204.pdf"
);
addClassContent(
  "عالمنا الرقمي - الفصل الدراسي الأول",
  "class16",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/4/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%B9%D8%A7%D9%84%D9%85%D9%86%D8%A7%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%20%D8%B5%204%20%D8%AC%201.pdf"
);
addClassContent(
  "الرياضيات - الفصل الدراسي الأول",
  "class16",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/4/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B5%204%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الأول",
  "class16",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/4/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%84%D8%BA%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%B5%204%20%D8%AC%201.pdf"
);
addClassContent(
  "القرآن الكريم",
  "class16",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/4/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%85%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D9%82%D8%B1%D8%A3%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D8%B5%204.pdf"
);
addClass("class17", "الصف الخامس", "phase4");
addClassContent(
  "التربية الإسلامية - الفصل الدراسي الأول",
  "class17",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/5/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9%20%D8%B5%205%20%D8%AC%201.pdf"
);
addClassContent(
  "الرياضيات - الفصل الدراسي الأول",
  "class17",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/5/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B5%205%20%D8%AC%201.pdf"
);
addClassContent(
  "العلوم - الفصل الدراسي الأول",
  "class17",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/5/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%B5%205%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية تدريبات - الفصل الدراسي الأول",
  "class17",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/5/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%20%D8%B5%205%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية - الفصل الدراسي الأول",
  "class17",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/5/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D8%B5%205%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة الإنجليزية كراسة الكتابة - الفصل الدراسي الأول",
  "class17",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/5/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D9%83%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%D8%A9%20%D8%B5%205.pdf"
);
addClassContent(
  "بلادي الكويت - الفصل الدراسي الأول",
  "class17",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/5/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A8%D9%84%D8%A7%D8%AF%D9%8A%20%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA%20%D8%B5%205.pdf"
);
addClassContent(
  "عالمنا الرقمي - الفصل الدراسي الأول",
  "class17",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/5/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%B9%D8%A7%D9%84%D9%85%D9%86%D8%A7%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%20%D8%B5%205%20%D8%AC%201.pdf"
);
addClassContent(
  "القرآن الكريم",
  "class17",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/5/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%B5%205.pdf"
);
addClassContent(
  "الخط العربي - الفصل الدراسي الأول",
  "class17",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/5/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%83%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D8%AE%D8%B7%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%20%D8%B5%205.pdf"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الأول",
  "class17",
  "https://www.moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/2%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9/5/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%84%D8%BA%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%B5%205%20%D8%AC%201.pdf"
);
addPhase("phase5", "المرحلة المتوسطة", "tab3");
addClass("class18", "الصف السادس", "phase5");
addClassContent(
  "الإقتصاد المنزلي - الفصل الدراسي الأول",
  "class18",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/6/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%20%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%20%D8%B5%206.pdf"
);
addClassContent(
  "التربية الإسلامية - الفصل الدراسي الأول",
  "class18",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/6/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9%20%D8%B5%206%20%D8%AC%201.pdf"
);
addClassContent(
  "الكويت والخليج العربي",
  "class18",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/6/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9%20%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA%20%D9%88%20%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%B56.pdf"
);
addClassContent(
  "الرياضيات - الفصل الدراسي الأول",
  "class18",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/6/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B5%206%20%D8%AC%201.pdf"
);
addClassContent(
  "العلوم - الفصل الدراسي الأول",
  "class18",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/6/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%B5%206%20%D8%AC%201.pdf"
);
addClassContent(
  "القرآن الكريم",
  "class18",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/6/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D8%B5%206.pdf"
);
addClassContent(
  "اللغة الإنجليزية تدريبات",
  "class18",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/6/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%20%D8%B5%206.pdf"
);
addClassContent(
  "اللغة الإنجليزية",
  "class18",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/6/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D8%B5%206.pdf"
);
addClassContent(
  "تقنية المعلومات - الفصل الدراسي الأول",
  "class18",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/6/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9%20%D8%B56%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الأول",
  "class18",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/7/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%84%D8%BA%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%B5%207%20%D8%AC%201.pdf"
);
addClass("class19", "الصف السابع", "phase5");
addClassContent(
  "الاقتصاد المنزلي - الفصل الدراسي الأول",
  "class19",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/7/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%20%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%20%D8%B57.pdf"
);
addClassContent(
  "التربية الإسلامية - الفصل الدراسي الأول",
  "class19",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/7/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9%20%D8%B5%207%20%D8%AC%201.pdf"
);
addClassContent(
  "الكويت والوطن العربي",
  "class19",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/7/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9%20%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA%20%D9%88%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%20%D8%B5%207.pdf"
);
addClassContent(
  "الرياضيات - الفصل الدراسي الأول",
  "class19",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/7/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B5%207%20%D8%AC%201.pdf"
);
addClassContent(
  "العلوم - الفصل الدراسي الأول",
  "class19",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/7/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%B5%207%20%D8%AC%201.pdf"
);
addClassContent(
  "القرآن الكريم",
  "class19",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/7/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D8%B5%207.pdf"
);
addClassContent(
  "اللغة الإنجليزية تدريبات",
  "class19",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/7/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%20%D8%B5%207.pdf"
);
addClassContent(
  "اللغة الإنجليزية",
  "class19",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/7/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D8%B5%207.pdf"
);
addClassContent(
  "عالم التقنية - الفصل الدراسي الأول",
  "class19",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/7/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9%20%D8%B57%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الأول",
  "class19",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/7/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%84%D8%BA%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%B5%207%20%D8%AC%201.pdf"
);
addClass("class20", "الصف الثامن", "phase5");
addClassContent(
  "الاقتصاد المنزلي - الفصل الدراسي الأول",
  "class20",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/8/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%20%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%20%D8%B5%208.pdf"
);
addClassContent(
  "التربية الإسلامية - الفصل الدراسي الأول",
  "class20",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/8/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9%20%D8%B5%208%20%D8%AD%201.pdf"
);
addClassContent(
  "الكويت والعالم الإسلامي - الفصل الدراسي الأول",
  "class20",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/8/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9%20%D8%AF%D9%88%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA%20%D9%88%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%20%D8%B5%208.pdf"
);
addClassContent(
  "الرياضيات - الفصل الدراسي الأول",
  "class20",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/8/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B5%208%20%D8%AC%201.pdf"
);
addClassContent(
  "العلوم - الفصل الدراسي الأول",
  "class20",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/8/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%B5%208%20%D8%AC%201.pdf"
);
addClassContent(
  "القرآن الكريم",
  "class20",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/8/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D8%B5%208.pdf"
);
addClassContent(
  "اللغة الإنجليزية تدريبات",
  "class20",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/8/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%20%D8%B5%208.pdf"
);
addClassContent(
  "اللغة الإنجليزية",
  "class20",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/8/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D8%B5%208.pdf"
);
addClassContent(
  "عالم التقنية - الفصل الدراسي الأول",
  "class20",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/8/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9%20%D8%B5%208%20%D8%AC%201.pdf"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الأول",
  "class20",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/8/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%84%D8%BA%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%B5%208%20%D8%AC%201.pdf"
);
addClass("class21", "الصف التاسع", "phase5");
addClassContent(
  "الاقتصاد المنزلي - الفصل الدراسي الأول",
  "class21",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/9/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%20%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%20%D8%B5%209%20.pdf"
);
addClassContent(
  "التربية الإسلامية - الفصل الدراسي الأول",
  "class21",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/9/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9%20%D8%B5%209%20%D8%AC%201.pdf"
);
addClassContent(
  "الرياضيات - الفصل الدراسي الأول",
  "class21",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/9/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%D8%B5%209%20%D8%AC%201.pdf"
);
addClassContent(
  "العلوم - الفصل الدراسي الأول",
  "class21",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/9/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%B5%209%20%D8%AC%201.pdf"
);
addClassContent(
  "القرآن الكريم",
  "class21",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/9/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85%20%D8%B5%209.pdf"
);
addClassContent(
  "الكويت والعالم - الفصل الدراسي الأول",
  "class21",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/9/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA%20%D9%88%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%B5%209.pdf"
);
addClassContent(
  "اللغة الإنجليزية تدريبات",
  "class21",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/9/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%20%D8%B5%209.pdf"
);
addClassContent(
  "اللغة الإنجليزية",
  "class21",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/9/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9%20%D8%B7%D8%A7%D9%84%D8%A8%20%D8%B5%209.pdf"
);
addClassContent(
  "اللغة العربية - الفصل الدراسي الأول",
  "class21",
  "https://moe.edu.kw/student/curriculum/%D9%83%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%202021%20-%202022/3%20%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%D8%A9/9/%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84/%D9%84%D8%BA%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%B5%209%20%D8%AC%201.pdf"
);
addPhase("phase6", "المرحلة الثانوية", "tab3");
addClass("class22", "الصف العاشر", "phase6");
addClass("class23", "الصف الحادي عشر", "phase6");

function addquestion(questionHead, questionDetails) {
  const questions = document.getElementById("questions");
  const question_container = document.createElement("section");
  const question_head_container = document.createElement("h2");
  const question_head = document.createTextNode(questionHead);
  const question_details_container = document.createElement("bre");
  const question_details = document.createTextNode(questionDetails);

  question_container.classList.add("question");

  document.body.appendChild(question_container);
  questions.appendChild(question_container);
  question_container.appendChild(question_head_container);
  question_head_container.appendChild(question_head);
  question_container.appendChild(question_details_container);
  question_details_container.appendChild(question_details);
}
function addNewz(newzHead, newzDetails) {
  const newz = document.getElementById("tab9");
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
  class_content.classList.add("class-contents");

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
  const class_content_name_container = document.createElement("p");
  const class_content_name = document.createTextNode(classContentName);
  const classContentView =document.createElement("a")
  const classContentViewContent =document.createTextNode("????????????")

  class_content_container.classList.add("class-content");
  classContentView.classList.add("view")
  classContentView.setAttribute("href", classContentPath);

  document.body.appendChild(class_content_container);
  class_contents.appendChild(class_content_container);
  class_content_container.appendChild(class_content_name_container)
  class_content_name_container.appendChild(class_content_name);
  class_content_container.appendChild(classContentView)
  classContentView.appendChild(classContentViewContent)
}
function addTeamMember(
  teamMemberImg,
  teamMemberName,
  teamMemberWork,
  teamMemberDetails
) {
  const team_members = document.getElementById("team-members");
  const team_member_container = document.createElement("section");
  const team_member_img = document.createElement("img");
  const team_member_head_container = document.createElement("h3");
  const team_member_head = document.createTextNode(teamMemberName);
  const team_member_work_container = document.createElement("h3");
  const team_member_work = document.createTextNode(teamMemberWork);
  const team_member_details_container = document.createElement("p");
  const team_member_details = document.createTextNode(teamMemberDetails);

  team_member_container.classList.add("team-member");
  team_member_img.classList.add("team-member-img");
  team_member_img.setAttribute("src", teamMemberImg);

  document.body.appendChild(team_member_container);
  team_members.appendChild(team_member_container);
  team_member_container.appendChild(team_member_img);
  team_member_container.appendChild(team_member_work_container);
  team_member_container.appendChild(team_member_head_container);
  team_member_container.appendChild(team_member_details_container);
  team_member_head_container.appendChild(team_member_head);
  team_member_work_container.appendChild(team_member_work);
  team_member_details_container.appendChild(team_member_details);
}

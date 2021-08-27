function add_seen(id, name, tab_name) {
  var seen_container = document.createElement("div");
  seen_container.appendChild(document.getElementById(tab_name));
  var seen_head = document.createElement("h2");
  seen_head.createAttribute("class");
  seen_container.ATTRIBUTE_NODE("phase-head");
  seen_head.TEXT_NODE(name);
  seen_head.appendChild(seen_container);
}
add_seen(1, "المرحلة الإبتدائية", "tab1-1");
add_seen(2, "المرحلة المتوسطة", "tab1-1");

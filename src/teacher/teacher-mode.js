export function renderTeacherNote(container, enabled, text) {
  container.replaceChildren();
  if (enabled && text) {
    const label = document.createElement('b'); label.textContent = 'TEACHER MODE · ';
    container.append(label, document.createTextNode(text));
  }
  container.hidden = !(enabled && text);
}

let projectCount = 3;

function addProject() {
  const name = prompt("Enter Project Name:");
  if (!name) return;

  const projectList = document.getElementById("projectList");

  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h3>${name}</h3>
    <p>Status: In Progress</p>
    <div class="progress">
      <div style="width:10%"></div>
    </div>
  `;

  projectList.appendChild(card);

  projectCount++;
  document.getElementById("totalProjects").innerText = projectCount;
}

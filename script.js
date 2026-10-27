const jobs = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Coimbatore",
    salary: "₹15,000 - ₹25,000/month",
    type: "Full-time"
  },
  {
    title: "Web Developer Intern",
    company: "Digital Works",
    location: "Chennai",
    salary: "₹8,000 - ₹12,000/month",
    type: "Internship"
  },
  {
    title: "React Developer",
    company: "Code World",
    location: "Bangalore",
    salary: "₹25,000 - ₹40,000/month",
    type: "Full-time"
  },
  {
    title: "UI Developer",
    company: "Creative Tech",
    location: "Coimbatore",
    salary: "₹18,000 - ₹30,000/month",
    type: "Part-time"
  }
];

function displayJobs(list) {
  const jobList = document.getElementById("jobList");
  document.getElementById("count").textContent =
    `${list.length} job(s) found`;

  jobList.innerHTML = "";

  if (list.length === 0) {
    jobList.innerHTML = "<p>No jobs found. Try another search.</p>";
    return;
  }

  list.forEach((job) => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <p><strong>Job Type:</strong> ${job.type}</p>
      <button onclick="applyJob('${job.title}')">Apply Now</button>
      <button class="save-btn"
        onclick="saveJob('${job.title}')">Save Job</button>
    `;

    jobList.appendChild(card);
  });
}

function searchJobs() {
  const keyword = document
    .getElementById("keyword").value.toLowerCase().trim();

  const location = document
    .getElementById("location").value.toLowerCase().trim();

  const filteredJobs = jobs.filter((job) => {
    const matchesKeyword =
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword);

    const matchesLocation =
      job.location.toLowerCase().includes(location);

    return matchesKeyword && matchesLocation;
  });

  displayJobs(filteredJobs);
}

function applyJob(title) {
  alert(`You selected ${title}! Please contact the company to apply.`);
}

function saveJob(title) {
  let savedJobs = JSON.parse(
    localStorage.getItem("savedJobs") || "[]"
  );

  if (savedJobs.includes(title)) {
    alert("This job is already saved!");
    return;
  }

  savedJobs.push(title);
  localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  alert("Job saved successfully!");
}

displayJobs(jobs);
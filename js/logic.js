//portfolio titel
let portfolioTitel = "shehab Ahmed";
document.title = portfolioTitel;

//selected element
let settingElement = document.querySelector(".setting");
let settingIcon = document.querySelector(".setting .setting_icon");
let settingIconi = document.querySelector(".setting .setting_icon i");
let colorsElements = document.querySelectorAll(".setting .colors span");
let navElement = document.querySelector("aside .nav");
let asideElement = document.querySelector("aside");
let ullinks = document.querySelectorAll("aside ul li a");
let jopsElement = document.querySelector(".intro h3 .jops");
let portfolioContainer = document.querySelector(".portfolio_container");
let projectElements = document.querySelectorAll(".project_box");
let haspclinks = document.querySelectorAll("aside ul li a");
let haspc = document.querySelectorAll(".main_container");
let meBtnlink = document.querySelector(".me_btn a");
console.log(meBtnlink);

//options
let jopsList = [
  "front-end Developer",
  "web Developer",
  "problem solver",
  "Responsible at Resala Association",
  "team leader",
];

let projectsNameList = [
  "guess word game",
  "fast typing",
  "image slider",
  "kasper",
  "like each other",
  "fun review",
];

//show aside
navElement.onclick = function () {
  asideElement.classList.toggle("active");
};

//make one link only active
arrlinks = Array.from(ullinks);
arrlinks.push(meBtnlink);

arrlinks.forEach((e) => {
  e.addEventListener("click", function () {
    ullinks.forEach((e) => {
      e.classList.remove("active");
    });
    haspc.forEach((e) => {
      e.classList.remove("active");
      e.style.position = "fixed";
    });

    e.classList.add("active");
    const id = e.href.split("#").pop(); // get the last part after the last '#'
    haspc.forEach((element) => {
      if (element.classList.contains(id)) {
        element.classList.add("active");
      }
    });
  });
});

//show themes
settingIcon.onclick = function () {
  settingElement.classList.toggle("active");
  settingIconi.classList.toggle("active");
};
//make one color only active
colorsElements.forEach((e) => {
  e.addEventListener("click", function () {
    colorsElements.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    document.documentElement.style.setProperty(
      "--maincolor",
      `${e.dataset.color}`
    );
  });
});

//show jops
let index = 0;
let delay = 200; // Delay for typing effect
let wordDelay = 1000; // Delay between words

function displayJobs() {
  if (index >= jopsList.length) {
    index = 0; // Reset to the first job if we've gone through the list
  }

  let word = jopsList[index];
  jopsElement.innerHTML = ""; // Clear previous characters

  // كتابة كل حرف مع تأخير
  for (let i = 0; i < word.length; i++) {
    setTimeout(() => {
      let char = document.createElement("span");
      char.textContent = word[i];
      jopsElement.appendChild(char);
    }, delay * i); // Delay each character's appearance
  }

  // استدعاء الدالة مرة أخرى بعد عرض الكلمة
  index++;
  setTimeout(displayJobs, delay * word.length + wordDelay); // Delay before showing the next word
}

// Start the display process
displayJobs();

//show my project when click on it
projectElements.forEach((e, index) => {
  e.addEventListener("click", function () {
    //create things
    overlayout = document.createElement("div");
    projectwindow = document.createElement("div");
    projectName = document.createElement("h2");
    projectVedioContainer = document.createElement("div");
    projectVedio = document.createElement("video");
    closeIcon = document.createElement("span");
    //class to access
    overlayout.classList.add("overlayout");
    projectwindow.classList.add("project_window");
    projectName.classList.add("project_name");
    projectVedioContainer.classList.add("project_Vedio");
    closeIcon.classList.add("close_icon");
    //add content
    projectName.textContent = projectsNameList[index];
    projectVedio.src = `imgs/${projectsNameList[index]}.mp4`;
    projectVedio.controls = true; // Adds controls to the video
    projectVedio.autoplay = true; // Autoplay enabled
    closeIcon.textContent = "X";
    //appinding
    projectVedioContainer.appendChild(projectVedio);
    projectwindow.appendChild(projectName);
    projectwindow.appendChild(projectVedioContainer);
    projectwindow.appendChild(closeIcon);
    //portfolioContainer.appendChild(projectwindow);
    document.body.appendChild(projectwindow);
    document.body.appendChild(overlayout);

    //close
    closeIcon.onclick = function () {
      projectwindow.remove();
      overlayout.remove();
    };
  });
});
window.onload = function () {
  haspc[0].classList.add("active");
};

//Global variables

let delay;

// Elements
const buttonSeeMore = document.querySelector(".buttonIcon");
const ourProdjectsStatTitle = document.querySelector(".ourProjects-title");
const ourProdjectsStatFirst = document.querySelector(
  ".ourProjects-statistics--first"
);
const ourProdjectsStatSecond = document.querySelector(
  ".ourProjects-statistics--second"
);
const ourProdjectsButton = document.querySelector(".ourProjects-button");
const bannerOurProjects = document.querySelector(".banner-ourProjects");
const spacer = document.querySelector(".spacer");
const mainScreenBanner = document.querySelector(".mainScreen-banner");
const mainSidePanel = document.querySelector(".mainScreen-sidePanel");
const mainHeader = document.querySelector(".mainScreen-header");
const mainProject = document.querySelector(".mainScreen-projectGroup");
const header = document.querySelector(".header");
const logo = document.querySelector(".logo");

// Helpers

const setExitingAnimation = () => {
  ourProdjectsStatTitle.classList.add("ourProjects-title--exiting");
  ourProdjectsStatFirst.classList.add("ourProjects-statistics--exiting");
  ourProdjectsStatSecond.classList.add("ourProjects-statistics--exiting");
  ourProdjectsButton.classList.add("ourProjects-button--exiting");
  bannerOurProjects.classList.add("banner-ourProjects--expanded");
};

const visibleSpacer = () => {
  spacer.classList.add("spacer--visible");
};

const createSpacer = () => {
  const windowWidth = document.documentElement.clientWidth;
  const tabletScreenWidth = 1100;
  const mobileScreenWidth = 840;

  if (windowWidth > mobileScreenWidth) {
    if (windowWidth > tabletScreenWidth) {
      delay = 2500;
    } else {
      delay = 2000;
    }
  } else {
    delay = 1000;
  }

  setTimeout(visibleSpacer, delay);
};

const hideBanner = () => {
  const totalDelay = delay + 1000;
  setTimeout(
    () => mainScreenBanner.classList.add("mainScreen-banner--hidden"),
    totalDelay
  );
};

const hideSidePanel = () => {
  const totalDelay = delay + 1000;
  setTimeout(
    () => mainSidePanel.classList.add("mainScreen-sidePanel--hidden"),
    totalDelay
  );
};

const hideHeader = () => {
  const totalDelay = delay + 1000;
  setTimeout(
    () => mainHeader.classList.add("mainScreen-header--hidden"),
    totalDelay
  );
};

const visibleHeader = () => {
  const totalDelay = delay + 1000;
  setTimeout(
    () => mainHeader.classList.add("mainScreen-header--visible"),
    totalDelay
  );
};

const visibleProject = () => {
  const totalDelay = delay + 1000;
  setTimeout(
    () => mainProject.classList.add("mainScreen-projectGroup--visible"),
    totalDelay
  );
};

const deleteSpacer = () => {
  const totalDelay = delay + 1000;
  setTimeout(() => spacer.classList.remove("spacer--visible"), totalDelay);
};

const invertHeader = () => {
  const totalDelay = delay + 1000;
  setTimeout(() => header.classList.add("header--inverted"), totalDelay);
};

const invertLogo = () => {
  const totalDelay = delay + 1000;
  setTimeout(() => logo.classList.add("logo--inverted"), totalDelay);
};

// Handlers
handleButtonSeeMoreClick = () => {
  setExitingAnimation();
  createSpacer();
  hideBanner();
  hideSidePanel();
  hideHeader();
  deleteSpacer();
  invertHeader();
  invertLogo();
  visibleHeader();
  visibleProject();
};

// Events
buttonSeeMore.addEventListener("click", handleButtonSeeMoreClick);

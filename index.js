// set the variables
const openModal = document.getElementById('button');
const openModalTwo = document.getElementById('button-2');
const closeModal = document.getElementById('close-btn');
const closeModalTwo = document.getElementById('close-btn-Two');
const modal = document.getElementById('first-modal');
const modalTwo = document.getElementById('second-modal');
const sideMenu = document.getElementById('sideMenu');
const closeSideBtn = document.getElementById('side-btn');
const openSideBar = document.getElementById('sidebar');
let sideList = document.querySelectorAll('.side-nav-list');
let sideListNav = Array.from(sideList);
sideListNav.map((element) => element.addEventListener('click', listDisapper));

// Add event to open modal
openModal.addEventListener('click', openTheModal);
openModalTwo.addEventListener('click', openTheModalTwo);

// Add event to close modal
closeModal.addEventListener('click', closeTheModal);
closeModalTwo.addEventListener('click', closeTheModalTwo);

// Add event to window
document.addEventListener('click', closeModalWindow);
document.addEventListener('click', closeModalWindowTwo);

// Add event to open side bar
openSideBar.addEventListener('click', openSideMenu);

// Add event to close side bar
closeSideBtn.addEventListener('click', closeSideMenu);

// Open modal
function openTheModal() {
  modal.style.display = 'block';
}

function openTheModalTwo() {
  modalTwo.style.display = 'block';
}

//  Close modal
function closeTheModal() {
  modal.style.display = 'none';
}

function closeTheModalTwo() {
  modalTwo.style.display = 'none';
}

// Close modal by clicking on the modal body
function closeModalWindow(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function closeModalWindowTwo(e) {
  if (e.target == modalTwo) {
    modalTwo.style.display = 'none';
  }
}

// Open side menu
function openSideMenu() {
  sideMenu.style.display = 'block';
}

// close side menu when click on x
function closeSideMenu() {
  sideMenu.style.display = 'none';
}

// close side menu when click on list items
function listDisapper() {
  sideMenu.style.display = 'none';
}

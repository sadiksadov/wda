
function setDarkMode(isDark) {
  const page = document.getElementById('page');

  if (isDark) {
    page.classList.remove('bg-[#d6c7b4]', 'text-black');
    page.classList.add('bg-black', 'text-white');
  } else {
    page.classList.remove('bg-black', 'text-white');
    page.classList.add('bg-[#d6c7b4]', 'text-black');
  }
}

const darkBtn = document.getElementById('darkBtn');
const lightBtn = document.getElementById('lightBtn');


darkBtn.addEventListener('click', () => setDarkMode(true));
lightBtn.addEventListener('click', () => setDarkMode(false));

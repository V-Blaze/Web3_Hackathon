const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const speakerList = document.querySelector('.speaker-list');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((nav) => nav.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}));

const displaySpeakers = ({
  name, qualifications, biography, image,
}) => {
  const div = document.createElement('div');
  div.className = 'speaker-details';
  div.innerHTML = `
    <div class="speaker-img">
        <img src="${image}" alt="${name}" class="speaker-image">
    </div>
    <div class="speaker-info">
        <h3 class="speaker-name">
            ${name}
        </h3>
        <h4 class="speaker-qualifications">
            ${qualifications}
        </h4>
        <hr>
        <p class="speaker-brief">
            ${biography}
        </p>
    </div>
    `;

  return div;
};

const getSpeakers = async () => {
  const response = await fetch('./speakers.json');

  try {
    const data = await response.json();

    data.forEach((speaker) => {
      speakerList.append(displaySpeakers(speaker));
    });
  } catch (error) {
    // console.log(error);
  }
};

getSpeakers();

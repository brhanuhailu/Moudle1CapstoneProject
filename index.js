const popmenu = document.querySelector('.nav-mobile-popup');
const closepop = document.querySelector('.close-popup');
const menuIcon = document.querySelector('.menu-link');

menuIcon.addEventListener('click', () => {
  popmenu.style.display = 'flex';
});
closepop.addEventListener('click', () => {
  popmenu.style.display = 'none';
});

/* speacker feature section start */
const featurespeaker = document.querySelector('.features');

const objeSpeaker = {
  indicator: ['./images/indicator.svg', './images/indicator02.svg'],
  profimage: ['./images/yokai.png', './images/sohyeong.png', './images/lila.png', './images/kilnam.png', './images/julia.png', './images/ryan.png'],
  name: ['Yokahi Bankler', 'SohYeong Noh', 'Lila Tretikov', 'Kilnam Chon', 'Julia Leda', 'Ryan Merkley'],
  title: ['Berkman professer of Enterpreneurial legal Studies at Haravard', 'Director of Art Center Nabi and a board memebr of CC Eth', 'Executive Director of the Wikimedia Foundation', '', 'President of Young Pirates of Europe', 'CEO of Creative Commons, ex COO of the Mozilla Foundation'],
  description: ['Benkler studies commons based peer production, and published his seminar book The wealth of Network in 2006', 'As the man venue for new media art production in Korea, Nabi promotes cross disciplanry collboration and understanding among science technology, humanties and the arts', 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely avaliable in 290 languages and used by nearly half a billion people around the world every month', 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons in 2012, he was indcted into the inauguarl class of the internet Societys (ISOC) Internet Hall of Frame', 'Europe ingetration, political democracy and participation of youth through online as her major condem, Redas report outlining potential changes to EU copyright law was approved by the Parliament in july', 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement'],
};

window.onload = function getData() {
  const firstDiv = document.createElement('div');
  const h2one = document.createElement('h2');
  h2one.textContent = 'Feature Speaker';
  const imgInd = document.createElement('img');
  imgInd.classList.add('indicator');
  imgInd.setAttribute('src', objeSpeaker.indicator[0]);
  firstDiv.append(h2one, imgInd);
  featurespeaker.append(firstDiv);

  const secondDiv = document.createElement('div');
  secondDiv.classList.add('featureContainer');
  const divThree = [];
  const divFour = [];
  const imgTwo = [];
  const divFive = [];
  const h2Two = [];
  const h3One = [];
  const imgThree = [];
  const pOne = [];

  function dynamic(index, num) {
    for (let i = index; i < num; i += 1) {
      divThree[i] = document.createElement('div');
      divThree[i].classList.add('speakerItem');
      divFour[i] = document.createElement('div');
      imgTwo[i] = document.createElement('img');
      imgTwo[i].setAttribute('src', objeSpeaker.profimage[i]);
      divFour[i].append(imgTwo[i]);
      divThree[i].append(divFour[i]);
      divFive[i] = document.createElement('div');
      divFive[i].classList.add('profile');
      h2Two[i] = document.createElement('h2');
      h2Two[i].textContent = objeSpeaker.name[i];
      divFive[i].append(h2Two[i]);
      h3One[i] = document.createElement('h3');
      h3One[i].textContent = objeSpeaker.title[i];
      divFive[i].append(h3One[i]);
      imgThree[i] = document.createElement('img');
      imgThree[i].setAttribute('src', objeSpeaker.indicator[1]);
      divFive[i].append(imgThree[i]);
      pOne[i] = document.createElement('p');
      pOne[i].textContent = objeSpeaker.description[i];
      divFive[i].append(pOne[i]);
      divThree[i].append(divFive[i]);
      secondDiv.append(divThree[i]);
    }
    featurespeaker.append(firstDiv, secondDiv);
  }

  if (window.innerWidth < 768) {
    dynamic(0, 2);
  } else {
    dynamic(0, 6);
  }

  if (window.innerWidth < 768) {
    const more = document.createElement('div');
    const moreBtn = document.createElement('button');
    moreBtn.setAttribute('type', 'button');
    moreBtn.classList.add('moreBtn');
    moreBtn.textContent = 'More';
    const moreImg = document.createElement('img');
    moreImg.setAttribute('src', './images/union.svg');
    moreImg.classList.add('moreImg');
    moreBtn.append(moreImg);
    more.append(moreBtn);
    featurespeaker.append(more);

    more.addEventListener('click', () => {
      if (moreBtn.textContent === 'More') {
        dynamic(2, 6);
        moreBtn.textContent = 'Less';
        moreImg.setAttribute('src', './images/union.svg');
        moreImg.classList.add('moreImg');
        moreImg.classList.add('flipImg');
        moreBtn.append(moreImg);
        more.append(moreBtn);
        featurespeaker.append(more);
      } else {
        divThree[2].remove();
        divThree[3].remove();
        divThree[4].remove();
        divThree[5].remove();
        moreBtn.textContent = 'More';
        moreImg.setAttribute('src', './images/union.svg');
        moreImg.classList.add('moreImg');
        moreImg.classList.remove('flipImg');
        moreBtn.append(moreImg);
        more.append(moreBtn);
        featurespeaker.append(more);
      }
    });
  }
};
// Reload during screen resize
window.onresize = function checkWindow() {
  window.location.reload();
};
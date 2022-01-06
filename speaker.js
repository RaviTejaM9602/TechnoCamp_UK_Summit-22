const speakerList = [{
  Name: 'Yochai Benkler',
  Img: './Images/Speaker_Images/speaker_01.png',
  Role: 'Berkman professor of Entrepreneurial legal Studies at Harvard Law School',
  Description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
},
{
  Name: 'SohYeong Noh',
  Img: './Images/Speaker_Images/speaker_02.png',
  Role: 'Director of Art Center Nabl and a board member of A.G.S Korea',
  Description: 'As the man venue for new media art production in Korea,Nabi promotes cross-discipinary collaboration and understanding among science technology, humanities, and the arts.',
},
{
  Name: 'Lila Tretikov',
  Img: './Images/Speaker_Images/speaker_03.png',
  Role: 'Executive Director of the Wikimedia Foundation',
  Description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a bilion people around the world every month',
},
{
  Name: 'Kilnam Chon',
  Img: './Images/Speaker_Images/speaker_04.png',
  Role: '',
  Description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons In 2012, he was inducted into the inaugural class of the Internet Societys (ISOC) Internet Hall of Fame.',
},
{
  Name: 'Julia Leda',
  Img: './Images/Speaker_Images/speaker_05.png',
  Role: 'President of Young Pirates of Europe',
  Description: 'European ingetration, political democracy and participation  of youth through online as her major condern,Redas report  outlining potential changes to EU copyright law was approved by the Parlament in July.',
},
{
  Name: 'Ryan Merkley',
  Img: './Images/Speaker_Images/speaker_06.png',
  Role: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
  Description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source move-ment.',
}];

const expandSupport = (start, end) => {
  if (start === 0) {
    document.querySelector('.partner').innerHTML = '';
  }
  for (let i = start; i < end; i += 1) {
    document.querySelector('.partner').innerHTML += `
        <li class="partner-item">
          <div class="partner-image">
            <img src="${speakerList[i].Img}" alt="">
          </div>
          <div class="partner-Description">
            <h3>${speakerList[i].Name}</h3>
            <h6>${speakerList[i].Role}</h6>
            <hr class="section-title-separators">
            <p>${speakerList[i].Description}</p>
          </div>
        </li>
      `;
  }
};

if (window.screen.width < 768) {
  expandSupport(0, 2);
} else {
  expandSupport(0, speakerList.length);
}

document.querySelector('.more').addEventListener('click', (e) => {
  if (!e.target.classList.contains('show-more')) {
    e.target.classList.add('show-more');
    expandSupport(2, speakerList.length);
    e.target.innerHTML = 'Less <i class="fa fa-angle-up"></i>';
  } else {
    e.target.innerHTML = 'More <i class="fa fa-angle-down"></i>';
    e.target.classList.remove('show-more');
    expandSupport(0, 2);
  }
});

window.addEventListener('resize', () => {
  if (window.screen.width < 768) {
    expandSupport(0, 2);
  } else {
    expandSupport(0, speakerList.length);
  }
});

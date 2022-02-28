// script adapted from Kaboodle (https://github.com/ptsteadman/kaboodle)

(function advertRender(window, undefined) {
  /* Options */

  const advertArray = [
    {'title': '`Test the soil`: Use the pencil trick to avoid overwatering your houseplants in winter',
      'image': 'pencil-trick.jpeg',
      'href': 'https://www.express.co.uk/life-style/garden/1569501/houseplant-care-tips-watering-houseplants-pencil-trick-exclusive'},

    {'title': 'Waitrose Florist offers a range of guaranteed fresh flowers hand-tied and delivered to the door 7 days a week',
      'image': 'waitrose-florist.jpeg',
      'href': 'https://www.waitroseflorist.com/'},

    {'title': 'Order flowers online from Interflora. Same day delivery available',
      'image': 'interflora.png',
      'href': 'https://www.interflora.co.uk/'},

    {'title': 'Transform your garden with wilkos range of outdoor plant pots and planters',
      'image': 'wilko-logo.png',
      'href': 'https://www.wilko.com/en-uk/garden-outdoor/garden-lawn-plant-care/plant-pots-planters/c/1341'},

    {'title': 'Beautify your garden with pots and planters from B&Q',
      'image': 'b&q.webp',
      'href': 'https://www.diy.com/departments/outdoor-garden/lawn-plant-animal-care/pots-planters/DIY581155.cat'},

    {'title': ' Feeding plants - which is the best fertiliser to use?',
      'image': 'fertiliser.webp',
      'href': 'https://www.gardenersworld.com/how-to/grow-plants/feeding-plants-which-fertiliser-should-i-use/'},
  ];


  // eslint-disable-next-line require-jsdoc
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // randomises the order in which adverts appear
  // eslint-disable-next-line require-jsdoc
  function randomiseAdverts(advertArray) {
    for (let i = advertArray.length - 1; i > 0; i--) {
      const randomAdIndex = getRandomInt(0, i + 1);
      const randomAd = advertArray[randomAdIndex];
      advertArray[randomAdIndex] = advertArray[i];
      advertArray[i] = randomAd;
    }
  }

  // eslint-disable-next-line require-jsdoc
  function loadItems() {
    while (advertItems.firstChild) {
      advertItems.removeChild(advertItems.firstChild);
    }

    const width = advertModuleNode.offsetWidth;
    const numCols = Math.floor(width / 240.0);
    for (let i = 0; i < numCols * numRows; i++) {
      const advert = advertArray[i % advertArray.length];
      const advertItemLink = document.createElement('a');
      advertItemLink.href = advert['href'];
      advertItemLink.onclick = function() {
        if (ga) {
          ga('send', 'event',
              'advert', 'click', advert['href'], {'hitCallback':
            function() {
              document.location = advert['href'];
            },
              });
        }
      };
      advertItems.appendChild(advertItemLink);
      const advertItemWrapper = document.createElement('div');
      advertItemWrapper.className = 'advert-item';
      advertItemLink.appendChild(advertItemWrapper);
      const advertItemImg = document.createElement('img');
      advertItemImg.src = 'img/adverts/' + advert['image'];
      advertItemImg.height = '150';
      advertItemWrapper.appendChild(advertItemImg);
      const advertItemCaption = document.createElement('p');
      advertItemCaption.innerHTML = advert['title'];
      advertItemWrapper.appendChild(advertItemCaption);
    }
  }

  /* most recently parsed script */
  const script = document.getElementsByTagName('script');
  const scriptIndex = script.length - 1;
  const scriptTag = script[scriptIndex];

  // pulls the stylesheet in
  const stylesheet = document.createElement('link');
  stylesheet.href = 'stylesheets/adverts.css';
  stylesheet.rel = 'stylesheet';
  stylesheet.type = 'text/css';
  document.head.appendChild(stylesheet);

  // assigns the number of rows of adverts to display, default 2
  const numRows = scriptTag.dataset.numRows || 2;

  // creates a division for adverts directly underneath the script element
  const advertModule = document.createElement('div');
  advertModule.className = 'advert-module';
  scriptTag.parentNode.insertBefore(advertModule, scriptTag.nextSibling);


  /* most recently added tag, i.e. this one */
  const adverts = document.getElementsByClassName('advert-module');
  const advertIndex = adverts.length - 1;
  const advertModuleNode = adverts[advertIndex];

  // adds a header to the adverts
  const advertHeader = document.createElement('a');
  advertHeader.className = 'advert-header';
  advertHeader.href = '';
  advertHeader.innerHTML = 'Advertisements';
  advertModuleNode.appendChild(advertHeader);

  // creates a division for adverts, within the advert module division
  const advertItems = document.createElement('div');
  advertItems.className = 'advert-items';
  advertModuleNode.appendChild(advertItems);

  window.addEventListener('resize', loadItems, false);

  randomiseAdverts(advertArray);
  loadItems();
})(window);

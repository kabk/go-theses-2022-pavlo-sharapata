const { reactive } = window.Vue
const { markdownit, markdownitFootnote } = window

/**
 * Service handling image popups
 */
export const Images = reactive({
  // Available images
  images: [
    {
      name: 'Leopold von Ranke (1795 – 1886)', file: 'leopold-von-ranke.jpg', text: [
        'Julius Schrader (1868). Oil on canvas. 110 × 96 cm.',
        '© Märkisches Museum',
      ]
    },
    {
      name: 'James Hutton (1726 – 1797)', file: 'james-hutton.jpg', text: [
        'Henry Raeburn (1776). Oil on canvas. 125 × 104 cm.',
        '© Scottish National Gallery',

      ]
    },
    {
      name: 'Strata Formation (Jujuy Province, Argentina)', file: 'strata.jpg', text: [
        '2020',
        '© Angel Jimenez',
      ]
    },
    {
      name: 'Bivalve Fossils (Sion Hill, Leinster, Ireland)', file: 'bivalves.jpg', text: [
        '2017',
        '© André Cardoso',
      ]
    },
    {
      name: 'Baader-Meinhof Phenomenon', file: 'baader-meinhof-phenomenon.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Ammonite Fossil (Villanueva de la Concepción, Andalusia, Spain)', file: 'ammonites.jpg', text: [
        '2019',
        '© National Geographic',
      ]
    },
    {
      name: 'Belemnite Fossils (Hunstanton Cliffs, Norfolk, England)', file: 'belemnites.jpg', text: [
        '2016',
        '© Natural History Museum of Los Angeles County',
      ]
    },
    {
      name: 'Trilobite Fossils (Hornsudden, Öland, Sweden)', file: 'trilobites.jpg', text: [
        '2015',
        '© Stan Celestian',
      ]
    },
    {
      name: 'Gryphaea Fossils (Roosevelt National Park, North Dakota, United States)', file: 'gryphaeas.jpg', text: [
        '2016',
        '© Chris Andrews',
      ]
    },
    {
      name: 'Joseph Aspdin (1778 – 1855)', file: 'joseph-aspdin.jpg', text: [
        'Unidentified painter',
        '© Science History Institute',
      ]
    },
    {
      name: 'Joseph Aspdin', file: 'joseph-aspdin.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'George Bartholomew (1919 – 2006)', file: 'george-bartholomew.jpg', text: [
        'John Walton (1910). Oil on panel. 62.5 × 49 cm.',
        '© The Royal Society of Edinburgh',
      ]
    },
    {
      name: 'Portland cement', file: 'portland-cement.jpg', text: [
        'Patent No. BP 5022, "An Improvement in the Modes of Producing an Artificial Stone". Page 1/2, (21.10.1824).',
        '© Joseph Aspdin',
      ]
    },
    {
      name: 'Court Avenue (Bellefontaine, Ohio, United States)', file: 'court-avenue.jpg', text: [
        '1893',
        '© Ohio History Central',
      ]
    },
    {
      name: 'Bird Track Fossil (New York, New York, United States)', file: 'little-tracks.jpg', text: [
        '2019',
        '© Carl Mehling',
      ]
    },
    {
      name: 'Augustus Pugin (1812 – 1852)', file: 'augustus-pugin.jpg', text: [
        'Unidentified painter (1840). Oil on canvas. 61.2 × 50.8 cm.',
        '© National Portraig Gallery',
      ]
    },
    {
      name: 'Industrial Revolution (1760 – 1840)', file: 'industrial-revolution.jpg', text: [
        '1893',
        '© Getty Images',
      ]
    },
    {
      name: 'Henry Moore (1898 – 1986)', file: 'henry-moore.jpg', text: [
        '1940',
        '© Werner Bischof',
      ]
    },
    {
      name: 'Limestone Formation (Berlin, Germany)', file: 'limestone.jpg', text: [
        '2005',
        '© Museum für Naturkunde',
      ]
    },
    {
      name: 'Gneiss Formation (Nunavut, Nunavut, Canada)', file: 'gneiss.jpg', text: [
        '2018',
        '© Petr Hykš',
      ]
    },
    {
      name: 'Quartz Formation (Bryce Canyon, Utah, United States)', file: 'quartz.jpg', text: [
        '2017',
        '© Az Nature',
      ]
    },
    {
      name: 'Venus of Willendorf (25000 B.C.E.)', file: 'venus-of-willendorf.jpg', text: [
        '2019',
        '© Naturhistorisches Museum in Vienna',
      ]
    },
    {
      name: 'Venus of Hohle Fels (40000 B.C.E.)', file: 'venus-of-hohle-fels.jpg', text: [
        '2015',
        '© Prehistoric Museum of Blaubeuren',
      ]
    },
    {
      name: 'Naqsh-e Rostam (Marvdasht, Fars Province Region, Iran), (550 – 330 B.C.)', file: 'naqsh-e-rostam.jpg', text: [
        '2013',
        '© Michael Chow',
      ]
    },
    {
      name: 'Tomb of Darius II (550 – 330 B.C.)', file: 'tomb-of-darius2.jpg', text: [
        '2021',
        '© Carole Raddato',
      ]
    },
    {
      name: 'Tomb of Darius the Great (550 – 330 B.C.)', file: 'tomb-of-darius.jpg', text: [
        '2021',
        '© Carole Raddato',
      ]
    },
    {
      name: 'Tomb of Artaxerxes I (550 – 330 B.C.)', file: 'tomb-of-artaxerxes.jpg', text: [
        '2021',
        '© Carole Raddato',
      ]
    },
    {
      name: 'Tomb of Xerxes I (550 – 330 B.C.)', file: 'tomb-of-xerxes.jpg', text: [
        '2021',
        '© Carole Raddato',
      ]
    },
    {
      name: 'Remarks on Secular & Domestic Architecture, Present & Future (Sir George Gilbert Scott)', file: 'remarks-book.jpg', text: [
        '1857',
        '© John Murray',
      ]
    },
    {
      name: 'The Great Mosque of Djenné (Djenné, Mali), (1200 – 1300)', file: 'djenne.jpg', text: [
        '2015',
        '© Baron Reznik',
      ]
    },
    {
      name: 'The Djinguereber Mosque (Timbuktu, Mali), (1327)', file: 'the-djinguereber-mosque.jpg', text: [
        '2009',
        '© Julie Summersquash',
      ]
    },
    {
      name: 'Architecture without Architects (Bernard Rudofsky)', file: 'architecture-without-architects.jpg', text: [
        '1987',
        '© UNM Press',
      ]
    },
    {
      name: 'Bernard Rudofsky (1905 – 1988)', file: 'bernard-rudofsky.jpg', text: [
        '1963',
        '© LIFE',
      ]
    },
    {
      name: 'Kosmaj Memorial Complex (Koraćica, Serbia)', file: 'yugoslavia.jpg', text: [
        'Vojin Stojić, Gradimir Medaković (1971). Concrete, rebar. 40 × 30 × 28 m.',
        '© Milena Mijatovic',
      ]
    },
    {
      name: 'Ukrainian troops (Kyiv, Ukraine)', file: 'war.jpg', text: [
        '2022',
        '© Reuters',
      ]
    },
    {
      name: 'The True Principles of Pointed or Christian Architecture (Augustus Pugin)', file: 'true-principles.jpg', text: [
        '1841',
        '© John Weale',
      ]
    },
    {
      name: 'Limestone in Post-War British Architecture: Is it a Plea for a Return to Pugin? (Lino Bianco)', file: 'limestone-book.jpg', text: [
        '1998',
        '© University of Malta',
      ]
    },
    {
      name: 'Marble Formation (Coconino, Arizona, United States)', file: 'marble.jpg', text: [
        '2006',
        '© Astrid Westvang',
      ]
    },
    {
      name: 'Granite Formations (Calangianus, Sardegna, Italy)', file: 'granite.jpg', text: [
        '2017',
        '© Jan Yarnot',
      ]
    },
    {
      name: 'Sir George Gilbert Scott (1811 – 1878)', file: 'gilbert-scott.jpg', text: [
        'George Richmond (1878). Oil on canvas. 71 × 63 cm',
        '© Royal Institute of British Architects',
      ]
    },
    {
      name: 'Nesher Cement Factory (Nesher, Israel)', file: 'unimaginably-gigantic-scale.jpg', text: [
        '2010',
        '© Alessondra Springmann',
      ]
    },
    {
      name: 'Christopher Barr (1958 – )', file: 'christopher-barr.jpg', text: [
        '2017',
        '© CTV News',
      ]
    },
    {
      name: 'Arsenalna Metro Station (Kyiv, Ukraine)', file: 'arsenalna.jpg', text: [
        '2017',
        '© Jorge Láscar',
      ]
    },
    {
      name: 'Ferey Mudbricks (Jordan Valley, Palestine)', file: 'ferey.jpg', text: [
        '2011',
        '© George Plakides',
      ]
    }
  ],

  // Initializes the images
  initialize () {
    // find all <figure> element and link onclick event,
    // to show image popups
    const figures = document.querySelectorAll('a[href="#figure"]')
    for (const figure of Array.from(figures)) {
      const name = figure.getAttribute('title')
      figure.addEventListener('click', () => {
        this.show(name)
      })
    }
  },

  // Image count
  get count() {
    return this.images.length
  },

  // Currently displayed image
  image: null,

  // URL of the currently displayed image
  get imageUrl () {
    return this.getUrl(this.image)
  },

  // URL of the specified image
  getUrl (image) {
    if (image) {
      return `content/images/${image.file}`
    }
  },

  // Returns true if any image is currently visible
  get isVisible () {
    return this.image != null
  },

  // Hides the currently displayed image
  hide () {
    this.image = null
  },

  // Displays the image
  async show(name) {
    const image = this.images.find(image => image.name == name)
    if (!image) throw new Error(`Image ${name} not defined in Images service`)
    this.image = image
  },

  // Returns HTML element containing a list of all images
  getFiguresList () {
    const figures = this.images.map(i => `
      <li>
        <img src="${this.getUrl(i)}">
        <footer>${i.text}</footer>
      </li>`
    )
    return `<ul>${figures.join('\n')}</ul>`
  }
})

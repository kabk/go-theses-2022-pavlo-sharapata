const { reactive } = window.Vue
const { markdownit, markdownitFootnote } = window

/**
 * Service handling image popups
 */
export const Images = reactive({
  // Available images
  images: [
    {
      name: 'Leopold von Ranke', file: 'leopold-von-ranke.jpg', text: [
        '21 December 1795&hairsp;–&hairsp;23 May 1886',
        'After Julius Schrader (1868). Oil on canvas. 110 × 96 cm. © Märkisches Museum',
      ]
    },
    {
      name: 'James Hutton', file: 'james-hutton.jpg', text: [
        '3 June 1726&hairsp;–&hairsp;26 March 1797',
        'Henry Raeburn (1776). Oil on canvas. 125 × 104 cm. © Scottish National Gallery',

      ]
    },
    {
      name: 'Strata', file: 'strata.jpg', text: [
        'Strata (plural from stratum) are layers of different colored sedimentary rocks and soil that are exposed in cliffs, road cuts, quarries, and river banks.',
        '© Angel Jimenez (Flickr)',
      ]
    },
    {
      name: 'Bivalves', file: 'bivalves.jpg', text: [
        'Text',
        '2019',
        '(c)'
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
      name: 'Ammonites', file: 'ammonites.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Belemnites', file: 'belemnites.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Trilobites', file: 'trilobites.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Gryphaeas', file: 'gryphaeas.jpg', text: [
        'Text',
        '2019',
        '(c)'
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
      name: 'Joseph Aspdin', file: 'joseph-aspdin.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'George Bartholomew', file: 'george-bartholomew.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Portland cement', file: 'portland-cement.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Court Avenue', file: 'court-avenue.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'little tracks', file: 'little-tracks.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Augustus Pugin', file: 'augustus-pugin.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Industrial Revolution', file: 'industrial-revolution.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Henry Moore', file: 'henry-moore.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Limestone', file: 'limestone.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Gneiss', file: 'gneiss.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Quartz', file: 'quartz.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Venus of Willendorf', file: 'venus-of-willendorf.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Venus of Hohle Fels', file: 'venus-of-hohle-fels.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Naqsh-e Rostam', file: 'naqsh-e-rostam.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Tomb of Darius II', file: 'tomb-of-darius2.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Darius the Great', file: 'tomb-of-darius.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Artaxerxes I', file: 'tomb-of-artaxerxes.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Xerxes I', file: 'tomb-of-xerxes.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Remarks on Secular & Domestic Architecture, Present & Future', file: 'remarks-book.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'The Great Mosque of Djenné', file: 'djenne.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'The Djinguereber Mosque', file: 'the-djinguereber-mosque.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Architecture without Architects', file: 'architecture-without-architects.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Bernard Rudofsky', file: 'bernard-rudofsky.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Monuments', file: 'yugoslavia.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'War', file: 'war.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'The True Principles of Pointed or Christian Architecture', file: 'true-principles.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Limestone in Post-War British Architecture: Is it a Plea for a Return to Pugin?', file: 'limestone-book.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Sir George Gilbert Scott', file: 'gilbert-scott.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Sir George Gilbert Scott', file: 'gilbert-scott.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Sir George Gilbert Scott', file: 'gilbert-scott.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Sir George Gilbert Scott', file: 'gilbert-scott.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Sir George Gilbert Scott', file: 'gilbert-scott.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Sir George Gilbert Scott', file: 'gilbert-scott.jpg', text: [
        'Text',
        '2019',
        '(c)'
      ]
    },
    {
      name: 'Sir George Gilbert Scott', file: 'gilbert-scott.jpg', text: [
        'Text',
        '2019',
        '(c)'
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
  }
})

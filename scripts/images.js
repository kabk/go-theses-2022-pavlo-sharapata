const { reactive } = window.Vue
const { markdownit, markdownitFootnote } = window

/**
 * Service handling image popups
 */
export const Images = reactive({
  // Available images
  images: [
    {
      name: 'Figure 1', file: '00-image.jpg', text: [
        'Text',
        '2009',
        '(c)'
      ]
    },
    {
      name: 'Figure 2', file: '01-cat.jpg', text: [
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

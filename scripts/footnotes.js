const { reactive } = window.Vue

/**
 * Handles all things related to displaying footnotes
 */
export const Footnotes = reactive({
  // All footnotes
  footnotes: [],

  // Currently displayed footnote
  footnote: { id: null, text: null, isVisible: false, height: 0 },

  // Returns true if there is a footnote visible
  get isVisible () {
    return this.footnote.id != null && this.footnote.isVisible
  },

  // Height of the current footnote
  get height () {
    return this.footerHelper.clientHeight
  },

  // Initializes the footnotes, by capturing footnote links
  // and replacing them with onclick event, which will display
  // the footnotes the way and place we want them to be
  initialize () {
    this.footnotes = []

    const footnoteLinks = document.querySelectorAll('a[id]')
    for (const link of Array.from(footnoteLinks)) {
      const id = link.getAttribute('href').substring(1)
      const number = id.substring(2)
      console.log('Footnote', id)
      link.innerHTML = id.substring(2)
      link.className = 'footnote-link'
      link.setAttribute('href', '#')
      link.addEventListener('click', () => this.show(id))
      const footnoteElement = document.querySelector(`.footnote-item[id="${id}"]`)
      const text = footnoteElement ? footnoteElement.innerHTML : 'Footnote text is missing'
      const footnote = { id, number, text }
      this.footnotes.push(footnote)
    }
  },

  // Retrieves the text of the specified footnote
  getFootnote (id) {
    const element = document.querySelector(`li[id=${id}]`)
    if (element) {
      return element.innerHTML
    }
  },

  // Hides the displayed footnote
  hide () {
    this.footnote.isVisible = false
  },

  // Displays the specified footnote
  show (id) {
    // Render footnote text
    const text = this.getFootnote(id)
    this.footnote = { id, text, isVisible: text != null }
  },

  // Returns HTML element containing a list of all footnotes
  getFootnotesList () {
    const footnotes = this.footnotes.map(f => `
      <li>
        <span class="number">${f.number}</span>
        <span class="text">${f.text}</span>
      </li>`
    )
    return `<ul>${footnotes.join('\n')}</ul>`
  }
})
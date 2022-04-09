const { reactive } = window.Vue

/**
 * Handles all things related to displaying footnotes
 */
export const Footnotes = reactive({
  // All footnotes, in format { id: '', text:'', details: [] }
  footnotes: [],

  // Currently displayed footnote
  footnote: null,

  // Returns true if there is a footnote visible
  get isVisible () {
    return this.footnote != null
  },

  // Initializes the footnotes, by capturing footnote links
  // and replacing them with onclick event, which will display
  // the footnotes the way and place we want them to be
  initialize () {
    this.footnotes = []

    // Find all footnote links
    const footnoteLinks = document.querySelectorAll('a[href="#footnote"]')
    for (const footnoteLink of Array.from(footnoteLinks)) {
      const text = footnoteLink.getAttribute('title').split('|')[0]
      const details = footnoteLink.getAttribute('title').split('|').slice(1)
      const id = footnoteLink.innerText
      this.footnotes.push({ id, text, details })

      footnoteLink.href = '#'
      footnoteLink.classList.add('footnote-link')
      footnoteLink.setAttribute('title', '')
      footnoteLink.addEventListener('click', () => {
        this.show(id)
      })
    }

    console.log(this.footnotes)
  },

  // Retrieves the specified footnote
  getFootnote (id) {
    return this.footnotes.find(footnote => footnote.id === id)
  },

  // Hides the displayed footnote
  hide () {
    this.footnote = null
  },

  // Displays the specified footnote
  show (id) {
    this.footnote = this.getFootnote(id)
  },

  // Returns HTML element containing a list of all footnotes
  getFootnotesList () {
    const footnotes = this.footnotes.map(f => `
      <li>
        <span class="number">${f.id}</span>
        <div class="footnote">
          <span class="text">${f.text}</span>
          ${f.details.map(d => `<span class="detail">${d}</span>`).join('\n')}
        </div>
      </li>`
    )
    return `
      <h2>
        Footnotes
      </h2>
      <ul>${footnotes.join('\n')}</ul>
    `
  }
})
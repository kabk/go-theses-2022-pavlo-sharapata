const { reactive } = window.Vue
const { markdownit, markdownitFootnote } = window

/**
 * Access to website content - chapters etc.
 */
export const Content = reactive({
  // Indicates that content has been initialized
  isInitialized: false,

  // Content chapters.
  // - Force linebreak in the menu using `linebreak` flag
  // - Define special chapter whose content is in HTML, using `element` parameter
  // - Define custom CSS class for chapter, using `className` parameter
  chapters: [
    { title: 'Abstract', file: '00-abstract.md', content: '' },
    { title: 'Introduction', file: '01-introduction.md', content: '' },
    { title: 'Methods', file: '02-methods.md', content: '', linebreak: true },
    { title: 'The Origin', file: '03-the-origin.md', content: '' },
    { title: 'The Truth', file: '04-the-truth.md', content: '', linebreak: true },
    { title: 'The Cycle', file: '05-the-cycle.md', content: '' },
    { title: 'The Father', file: '05-the-cycle.md', content: '' },
    { title: 'Footnotes', element: '.footnotes' },
    { title: 'Bibliography', file: '06-bibliography.md', content: '', className: 'bibliography' },
    { title: 'Figures', element: '.figures' },
  ],

  // Chapter count
  get count() {
    return this.chapters.length
  },

  // First chapter
  get firstChapter() {
    return this.chapters[0]
  },

  // Last chapter
  get lastChapter() {
    return this.chapters[this.chapters.length - 1]
  },

  // Loads HTML-ized content of the specified chapter
  async loadChapter(index) {
    const chapter = this.chapters[index]

    if (chapter.file) {
      // Chapter content comes from markdown file
      const url = `content/${chapter.file}`
      const response = await fetch(url)
      const text = await response.text()
      const markdown = markdownit({
        html: true,
        linkify: true
      })
      markdown.use(markdownitFootnote)
      chapter.content = markdown.render(text)

    } else if (chapter.element) {
      // chapter content comes from html element
      const element = document.querySelector(chapter.element)
      if (element) {
        chapter.content = element.innerHTML
        chapter.className = element.className
        element.style.display = 'none'
        element.content = ''
      }
    }

    return chapter
  },

  // Loads the content of all chapters
  async initialize() {
    this.isInitialized = false
    const all = []
    for (let i = 0; i < this.count; i++) {
      const chapter = await this.loadChapter(i)
      all.push(chapter)
    }
    this.isInitialized = true
    return all
  }

})
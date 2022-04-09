const { reactive } = window.Vue
const { markdownit, markdownitFootnote } = window
import { Footnotes } from './footnotes.js'
import { Images } from './images.js'

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
    { title: 'Neohabitat', file: '00-title.md', chapterClass: 'center full-height', showInMenu: false },
    { title: 'Abstract,', file: '00-abstract.md', chapterClass: '' },
    { title: 'Methods,', file: '01-methods.md', content: '' },
    { title: 'Introduction,', file: '02-introduction.md', linebreak: true },
    { title: 'The Origin,', file: '03-the-origin.md', content: '' },
    { title: 'The Truth,', file: '04-the-truth.md', },
    { title: 'The Cycle,', file: '05-the-cycle.md', content: '' },
    { title: 'The Fossil', file: '06-the-fossil.md', linebreak: true },
    { title: 'Conclusion,', file: '07-conclusion.md', chapterClass: '' },
    { title: 'Footnotes,', chapterClass: 'all-footnotes', content: () => Footnotes.getFootnotesList() },
    { title: 'Bibliography,', file: '07-bibliography.md', chapterClass: 'bibliography' },
    { title: 'Figures', chapterClass: 'figures', content: () => Images.getFiguresList() },
  ],

  // List of chapters which should be visible in the main menu.
  // To hide a chapter, set its `showInMenu` flag to `false`
  get menuChapters () {
    return this.chapters.filter(chapter => chapter.showInMenu != false)
  },

  // Returns chapter text coming from another hidden HTML element
  getChapterContent (chapter) {
    if (typeof chapter.content === 'function') {
      return chapter.content()
    } else {
      return chapter.content
    }
  },

  // Returns custom CSS classes for the specified chapter
  getCustomClass (chapter) {
    const classText = (chapter.chapterClass || '')
    return classText
      .split(' ')
      .reduce((all, item) => ({ ...all, [item]: true }), {})
  },

  // Chapter count
  get count () {
    return this.chapters.length
  },

  // First chapter
  get firstChapter () {
    return this.chapters[0]
  },

  // Last chapter
  get lastChapter () {
    return this.chapters[this.chapters.length - 1]
  },

  // Loads HTML-ized content of the specified chapter
  async loadChapter (index) {
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
      // Chapter content coming from html element
      // will be resolved dynamically, when `getChapterContent` is called.
    }

    return chapter
  },

  // Loads the content of all chapters
  async initialize () {
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
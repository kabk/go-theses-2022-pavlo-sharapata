const { reactive } = window.Vue
import { Content } from './content.js'

/**
 * All logic related to navigating through chapters
 */
export const Navigator = reactive({
  // Chapter element container
  container: null,

  // Index of the currently read chapter
  currentIndex: 0,

  // Currently read chapter
  get currentChapter () {
    return Content.chapters[this.currentIndex]
  },

  // Title of the current chapter
  get currentChapterTitle () {
    const { currentChapter } = this
    return currentChapter ? currentChapter.title : ''
  },

  // Scrolling observer
  observer: null,
  // Scroll position
  scrollPosition: 0,

  // Viewing progress percentage
  get progress () {
    return Math.ceil(100 * ((this.currentIndex + 1) / Content.count))
  },

  // Scroller percentage
  get scrollProgress () {
    if (this.container) {
      const shownHeight = this.container.scrollTop + this.container.clientHeight
      const totalHeight = this.container.scrollHeight
      return Math.ceil(100 * (this.scrollPosition / this.container.scrollHeight))
    }
  },

  // Initializes the navigator,
  // creates observers which will trigger, when chapter comes in view.
  initialize () {
    this.container = document.querySelector('main')
    let options = {
      root: this.container,
      threshold: 0.1
    } 
    
    this.observer = new IntersectionObserver(
      entries => this.onChapterShown(entries), 
      options
    )

    this.container.addEventListener('scroll', () => {
      this.scrollPosition = this.container.scrollTop + this.container.clientHeight
    })

    const chapterElements = document.querySelectorAll('article')
    for (const chapterElement of Array.from(chapterElements)) {
      this.observer.observe(chapterElement)
    }
  },

  // Triggered when chapter comes in view
  onChapterShown (entries) {
    const visibleChapter = entries.find(e => e.isIntersecting)

    if (visibleChapter) {
      // Detect into which chapter we have scrolled 
      const element = visibleChapter.target
      const index = parseInt(element.getAttribute('index'))
      this.currentIndex = index
    }

    // If anything went wrong, just show the first chapter
    if (!this.currentChapter) {
      this.currentIndex = 0
    }
  }
})

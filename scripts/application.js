import { Content } from './content.js'
import { Navigator } from './navigator.js'
import { Footnotes } from './footnotes.js'
import { Images } from './images.js'

export const Application = {
  data () {
    return {
      Content,
      Navigator,
      Footnotes,
      Images
    }
  },

  methods: {
    async initialize () {
      await this.Content.initialize()
      await this.Navigator.initialize()
      await this.Footnotes.initialize()
      await this.Images.initialize()
    }
  },

  async created () {
    await this.initialize()
  }
}
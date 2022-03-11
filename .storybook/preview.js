import '/src/assets/css/color.css'
import '/src/assets/css/effect.css'
import '/src/assets/css/font.css'
import '/src/assets/css/icon.css'

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
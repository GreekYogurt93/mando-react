import type { Preview } from '@storybook/react-vite'
import '../public/fonts.css'

const preview: Preview = {
  parameters: {
    viewport: {
      // “options” is the new key under Storybook 9
      options: {
        // Example of adding a custom viewport
        mobilexsm: {
          name: 'Mobile (X-SMALL)',
          styles: {
            width: '320px',
            height: '640px',
          },
        },
        mobilesmall: {
          name: 'mobile small',
          styles: {
            width: '600px',
            height: '1024px',
          },
        },
        tablet: {
          name: 'tablet',
          styles: {
            width: '1024px',
            height: '2000px',
          },
        },
        tabletlarge: {
          name: 'tablet large',
          styles: {
            width: '1336px',
            height: '2000px',
          },
        },
        desktop: {
          name: 'desktop',
          styles: {
            width: '1600px',
            height: '2000px',
          },
        },
      }},
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
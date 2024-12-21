import { resolve } from 'path';
import type { Config } from 'tailwindcss';

const config: Partial<Config> = {
  content: {
    files: [
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/data/table.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/accordion.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/alert.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/avatar.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/avatarGroup.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/buttonGroup.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/chip.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/dropdown.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/kbd.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/meter.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/meterGroup.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/elements/progress.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/checkbox.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/radioGroup.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/radio.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/toggle.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/formGroup.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/select.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/textarea.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/selectMenu.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/forms/range.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/layout/card.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/layout/container.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/layout/divider.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/breadcrumb.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/commandPalette.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/pagination.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/verticalNavigation.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/contextMenu.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/modal.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/popover.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/slideover.mjs')}`,
      `!${resolve('node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/tooltip.mjs')}`
    ]
  },
  darkMode: [],
  theme: {
    extend: {
      boxShadow: {
        lg: '0 12px 24px -4px rgb(0 0 0 / 0.15)',
        md: '0 8px 16px -4px rgb(0 0 0 / 0.1)',
        sm: '0 2px 6px -3px rgb(0 0 0 / 0.08)'
      },
      colors: {
        black: '#272f38',
        'default-blue': {
          50: '#eff4ff',
          100: '#dbe6fe',
          200: '#bfd3fe',
          300: '#93b4fd',
          400: '#6090fa',
          500: '#3b76f6',
          600: '#2563eb',
          700: '#1d58d8',
          800: '#1e4baf',
          900: '#1e408a',
          950: '#172a54'
        }
      }
    }
  }
};

export default config;

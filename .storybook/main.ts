import type { StorybookConfig } from '@storybook/react-vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	staticDirs: ['../public'],
	viteFinal: async (config) => {
		config.css = config.css || {}
		config.css.postcss = {
			plugins: [tailwindcss, autoprefixer],
		}
		return config
	},
}
export default config

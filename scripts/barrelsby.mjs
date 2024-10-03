import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const srcDir = path.resolve(process.cwd(), 'src')
const dirsToProcess = ['app', 'processes', 'pages', 'widgets', 'features', 'entities', 'shared']

const barrelsByOptions = {
	delete: true,
	include: '.*\\.tsx?$',
	singleQuotes: true,
	noHeader: true,
	verbose: true,
	exclude: ['index.ts', '.*\\.stories\\..*'], // 제외 파일
}

dirsToProcess.forEach((dir) => {
	const fullDir = path.join(srcDir, dir)
	if (fs.existsSync(fullDir)) {
		fs.readdirSync(fullDir).forEach((subDir) => {
			const fullPath = path.join(fullDir, subDir)
			if (fs.statSync(fullPath).isDirectory()) {
				try {
					const command = ['barrelsby']
					for (const [key, value] of Object.entries(barrelsByOptions)) {
						if (Array.isArray(value)) {
							value.forEach((v) => command.push(`--${key} ${v}`))
						} else if (typeof value === 'boolean') {
							if (value) command.push(`--${key}`)
						} else {
							command.push(`--${key} ${value}`)
						}
					}
					command.push(`--directory "${fullPath}"`)

					execSync(command.join(' '), { stdio: 'inherit' })
				} catch (error) {
					console.error(`Error processing ${fullPath}:`, error)
				}
			}
		})
	} else {
		console.warn(`Directory ${fullDir} does not exist.`)
	}
})

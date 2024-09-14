import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const srcDir = path.resolve(process.cwd(), 'src')
const dirsToProcess = ['app', 'processes', 'pages', 'widgets', 'features', 'entities', 'shared']

dirsToProcess.forEach((dir) => {
	const fullDir = path.join(srcDir, dir)
	if (fs.existsSync(fullDir)) {
		fs.readdirSync(fullDir).forEach((subDir) => {
			const fullPath = path.join(fullDir, subDir)
			if (fs.statSync(fullPath).isDirectory()) {
				try {
					execSync(
						`barrelsby --delete --directory "${fullPath}" --include .*\\.tsx?$ --singleQuotes --noHeader --verbose --exclude index.ts`,
						{
							stdio: 'inherit',
						},
					)
				} catch (error) {
					console.error(`Error processing ${fullPath}:`, error)
				}
			}
		})
	} else {
		console.warn(`Directory ${fullDir} does not exist.`)
	}
})

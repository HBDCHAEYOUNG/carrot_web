import fs from 'fs'
import path from 'path'
import { generateApi } from 'swagger-typescript-api'

const key = { 로그인: 'sinin', 공통: 'common', 회원가입: 'signup', 대출신청: 'service', 홈: 'home' }

generateApi({
	name: 'swaggerGenerate.ts',
	// url: 'https://wfl-app.fit-technet.com/api/v1/app/pub/api-docs',
	input: path.resolve(process.cwd(), 'scripts/carrot.json'),
	output: path.resolve(process.cwd(), 'src/shared/types'),
	templates: path.resolve(process.cwd(), 'templates'),
	generateClient: false,
	toJS: false,
	generateRouteTypes: true,
	moduleNameFirstTag: true,
	generateResponses: true,
	typeSuffix: 'Dto',
	modular: true,
	extractEnums: true,
	singleHttpClient: true, //
	extractRequestParams: true,
	extractRequestBody: true,
	extractResponseBody: true,
	extractResponseError: true,
	unwrapResponseData: true,
	sortTypes: true,
})
	.then(({ files }) => {
		const outputDir = path.resolve(process.cwd(), 'src/shared/types')

		// Delete existing files except data-contracts.ts
		fs.readdirSync(outputDir).forEach((file) => {
			if (file !== 'data-contracts.ts') {
				fs.unlinkSync(path.join(outputDir, file))
			}
		})

		files.forEach(({ fileName, fileExtension, fileContent }) => {
			if (fileName !== 'data-contracts') {
				// Convert to kebab case
				const kebabFileName = fileName
					.replace('Route', '')
					.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
					.toLowerCase()

				const newFileName = `${kebabFileName}-route${fileExtension}`
				const fullPath = path.resolve(outputDir, newFileName)

				fs.writeFileSync(fullPath, fileContent)
			}
		})
	})
	.catch((e) => console.error(e))

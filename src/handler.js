import { request } from 'undici'
/**
 * @type {import('aws-lambda').Handler<{limit: number}>} 
 */
export const handler = async (event = { limit: 5 }) => {
	const { body } = await request('https://hacker-news.firebaseio.com/v0/topstories.json')
	/** @type {number[]} */
	const allTopStories = await body.json()

	const titles = await Promise.all(allTopStories.slice(0, event.limit).map(async (id) => {
		const { body } = await request(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
		const data = await body.json()
		return {
			title: data?.title
		}
	}))

	const responseBody = JSON.stringify(titles)

	return {
		headers: {
			'content-type': 'application/json'
		},
		statusCode: 200,
		body: responseBody
	}
}
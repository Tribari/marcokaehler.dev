import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

const aboutDirectory = join(process.cwd(), '_about')

export function getAllAboutSlugs() {
    const files =  fs.readdirSync(aboutDirectory)
    return files.map( (file) => (file.replace(/\.[^/.]+$/, "")) )
}

export async function getAllAbout() {
    const slugs = getAllAboutSlugs()
    const about = await Promise.all(slugs.map( async (slug) => (await getAboutBySlug(slug) ) ))
    return JSON.parse(JSON.stringify( about ))
}

export async function getAboutBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(aboutDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const {data, content} = matter(fileContents)
    const result = await remark().use(html).process(content)
    return {"data": data, "content": result.toString()}
}
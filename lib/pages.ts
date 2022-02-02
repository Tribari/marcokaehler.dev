import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const pagesDirectory = join(process.cwd(), 'data/pages')

export function getAllPageSlugs() {
    const files =  fs.readdirSync(pagesDirectory)
    return files.map( (file) => (file.replace(/\.[^/.]+$/, "")) )
}

export function getPageBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(pagesDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    return matter(fileContents) //const {content, data} 
}
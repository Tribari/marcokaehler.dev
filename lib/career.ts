import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const careerDirectory = join(process.cwd(), '_career')

export function getAllCareerSlugs() {
    const files =  fs.readdirSync(careerDirectory)
    return files.map( (file) => (file.replace(/\.[^/.]+$/, "")) )
}

export function getAllCareer() {
    const slugs = getAllCareerSlugs()
    return JSON.parse(JSON.stringify( slugs.map( (slug) => ( getCareerBySlug(slug) ) ) ))
}

export function getCareerBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(careerDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    return matter(fileContents) //const {content, data} 
}
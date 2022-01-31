import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const portfolioDirectory = join(process.cwd(), '_portfolio')

export function getAllPortfolioSlugs() {
    const files =  fs.readdirSync(portfolioDirectory)
    return files.map( (file) => (file.replace(/\.[^/.]+$/, "")) )
}

export function getAllPortfolio() {
    const slugs = getAllPortfolioSlugs()
    return slugs.map( (slug) => ( getPortfolioBySlug(slug) ) )
}

export function getPortfolioBySlug(slug: string){
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(portfolioDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const {data, content} = matter(fileContents)
    return { "slug": slug, "data": data, "content": content}
}
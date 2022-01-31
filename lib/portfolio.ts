import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const portfolioDirectory = join(process.cwd(), '_portfolio')
const imagesDirectory = join(process.cwd(), 'public')

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
    if(data.gallery) {
       const images = getGalleryImages(data.gallery)
       return { "slug": slug, "data": data, "content": content, "gallery": images}
    }
    return { "slug": slug, "data": data, "content": content}
}

export function getGalleryImages(path: string) {
    const images = fs.readdirSync(imagesDirectory+path)
    return images.map((image) => (path+image))
}
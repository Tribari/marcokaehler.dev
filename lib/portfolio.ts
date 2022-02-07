import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const portfolioDirectory = join(process.cwd(), 'data/portfolio')
const imagesDirectory = join(process.cwd(), 'public')

export function getAllPortfolioSlugs() {
    const files =  fs.readdirSync(portfolioDirectory)
    return files.map( (file) => (file.replace(/\.[^/.]+$/, "")) )
}

export function getAllPortfolio() {
    const slugs = getAllPortfolioSlugs()
    return JSON.parse(JSON.stringify( slugs.map( (slug) => ( getPortfolioBySlug(slug) ) ) ))
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
    const files = fs.readdirSync(imagesDirectory+path)
    const images = files.filter((file) => isFileImage(file))
    return images.map((image) => (path+image))
}

function isFileImage(file: string) {
    return (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(file)
}
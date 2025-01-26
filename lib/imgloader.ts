const imageLoader = ({src, quality, width}:any): any => {
    return `${src}?w=${width}&q=${quality || 70}`
}

export default imageLoader
const imageLoader = ({src, quality, width}:any): any => {
    return `${src}?w=${width}&q=${quality || 75}`
}

export default imageLoader
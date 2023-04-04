
const create = (shapeTags) => {
    return `
    <?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shapeTags}
    </svg>
    `
}
module.exports = {
    create
}
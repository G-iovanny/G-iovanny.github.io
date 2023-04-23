import "../styles/Tag/tag.css"

// On prend en paramètre un tag pour l'implémenter dans notre span
function Tag({ tag }) {
    return (
            <span className="tag">{ tag }</span>
    )
}

export default Tag;
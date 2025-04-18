const HoverWrap = ({ children, className = "", hoverEvent }) => {
    let hoverCallback, hoverEnter, hoverLeave;
    if (hoverEvent) {
        [hoverCallback, hoverEnter, hoverLeave] = hoverEvent
    }
    return (
        <div className={className}
            onMouseEnter={hoverCallback ? () => hoverCallback(hoverEnter) : null}
            onMouseLeave={hoverCallback ? () => hoverCallback(hoverLeave) : null}>
            {children}
        </div>
    )
}
export default HoverWrap
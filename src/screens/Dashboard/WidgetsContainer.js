import { useDrop } from 'react-dnd'
import { Widget } from './Widget';
import './index.css';

function selectBackgroundColor(isActive, canDrop) {
    if (isActive) {
        return 'rgba(113, 42, 255, 1)'
    } else if (canDrop) {
        return 'rgba(113, 42, 255, 0.5)'
    } else {
        return 'rgba(113, 42, 255, 0.1)'
    }
}
export const WidgetsContainer = ({ allowedDropEffect, widgets }) => {
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: 'box',
            drop: () => ({
                name: allowedDropEffect,
                allowedDropEffect,
            }),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [allowedDropEffect],
    )
    const isActive = canDrop && isOver
    const backgroundColor = selectBackgroundColor(isActive, canDrop)
    return (
        <div ref={drop} className="widgets-container" style={{ backgroundColor }}>
            {widgets.map(widget => (
                <Widget id={widget.id} url={widget.url} width={widget.width} height={widget.height} widgetContainerId={allowedDropEffect} />
            ))}
        </div>
    )
}

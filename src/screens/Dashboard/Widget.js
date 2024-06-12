import { useDrag } from 'react-dnd'
import { Resizable } from 're-resizable';
import { useDispatch } from 'react-redux';
import { handleChangeWidgetContainer, handleChangeWidgetSize } from './dashboardSlice';
import './index.css';

export const Widget = ({ id, url, width, height, widgetContainerId }) => {
    const dispatch = useDispatch();
    const [{ opacity }, drag] = useDrag(
        () => ({
            type: 'box',
            item: { name: id },
            end(item, monitor) {
                const dropResult = monitor.getDropResult()
                if (item && dropResult) {
                    let alertMessage = ''
                    alertMessage = `You ${dropResult.dropEffect} ${item.name} into ${dropResult.name}!`
                    dispatch(handleChangeWidgetContainer({
                        widget: item.name,
                        toContainer: dropResult.name,
                        fromContainer: widgetContainerId
                    }));
                }
            },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
            }),
        }),
        [id],
    )
    return (
        <Resizable
            className="resizeable-box"
            defaultSize={{
                width,
                height
            }}
            size={{
                width,
                height
            }}
            onResizeStop={(e, direction, ref, d) => {
                dispatch(handleChangeWidgetSize({
                    containerId: widgetContainerId,
                    widgetId: id,
                    width: width + d.width,
                    height: height + d.height
                }));
              }}
        >
            <div
            className='moveable-box'
                ref={drag}
                data-testid={`box`}
            >
                <iframe
                    src={url}
                ></iframe>
            </div>
        </Resizable>
    )
}

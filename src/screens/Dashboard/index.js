import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openErrorToast } from "../../common/toast";
import { Dustbin, WidgetsContainer } from './WidgetsContainer.js';
import { fetchWidgets, getWidgetContainers, fetchWidget } from "./dashboardSlice";
import { PaperPlane } from "../../common/icons";
import Select from 'react-select';
import './index.css';

const Dashboard = () => {
    const [question, setQuestion] = useState('');
    const [visualization, setVisualization] = useState('');
    const widgetContainers = useSelector(getWidgetContainers);
    const dispatch = useDispatch();
    return (
        <div className="main">
            <div className="message-input">
                <input placeholder="Qestion here" value={question} onChange={e => setQuestion(e.target.value)} />
                <Select
                    className="select-visualization"
                    classNamePrefix="select"
                    // defaultValue={'red'}
                    value={visualization}
                    onChange={(val) => setVisualization(val)}
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isRtl={false}
                    isSearchable={false}
                    name="color"
                    options={[
                        { value: 'Use Intelligence', label: 'Use Intelligence' },
                        { value: 'Pie Chart', label: 'Pie Chart' },
                        { value: 'Bar Chart', label: 'bar Chart' },
                        { value: 'Line Graph', label: 'Line Graph' },
                        { value: 'Table', label: 'Table' }
                    ]}
                />
                <button onClick={() => {
                    if (question && visualization) {
                        dispatch(fetchWidget({ question, visualization: visualization.value }));
                    }
                    else if (!question) {
                        console.log("Please provide question!");
                    }
                    else if (!visualization) {
                        console.log("Please provide visualization!");
                    }
                }}>Add</button>
            </div>
            {/* {console.log(widgetContainers)} */}
            {widgetContainers.map(widgetContainer => (
                <WidgetsContainer allowedDropEffect={widgetContainer.id} widgets={widgetContainer.widgets} />
            ))}
        </div>
    );
}

export default Dashboard;
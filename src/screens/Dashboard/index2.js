import { useState } from "react";
import { Resizable } from 're-resizable';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    float: 'left'
};

const Dashboard = () => {
    const [boxes, setBoxes] = useState([{
        boxId: 0,
        width: 200,
        height: 200
    },
    {
        boxId: 1,
        width: 200,
        height: 200
    },
    {
        boxId: 2,
        width: 200,
        height: 200
    },
    {
        boxId: 3,
        width: 200,
        height: 200
    }]);
    return (
        <>
            <Resizable
                style={style}
                defaultSize={{
                    width: 200,
                    height: 200
                }}
            >
                001
            </Resizable>
            <Resizable
                style={style}
                defaultSize={{
                    width: 200,
                    height: 200
                }}
            >
                002
            </Resizable>
            <Resizable
                style={style}
                defaultSize={{
                    width: 200,
                    height: 200
                }}
            >
                003
            </Resizable>
        </>
    );
}

export default Dashboard;
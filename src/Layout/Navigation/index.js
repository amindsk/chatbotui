import { Routes, Route } from "react-router-dom";
import { APP_ROUTES } from './constants';

const Navigation = () => {
    return (
        <Routes>
            {APP_ROUTES.map((route) => (
                <Route
                    key={route.label}
                    path={route.url}
                    element={
                        <route.screen />
                    }
                />
            ))}
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    );
}

export default Navigation;

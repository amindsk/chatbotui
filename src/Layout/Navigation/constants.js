import Dashboard from '../../screens/Dashboard';
import Chat from '../../screens/Chat';

export const ROUTES = {
    dashboard: 'dashboard',
    chat: 'chat',
};
export const APP_ROUTES = [
    {
        label: ROUTES.dashboard,
        redirectPath: "/",
        url: `/`,
        screen: Dashboard,
        showInNav: true
    },
    {
        label: ROUTES.chat,
        redirectPath: "/",
        url: `/${ROUTES.chat}`,
        screen: Chat,
        showInNav: true
    }
];
import Icons from '../../common/icons';
import Dashboard from '../../screens/Dashboard';
import Chat from '../../screens/Chat';

export const LOGIN_ROUTE = '/';
export const ROUTES = {
    dashboard: 'dashboard',
    chat: 'chat',
};
export const ROLES = {
    admin: 'admin',
    ai: 'ai'
};
export const APP_ROUTES = [
    {
        label: ROUTES.dashboard,
        icon: Icons.Assessment,
        redirectPath: "/",
        url: `/${ROUTES.dashboard}`,
        isProtected: true,
        permission: ROUTES.dashboard,
        roles: [ROLES.admin, ROLES.ai],
        screen: Dashboard,
        showInLeftNav: true
    },
    {
        label: ROUTES.chat,
        icon: Icons.Label,
        redirectPath: "/",
        url: `/${ROUTES.chat}`,
        isProtected: true,
        permission: ROUTES.dashboard,
        roles: [ROLES.admin, ROLES.ai],
        screen: Chat,
        showInLeftNav: true
    }
];
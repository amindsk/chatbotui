import {
  API_ROUTE_WIDGETS,
  API_ROUTE_DASHBOARD_WIDGET,
  API_ROUTE_SEND_MESSAGE_SQL,
  API_ROUTE_MESSAGE_GRAPH
} from "./constants";

import { post, get } from "./utils";

export const getDashboardWidgetsApi = () => {
  return get(API_ROUTE_WIDGETS);
}

export const getWidgetApi = ({ user_msg, graph_type }) => {
  return post(API_ROUTE_DASHBOARD_WIDGET, { user_msg, graph_type });
}

export const sendMessageApi = ({ user_msg }) => {
  return post(API_ROUTE_SEND_MESSAGE_SQL, { user_msg });
}

export const sendMessageGraphApi = ({ user_msg, graph_type, df }) => {
  return post(API_ROUTE_MESSAGE_GRAPH, { user_msg, graph_type, df });
}
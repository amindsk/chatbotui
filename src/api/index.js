import {
  API_ROUTE_WIDGETS,
  API_ROUTE_SEND_MESSAGE_SQL,
  API_ROUTE_MESSAGE_GRAPH
} from "./constants";

import { post, get } from "./utils";

export const getDashboardWidgetsApi = () => {
  return get(API_ROUTE_WIDGETS);
}

export const getWidgetApi = ({ question, visualization }) => {
  return get(API_ROUTE_WIDGETS, { question, visualization });
}

export const sendMessageApi = ({ user_msg }) => {
  return post(API_ROUTE_SEND_MESSAGE_SQL, { user_msg });
}

export const sendMessageGraphApi = ({ user_msg, graph_type, df }) => {
  return post(API_ROUTE_MESSAGE_GRAPH, { user_msg, graph_type, df });
}
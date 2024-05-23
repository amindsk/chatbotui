import {
    API_ROUTE_FEATURE_ENGINEERINGS
  } from "./constants";
  
  import { post, get, del, put, patch } from "../utils";

  export const getAllFeatureEngineeringsApi = () => {
    return get(API_ROUTE_FEATURE_ENGINEERINGS);
  }
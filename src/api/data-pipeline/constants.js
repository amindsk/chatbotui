export const DATA_PIPELINE_BASE_URL = process.env.REACT_APP_DATA_PIPELINE_BACKEND_URL;
export const GRAFANA_DATA_PIPELINE_BASE_URL = "http://localhost:3002";

export const API_ROUTE_LOGIN = `${DATA_PIPELINE_BASE_URL}/login`;

export const NETWORK_ERROR = `Network Error`;

export const API_ROUTE_DATA_SOURCE =  `${DATA_PIPELINE_BASE_URL}/data_source`;
export const API_ROUTE_DATA_SOURCES =  `${DATA_PIPELINE_BASE_URL}/data_sources`;
export const API_ROUTE_RUN_DATA_SOURCE =  `${DATA_PIPELINE_BASE_URL}/data_source/run`;
export const API_ROUTE_DATA_SOURCE_COLUMNS =  `${DATA_PIPELINE_BASE_URL}/data_source/column`;
export const API_ROUTE_CHECK_DATA_SOURCE_RUN =  `${DATA_PIPELINE_BASE_URL}/data_source/check_runs`;
export const API_ROUTE_DATA_SOURCES_PATHS =  `${DATA_PIPELINE_BASE_URL}/data_source/paths`;

export const API_ROUTE_SUGGEST_TYPECASTING_CONFIG =  `${DATA_PIPELINE_BASE_URL}/type_casting/suggest_config`;
export const API_ROUTE_SUGGEST_DATA_SETUP_CONFIG =  `${DATA_PIPELINE_BASE_URL}/data_setup/suggest_config`;
export const API_ROUTE_CHECK_TYPE_CASTING =  `${DATA_PIPELINE_BASE_URL}/data_source/type_check`;
export const API_ROUTE_TYPE_CASTING =  `${DATA_PIPELINE_BASE_URL}/type_casting`;
export const API_ROUTE_TAGGING =  `${DATA_PIPELINE_BASE_URL}/tagging`;
export const API_ROUTE_TAGS =  `${DATA_PIPELINE_BASE_URL}/tags`;
export const API_ROUTE_DATA_SETUP =  `${DATA_PIPELINE_BASE_URL}/data_setup`;
export const API_ROUTE_DATA_SETUPS =  `${DATA_PIPELINE_BASE_URL}/data_setups`;
export const API_ROUTE_SUGGEST_TAGGING = `${DATA_PIPELINE_BASE_URL}/type_casting/suggest_tagging`;
export const API_ROUTE_MANDATORY_TAGS = `${DATA_PIPELINE_BASE_URL}/tagging/mandatory_tags`;


export const API_ROUTE_PROGRAM_SETUP = `${DATA_PIPELINE_BASE_URL}/program_setup`;
export const API_ROUTE_PROGRAM_SETUPS = `${DATA_PIPELINE_BASE_URL}/program_setups`;

export const API_ROUTE_METRIC = `${DATA_PIPELINE_BASE_URL}/metric`;
export const API_ROUTE_METRICS = `${DATA_PIPELINE_BASE_URL}/metric/programid`;
export const API_ROUTE_METRIC_TAGS = `${DATA_PIPELINE_BASE_URL}/metric/source`;
export const API_ROUTE_METRIC_TAGS_SCHEMA = `${DATA_PIPELINE_BASE_URL}/metric/source/columns`;


export const API_ROUTE_VDN = `${DATA_PIPELINE_BASE_URL}/vdn`
export const API_ROUTE_VDNS = `${DATA_PIPELINE_BASE_URL}/vdns`

//Routes not yet confirmed form backend team
export const API_ROUTE_PIPELINE = `${DATA_PIPELINE_BASE_URL}/pipeline`;
export const API_ROUTE_PIPELINE_RUN = `${DATA_PIPELINE_BASE_URL}/pipeline/run`;
export const API_ROUTE_PIPELINES = `${DATA_PIPELINE_BASE_URL}/pipelines`;
export const API_ROUTE_DATA_SETUP_TRANSFORMATIONS = `${DATA_PIPELINE_BASE_URL}/transformations/data_setup`;
export const API_ROUTE_TRANSFORMATION = `${DATA_PIPELINE_BASE_URL}/transformation`;
export const API_ROUTE_TRANSFORMATIONS_FUNCTIONS = `${DATA_PIPELINE_BASE_URL}/functions`;

export const API_ROUTE_JOINS = `${DATA_PIPELINE_BASE_URL}/join`;
export const API_ROUTE_JOINS_CONFIGURE = `${DATA_PIPELINE_BASE_URL}/configure`;
export const API_ROUTE_EXECUTE_JOINS = `${DATA_PIPELINE_BASE_URL}/get_joins_query`;
export const API_ROUTE_RESET_JOINS = `${DATA_PIPELINE_BASE_URL}/reset_joins`;

export const API_ROUTE_JOIN_OUTPUT_COLUMNS = `${DATA_PIPELINE_BASE_URL}/get_columns_list`;

export const API_ROUTE_SENSORS = `${DATA_PIPELINE_BASE_URL}/sensors/default`;
export const API_ROUTE_ACTIVE_SENSORS = `${DATA_PIPELINE_BASE_URL}/sensors/active_sensors`;
export const API_ROUTE_DEFAULT_SENSORS = `${DATA_PIPELINE_BASE_URL}/sensors/default`;
export const API_ROUTE_SENSORS_STATS = `${DATA_PIPELINE_BASE_URL}/sensors_stats`;
export const API_ROUTE_SENSORS_DASHBOARDS_DATASOURCE = `${DATA_PIPELINE_BASE_URL}/sensors/dashboards/datasource`;
export const API_ROUTE_SENSORS_DASHBOARDS_REPORTS = `${DATA_PIPELINE_BASE_URL}/sensors/dashboards/reports`;

export const API_ROUTE_DEPLOYMENTS =  `${DATA_PIPELINE_BASE_URL}/deployments`;
export const API_ROUTE_DEPLOYMENT =  `${DATA_PIPELINE_BASE_URL}/deployment`;

export const API_ROUTE_EDA_FILES_PATHS = `${DATA_PIPELINE_BASE_URL}/eda/paths`;
export const API_ROUTE_EDA_REPORTS = `${DATA_PIPELINE_BASE_URL}/eda/reports`;
export const API_ROUTE_EDA_REPORT = `${DATA_PIPELINE_BASE_URL}/eda/report`;
export const API_ROUTE_EDA_REPORT_RUN = `${DATA_PIPELINE_BASE_URL}/eda/report/run`;

export const API_ROUTE_CHECK_IMF = `${DATA_PIPELINE_BASE_URL}/check_imf`
export const API_ROUTE_RUN_EDA_SQL_QUERY = `${DATA_PIPELINE_BASE_URL}/eda/query`
export const API_ROUTE_TRANSFORMATION_BY_OPERATION_TYPES = `${DATA_PIPELINE_BASE_URL}/transformations/operation_type`
export const API_ROUTE_RUN_POST_TRANSFORMATIONS = `${DATA_PIPELINE_BASE_URL}/run_post_transform`

export const API_ROUTE_GET_EXTRACTED_TABLES_LIST = `${DATA_PIPELINE_BASE_URL}/get_table_list`
export const API_ROUTE_EDA_REPORT_COLUMNS = `${DATA_PIPELINE_BASE_URL}/eda/report/columns`
export const API_ROUTE_EDA_REPORT_COLUMN_DATES = `${DATA_PIPELINE_BASE_URL}/eda/report/columns/dates`

export const API_ROUTE_SUGGEST_ROLLUP = `${DATA_PIPELINE_BASE_URL}/rollup/suggest`
export const API_ROUTE_ROLLUP_AGGREGATION_METHOD = `${DATA_PIPELINE_BASE_URL}/rollup/aggregates`
export const API_ROUTE_ROLLUP = `${DATA_PIPELINE_BASE_URL}/rollup`
export const API_ROUTE_TYPE_CAST_DEFAULT_VALUES = `${DATA_PIPELINE_BASE_URL}/type_casting/default_values`
export const API_ROUTE_RUN_ROLLUP = `${DATA_PIPELINE_BASE_URL}/rollup/run`

export const API_ROUTE_CHECK_TRANSFORMATIONS = `${DATA_PIPELINE_BASE_URL}/transformations/check_transformation`
export const API_ROUTE_SENSORS_BY_PIPELINE_ID = `${DATA_PIPELINE_BASE_URL}/sensors/pipeline`
export const API_ROUTE_FILE_PATHS_BY_PIPELINE_ID = `${DATA_PIPELINE_BASE_URL}/filepaths_by_pipelineid`
export const API_ROUTE_SENSORS_VALIDATE_QUERY = `${DATA_PIPELINE_BASE_URL}/sensors/verify_fields`
export const API_ROUTE_UPDATE_IS_PRIMARY = `${DATA_PIPELINE_BASE_URL}/data_source`
export const API_ROUTE_CUSTOM_SENSORS = `${DATA_PIPELINE_BASE_URL}/sensors`
export const API_ROUTE_CHECK_IMF_HAS_CHANGES = `${DATA_PIPELINE_BASE_URL}/rollup/imf_changes`
export const API_ROUTE_METRICS_IMF_COLUMNS = `${DATA_PIPELINE_BASE_URL}/metrics/imf/columns`
export const API_ROUTE_METRIC_RUN = `${DATA_PIPELINE_BASE_URL}/metric/run`
export const API_ROUTEPOST_CALL_FEATURE = `${DATA_PIPELINE_BASE_URL}/run_pre_post_crm`

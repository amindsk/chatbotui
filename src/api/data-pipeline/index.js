import {
  API_ROUTE_DATA_SOURCE,
  API_ROUTE_DATA_SOURCES,
  API_ROUTE_LOGIN,
  API_ROUTE_TYPE_CASTING,
  API_ROUTE_CHECK_TYPE_CASTING,
  API_ROUTE_SUGGEST_TYPECASTING_CONFIG,
  API_ROUTE_TAGS,
  API_ROUTE_TAGGING,
  API_ROUTE_SUGGEST_TAGGING,
  API_ROUTE_DATA_SETUP,
  API_ROUTE_SUGGEST_DATA_SETUP_CONFIG,
  API_ROUTE_MANDATORY_TAGS,
  API_ROUTE_PROGRAM_SETUP,
  API_ROUTE_METRIC_TAGS,
  API_ROUTE_METRIC_TAGS_SCHEMA,
  API_ROUTE_METRIC,
  API_ROUTE_VDN,
  API_ROUTE_PROGRAM_SETUPS,
  API_ROUTE_METRICS,
  API_ROUTE_VDNS,
  API_ROUTE_DATA_SETUPS,
  API_ROUTE_PIPELINE,
  API_ROUTE_DATA_SETUP_TRANSFORMATIONS,
  API_ROUTE_TRANSFORMATION,
  API_ROUTE_TRANSFORMATIONS_FUNCTIONS,
  API_ROUTE_JOINS,
  API_ROUTE_DEFAULT_SENSORS,
  API_ROUTE_SENSORS,
  API_ROUTE_SENSORS_STATS,
  API_ROUTE_SENSORS_DASHBOARDS_DATASOURCE,
  API_ROUTE_SENSORS_DASHBOARDS_REPORTS,
  API_ROUTE_EXECUTE_JOINS,
  API_ROUTE_JOIN_OUTPUT_COLUMNS,
  API_ROUTE_DEPLOYMENTS,
  API_ROUTE_DEPLOYMENT,
  API_ROUTE_RUN_DATA_SOURCE,
  API_ROUTE_PIPELINES,
  API_ROUTE_EDA_FILES_PATHS,
  API_ROUTE_EDA_REPORT,
  API_ROUTE_EDA_REPORTS,
  API_ROUTE_EDA_REPORT_RUN,
  API_ROUTE_RESET_JOINS,
  API_ROUTE_CHECK_DATA_SOURCE_RUN,
  API_ROUTE_CHECK_IMF,
  API_ROUTE_RUN_EDA_SQL_QUERY,
  API_ROUTE_PIPELINE_RUN,
  API_ROUTE_JOINS_CONFIGURE,
  API_ROUTE_TRANSFORMATION_BY_OPERATION_TYPES,
  API_ROUTE_RUN_POST_TRANSFORMATIONS,
  API_ROUTE_DATA_SOURCES_PATHS,
  API_ROUTE_GET_EXTRACTED_TABLES_LIST,
  API_ROUTE_EDA_REPORT_COLUMNS,
  API_ROUTE_EDA_REPORT_COLUMN_DATES,
  API_ROUTE_SUGGEST_ROLLUP,
  API_ROUTE_ROLLUP_AGGREGATION_METHOD,
  API_ROUTE_ROLLUP,
  API_ROUTE_TYPE_CAST_DEFAULT_VALUES,
  API_ROUTE_CHECK_TRANSFORMATIONS,
  API_ROUTE_SENSORS_BY_PIPELINE_ID,
  API_ROUTE_FILE_PATHS_BY_PIPELINE_ID,
  API_ROUTE_SENSORS_VALIDATE_QUERY,
  API_ROUTE_RUN_ROLLUP,
  API_ROUTE_UPDATE_IS_PRIMARY,
  API_ROUTE_CUSTOM_SENSORS,
  API_ROUTE_CHECK_IMF_HAS_CHANGES,
  API_ROUTE_METRICS_IMF_COLUMNS,
  API_ROUTE_METRIC_RUN,
  API_ROUTEPOST_CALL_FEATURE,
  API_ROUTE_DATA_SOURCE_COLUMNS
} from "./constants";

import { post, get, del, put, patch } from "../utils";

export const loginUserApi = (email, password) => {
  return get(API_ROUTE_LOGIN, {}, { email, password });
};

export const getDataSourceApi = ({ data_source_id }) => {
  return get(API_ROUTE_DATA_SOURCE, {}, { data_source_id });
};

export const getDataSourceColumnsListApi = ({ name,
  source_file_mask,
  source_file_path,
  source_file_type,
  delimiter,
  tag,
  destination_path,
  sheet_name,
  is_primary_source,
  frequency, }) => {
  return post(API_ROUTE_DATA_SOURCE_COLUMNS, {
    name,
    source_file_mask,
    source_file_path,
    source_file_type,
    delimiter,
    tag,
    sheet_name,
    destination_path,
    is_primary_source,
    frequency,
  });
};

export const addDataSourceApi = ({ name,
  source_file_mask,
  source_file_path,
  source_file_type,
  delimiter,
  tag,
  destination_path,
  sheet_name,
  is_primary_source,
  frequency,
  filter }) => {
  return post(API_ROUTE_DATA_SOURCE, {
    name,
    source_file_mask,
    source_file_path,
    source_file_type,
    delimiter,
    tag,
    sheet_name,
    destination_path,
    is_primary_source,
    frequency,
    filter
  });
};

export const updateDataSourceApi = ({
  name,
  source_file_mask,
  source_file_path,
  source_file_type,
  delimiter,
  tag,
  destination_path,
  frequency,
  sheet_name,
  is_primary_source,
  data_source_id,
  filter }) => {
  return put(API_ROUTE_DATA_SOURCE, {
    name,
    source_file_mask,
    source_file_path,
    source_file_type,
    delimiter,
    tag,
    destination_path,
    frequency,
    sheet_name,
    is_primary_source,
    filter
  }, { data_source_id });
};

export const getAllDataSourcesApi = () => {
  return get(API_ROUTE_DATA_SOURCES, {}, {});
};

export const deleteDataSourceApi = (data_source_id) => {
  return del(API_ROUTE_DATA_SOURCE, null, { data_source_id });
};

export const getMandatoryTagsApi = ({ data_source_id }) => {
  return get(API_ROUTE_MANDATORY_TAGS, {}, { data_source_id });
}

export const getDataSourceColumnsApi = ({ data_source_id }) => {
  return get(API_ROUTE_SUGGEST_TYPECASTING_CONFIG, {}, { data_source_id })
}

export const getTypeCastingApi = ({ type_casting_id }) => {
  return get(API_ROUTE_TYPE_CASTING, {}, { type_casting_id });
}

export const checkTypeCastingApi = ({ config, data_source_id, force_pk }) => {
  return post(API_ROUTE_CHECK_TYPE_CASTING, { data_source_id, config: { schema: config, force_pk } });
}

export const addTypeCastingApi = ({ _config, data_source_id }) => {
  return post(API_ROUTE_TYPE_CASTING, { data_source_id, _config });
}

export const updateTypeCastingApi = ({ _config, type_casting_id }) => {
  return put(API_ROUTE_TYPE_CASTING, { _config }, { type_casting_id });
}

export const getAvailableTagsListApi = () => {
  return get(API_ROUTE_TAGS);
}

export const suggestTaggingApi = ({ type_casting_id }) => {
  return get(API_ROUTE_SUGGEST_TAGGING, {}, { type_casting_id });
}

export const addTaggingApi = ({ _config, type_casting_id }) => {
  return post(API_ROUTE_TAGGING, { type_casting_id, _config });
}

export const updateTaggingApi = ({ _config, tagging_id }) => {
  return put(API_ROUTE_TAGGING, { _config }, { tagging_id });
}

export const getTaggingApi = ({ tagging_id }) => {
  return get(API_ROUTE_TAGGING, {}, { tagging_id });
}

export const getDataSetupApi = ({ data_setup_id }) => {
  return get(API_ROUTE_DATA_SETUP, {}, { data_setup_id });
}

export const getDataSetupConfigApi = ({ data_source_id }) => {
  return get(API_ROUTE_SUGGEST_DATA_SETUP_CONFIG, {}, { data_source_id });
}

export const getAllDataSetupsApi = () => {
  return get(API_ROUTE_DATA_SETUPS);
}

export const addDataSetupApi = ({
  source_name,
  source_path,
  destination_path,
  frequency,
  insert_process,
  partition_col,
  _primary_key,
  timestamp_format,
  apply_hash,
  _update_cols,
  start_date_column,
  data_source_id,
  _config,
  parse_column,
  parse_separator
}) => {
  return post(API_ROUTE_DATA_SETUP, {
    source_name,
    source_path,
    destination_path,
    frequency,
    insert_process,
    partition_col,
    _primary_key,
    timestamp_format,
    apply_hash,
    _update_cols,
    start_date_column,
    data_source_id,
    _config,
    parse_column,
    parse_separator
  });
}

export const updateDataSetupApi = ({
  source_name,
  source_path,
  destination_path,
  frequency,
  insert_process,
  partition_col,
  _primary_key,
  timestamp_format,
  apply_hash,
  _update_cols,
  start_date_column,
  data_source_id,
  _config,
  parse_column,
  parse_separator,
  data_setup_id
}) => {
  return put(API_ROUTE_DATA_SETUP, {
    source_name,
    source_path,
    destination_path,
    frequency,
    insert_process,
    partition_col,
    _primary_key,
    timestamp_format,
    apply_hash,
    _update_cols,
    start_date_column,
    data_source_id,
    _config,
    parse_column,
    parse_separator
  }, { data_setup_id });
}


export const getProgramSetupTagsApi = () => {
  return get(API_ROUTE_METRIC_TAGS, {}, {});
}


export const addProgramSetupApi = ({ name }) => {
  return post(API_ROUTE_PROGRAM_SETUP, { name });
}

export const deleteProgramSetupApi = ({ program_id }) => {
  return del(API_ROUTE_PROGRAM_SETUP, {}, { program_id });
}



export const updateProgramSetupApi = ({ name, program_id }) => {
  return put(API_ROUTE_PROGRAM_SETUP, { name }, { program_id });
}



export const getMetricTagsSchemaForSourceApi = (source) => {
  return get(API_ROUTE_METRIC_TAGS_SCHEMA, {}, { source });
}

export const getAllProgramSetupsApi = () => {
  return get(API_ROUTE_PROGRAM_SETUPS, {}, {});
}

export const deleteMetricApi = ({ metric_id, program_id }) => {
  return del(API_ROUTE_METRIC, {}, { metric_id, program_id });
}

export const updateMetricApi = ({
  metric_id,
  program_id,
  name,
  optimization_column,
  optimization_formula,
  column_name,
  source
}) => {
  console.log({ column_name })
  return put(API_ROUTE_METRIC, {
    name,
    optimization_column,
    optimization_formula,
    column_name,
    source
  }, { metric_id, program_id });
}

export const addMetricSetupApi = ({
  program_id,
  name,
  optimization_column,
  optimization_formula,
  column_name,
  source
}) => {
  return post(API_ROUTE_METRIC, {
    program_id,
    name,
    optimization_column,
    optimization_formula,
    column_name,
    source
  }, {});
}

export const getAllMetricsByProgtamIdApi = ({ program_id }) => {
  return get(API_ROUTE_METRICS, {}, { program_id });
}


export const addVdnsApi = (payload) => {
  return post(API_ROUTE_VDNS, { ...payload }, {});
}

export const getAllVdnsByProgramIdApi = (program_id) => {
  return get(API_ROUTE_VDNS, {}, { program_id });
}

export const delVdnByIdApi = (program_id, vdn_id) => {
  return del(API_ROUTE_VDN, {}, { program_id, vdn_id });
}

export const addVdnApi = (vdn) => {
  return post(API_ROUTE_VDN, { ...vdn }, {});
}

export const getAllPipelines = () => {
  return get(API_ROUTE_PIPELINES);
}

export const runPipelineApi = ({ pipeline_id }) => {
  return post(API_ROUTE_PIPELINE_RUN, {}, { pipeline_id, running_env: 'design' });
}

export const getPipelineApi = ({ pipeline_id }) => {
  return get(API_ROUTE_PIPELINE, {}, { pipeline_id });
}

export const addPipelineApi = (pipeline) => {
  return post(API_ROUTE_PIPELINE, { ...pipeline });
}

export const updatePipelineApi = ({ pipeline, pipeline_id }) => {
  return put(API_ROUTE_PIPELINE, { ...pipeline }, { pipeline_id });
}

export const deletePipelineApi = ({ pipeline_id }) => {
  return del(API_ROUTE_PIPELINE, {}, { pipeline_id });
}

export const getDataSetupTransformationsApi = ({ data_setup_id, pipeline_id }) => {
  return get(API_ROUTE_DATA_SETUP_TRANSFORMATIONS, {}, { data_setup_id, pipeline_id });
};

export const getTransformationApi = ({ transformation_id }) => {
  return get(API_ROUTE_TRANSFORMATION, {}, { transformation_id });
};

export const addTransformationApi = ({
  pipeline_id,
  operation_id,
  operation_number,
  operation_type,
  data_setup_id,
  source_path,
  _config,
  transformation_name,
  source_tag
}) => {
  return post(API_ROUTE_TRANSFORMATION, {
    pipeline_id,
    operation_id,
    operation_number,
    operation_type,
    data_setup_id,
    source_path,
    _config,
    transformation_name,
    source_tag
  }, {});
};

export const updateTransformationApi = ({
  pipeline_id,
  transformation_id,
  operation_id,
  operation_number,
  operation_type,
  data_setup_id,
  _config,
  transformation_name,
  source_path,
  source_tag
}) => {
  return put(API_ROUTE_TRANSFORMATION, {
    pipeline_id,
    operation_id,
    operation_number,
    operation_type,
    data_setup_id,
    _config,
    transformation_name,
    source_path,
    source_tag
  }, { transformation_id });
};

export const deleteTransformationApi = ({ transformation_id }) => {
  return del(API_ROUTE_TRANSFORMATION, {}, { transformation_id });
};

export const getTransformationsFunctionsApi = () => {
  return get(API_ROUTE_TRANSFORMATIONS_FUNCTIONS);
}

export const getJoinsApi = ({ pipeline_id, module }) => {
  return get(API_ROUTE_JOINS, {}, { pipeline_id, module });
}

export const addCustomJoinApi = ({
  pipeline_id,
  id,
  join_position,
  src_table,
  src_table_placeholder,
  src_table_columns,
  join_type,
  join_table,
  join_table_placeholder,
  join_table_columns,
  join_condition,
  join_condition_object,
  output_table,
  key_column,
  is_run,
  partition_by,
  order_by,
  type,
  module
}) => {
  if (type === "join") {
    return post(API_ROUTE_JOINS, {
      type,
      pipeline_id,
      id,
      join_position,
      src_table,
      src_table_placeholder,
      src_table_columns,
      join_type,
      join_table,
      join_table_placeholder,
      join_table_columns,
      join_condition,
      join_condition_object,
      output_table,
      key_column,
      is_run
    }, { module });
  } else if (type === "union") {
    return post(API_ROUTE_JOINS, {
      type,
      id,
      join_position,
      src_table,
      join_type,
      partition_by,
      order_by,
      key_column,
      output_table,
      join_position,
      pipeline_id,
      is_run
    }, { module });

  } else {

  }
}

export const updateJoinApi = ({ joins, module }) => {
  return put(API_ROUTE_JOINS, joins, { module });
}

export const deleteJoinApi = ({ pipeline_id, join_position, module }) => {
  return del(API_ROUTE_JOINS, {}, { pipeline_id, join_position, module });
}

export const addDefaultSensorsApi = ({ client, program_id }) => {
  return post(API_ROUTE_DEFAULT_SENSORS, { client, program_id }, {});
}

export const addSensorsStatisticsApi = ({ pipeline_id }) => {
  return post(API_ROUTE_SENSORS_STATS, {}, { pipeline_id });
}

export const addDashboardDataSource = () => {
  return post(API_ROUTE_SENSORS_DASHBOARDS_DATASOURCE, {}, {});
}

export const addDashboardReports = () => {
  return post(API_ROUTE_SENSORS_DASHBOARDS_REPORTS, {}, {});
}

export const executeJoinsApi = ({ pipeline_id, module }) => {
  return get(API_ROUTE_EXECUTE_JOINS, {}, { pipeline_id, module });
}

export const resetJoinsApi = ({ pipeline_id, join_index, module }) => {
  return get(API_ROUTE_RESET_JOINS, {}, { pipeline_id, join_index, module });
}

export const getJoinOutputColumnsApi = ({ table_name, pipeline_id }) => {
  return get(API_ROUTE_JOIN_OUTPUT_COLUMNS, {}, { table_name, pipeline_id });
}

export const getDeploymentsApi = ({ tag }) => {
  return get(API_ROUTE_DEPLOYMENTS, {}, { tag });
}

export const getDeploymentApi = ({ deployment_id }) => {
  return get(API_ROUTE_DEPLOYMENT, {}, { deployment_id });
}

export const addDeploymentApi = ({ name, type, operation_id, scheduler_type, schedule, tags, description }) => {
  return post(API_ROUTE_DEPLOYMENT, { name, type, operation_id, scheduler_type, schedule, tags, description }, {});
}

export const updateDeploymentApi = ({ name, type, operation_id, schedule, scheduler_type, tags, description, deployment_id }) => {
  return put(API_ROUTE_DEPLOYMENT, { name, type, operation_id, scheduler_type, schedule, tags, description }, { deployment_id });
}
export const deleteDeploymentApi = ({ deployment_id }) => {
  return del(API_ROUTE_DEPLOYMENT, {}, { deployment_id });
}
export const runDataSourceApi = ({ data_source_id, run_data_source, run_data_setup, truncate_data_source, truncate_data_setup }) => {
  return post(API_ROUTE_RUN_DATA_SOURCE, { run_data_source, run_data_setup, truncate_data_source, truncate_data_setup }, { data_source_id });
}

export const getEdaFilesPathsApi = () => {
  return get(API_ROUTE_EDA_FILES_PATHS, {}, {});
}
export const getEdaReportsApi = () => {

  return get(API_ROUTE_EDA_REPORTS, {}, {});
}

export const checkImfApi = ({ pipeline_id, module }) => {
  return get(API_ROUTE_CHECK_IMF, {}, { pipeline_id, module });
}

export const getEdaReportApi = ({ file_path, eda_id }) => {
  return get(API_ROUTE_EDA_REPORT, {}, { file_path, eda_id });
}
export const addEdaReportApi = ({ file_path, name, date_column, date_begin, date_end }) => {
  return post(API_ROUTE_EDA_REPORT, { file_path, name, date_column, date_begin, date_end }, {});
}
export const updateEdaReportApi = ({ eda_id, name, date_column, date_begin, date_end }) => {
  return put(API_ROUTE_EDA_REPORT, { name, date_column, date_begin, date_end }, { eda_id });
}

export const deleteEdaReportApi = ({ eda_id }) => {
  return del(API_ROUTE_EDA_REPORT, {}, { eda_id });
}

export const runEdaReportApi = ({ eda_id }) => {
  return post(API_ROUTE_EDA_REPORT_RUN, {}, { eda_id });
}

export const getProgramSensorsApi = ({ pipeline_id, client }) => {
  return post(API_ROUTE_SENSORS, {}, { pipeline_id, client });
}

export const postEdaSqlQueryApi = ({ query }) => {
  return post(API_ROUTE_RUN_EDA_SQL_QUERY, { query }, {});
}

export const checkDataSourceRunApi = ({ data_source_id }) => {
  return get(API_ROUTE_CHECK_DATA_SOURCE_RUN, {}, { data_source_id })
}

export const getJoinsConfigApi = ({ table_name, pipeline_id }) => {
  return get(API_ROUTE_JOINS_CONFIGURE, {}, { table_name, pipeline_id })
}

export const getTransformationByOperationTypeApi = ({ pipeline_id, operation_type }) => {
  return get(API_ROUTE_TRANSFORMATION_BY_OPERATION_TYPES, {}, { pipeline_id, operation_type })
}

export const runPostTransformationApi = ({ pipeline_id, table_name }) => {
  return post(API_ROUTE_RUN_POST_TRANSFORMATIONS, {}, { pipeline_id, table_name })
}

export const getSourceFilePaths = () => {
  return get(API_ROUTE_DATA_SOURCES_PATHS, {}, {})
}

export const getExtractedTableListApi = ({ pipeline_id }) => {
  return get(API_ROUTE_GET_EXTRACTED_TABLES_LIST, {}, { pipeline_id })
}

export const postEdaReportColumnsApi = ({ filepath, datatypes }) => {
  return post(API_ROUTE_EDA_REPORT_COLUMNS, { filepath, datatypes }, {})
}

export const getEdaReportColumnsDatesApi = ({ filepath, column }) => {
  return get(API_ROUTE_EDA_REPORT_COLUMN_DATES, {}, { filepath, column })
}

export const getSuggestedRollUpApi = ({ pipeline_id }) => {
  return get(API_ROUTE_SUGGEST_ROLLUP, {}, { pipeline_id })
}

export const getAggregationMethodsApi = () => {
  return get(API_ROUTE_ROLLUP_AGGREGATION_METHOD, {}, {})
}

export const postRollUpApi = ({ pipeline_id, config }) => {
  return post(API_ROUTE_ROLLUP, { pipeline_id, config }, {})
}

export const getPipelineRollUpApi = ({ pipeline_id }) => {
  return get(API_ROUTE_ROLLUP, {}, { pipeline_id })
}

export const updateRollUpApi = ({ rollup_id, pipeline_id, config }) => {
  return put(API_ROUTE_ROLLUP, { pipeline_id, config }, { rollup_id })
}

export const postTypeCastDefaultValuesApi = ({ config }) => {
  return put(API_ROUTE_TYPE_CAST_DEFAULT_VALUES, { config }, {})
}

export const checkTransformationsApi = ({ transformation_id }) => {
  return get(API_ROUTE_CHECK_TRANSFORMATIONS, {}, { transformation_id })
}

export const getSensorsByPipelineIdApi = ({ pipeline_id }) => {
  return get(API_ROUTE_SENSORS_BY_PIPELINE_ID, {}, { pipeline_id })
}

export const getFilePathsByPipelineId = ({ pipeline_id }) => {
  return get(API_ROUTE_FILE_PATHS_BY_PIPELINE_ID, {}, { pipeline_id })
}

export const postSensorsQueryValidationApi = ({ query }) => {
  return post(API_ROUTE_SENSORS_VALIDATE_QUERY, { query }, {})
}

export const runRollupApi = ({ pipeline_id, running_env = "design" }) => {
  return post(API_ROUTE_RUN_ROLLUP, {}, { pipeline_id, running_env })
}

export const updatePriamrySourceApi = ({ data_source_id }) => {
  return patch(API_ROUTE_UPDATE_IS_PRIMARY, {}, { data_source_id })
}

export const postCustomSensorsApi = ({ pipeline_id, sensor_name, granularity, type, threshold, priority, query, client, is_default }) => {
  return post(API_ROUTE_CUSTOM_SENSORS, { pipeline_id, sensor_name, granularity, type, threshold, priority, query, client, is_default }, {})
}

export const updateCustomSensorsApi = ({ sensor_id, pipeline_id, sensor_name, granularity, type, threshold, priority, query, client, is_default }) => {
  return put(API_ROUTE_CUSTOM_SENSORS, { pipeline_id, sensor_name, granularity, type, threshold, priority, query, client, is_default, sensor_id }, {})
}

export const checkImfChangesApi = ({ pipeline_id }) => {
  return get(API_ROUTE_CHECK_IMF_HAS_CHANGES, {}, { pipeline_id })
}

export const getImfColumnsApi = ({ pipeline_id }) => {
  return get(API_ROUTE_METRICS_IMF_COLUMNS, {}, { pipeline_id })
}

export const runMatricConfirmationApi = ({ program_id, running_env }) => {
  return post(API_ROUTE_METRIC_RUN, {}, { program_id, running_env })
}
export const postPrePostCallConfigApi = ({ pipeline_id, config, flag }) => {
  return post(API_ROUTEPOST_CALL_FEATURE, { config }, { pipeline_id, flag })
}

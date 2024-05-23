import { toast } from "react-toastify";

export const AUTH_TOKEN_KEY = 'secret';

export const REDUX_PERSIST_KEY = 'chatbot_root';

export const PERSIST_STORAGE_ITEM_KEY = `persist:${REDUX_PERSIST_KEY}`;

export const TOAST = {
    POSITION: toast.POSITION.BOTTOM_LEFT,
    ICON: true, //false, <Icon />
    THEME: 'light', //"dark", "colored",
    TIMEOUT: 5000,
    PAUSE_ON_BLUR: false,
    DELAY: 0
};

export const DEFAULT_TOAST_ERROR = 'Error Occured!';
export const DEFAULT_TOAST_SUCCESS = 'Operation Success!';

export const COMMON_SLICE_NAME = 'common';

export const DATA_TYPES = [
    "BIGINT",
    "BOOLEAN",
    "BLOB",
    "DATE",
    "DOUBLE",
    "DECIMAL(s, p)",
    "HUGEINT",
    "INTEGER",
    "INTERVAL",
    "REAL",
    "SMALLINT",
    "TIME",
    "TIMESTAMP",
    "TIMESTAMP WITH TIME ZONE",
    "TINYINT",
    "UBIGINT",
    "UINTEGER",
    "USMALLINT",
    "UTINYINT",
    "UUID",
    "VARCHAR"
];
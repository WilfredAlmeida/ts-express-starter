export const API_VERSION = "v1";
export const API_BASE_URL = `/api/${API_VERSION}`;
export const API_URLS = {
  AUTH: "auth",
  USER: "user",
  WEBHOOK: "webhook",
  MISC: "misc",
};

export const HttpResponseCode = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

# error in backend terminal 

INFO:     127.0.0.1:63013 - "OPTIONS /api/tasks HTTP/1.1" 200 OK
DEBUG: Attempting to verify Better Auth JWT - token present: True
DEBUG: Secret-based verification failed: The specified alg value is not allowed - trying JWKS method
DEBUG: Attempting to fetch JWKS from: http://localhost:3000/.well-known/jwks.json
DEBUG: JWKS response is not valid JSON: <!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="/_next/static/chunks/%5Broot-of-the-server... - token rejected
INFO:     127.0.0.1:63013 - "GET /api/tasks HTTP/1.1" 401 Unauthorized
# error in console

[Fast Refresh] done in 117ms
api.ts:23 Token result from authClient.token(): 
JWT token retrieved: YES
api.ts:47 Authorization header added with token
forward-logs-shared.ts:95 [Fast Refresh] rebuilding
forward-logs-shared.ts:95 [Fast Refresh] done in 270ms
forward-logs-shared.ts:95 [Fast Refresh] rebuilding
forward-logs-shared.ts:95 [Fast Refresh] done in 685ms
GET http://localhost:8000/api/tasks 401 (Unauthorized)
api.ts:74 API request failed for GET /tasks: Error: API Error: 401 - {"detail":"Invalid token or expired token."}
    at apiRequest (api.ts:63:13)
    at async fetchTasks (page.tsx:26:25)

page.tsx:31 Error fetching tasks: Error: API Error: 401 - {"detail":"Invalid token or expired token."}
    at apiRequest (api.ts:63:13)
    at async fetchTasks (page.tsx:26:25)
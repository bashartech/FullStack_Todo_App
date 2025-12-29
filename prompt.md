INFO:     127.0.0.1:57449 - "GET / HTTP/1.1" 200 OK
INFO:     127.0.0.1:57448 - "GET / HTTP/1.1" 200 OK
DEBUG: Attempting to verify Better Auth JWT - token present: True
DEBUG: Token algorithm detected: EdDSA
DEBUG: Algorithm EdDSA is asymmetric, skipping secret-based verification
DEBUG: Attempting to fetch JWKS from: http://localhost:3000/api/auth/jwks
DEBUG: JWKS response status: 200
DEBUG: JWKS response headers: {'vary': 'rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch', 'content-type': 'application/json', 'Date': 'Mon, 29 Dec 2025 04:32:11 GMT', 'Connection': 'keep-alive', 'Keep-Alive': 'timeout=5', 'Transfer-Encoding': 'chunked'}
DEBUG: JWKS response keys: ['keys']
DEBUG: JWKS keys count: 1
DEBUG: JWKS key 0: OKP EdDSA unknown
DEBUG: Successfully verified Ed25519 JWT for user: uLFkoj0d6b8NECZeSJcPcCzIoiN5fQOu
2025-12-29 09:32:17,551 INFO sqlalchemy.engine.Engine select pg_catalog.version()
2025-12-29 09:32:17,557 INFO sqlalchemy.engine.Engine [raw sql] {}
2025-12-29 09:32:18,434 INFO sqlalchemy.engine.Engine select current_schema()
2025-12-29 09:32:18,435 INFO sqlalchemy.engine.Engine [raw sql] {}
2025-12-29 09:32:18,836 INFO sqlalchemy.engine.Engine show standard_conforming_strings
2025-12-29 09:32:18,857 INFO sqlalchemy.engine.Engine [raw sql] {}
2025-12-29 09:32:19,306 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2025-12-29 09:32:19,427 INFO sqlalchemy.engine.Engine SELECT task.title, task.description, task.completed, task.id, task.user_id, task.created_at, task.updated_at, task.priority, task.tags, task.due_date
FROM task
WHERE task.user_id = %(user_id_1)s ORDER BY task.created_at DESC
2025-12-29 09:32:19,532 INFO sqlalchemy.engine.Engine [generated in 0.00135s] {'user_id_1': 'uLFkoj0d6b8NECZeSJcPcCzIoiN5fQOu'}
2025-12-29 09:32:19,977 INFO sqlalchemy.engine.Engine ROLLBACK
INFO:     127.0.0.1:57464 - "GET /api/tasks?sort=created_at&order=desc HTTP/1.1" 500 Internal Server Error
ERROR:    Exception in ASGI application
Traceback (most recent call last):
  File "D:\TODO_APP\skills\TODO_FULLSTACK_WEB_APPLICATION\backend\.venv\Lib\site-packages\uvicorn\protocols\http\httptools_impl.py", line 416, in run_asgi      
    result = await app(  # type: ignore[func-returns-value]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   obj, end = self.raw_decode(s, idx=_w(s, 0).end())
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\AAA\AppData\Roaming\uv\python\cpython-3.11.13-windows-x86_64-none\Lib\json\decoder.py", line 353, in raw_decode
    obj, end = self.scan_once(s, idx)
               ^^^^^^^^^^^^^^^^^^^^^^
json.decoder.JSONDecodeError: Expecting property name enclosed in double quotes: line 1 column 2 (char 1)

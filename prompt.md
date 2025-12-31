# error


22:21:50.354 Running build in Washington, D.C., USA (East) – iad1
22:21:50.357 Build machine configuration: 2 cores, 8 GB
22:21:50.600 Cloning github.com/bashartech/FullStack_Todo_App (Branch: main, Commit: 2ead4e4)
22:21:50.600 Previous build caches not available.
22:21:51.046 Cloning completed: 446.000ms
22:21:51.589 Running "vercel build"
22:21:52.016 Vercel CLI 50.1.3
22:21:52.357 Installing dependencies...
22:21:56.847 npm warn deprecated @esbuild-kit/core-utils@3.3.2: Merged into tsx: https://tsx.is
22:21:56.863 npm warn deprecated @esbuild-kit/esm-loader@2.6.5: Merged into tsx: https://tsx.is
22:22:19.628 
22:22:19.629 added 424 packages in 27s
22:22:19.629 
22:22:19.630 153 packages are looking for funding
22:22:19.630   run `npm fund` for details
22:22:19.678 Detected Next.js version: 16.1.0
22:22:19.685 Running "npm run build"
22:22:19.789 
22:22:19.789 > frontend@0.1.0 build
22:22:19.790 > next build
22:22:19.790 
22:22:20.616 Attention: Next.js now collects completely anonymous telemetry regarding usage.
22:22:20.616 This information is used to shape Next.js' roadmap and prioritize features.
22:22:20.618 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
22:22:20.618 https://nextjs.org/telemetry
22:22:20.618 
22:22:20.631 ▲ Next.js 16.1.0 (Turbopack)
22:22:20.632 
22:22:20.641 ⚠ The "middleware" file convention is deprecated. Please use "proxy" instead. Learn more: https://nextjs.org/docs/messages/middleware-to-proxy
22:22:20.666   Creating an optimized production build ...
22:22:37.231 
22:22:37.231 > Build error occurred
22:22:37.237 Error: Turbopack build failed with 13 errors:
22:22:37.237 ./frontend/app/dashboard/page.tsx:7:1
22:22:37.237 Module not found: Can't resolve '@/lib/api'
22:22:37.238 [0m [90m  5 |[39m
22:22:37.238  [90m  6 |[39m [36mimport[39m { useState[33m,[39m useEffect } [36mfrom[39m [32m"react"[39m
22:22:37.238 [31m[1m>[22m[39m[90m  7 |[39m [36mimport[39m { api[33m,[39m type [33mTask[39m } [36mfrom[39m [32m"@/lib/api"[39m
22:22:37.238  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.238  [90m  8 |[39m [36mimport[39m { useRouter } [36mfrom[39m [32m"next/navigation"[39m
22:22:37.239  [90m  9 |[39m [36mimport[39m [33mTaskItem[39m [36mfrom[39m [32m"@/components/task/TaskItem"[39m
22:22:37.239  [90m 10 |[39m [36mimport[39m [33mTaskReminder[39m [36mfrom[39m [32m"@/components/task/TaskReminder"[39m[0m
22:22:37.239 
22:22:37.240 Import map: aliased to relative './lib/api' inside of [project]/frontend
22:22:37.240 
22:22:37.240 
22:22:37.240 Import traces:
22:22:37.240   Client Component Browser:
22:22:37.240     ./frontend/app/dashboard/page.tsx [Client Component Browser]
22:22:37.240     ./frontend/app/dashboard/page.tsx [Server Component]
22:22:37.240 
22:22:37.241   Client Component SSR:
22:22:37.241     ./frontend/app/dashboard/page.tsx [Client Component SSR]
22:22:37.241     ./frontend/app/dashboard/page.tsx [Server Component]
22:22:37.241 
22:22:37.241 https://nextjs.org/docs/messages/module-not-found
22:22:37.241 
22:22:37.241 
22:22:37.241 ./frontend/app/api/auth/[...all]/route.ts:1:1
22:22:37.241 Module not found: Can't resolve '@/lib/auth'
22:22:37.242 [0m[31m[1m>[22m[39m[90m 1 |[39m [36mimport[39m { auth } [36mfrom[39m [32m"@/lib/auth"[39m[33m;[39m
22:22:37.242  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.242  [90m 2 |[39m [36mimport[39m { toNextJsHandler } [36mfrom[39m [32m"better-auth/next-js"[39m[33m;[39m
22:22:37.243  [90m 3 |[39m
22:22:37.243  [90m 4 |[39m [90m// export const runtime = "nodejs";[39m[0m
22:22:37.243 
22:22:37.243 Import map: aliased to relative './lib/auth' inside of [project]/frontend
22:22:37.243 
22:22:37.243 
22:22:37.244 https://nextjs.org/docs/messages/module-not-found
22:22:37.244 
22:22:37.244 
22:22:37.244 ./frontend/server/users.ts:3:1
22:22:37.244 Module not found: Can't resolve '@/lib/auth'
22:22:37.244 [0m [90m 1 |[39m [32m"use server"[39m[33m;[39m
22:22:37.244  [90m 2 |[39m
22:22:37.244 [31m[1m>[22m[39m[90m 3 |[39m [36mimport[39m { auth } [36mfrom[39m [32m"@/lib/auth"[39m[33m;[39m
22:22:37.245  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.245  [90m 4 |[39m
22:22:37.245  [90m 5 |[39m
22:22:37.245  [90m 6 |[39m[0m
22:22:37.245 
22:22:37.245 Import map: aliased to relative './lib/auth' inside of [project]/frontend
22:22:37.245 
22:22:37.245 
22:22:37.246 https://nextjs.org/docs/messages/module-not-found
22:22:37.246 
22:22:37.246 
22:22:37.246 ./frontend/components/login-form.tsx:19:1
22:22:37.246 Module not found: Can't resolve '@/lib/auth-client'
22:22:37.246 [0m [90m 17 |[39m [36mimport[39m { useState } [36mfrom[39m [32m"react"[39m
22:22:37.246  [90m 18 |[39m [36mimport[39m { [33mLoader2[39m } [36mfrom[39m [32m"lucide-react"[39m
22:22:37.247 [31m[1m>[22m[39m[90m 19 |[39m [36mimport[39m { authClient } [36mfrom[39m [32m"@/lib/auth-client"[39m
22:22:37.247  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.247  [90m 20 |[39m
22:22:37.248  [90m 21 |[39m [36mconst[39m formSchema [33m=[39m z[33m.[39mobject({
22:22:37.248  [90m 22 |[39m   email[33m:[39m z[33m.[39mstring()[33m.[39memail()[33m,[39m[0m
22:22:37.248 
22:22:37.248 Import map: aliased to relative './lib/auth-client' inside of [project]/frontend
22:22:37.248 
22:22:37.248 
22:22:37.248 Import traces:
22:22:37.249   Client Component Browser:
22:22:37.249     ./frontend/components/login-form.tsx [Client Component Browser]
22:22:37.249     ./frontend/app/login/page.tsx [Client Component Browser]
22:22:37.249     ./frontend/app/login/page.tsx [Server Component]
22:22:37.249 
22:22:37.249   Client Component SSR:
22:22:37.249     ./frontend/components/login-form.tsx [Client Component SSR]
22:22:37.249     ./frontend/app/login/page.tsx [Client Component SSR]
22:22:37.250     ./frontend/app/login/page.tsx [Server Component]
22:22:37.250 
22:22:37.250 https://nextjs.org/docs/messages/module-not-found
22:22:37.250 
22:22:37.250 
22:22:37.250 ./frontend/components/logout.tsx:3:1
22:22:37.250 Module not found: Can't resolve '@/lib/auth-client'
22:22:37.250 [0m [90m 1 |[39m [32m"use client"[39m
22:22:37.251  [90m 2 |[39m [36mimport[39m [33mReact[39m [36mfrom[39m [32m'react'[39m
22:22:37.251 [31m[1m>[22m[39m[90m 3 |[39m [36mimport[39m { authClient } [36mfrom[39m [32m'@/lib/auth-client'[39m
22:22:37.251  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.251  [90m 4 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m'./ui/button'[39m
22:22:37.252  [90m 5 |[39m [36mimport[39m { [33mLogOut[39m } [36mfrom[39m [32m'lucide-react'[39m
22:22:37.252  [90m 6 |[39m [36mconst[39m [33mLogout[39m [33m=[39m () [33m=>[39m {[0m
22:22:37.252 
22:22:37.252 Import map: aliased to relative './lib/auth-client' inside of [project]/frontend
22:22:37.252 
22:22:37.252 
22:22:37.252 Import traces:
22:22:37.253   Client Component Browser:
22:22:37.253     ./frontend/components/logout.tsx [Client Component Browser]
22:22:37.253     ./frontend/app/dashboard/page.tsx [Client Component Browser]
22:22:37.253     ./frontend/app/dashboard/page.tsx [Server Component]
22:22:37.253 
22:22:37.253   Client Component SSR:
22:22:37.253     ./frontend/components/logout.tsx [Client Component SSR]
22:22:37.267     ./frontend/app/dashboard/page.tsx [Client Component SSR]
22:22:37.267     ./frontend/app/dashboard/page.tsx [Server Component]
22:22:37.267 
22:22:37.267 https://nextjs.org/docs/messages/module-not-found
22:22:37.268 
22:22:37.268 
22:22:37.268 ./frontend/components/signup-form.tsx:19:1
22:22:37.268 Module not found: Can't resolve '@/lib/auth-client'
22:22:37.268 [0m [90m 17 |[39m [36mimport[39m { useState } [36mfrom[39m [32m"react"[39m
22:22:37.268  [90m 18 |[39m [36mimport[39m { [33mLoader2[39m } [36mfrom[39m [32m"lucide-react"[39m
22:22:37.268 [31m[1m>[22m[39m[90m 19 |[39m [36mimport[39m { authClient } [36mfrom[39m [32m"@/lib/auth-client"[39m
22:22:37.268  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.268  [90m 20 |[39m
22:22:37.268  [90m 21 |[39m [36mconst[39m formSchema [33m=[39m z[33m.[39mobject({
22:22:37.268  [90m 22 |[39m   username[33m:[39m z[33m.[39mstring()[33m.[39mmin([35m3[39m)[33m,[39m[0m
22:22:37.268 
22:22:37.269 Import map: aliased to relative './lib/auth-client' inside of [project]/frontend
22:22:37.269 
22:22:37.269 
22:22:37.269 Import traces:
22:22:37.269   Client Component Browser:
22:22:37.269     ./frontend/components/signup-form.tsx [Client Component Browser]
22:22:37.269     ./frontend/app/signup/page.tsx [Client Component Browser]
22:22:37.269     ./frontend/app/signup/page.tsx [Server Component]
22:22:37.269 
22:22:37.269   Client Component SSR:
22:22:37.269     ./frontend/components/signup-form.tsx [Client Component SSR]
22:22:37.269     ./frontend/app/signup/page.tsx [Client Component SSR]
22:22:37.270     ./frontend/app/signup/page.tsx [Server Component]
22:22:37.270 
22:22:37.270 https://nextjs.org/docs/messages/module-not-found
22:22:37.270 
22:22:37.270 
22:22:37.270 ./frontend/components/login-form.tsx:8:1
22:22:37.270 Module not found: Can't resolve '@/lib/utils'
22:22:37.270 [0m [90m  6 |[39m [36mimport[39m { zodResolver } [36mfrom[39m [32m"@hookform/resolvers/zod"[39m
22:22:37.270  [90m  7 |[39m [36mimport[39m { useForm } [36mfrom[39m [32m"react-hook-form"[39m
22:22:37.270 [31m[1m>[22m[39m[90m  8 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
22:22:37.270  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.271  [90m  9 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"@/components/ui/button"[39m
22:22:37.271  [90m 10 |[39m [36mimport[39m { [33mCard[39m[33m,[39m [33mCardContent[39m[33m,[39m [33mCardDescription[39m[33m,[39m [33mCardHeader[39m[33m,[39m [33mCardTitle[39m } [36mfrom[39m [32m"@/components/ui/card"[39m
22:22:37.271  [90m 11 |[39m [36mimport[39m { [33mInput[39m } [36mfrom[39m [32m"@/components/ui/input"[39m[0m
22:22:37.271 
22:22:37.271 Import map: aliased to relative './lib/utils' inside of [project]/frontend
22:22:37.271 
22:22:37.271 
22:22:37.271 Import traces:
22:22:37.271   Client Component Browser:
22:22:37.271     ./frontend/components/login-form.tsx [Client Component Browser]
22:22:37.271     ./frontend/app/login/page.tsx [Client Component Browser]
22:22:37.271     ./frontend/app/login/page.tsx [Server Component]
22:22:37.271 
22:22:37.271   Client Component SSR:
22:22:37.272     ./frontend/components/login-form.tsx [Client Component SSR]
22:22:37.272     ./frontend/app/login/page.tsx [Client Component SSR]
22:22:37.272     ./frontend/app/login/page.tsx [Server Component]
22:22:37.272 
22:22:37.272 https://nextjs.org/docs/messages/module-not-found
22:22:37.272 
22:22:37.272 
22:22:37.272 ./frontend/components/signup-form.tsx:8:1
22:22:37.272 Module not found: Can't resolve '@/lib/utils'
22:22:37.272 [0m [90m  6 |[39m [36mimport[39m { zodResolver } [36mfrom[39m [32m"@hookform/resolvers/zod"[39m
22:22:37.272  [90m  7 |[39m [36mimport[39m { useForm } [36mfrom[39m [32m"react-hook-form"[39m
22:22:37.273 [31m[1m>[22m[39m[90m  8 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
22:22:37.278  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.278  [90m  9 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"@/components/ui/button"[39m
22:22:37.279  [90m 10 |[39m [36mimport[39m { [33mCard[39m[33m,[39m [33mCardContent[39m[33m,[39m [33mCardDescription[39m[33m,[39m [33mCardHeader[39m[33m,[39m [33mCardTitle[39m } [36mfrom[39m [32m"@/components/ui/card"[39m
22:22:37.279  [90m 11 |[39m [36mimport[39m { [33mInput[39m } [36mfrom[39m [32m"@/components/ui/input"[39m[0m
22:22:37.279 
22:22:37.279 Import map: aliased to relative './lib/utils' inside of [project]/frontend
22:22:37.279 
22:22:37.279 
22:22:37.279 Import traces:
22:22:37.279   Client Component Browser:
22:22:37.279     ./frontend/components/signup-form.tsx [Client Component Browser]
22:22:37.279     ./frontend/app/signup/page.tsx [Client Component Browser]
22:22:37.279     ./frontend/app/signup/page.tsx [Server Component]
22:22:37.279 
22:22:37.280   Client Component SSR:
22:22:37.280     ./frontend/components/signup-form.tsx [Client Component SSR]
22:22:37.280     ./frontend/app/signup/page.tsx [Client Component SSR]
22:22:37.280     ./frontend/app/signup/page.tsx [Server Component]
22:22:37.280 
22:22:37.280 https://nextjs.org/docs/messages/module-not-found
22:22:37.280 
22:22:37.280 
22:22:37.280 ./frontend/components/ui/button.tsx:5:1
22:22:37.280 Module not found: Can't resolve '@/lib/utils'
22:22:37.280 [0m [90m 3 |[39m [36mimport[39m { cva[33m,[39m type [33mVariantProps[39m } [36mfrom[39m [32m"class-variance-authority"[39m
22:22:37.280  [90m 4 |[39m
22:22:37.281 [31m[1m>[22m[39m[90m 5 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
22:22:37.281  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.281  [90m 6 |[39m
22:22:37.281  [90m 7 |[39m [36mconst[39m buttonVariants [33m=[39m cva(
22:22:37.281  [90m 8 |[39m   [32m"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"[39m[33m,[39m[0m
22:22:37.281 
22:22:37.281 Import map: aliased to relative './lib/utils' inside of [project]/frontend
22:22:37.281 
22:22:37.281 
22:22:37.281 Import traces:
22:22:37.281   Client Component Browser:
22:22:37.281     ./frontend/components/ui/button.tsx [Client Component Browser]
22:22:37.281     ./frontend/components/logout.tsx [Client Component Browser]
22:22:37.281     ./frontend/app/dashboard/page.tsx [Client Component Browser]
22:22:37.281     ./frontend/app/dashboard/page.tsx [Server Component]
22:22:37.282 
22:22:37.282   Client Component SSR:
22:22:37.282     ./frontend/components/ui/button.tsx [Client Component SSR]
22:22:37.282     ./frontend/components/logout.tsx [Client Component SSR]
22:22:37.282     ./frontend/app/dashboard/page.tsx [Client Component SSR]
22:22:37.282     ./frontend/app/dashboard/page.tsx [Server Component]
22:22:37.282 
22:22:37.282 https://nextjs.org/docs/messages/module-not-found
22:22:37.282 
22:22:37.282 
22:22:37.282 ./frontend/components/ui/card.tsx:3:1
22:22:37.282 Module not found: Can't resolve '@/lib/utils'
22:22:37.282 [0m [90m 1 |[39m [36mimport[39m [33m*[39m [36mas[39m [33mReact[39m [36mfrom[39m [32m"react"[39m
22:22:37.282  [90m 2 |[39m
22:22:37.282 [31m[1m>[22m[39m[90m 3 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
22:22:37.282  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.282  [90m 4 |[39m
22:22:37.282  [90m 5 |[39m [36mfunction[39m [33mCard[39m({ className[33m,[39m [33m...[39mprops }[33m:[39m [33mReact[39m[33m.[39m[33mComponentProps[39m[33m<[39m[32m"div"[39m[33m>[39m) {
22:22:37.283  [90m 6 |[39m   [36mreturn[39m ([0m
22:22:37.283 
22:22:37.283 Import map: aliased to relative './lib/utils' inside of [project]/frontend
22:22:37.283 
22:22:37.283 
22:22:37.283 Import traces:
22:22:37.283   Client Component Browser:
22:22:37.283     ./frontend/components/ui/card.tsx [Client Component Browser]
22:22:37.283     ./frontend/components/login-form.tsx [Client Component Browser]
22:22:37.283     ./frontend/app/login/page.tsx [Client Component Browser]
22:22:37.283     ./frontend/app/login/page.tsx [Server Component]
22:22:37.283 
22:22:37.283   Client Component SSR:
22:22:37.283     ./frontend/components/ui/card.tsx [Client Component SSR]
22:22:37.284     ./frontend/components/login-form.tsx [Client Component SSR]
22:22:37.284     ./frontend/app/login/page.tsx [Client Component SSR]
22:22:37.284     ./frontend/app/login/page.tsx [Server Component]
22:22:37.284 
22:22:37.284 https://nextjs.org/docs/messages/module-not-found
22:22:37.284 
22:22:37.284 
22:22:37.284 ./frontend/components/ui/form.tsx:16:1
22:22:37.284 Module not found: Can't resolve '@/lib/utils'
22:22:37.284 [0m [90m 14 |[39m } [36mfrom[39m [32m"react-hook-form"[39m
22:22:37.284  [90m 15 |[39m
22:22:37.284 [31m[1m>[22m[39m[90m 16 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
22:22:37.284  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.285  [90m 17 |[39m [36mimport[39m { [33mLabel[39m } [36mfrom[39m [32m"@/components/ui/label"[39m
22:22:37.285  [90m 18 |[39m
22:22:37.285  [90m 19 |[39m [36mconst[39m [33mForm[39m [33m=[39m [33mFormProvider[39m[0m
22:22:37.285 
22:22:37.285 Import map: aliased to relative './lib/utils' inside of [project]/frontend
22:22:37.285 
22:22:37.285 
22:22:37.285 Import traces:
22:22:37.285   Client Component Browser:
22:22:37.285     ./frontend/components/ui/form.tsx [Client Component Browser]
22:22:37.285     ./frontend/components/login-form.tsx [Client Component Browser]
22:22:37.285     ./frontend/app/login/page.tsx [Client Component Browser]
22:22:37.285     ./frontend/app/login/page.tsx [Server Component]
22:22:37.286 
22:22:37.286   Client Component SSR:
22:22:37.286     ./frontend/components/ui/form.tsx [Client Component SSR]
22:22:37.286     ./frontend/components/login-form.tsx [Client Component SSR]
22:22:37.286     ./frontend/app/login/page.tsx [Client Component SSR]
22:22:37.286     ./frontend/app/login/page.tsx [Server Component]
22:22:37.286 
22:22:37.286 https://nextjs.org/docs/messages/module-not-found
22:22:37.286 
22:22:37.286 
22:22:37.286 ./frontend/components/ui/input.tsx:3:1
22:22:37.287 Module not found: Can't resolve '@/lib/utils'
22:22:37.287 [0m [90m 1 |[39m [36mimport[39m [33m*[39m [36mas[39m [33mReact[39m [36mfrom[39m [32m"react"[39m
22:22:37.287  [90m 2 |[39m
22:22:37.287 [31m[1m>[22m[39m[90m 3 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
22:22:37.287  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.287  [90m 4 |[39m
22:22:37.287  [90m 5 |[39m [36mfunction[39m [33mInput[39m({ className[33m,[39m type[33m,[39m [33m...[39mprops }[33m:[39m [33mReact[39m[33m.[39m[33mComponentProps[39m[33m<[39m[32m"input"[39m[33m>[39m) {
22:22:37.287  [90m 6 |[39m   [36mreturn[39m ([0m
22:22:37.287 
22:22:37.287 Import map: aliased to relative './lib/utils' inside of [project]/frontend
22:22:37.288 
22:22:37.289 
22:22:37.289 Import traces:
22:22:37.289   Client Component Browser:
22:22:37.289     ./frontend/components/ui/input.tsx [Client Component Browser]
22:22:37.289     ./frontend/components/login-form.tsx [Client Component Browser]
22:22:37.289     ./frontend/app/login/page.tsx [Client Component Browser]
22:22:37.289     ./frontend/app/login/page.tsx [Server Component]
22:22:37.289 
22:22:37.289   Client Component SSR:
22:22:37.289     ./frontend/components/ui/input.tsx [Client Component SSR]
22:22:37.289     ./frontend/components/login-form.tsx [Client Component SSR]
22:22:37.290     ./frontend/app/login/page.tsx [Client Component SSR]
22:22:37.290     ./frontend/app/login/page.tsx [Server Component]
22:22:37.290 
22:22:37.290 https://nextjs.org/docs/messages/module-not-found
22:22:37.290 
22:22:37.290 
22:22:37.290 ./frontend/components/ui/label.tsx:6:1
22:22:37.290 Module not found: Can't resolve '@/lib/utils'
22:22:37.290 [0m [90m 4 |[39m [36mimport[39m [33m*[39m [36mas[39m [33mLabelPrimitive[39m [36mfrom[39m [32m"@radix-ui/react-label"[39m
22:22:37.290  [90m 5 |[39m
22:22:37.291 [31m[1m>[22m[39m[90m 6 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
22:22:37.291  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
22:22:37.291  [90m 7 |[39m
22:22:37.291  [90m 8 |[39m [36mfunction[39m [33mLabel[39m({
22:22:37.291  [90m 9 |[39m   className[33m,[39m[0m
22:22:37.291 
22:22:37.291 Import map: aliased to relative './lib/utils' inside of [project]/frontend
22:22:37.291 
22:22:37.291 
22:22:37.291 Import traces:
22:22:37.291   Client Component Browser:
22:22:37.291     ./frontend/components/ui/label.tsx [Client Component Browser]
22:22:37.292     ./frontend/components/ui/form.tsx [Client Component Browser]
22:22:37.292     ./frontend/components/login-form.tsx [Client Component Browser]
22:22:37.292     ./frontend/app/login/page.tsx [Client Component Browser]
22:22:37.292     ./frontend/app/login/page.tsx [Server Component]
22:22:37.292 
22:22:37.292   Client Component SSR:
22:22:37.292     ./frontend/components/ui/label.tsx [Client Component SSR]
22:22:37.292     ./frontend/components/ui/form.tsx [Client Component SSR]
22:22:37.292     ./frontend/components/login-form.tsx [Client Component SSR]
22:22:37.292     ./frontend/app/login/page.tsx [Client Component SSR]
22:22:37.293     ./frontend/app/login/page.tsx [Server Component]
22:22:37.293 
22:22:37.293 https://nextjs.org/docs/messages/module-not-found
22:22:37.293 
22:22:37.293 
22:22:37.293     at <unknown> (./frontend/app/dashboard/page.tsx:7:1)
22:22:37.293     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.293     at <unknown> (./frontend/app/api/auth/[...all]/route.ts:1:1)
22:22:37.293     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.293     at <unknown> (./frontend/server/users.ts:3:1)
22:22:37.293     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.294     at <unknown> (./frontend/components/login-form.tsx:19:1)
22:22:37.294     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.294     at <unknown> (./frontend/components/logout.tsx:3:1)
22:22:37.294     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.294     at <unknown> (./frontend/components/signup-form.tsx:19:1)
22:22:37.294     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.294     at <unknown> (./frontend/components/login-form.tsx:8:1)
22:22:37.294     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.294     at <unknown> (./frontend/components/signup-form.tsx:8:1)
22:22:37.294     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.294     at <unknown> (./frontend/components/ui/button.tsx:5:1)
22:22:37.295     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.295     at <unknown> (./frontend/components/ui/card.tsx:3:1)
22:22:37.295     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.295     at <unknown> (./frontend/components/ui/form.tsx:16:1)
22:22:37.295     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.295     at <unknown> (./frontend/components/ui/input.tsx:3:1)
22:22:37.295     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.295     at <unknown> (./frontend/components/ui/label.tsx:6:1)
22:22:37.295     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
22:22:37.369 Error: Command "npm run build" exited with 1



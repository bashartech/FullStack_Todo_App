21:17:41.685 Running build in Washington, D.C., USA (East) – iad1
21:17:41.686 Build machine configuration: 2 cores, 8 GB
21:17:41.805 Cloning github.com/bashartech/FullStack_Todo_App (Branch: main, Commit: c28de79)
21:17:41.806 Previous build caches not available.
21:17:42.044 Cloning completed: 239.000ms
21:17:42.422 Running "vercel build"
21:17:42.865 Vercel CLI 50.1.3
21:17:43.193 Installing dependencies...
21:17:47.151 npm warn deprecated @esbuild-kit/esm-loader@2.6.5: Merged into tsx: https://tsx.is
21:17:47.164 npm warn deprecated @esbuild-kit/core-utils@3.3.2: Merged into tsx: https://tsx.is
21:18:08.473 
21:18:08.474 added 424 packages in 25s
21:18:08.475 
21:18:08.475 153 packages are looking for funding
21:18:08.475   run `npm fund` for details
21:18:08.522 Detected Next.js version: 16.1.0
21:18:08.529 Running "npm run build"
21:18:08.626 
21:18:08.626 > frontend@0.1.0 build
21:18:08.627 > next build
21:18:08.627 
21:18:09.377 ⚠ `experimental.typedRoutes` has been moved to `typedRoutes`. Please update your next.config.ts file accordingly.
21:18:09.420 Attention: Next.js now collects completely anonymous telemetry regarding usage.
21:18:09.420 This information is used to shape Next.js' roadmap and prioritize features.
21:18:09.420 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
21:18:09.420 https://nextjs.org/telemetry
21:18:09.420 
21:18:09.433 ▲ Next.js 16.1.0 (Turbopack)
21:18:09.434 - Experiments (use with caution):
21:18:09.434   ✓ typedRoutes
21:18:09.434 
21:18:09.444 ⚠ The "middleware" file convention is deprecated. Please use "proxy" instead. Learn more: https://nextjs.org/docs/messages/middleware-to-proxy
21:18:09.469   Creating an optimized production build ...
21:18:24.615 
21:18:24.616 > Build error occurred
21:18:24.621 Error: Turbopack build failed with 13 errors:
21:18:24.621 ./frontend/server/users.ts:8:1
21:18:24.622 Module not found: Can't resolve '../lib/auth'
21:18:24.622 [0m [90m  6 |[39m [90m// import { db } from "@/db/drizzle";[39m
21:18:24.622  [90m  7 |[39m [90m// import { member, user } from "@/db/schema";[39m
21:18:24.622 [31m[1m>[22m[39m[90m  8 |[39m [36mimport[39m { auth } [36mfrom[39m [32m"../lib/auth"[39m[33m;[39m
21:18:24.622  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.622  [90m  9 |[39m
21:18:24.622  [90m 10 |[39m [90m// export const getCurrentUser = async () => {[39m
21:18:24.622  [90m 11 |[39m [90m//   const session = await auth.api.getSession({[39m[0m
21:18:24.623 
21:18:24.623 
21:18:24.623 
21:18:24.623 https://nextjs.org/docs/messages/module-not-found
21:18:24.623 
21:18:24.623 
21:18:24.623 ./frontend/app/dashboard/page.tsx:7:1
21:18:24.623 Module not found: Can't resolve '@/lib/api'
21:18:24.623 [0m [90m  5 |[39m
21:18:24.623  [90m  6 |[39m [36mimport[39m { useState[33m,[39m useEffect } [36mfrom[39m [32m"react"[39m
21:18:24.623 [31m[1m>[22m[39m[90m  7 |[39m [36mimport[39m { api[33m,[39m type [33mTask[39m } [36mfrom[39m [32m"@/lib/api"[39m
21:18:24.623  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.623  [90m  8 |[39m [36mimport[39m { useRouter } [36mfrom[39m [32m"next/navigation"[39m
21:18:24.624  [90m  9 |[39m [36mimport[39m [33mTaskItem[39m [36mfrom[39m [32m"@/components/task/TaskItem"[39m
21:18:24.624  [90m 10 |[39m [36mimport[39m [33mTaskReminder[39m [36mfrom[39m [32m"@/components/task/TaskReminder"[39m[0m
21:18:24.624 
21:18:24.624 Import map: aliased to relative './lib/api' inside of [project]/frontend
21:18:24.626 
21:18:24.626 
21:18:24.627 Import traces:
21:18:24.627   Client Component Browser:
21:18:24.627     ./frontend/app/dashboard/page.tsx [Client Component Browser]
21:18:24.627     ./frontend/app/dashboard/page.tsx [Server Component]
21:18:24.627 
21:18:24.627   Client Component SSR:
21:18:24.627     ./frontend/app/dashboard/page.tsx [Client Component SSR]
21:18:24.627     ./frontend/app/dashboard/page.tsx [Server Component]
21:18:24.631 
21:18:24.631 https://nextjs.org/docs/messages/module-not-found
21:18:24.631 
21:18:24.631 
21:18:24.631 ./frontend/app/api/auth/[...all]/route.ts:1:1
21:18:24.631 Module not found: Can't resolve '@/lib/auth'
21:18:24.631 [0m[31m[1m>[22m[39m[90m 1 |[39m [36mimport[39m { auth } [36mfrom[39m [32m"@/lib/auth"[39m[33m;[39m
21:18:24.632  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.632  [90m 2 |[39m [36mimport[39m { toNextJsHandler } [36mfrom[39m [32m"better-auth/next-js"[39m[33m;[39m
21:18:24.632  [90m 3 |[39m
21:18:24.632  [90m 4 |[39m [90m// export const runtime = "nodejs";[39m[0m
21:18:24.632 
21:18:24.632 Import map: aliased to relative './lib/auth' inside of [project]/frontend
21:18:24.632 
21:18:24.632 
21:18:24.632 https://nextjs.org/docs/messages/module-not-found
21:18:24.632 
21:18:24.632 
21:18:24.632 ./frontend/components/login-form.tsx:19:1
21:18:24.632 Module not found: Can't resolve '@/lib/auth-client'
21:18:24.632 [0m [90m 17 |[39m [36mimport[39m { useState } [36mfrom[39m [32m"react"[39m
21:18:24.632  [90m 18 |[39m [36mimport[39m { [33mLoader2[39m } [36mfrom[39m [32m"lucide-react"[39m
21:18:24.632 [31m[1m>[22m[39m[90m 19 |[39m [36mimport[39m { authClient } [36mfrom[39m [32m"@/lib/auth-client"[39m
21:18:24.632  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.632  [90m 20 |[39m
21:18:24.632  [90m 21 |[39m [36mconst[39m formSchema [33m=[39m z[33m.[39mobject({
21:18:24.632  [90m 22 |[39m   email[33m:[39m z[33m.[39mstring()[33m.[39memail()[33m,[39m[0m
21:18:24.632 
21:18:24.632 Import map: aliased to relative './lib/auth-client' inside of [project]/frontend
21:18:24.632 
21:18:24.632 
21:18:24.632 Import traces:
21:18:24.632   Client Component Browser:
21:18:24.632     ./frontend/components/login-form.tsx [Client Component Browser]
21:18:24.632     ./frontend/app/login/page.tsx [Client Component Browser]
21:18:24.632     ./frontend/app/login/page.tsx [Server Component]
21:18:24.632 
21:18:24.632   Client Component SSR:
21:18:24.632     ./frontend/components/login-form.tsx [Client Component SSR]
21:18:24.632     ./frontend/app/login/page.tsx [Client Component SSR]
21:18:24.633     ./frontend/app/login/page.tsx [Server Component]
21:18:24.633 
21:18:24.633 https://nextjs.org/docs/messages/module-not-found
21:18:24.633 
21:18:24.633 
21:18:24.633 ./frontend/components/logout.tsx:3:1
21:18:24.633 Module not found: Can't resolve '@/lib/auth-client'
21:18:24.633 [0m [90m 1 |[39m [32m"use client"[39m
21:18:24.633  [90m 2 |[39m [36mimport[39m [33mReact[39m [36mfrom[39m [32m'react'[39m
21:18:24.633 [31m[1m>[22m[39m[90m 3 |[39m [36mimport[39m { authClient } [36mfrom[39m [32m'@/lib/auth-client'[39m
21:18:24.633  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.633  [90m 4 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m'./ui/button'[39m
21:18:24.633  [90m 5 |[39m [36mimport[39m { [33mLogOut[39m } [36mfrom[39m [32m'lucide-react'[39m
21:18:24.633  [90m 6 |[39m [36mconst[39m [33mLogout[39m [33m=[39m () [33m=>[39m {[0m
21:18:24.633 
21:18:24.633 Import map: aliased to relative './lib/auth-client' inside of [project]/frontend
21:18:24.633 
21:18:24.633 
21:18:24.633 Import traces:
21:18:24.633   Client Component Browser:
21:18:24.633     ./frontend/components/logout.tsx [Client Component Browser]
21:18:24.633     ./frontend/app/dashboard/page.tsx [Client Component Browser]
21:18:24.633     ./frontend/app/dashboard/page.tsx [Server Component]
21:18:24.633 
21:18:24.633   Client Component SSR:
21:18:24.633     ./frontend/components/logout.tsx [Client Component SSR]
21:18:24.633     ./frontend/app/dashboard/page.tsx [Client Component SSR]
21:18:24.633     ./frontend/app/dashboard/page.tsx [Server Component]
21:18:24.633 
21:18:24.633 https://nextjs.org/docs/messages/module-not-found
21:18:24.633 
21:18:24.633 
21:18:24.633 ./frontend/components/signup-form.tsx:19:1
21:18:24.633 Module not found: Can't resolve '@/lib/auth-client'
21:18:24.634 [0m [90m 17 |[39m [36mimport[39m { useState } [36mfrom[39m [32m"react"[39m
21:18:24.634  [90m 18 |[39m [36mimport[39m { [33mLoader2[39m } [36mfrom[39m [32m"lucide-react"[39m
21:18:24.634 [31m[1m>[22m[39m[90m 19 |[39m [36mimport[39m { authClient } [36mfrom[39m [32m"@/lib/auth-client"[39m
21:18:24.634  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.634  [90m 20 |[39m
21:18:24.634  [90m 21 |[39m [36mconst[39m formSchema [33m=[39m z[33m.[39mobject({
21:18:24.634  [90m 22 |[39m   username[33m:[39m z[33m.[39mstring()[33m.[39mmin([35m3[39m)[33m,[39m[0m
21:18:24.634 
21:18:24.634 Import map: aliased to relative './lib/auth-client' inside of [project]/frontend
21:18:24.634 
21:18:24.634 
21:18:24.634 Import traces:
21:18:24.634   Client Component Browser:
21:18:24.634     ./frontend/components/signup-form.tsx [Client Component Browser]
21:18:24.634     ./frontend/app/signup/page.tsx [Client Component Browser]
21:18:24.634     ./frontend/app/signup/page.tsx [Server Component]
21:18:24.634 
21:18:24.639   Client Component SSR:
21:18:24.639     ./frontend/components/signup-form.tsx [Client Component SSR]
21:18:24.639     ./frontend/app/signup/page.tsx [Client Component SSR]
21:18:24.639     ./frontend/app/signup/page.tsx [Server Component]
21:18:24.639 
21:18:24.639 https://nextjs.org/docs/messages/module-not-found
21:18:24.639 
21:18:24.639 
21:18:24.639 ./frontend/components/login-form.tsx:8:1
21:18:24.639 Module not found: Can't resolve '@/lib/utils'
21:18:24.639 [0m [90m  6 |[39m [36mimport[39m { zodResolver } [36mfrom[39m [32m"@hookform/resolvers/zod"[39m
21:18:24.639  [90m  7 |[39m [36mimport[39m { useForm } [36mfrom[39m [32m"react-hook-form"[39m
21:18:24.640 [31m[1m>[22m[39m[90m  8 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
21:18:24.640  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.640  [90m  9 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"@/components/ui/button"[39m
21:18:24.640  [90m 10 |[39m [36mimport[39m { [33mCard[39m[33m,[39m [33mCardContent[39m[33m,[39m [33mCardDescription[39m[33m,[39m [33mCardHeader[39m[33m,[39m [33mCardTitle[39m } [36mfrom[39m [32m"@/components/ui/card"[39m
21:18:24.640  [90m 11 |[39m [36mimport[39m { [33mInput[39m } [36mfrom[39m [32m"@/components/ui/input"[39m[0m
21:18:24.640 
21:18:24.640 Import map: aliased to relative './lib/utils' inside of [project]/frontend
21:18:24.640 
21:18:24.640 
21:18:24.640 Import traces:
21:18:24.640   Client Component Browser:
21:18:24.640     ./frontend/components/login-form.tsx [Client Component Browser]
21:18:24.641     ./frontend/app/login/page.tsx [Client Component Browser]
21:18:24.641     ./frontend/app/login/page.tsx [Server Component]
21:18:24.641 
21:18:24.641   Client Component SSR:
21:18:24.641     ./frontend/components/login-form.tsx [Client Component SSR]
21:18:24.641     ./frontend/app/login/page.tsx [Client Component SSR]
21:18:24.641     ./frontend/app/login/page.tsx [Server Component]
21:18:24.641 
21:18:24.641 https://nextjs.org/docs/messages/module-not-found
21:18:24.641 
21:18:24.641 
21:18:24.641 ./frontend/components/signup-form.tsx:8:1
21:18:24.641 Module not found: Can't resolve '@/lib/utils'
21:18:24.641 [0m [90m  6 |[39m [36mimport[39m { zodResolver } [36mfrom[39m [32m"@hookform/resolvers/zod"[39m
21:18:24.641  [90m  7 |[39m [36mimport[39m { useForm } [36mfrom[39m [32m"react-hook-form"[39m
21:18:24.641 [31m[1m>[22m[39m[90m  8 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
21:18:24.641  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.641  [90m  9 |[39m [36mimport[39m { [33mButton[39m } [36mfrom[39m [32m"@/components/ui/button"[39m
21:18:24.641  [90m 10 |[39m [36mimport[39m { [33mCard[39m[33m,[39m [33mCardContent[39m[33m,[39m [33mCardDescription[39m[33m,[39m [33mCardHeader[39m[33m,[39m [33mCardTitle[39m } [36mfrom[39m [32m"@/components/ui/card"[39m
21:18:24.642  [90m 11 |[39m [36mimport[39m { [33mInput[39m } [36mfrom[39m [32m"@/components/ui/input"[39m[0m
21:18:24.642 
21:18:24.642 Import map: aliased to relative './lib/utils' inside of [project]/frontend
21:18:24.642 
21:18:24.642 
21:18:24.642 Import traces:
21:18:24.642   Client Component Browser:
21:18:24.642     ./frontend/components/signup-form.tsx [Client Component Browser]
21:18:24.642     ./frontend/app/signup/page.tsx [Client Component Browser]
21:18:24.642     ./frontend/app/signup/page.tsx [Server Component]
21:18:24.642 
21:18:24.642   Client Component SSR:
21:18:24.642     ./frontend/components/signup-form.tsx [Client Component SSR]
21:18:24.642     ./frontend/app/signup/page.tsx [Client Component SSR]
21:18:24.642     ./frontend/app/signup/page.tsx [Server Component]
21:18:24.642 
21:18:24.642 https://nextjs.org/docs/messages/module-not-found
21:18:24.642 
21:18:24.642 
21:18:24.642 ./frontend/components/ui/button.tsx:5:1
21:18:24.642 Module not found: Can't resolve '@/lib/utils'
21:18:24.642 [0m [90m 3 |[39m [36mimport[39m { cva[33m,[39m type [33mVariantProps[39m } [36mfrom[39m [32m"class-variance-authority"[39m
21:18:24.642  [90m 4 |[39m
21:18:24.642 [31m[1m>[22m[39m[90m 5 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
21:18:24.642  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.642  [90m 6 |[39m
21:18:24.642  [90m 7 |[39m [36mconst[39m buttonVariants [33m=[39m cva(
21:18:24.642  [90m 8 |[39m   [32m"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"[39m[33m,[39m[0m
21:18:24.642 
21:18:24.642 Import map: aliased to relative './lib/utils' inside of [project]/frontend
21:18:24.642 
21:18:24.642 
21:18:24.642 Import traces:
21:18:24.642   Client Component Browser:
21:18:24.642     ./frontend/components/ui/button.tsx [Client Component Browser]
21:18:24.642     ./frontend/components/logout.tsx [Client Component Browser]
21:18:24.643     ./frontend/app/dashboard/page.tsx [Client Component Browser]
21:18:24.643     ./frontend/app/dashboard/page.tsx [Server Component]
21:18:24.643 
21:18:24.643   Client Component SSR:
21:18:24.643     ./frontend/components/ui/button.tsx [Client Component SSR]
21:18:24.643     ./frontend/components/logout.tsx [Client Component SSR]
21:18:24.643     ./frontend/app/dashboard/page.tsx [Client Component SSR]
21:18:24.643     ./frontend/app/dashboard/page.tsx [Server Component]
21:18:24.643 
21:18:24.643 https://nextjs.org/docs/messages/module-not-found
21:18:24.643 
21:18:24.643 
21:18:24.643 ./frontend/components/ui/card.tsx:3:1
21:18:24.643 Module not found: Can't resolve '@/lib/utils'
21:18:24.643 [0m [90m 1 |[39m [36mimport[39m [33m*[39m [36mas[39m [33mReact[39m [36mfrom[39m [32m"react"[39m
21:18:24.643  [90m 2 |[39m
21:18:24.643 [31m[1m>[22m[39m[90m 3 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
21:18:24.643  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.643  [90m 4 |[39m
21:18:24.643  [90m 5 |[39m [36mfunction[39m [33mCard[39m({ className[33m,[39m [33m...[39mprops }[33m:[39m [33mReact[39m[33m.[39m[33mComponentProps[39m[33m<[39m[32m"div"[39m[33m>[39m) {
21:18:24.643  [90m 6 |[39m   [36mreturn[39m ([0m
21:18:24.643 
21:18:24.643 Import map: aliased to relative './lib/utils' inside of [project]/frontend
21:18:24.643 
21:18:24.643 
21:18:24.643 Import traces:
21:18:24.643   Client Component Browser:
21:18:24.643     ./frontend/components/ui/card.tsx [Client Component Browser]
21:18:24.643     ./frontend/components/login-form.tsx [Client Component Browser]
21:18:24.643     ./frontend/app/login/page.tsx [Client Component Browser]
21:18:24.643     ./frontend/app/login/page.tsx [Server Component]
21:18:24.643 
21:18:24.643   Client Component SSR:
21:18:24.644     ./frontend/components/ui/card.tsx [Client Component SSR]
21:18:24.644     ./frontend/components/login-form.tsx [Client Component SSR]
21:18:24.644     ./frontend/app/login/page.tsx [Client Component SSR]
21:18:24.644     ./frontend/app/login/page.tsx [Server Component]
21:18:24.644 
21:18:24.644 https://nextjs.org/docs/messages/module-not-found
21:18:24.644 
21:18:24.644 
21:18:24.644 ./frontend/components/ui/form.tsx:16:1
21:18:24.644 Module not found: Can't resolve '@/lib/utils'
21:18:24.644 [0m [90m 14 |[39m } [36mfrom[39m [32m"react-hook-form"[39m
21:18:24.644  [90m 15 |[39m
21:18:24.644 [31m[1m>[22m[39m[90m 16 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
21:18:24.644  [90m    |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.644  [90m 17 |[39m [36mimport[39m { [33mLabel[39m } [36mfrom[39m [32m"@/components/ui/label"[39m
21:18:24.644  [90m 18 |[39m
21:18:24.644  [90m 19 |[39m [36mconst[39m [33mForm[39m [33m=[39m [33mFormProvider[39m[0m
21:18:24.644 
21:18:24.644 Import map: aliased to relative './lib/utils' inside of [project]/frontend
21:18:24.644 
21:18:24.644 
21:18:24.644 Import traces:
21:18:24.644   Client Component Browser:
21:18:24.644     ./frontend/components/ui/form.tsx [Client Component Browser]
21:18:24.644     ./frontend/components/login-form.tsx [Client Component Browser]
21:18:24.644     ./frontend/app/login/page.tsx [Client Component Browser]
21:18:24.644     ./frontend/app/login/page.tsx [Server Component]
21:18:24.644 
21:18:24.644   Client Component SSR:
21:18:24.644     ./frontend/components/ui/form.tsx [Client Component SSR]
21:18:24.644     ./frontend/components/login-form.tsx [Client Component SSR]
21:18:24.644     ./frontend/app/login/page.tsx [Client Component SSR]
21:18:24.644     ./frontend/app/login/page.tsx [Server Component]
21:18:24.644 
21:18:24.645 https://nextjs.org/docs/messages/module-not-found
21:18:24.645 
21:18:24.645 
21:18:24.645 ./frontend/components/ui/input.tsx:3:1
21:18:24.645 Module not found: Can't resolve '@/lib/utils'
21:18:24.645 [0m [90m 1 |[39m [36mimport[39m [33m*[39m [36mas[39m [33mReact[39m [36mfrom[39m [32m"react"[39m
21:18:24.645  [90m 2 |[39m
21:18:24.645 [31m[1m>[22m[39m[90m 3 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
21:18:24.645  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.645  [90m 4 |[39m
21:18:24.645  [90m 5 |[39m [36mfunction[39m [33mInput[39m({ className[33m,[39m type[33m,[39m [33m...[39mprops }[33m:[39m [33mReact[39m[33m.[39m[33mComponentProps[39m[33m<[39m[32m"input"[39m[33m>[39m) {
21:18:24.645  [90m 6 |[39m   [36mreturn[39m ([0m
21:18:24.645 
21:18:24.645 Import map: aliased to relative './lib/utils' inside of [project]/frontend
21:18:24.645 
21:18:24.645 
21:18:24.645 Import traces:
21:18:24.645   Client Component Browser:
21:18:24.645     ./frontend/components/ui/input.tsx [Client Component Browser]
21:18:24.645     ./frontend/components/login-form.tsx [Client Component Browser]
21:18:24.645     ./frontend/app/login/page.tsx [Client Component Browser]
21:18:24.645     ./frontend/app/login/page.tsx [Server Component]
21:18:24.645 
21:18:24.645   Client Component SSR:
21:18:24.645     ./frontend/components/ui/input.tsx [Client Component SSR]
21:18:24.645     ./frontend/components/login-form.tsx [Client Component SSR]
21:18:24.645     ./frontend/app/login/page.tsx [Client Component SSR]
21:18:24.645     ./frontend/app/login/page.tsx [Server Component]
21:18:24.645 
21:18:24.645 https://nextjs.org/docs/messages/module-not-found
21:18:24.645 
21:18:24.645 
21:18:24.645 ./frontend/components/ui/label.tsx:6:1
21:18:24.645 Module not found: Can't resolve '@/lib/utils'
21:18:24.645 [0m [90m 4 |[39m [36mimport[39m [33m*[39m [36mas[39m [33mLabelPrimitive[39m [36mfrom[39m [32m"@radix-ui/react-label"[39m
21:18:24.645  [90m 5 |[39m
21:18:24.645 [31m[1m>[22m[39m[90m 6 |[39m [36mimport[39m { cn } [36mfrom[39m [32m"@/lib/utils"[39m
21:18:24.645  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
21:18:24.645  [90m 7 |[39m
21:18:24.645  [90m 8 |[39m [36mfunction[39m [33mLabel[39m({
21:18:24.645  [90m 9 |[39m   className[33m,[39m[0m
21:18:24.645 
21:18:24.645 Import map: aliased to relative './lib/utils' inside of [project]/frontend
21:18:24.645 
21:18:24.645 
21:18:24.645 Import traces:
21:18:24.646   Client Component Browser:
21:18:24.646     ./frontend/components/ui/label.tsx [Client Component Browser]
21:18:24.646     ./frontend/components/ui/form.tsx [Client Component Browser]
21:18:24.646     ./frontend/components/login-form.tsx [Client Component Browser]
21:18:24.646     ./frontend/app/login/page.tsx [Client Component Browser]
21:18:24.646     ./frontend/app/login/page.tsx [Server Component]
21:18:24.646 
21:18:24.646   Client Component SSR:
21:18:24.646     ./frontend/components/ui/label.tsx [Client Component SSR]
21:18:24.646     ./frontend/components/ui/form.tsx [Client Component SSR]
21:18:24.646     ./frontend/components/login-form.tsx [Client Component SSR]
21:18:24.646     ./frontend/app/login/page.tsx [Client Component SSR]
21:18:24.646     ./frontend/app/login/page.tsx [Server Component]
21:18:24.646 
21:18:24.646 https://nextjs.org/docs/messages/module-not-found
21:18:24.646 
21:18:24.646 
21:18:24.646     at <unknown> (./frontend/server/users.ts:8:1)
21:18:24.646     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.646     at <unknown> (./frontend/app/dashboard/page.tsx:7:1)
21:18:24.646     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.646     at <unknown> (./frontend/app/api/auth/[...all]/route.ts:1:1)
21:18:24.646     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.646     at <unknown> (./frontend/components/login-form.tsx:19:1)
21:18:24.647     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.647     at <unknown> (./frontend/components/logout.tsx:3:1)
21:18:24.647     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.647     at <unknown> (./frontend/components/signup-form.tsx:19:1)
21:18:24.647     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.647     at <unknown> (./frontend/components/login-form.tsx:8:1)
21:18:24.647     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.647     at <unknown> (./frontend/components/signup-form.tsx:8:1)
21:18:24.647     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.647     at <unknown> (./frontend/components/ui/button.tsx:5:1)
21:18:24.647     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.647     at <unknown> (./frontend/components/ui/card.tsx:3:1)
21:18:24.647     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.647     at <unknown> (./frontend/components/ui/form.tsx:16:1)
21:18:24.647     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.647     at <unknown> (./frontend/components/ui/input.tsx:3:1)
21:18:24.647     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.647     at <unknown> (./frontend/components/ui/label.tsx:6:1)
21:18:24.647     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
21:18:24.721 Error: Command "npm run build" exited with 1
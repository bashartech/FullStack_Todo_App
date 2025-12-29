// import { GalleryVerticalEnd } from "lucide-react"

// import { SignupForm } from "@/components/signup-form"

// export default function SignupPage() {
//   return (
//     <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
//       <div className="flex w-full max-w-sm flex-col gap-6">
//         <a href="#" className="flex items-center gap-2 self-center font-medium">
//           <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
//             <GalleryVerticalEnd className="size-4" />
//           </div>
//           Acme Inc.
//         </a>
//         <SignupForm />
//       </div>
//     </div>
//   )
// }
"use client"

import { SignupForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 -right-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <SignupForm />
      </div>
    </div>
  )
}

import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// export const runtime = "nodejs";

// Create the API route handler for Better Auth
// This handles all authentication-related requests at /api/auth/*
// These are Better Auth's internal endpoints for signup, login, session management, etc.
export const { GET, POST } = toNextJsHandler(auth);
import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isProtectedRoute = createRouteMatcher(["/ready-to-pay"]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { redirectToSignIn, userId } = auth();
  if (!userId && isProtectedRoute(context.request)) {
    // Add custom logic to run before redirecting
    return redirectToSignIn();
  }
});

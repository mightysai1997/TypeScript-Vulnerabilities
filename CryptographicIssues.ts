// Sanitize user input to prevent script injection
function sanitizeInput(input: string): string {
  return input.replace(/<script>.*?<\/script>/g, "");
}

// Use secure libraries for CSP enforcement
const csp = require("helmet").contentSecurityPolicy({
  frameAncestors: "'self'",
});

// Apply CSP middleware to protect your application
app.use(csp);

# Agent Instructions

## Code Quality

- Follow clean code principles: clear naming, single responsibility, no magic numbers or strings.
- Keep logic simple and flat — avoid deeply nested conditions or over-engineered abstractions.
- Prefer explicit over clever. If something needs a comment to be understood, simplify it first.
- Functions should do one thing. If you find yourself writing "and" to describe what it does, split it.

## Before You Act

- If the requirements are unclear, ask for clarification before writing any code.
- List your assumptions explicitly and confirm them if they affect scope or behavior.
- When a task could be solved in more than one way, present the options and let the human decide.
- Never make decisions on behalf of the user that they haven't explicitly authorized.
- **Before installing any new dependency (library, package, script) or downloading external code**, always ask first. Provide a clear explanation of why it's necessary and what problem it solves. Never install anything without explicit approval.

## Implicit Changes

- Stick to the stated scope of the task.
- If you notice something that could be improved outside the scope, mention it — don't fix it silently.
- Never refactor, rename, or reorganize code that wasn't part of the request without explicit approval.

## Editing vs. Rewriting

- If the existing code works and can be extended, extend it.
- Only rewrite a module or function if modifying it would result in more complexity than starting fresh — and if so, say why.
- Fewer lines added is generally better than more lines added.
- Preserve existing patterns and conventions unless instructed to change them.
- Keep the project homogeneous. When a pattern is already established in the codebase, follow it everywhere — do not introduce alternatives.

## Styles

- Write all styles mobile first: start with the base mobile layout, then add `md:`, `lg:` breakpoints on top.

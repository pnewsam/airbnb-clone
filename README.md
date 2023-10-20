# Airbnb Clone

## Overview

The goal for this application is to serve as a repository for great local restaurants. I've been building it out as a way to explore some tools, especially React Server Components. Here's the current stack:

- React with Server Components
- Typescript
- Tailwind
- shadcn/ui (Components)
- Supabase (Database)

The UI is heavily inspired by AirBnb's wonderful designs.

## Code Style

### Code Organization

- Components are bucketed by page (such as `restaurantDetails` or `restaurantIndex`). Each may have a top-level `_main.tsx` or `_loading.tsx`. These top-level components should only be concerned with layout of the major page components.

### NextJS

- ` "use client"`` should not be used in  `app`directory. The`app`directory should be reserved only for Server Components.`"use client"`should be used only in`components` directory.

## package.json

- The `encoding` package under devDependencies was added only due to a compilation warning detailed here: https://github.com/supabase/supabase-js/issues/612 -- if the issue is ever resolved the package may be removeable.

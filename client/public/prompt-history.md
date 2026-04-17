# AI Prompt History

## Overview

This document summarizes key prompts used during development of a
weather web application.

------------------------------------------------------------------------

## Setup & Architecture

-   How to structure a React + Vite + Node.js project
-   TypeScript configuration for client and server
-   Where to store shared types between client and server

## UI & UX Decisions

-   Whether to use datalist vs autocomplete library
-   Sidebar behavior (open by default vs closed)
-   Handling empty states and user guidance
-   Layout decisions for sidebar and main content

## API & Data Handling

-   Choosing a weather API (OpenWeather, etc.)
-   Mapping API responses to UI-friendly data
-   Handling timezone-based date formatting
-   Geocoding (Mapbox) and filtering city results

## Component Design

-   Structuring reusable components (Searchbar, Sidebar, WeatherSection)
-   Naming components meaningfully
-   Passing props and lifting state

## Styling & Layout

-   Tailwind usage (flex, grid, spacing, typography)
-   Creating gradient borders
-   Centering content with dynamic layouts
-   Responsive design approaches

## Accessibility

-   Proper semantic HTML usage (button vs div)
-   ARIA roles for autocomplete
-   Improving screen reader behavior

## State Management

-   Debounced search implementation
-   Where to place loading state (lifting to App)
-   Handling selection vs input typing

## Animations

-   CSS vs Framer Motion tradeoffs
-   Implementing sidebar and overlay animations
-   Using AnimatePresence correctly

## Testing

-   Setting up Vitest and Testing Library
-   Mocking API calls
-   Testing input interactions
-   Testing component composition with mocks
-   Verifying prop passing

## Miscellaneous

-   LocalStorage usage for search history
-   Formatting temperature and units
-   Weather condition icon mapping


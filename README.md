# Tactical Watch

A single-screen tactical world clock built with Astro and Tailwind CSS. It includes selectable world time zones, location/weather telemetry, day-phase atmospheric backgrounds, an hourly digital clock chime, and a configurable mission timer.

The clock plays two short generic beeps only when the selected city's local hour changes. Audio starts after the first user interaction, as required by browser autoplay policies; timer completion is silent.

The city selector includes 22 time zones. Current temperature, feels-like temperature, conditions, humidity, wind, and pressure come from the [Open-Meteo API](https://open-meteo.com/en/docs) and refresh when the city changes and every 15 minutes. No API key is required.

To add another city, add an entry to `cityTelemetry` in `src/scripts/tactical-clock.js` with its IANA timezone, label, display name, coordinates, and altitude. The selector and live-weather request are generated from that catalog.

## Project structure

```text
src/
  components/   Atmosphere, header, hero clock, telemetry, and footer
  layouts/      Shared HTML document layout
  pages/        Astro routes
  scripts/      Client-side clock and timer behavior
  styles/       Tailwind entry point and global atmospheric styles
```

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site in `dist/` |
| `npm run preview` | Preview the production build locally |

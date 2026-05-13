# Tailwind Layout Classes Reference

This document covers the Layout-related Tailwind classes used in the project.

| Class | Type | Description | Usage Example |
|-------|------|-------------|---------------|
| `flex` | Display | Sets element to flexbox container. | `flex justify-between` |
| `flex-col` | Direction | stacks flex items vertically. | `flex flex-col` |
| `flex-row` | Direction | aligns flex items horizontally. | `md:flex-row` |
| `grid` | Display | Sets element to grid container. | `grid grid-cols-1` |
| `grid-cols-1` | Columns | Defines a 1-column grid. | `grid grid-cols-1` |
| `grid-cols-2` | Columns | Defines a 2-column grid. | `md:grid-cols-2` |
| `grid-cols-4` | Columns | Defines a 4-column grid. | `md:grid-cols-4` |
| `justify-between` | Alignment | Distributes items with space between. | `flex justify-between` |
| `justify-center` | Alignment | Centers items horizontally. | `flex justify-center` |
| `items-center` | Alignment | Centers items vertically. | `flex items-center` |
| `items-start` | Alignment | Aligns items to the top. | `flex items-start` |
| `sticky` | Position | Keeps element in view while scrolling. | `sticky top-0` |
| `absolute` | Position | Positions element relative to parent. | `absolute top-0` |
| `relative` | Position | Core for absolute positioning and z-indexing. | `relative z-10` |
| `fixed` | Position | Positions element relative to viewport. | `fixed inset-0` |
| `inset-0` | Inset | Sets top/right/bottom/left to 0. | `fixed inset-0` |
| `z-10` | Z-Index | Layers element higher (z-index: 10). | `relative z-10` |
| `z-50` | Z-Index | Used for navbars and sticky headers. | `z-50` |
| `z-[100]` | Z-Index | Custom high z-index for modals. | `z-[100]` |
| `w-full` | Width | Takes up 100% of parent width. | `w-full` |
| `h-screen` | Height | Takes up 100% of viewport height. | `min-h-screen` |
| `max-w-7xl` | Max-Width | Standard container width (1280px). | `max-w-7xl` |
| `mx-auto` | Margin | Centers fixed-width containers. | `mx-auto` |
| `hidden` | Display | Removes element from layout. | `hidden sm:block` |
| `block` | Display | Standard block layout. | `block` |
| `inline-block`| Display | Inline but allows dimensions. | `inline-block` |

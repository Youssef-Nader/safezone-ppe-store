# SafeZone PPE Store

A responsive React storefront for browsing and purchasing personal protective equipment. SafeZone combines a clean safety-focused interface with product discovery tools, persistent cart management, and mobile-friendly navigation.

## Features

- Responsive navigation with active-page states, mobile/tablet menu, cart icon, and live item count
- Product catalog with category filters, text search, and price/name sorting
- Responsive product cards with clear category, description, price, and detail actions
- Product detail pages with quantity selection and add-to-cart feedback
- Persistent shopping cart powered by browser local storage
- Quantity controls, item removal, and calculated item totals
- Login and registration prototype pages
- Accessible labels, keyboard-friendly controls, reduced-motion support, and responsive layouts

## Built With

- React 19
- React Router 7
- CSS custom properties, Grid, Flexbox, and responsive media queries
- Browser local storage

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone <repository-url>
cd safezone-ppe-store
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

## Available Commands

```bash
npm start       # Run the development server
npm test        # Run the test suite
npm run build   # Create a production build
```

## Project Structure

```text
src/
├── Components/          # Pages, navigation, footer, and cart UI
│   └── Contexts/        # Product, category, and cart state
├── data/products.json   # Product catalog data
├── styles/              # Split, documented component styles
│   ├── index.css        # Central stylesheet entry point
│   ├── base.css         # Theme tokens and shared foundations
│   └── *.css            # Component styles and local breakpoints
└── App.js               # Providers and application routes
```

## Main Routes

| Route | Description |
| --- | --- |
| `/` | Store landing page |
| `/products` | Full searchable product catalog |
| `/products/category/:categoryId` | Category-filtered catalog |
| `/products/category/:categoryId/:productId` | Product details |
| `/cart` | Persistent shopping cart |
| `/login` | Login prototype |
| `/register` | Registration prototype |

## Notes

SafeZone is a frontend prototype. Authentication and checkout are not connected to a backend or payment provider. Cart contents are stored locally in the visitor's browser.

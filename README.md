# E-Commerce Frontend System

## Overview

This project is a modern e-commerce frontend application built using Vanilla JavaScript, Vite, and Tailwind CSS.

Rather than focusing only on UI design, the application was engineered around scalable frontend principles such as data-driven rendering, event delegation, modular architecture, reusable components, and centralized state handling.

The system is designed so that products, categories, and content can be managed from structured data sources, allowing the interface to adapt automatically without requiring manual UI modifications.

---

## Core Features

### Dynamic Product Rendering

* Products rendered from centralized data
* No hardcoded product cards
* Automatic UI updates when product data changes
* Scalable structure for adding new products

### Product Details System

* Dedicated product details page
* Dynamic content generation
* Product information loaded based on selected item
* Reusable rendering pipeline

### Shopping Cart Management

* Add products to cart
* Remove products from cart
* Quantity management
* Real-time cart updates
* Persistent cart storage using Local Storage

### Search Functionality

* Dynamic product search
* Instant filtering of available products
* Responsive search interaction

### Event Delegation System

* Centralized event handling strategy
* Supports dynamically rendered elements
* Reduces unnecessary event listeners
* Improves performance and maintainability

---

## 📸 Screenshots

### Home Page
![Home Page](/public/EcommerceMainPage.png)

### Home Page Products
![Home Page](/public/EcommerceProducts.png)

### Product Details Page
![Home Page](/public/EcommerceDetails.png)

### Product Details Page
![Home Page](/public/EcommerceCart.png)

---

## Architecture Design

### Data Layer

Acts as the single source of truth for:

* Product information
* Categories
* Pricing data
* Product images
* UI content

---

### State Layer

Manages application state including:

* Cart information
* Selected products
* User interactions
* Shared application data

---

### Event Layer

Responsible for:

* Product selection
* Cart actions
* Search interactions
* Navigation events

Built using an event delegation strategy to ensure efficient interaction management.

---

### Render Layer

Responsible for:

* Product card generation
* Product detail rendering
* Cart updates
* Search result rendering

The rendering system remains isolated from business logic, making the application easier to maintain and extend.

---

## Application Flow

### Product Rendering Pipeline

1. Product data is loaded
2. Rendering system generates UI dynamically
3. Event system attaches interaction handling
4. User actions update application state
5. State changes trigger UI updates

---

### Cart Flow

1. User selects a product
2. Product is added to cart state
3. Cart UI updates automatically
4. Data is persisted using Local Storage
5. Cart remains available across sessions

---

### Search Flow

1. User enters search query
2. Product dataset is filtered
3. Matching results are rendered dynamically
4. UI updates without page reload

---

## Key Technical Implementations

### Dynamic UI Rendering

The application uses a data-driven rendering approach where product information controls UI generation.

Adding a new product only requires updating the data source without modifying rendering logic.

---

### Event Delegation

Instead of attaching listeners to every product card, a delegated event strategy is used to manage interactions through a centralized event layer.

Benefits include:

* Better performance
* Lower memory usage
* Support for dynamic content

---

### Local Storage Integration

Cart data is stored in browser storage to preserve user state across page refreshes and browser sessions.

---

### Modular Architecture

The project follows a separation-of-concerns approach:

* State Management
* Event Handling
* Rendering Logic
* Utility Functions
* Data Management

This structure improves scalability and maintainability.

---

## Tech Stack

* JavaScript (ES6+)
* Vite
* Tailwind CSS
* HTML5
* Local Storage API

---

## Engineering Highlights

* Data-driven UI architecture
* Dynamic rendering system
* Event delegation implementation
* Frontend state management
* Local storage persistence
* Modular project structure
* Reusable rendering components
* Performance-oriented interaction handling

---

## Challenges Solved

* Managing dynamic product rendering without frameworks
* Maintaining cart state across sessions
* Avoiding duplicated event listeners
* Keeping UI synchronized with application state
* Designing scalable frontend architecture for future expansion

---

## Key Learnings

* Building state-driven frontend applications
* Designing scalable rendering systems
* Implementing event delegation patterns
* Managing client-side persistence
* Structuring large JavaScript applications without frameworks

---

## Live Demo


https://sarvjeet-singh-dev.github.io/nextbyte-e-commerce/
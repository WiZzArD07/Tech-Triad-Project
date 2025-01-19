# RFQ Management System

A React-based Request for Quotation (RFQ) Management System that streamlines vendor management and RFQ generation processes.

## Features

- RFQ Management Dashboard
- Vendor Management
- Advanced Vendor Search
- RFQ Generation Tool
- Clause Management System

## Project Structure

frontend/
├── src/
│   ├── components/
│   │   ├── Layout.jsx       # Main layout component
│   │   ├── VendorList.jsx   # Vendor management
│   │   ├── AddClause.jsx    # Clause handling
│   │   └── styles/
│   │       └── indexs.css   # Global styles
│   ├── pages/
│   │   ├── RFQ_Management.jsx
│   │   ├── SearchVendor.jsx
│   │   └── GenrateRFQ.jsx
│   └── App.jsx             # Route configuration


## Quick Start

1. Install dependencies:
bash
npm install


2. Start development server:
bash
npm run dev


## Available Routes

- / - Dashboard
- /vendorlist - Manage vendors
- /rfqmanagement - RFQ dashboard
- /searchvendor - Search vendors
- /genrateRFQ - Create new RFQ
- /addclause - Manage clauses

## Tech Stack

- React 18
- React Router DOM 6
- Modern CSS
- Vite build tool

## Development

1. Clone repository
2. Install dependencies
3. Run development server
4. Access http://localhost:5173



# TechTriad Hackathon - RFQ Workflow Automation

## Overview

The TechTriad Hackathon is a 36-hour challenge focused on streamlining the Request for Quotation (RFQ) process in heavy industries such as oil, steel, and cement. The goal is to develop a website that automates various stages of the RFQ workflow—from generating RFQs to tracking vendor responses. This event emphasizes the creation of real-world digital tools that optimize procurement workflows and the tendering process.

## Problem Statement

The problem statement revolves around redesigning and improving the RFQ process in industries that rely heavily on procurement and vendor interactions. The aim is to streamline the RFQ generation, vendor selection, and tracking processes while offering a user-friendly interface.

*UI/UX and Frontend Objective*:
- Redesign specific features and pages using *Next.js* or *React.js*.
- Evaluation Criteria:
  - *Design Creativity* and *User Experience*.
  - *Responsive* and *Efficient* frontend code.
  - Adherence to *Workwise’s branding and design philosophy*.

## Tasks

### 1. *Revamp the following pages*:
- *Find Vendor Page*: Improve the process of finding and filtering vendors for a specific RFQ.
- *Create RFQ Page*: Streamline the process of creating and submitting RFQs.
- *RFQ Management*: Manage and track RFQs, vendor responses, and their status.
- *RFQ Details*: Show detailed information about a specific RFQ, including responses, deadlines, and vendor details.
- *Product-wise and Overall Comparison Chart*: Provide an easy-to-use chart for comparing vendors and their responses based on products.
- *Magic Search Page*: Implement a search page for finding products and vendors quickly and efficiently.

### 2. *Website Revamp*:
- Revamp the website: [Workwise](https://letsworkwise.com)
  - Focus on improving the overall user interface and experience to enhance usability and streamline the RFQ process.
  
### 3. *Design Tools*:
- Use any design tool (e.g., *Figma*) for wireframing and prototyping the pages.
  - Create responsive, modern, and user-friendly layouts.
  
### 4. *Implementation Tools*:
- Use *Next.js* or *React.js* for frontend implementation.

---

## Features Implemented

The following features were implemented during the hackathon:

### *Magic Search*
- A search functionality that allows users to quickly find vendors and products.
- Includes a search bar with auto-suggestions based on predefined categories.
- The search results are filtered in real-time based on user input.

### *Find Vendor Page*
- A page that enables users to search for vendors based on location, rating, and specialization.
- The page includes vendor profiles and detailed information about the services they offer.

### *Create RFQ Page*
- A user-friendly interface for creating and submitting an RFQ.
- Allows users to input product specifications, quantities, and other necessary details.
- Provides an option to upload relevant files for the RFQ.

### *RFQ Management*
- A page dedicated to managing all RFQs.
- Displays the status of RFQs, vendor responses, and pending actions.
- Features sorting and filtering options to help users stay organized.

### *RFQ Details*
- Displays detailed information about an individual RFQ.
- Includes vendor responses, deadlines, and pricing details.
- Allows users to track the progress and manage the RFQ lifecycle.

### *Product-wise and Overall Comparison Chart*
- A chart that compares different vendors based on products and overall pricing.
- Provides a side-by-side comparison to help users make informed decisions.

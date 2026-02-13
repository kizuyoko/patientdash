# PatientDash #
**Timeline:** 2 months (Weekdays, 1-2 hours/day)  
**Project:** Simple patient management dashboard for hospital staff.

---

## Project Overview ##
**PatientDash** is a simple, single-page dashboard to manage patients.
- Patient list (table)
- Overview (Sticky sidebar)
- Click a row -> Detail (Modal)
- Click a column of the header row -> order
- Future: CRUD (Create / Edit / Delete)
- Technology: React, Vite, TypeScript, Hooks, Storybook, TailwindCSS, Fake Patients ([API](https://www.mockaroo.com/))

## Weekly Plan (8 weeks) ##

### Week 0: Preparation ###
- Brainstorm
- prototype.md
- Wireframe
- Figma (https://scan-grain-66542119.figma.site/)
- Tech stack

#### Week 1: Setup & Layout ####
- Create React project with TypeScript
- Install TailwindCSS
- Install Storybook
- Initialize Git repository
- Basic HTML, CSS, and Layout
- Display placeholder components

#### Week 2: UI Components & Storybook ####
- Type Patient and Patients
- Start fake with Mockaroo
- Card, Table, Badge, Button
- Write Storybook stories
- Hook: useState for local state
- Display table and modal with fake data

#### Week 3: Filtering & Sorting ####
- Search bar on the header
- Filtering with clicking on the Sidebar's cards
- Ordering the table with clicking on the table header cells
- Hook: useState, useMemo
- Storybook: filtered / sorted states

#### Week 4: Derived Data UI & Callbacks ####
- StatsPanel (counts by status, gender, blood type)
- AlertsList (patients filtered by simple rules)
- Hook: useMemo, useCallback
- Storybook: StatsPanel, AlertsList

#### Week 5: API Integration ####
- Fetch data from Mockaroo
- Handle loading / error states
- Hook: useEffect, useState

#### Week 6: Custom Hooks ####
- usePatients（API + filtering + sorting + loading）
- useStats for stats calculation
- Separate UI and logic

#### Week 7: Accessibility & Responsive Design ####
- Semantic HTML
- ARIA labels, focus management
- Table keyboard navigation
- Responsive design

#### Week 8: Finalization ####
- Organize Storybook
- Write README
- Plan CRUD (Add/Edit/Delete)
- Document components & hooks structure

#### Additional Functions ####
- Search bar on the header. 
- Ordering the table with clicking on the table header cells.
- Filtering with clicking on the Sidebar's cards. 

## Demo ## 
[Demo in Vercel](https://patientdash.vercel.app/)

## Getting Started ##

Install dependencies:

```bash
npm install 
```

Start the development server:
```bash
npm run dev 
```

Storybook:
```bash
npm run storybook
```


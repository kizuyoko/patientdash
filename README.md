# PatientDash #
**Timeline:** 2 months (Weekdays, 1 hour/day)  
**Project:** Simple patient management dashboard for hospital staff.

---

## Project Overview ##
**PatientDash** is a simple, single-page dashboard to manage patients.
- Patient list (table)
- Overview (Sticky sidebar)
- Click a row -> Detail (Modal)
- Click a column of the header row -> order
- Future: CRUD (Create / Edit / Delete)
- Technology: React, Vite, TypeScript, Hooks, Storybook, TailwindCSS, Fake Patients ([API](https://jsonplaceholder.typicode.com/users))

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

## Patient Data Type ## 
```ts
type Patient = {
  id: number;
  name: string;
  status: 'stable' | 'warning' | 'critical';
  heartRate: number;
  room: string;
};
```

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
- Card, Table, Badge, Button, Spinner
- Write Storybook stories
- Hook: useState for local state

#### Week 3: Patients Table (Fake Data) ####
- Create PatientRow
- Hook: useState, useMemo for filtering
- Display table

#### Week 4: Stats & Alerts ####
- Create StatsPanel
- Create AlertsList
- Hook: useMemo (stats calculation), useCallback (filter function)

#### Week 5: API Integration ####
- Fetch data from JSONPlaceholder
- Handle loading / error states
- Hook: useEffect, useState

#### Week 6: Custom Hooks ####
- usePatients for API + state management
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


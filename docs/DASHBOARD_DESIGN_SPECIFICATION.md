# 🎨 KREANOVA Dashboard Design Specification
## For AI Mockup Generation (Google Stitch)

---

## 1. Design Overview

### Application Type
- **Platform**: Web Application (Next.js)
- **Theme**: Light Theme ONLY (no dark mode)
- **Style**: Modern, Clean, Healthcare-focused
- **Target**: Parents and Healthcare Workers in Indonesia

### User Roles
| Role | Primary Use | Dashboard Focus |
|------|-------------|-----------------|
| **Orang Tua (Parent)** | Daily data input, tracking | Child-centric, simple input |
| **Nakes (Healthcare Worker)** | Monitoring, intervention | Data-heavy, analytics |

---

## 2. Color Palette (Light Theme)

### Primary Colors
```
Primary Green:     #4CAF50   (Main action, health indicator)
Primary Dark:      #388E3C   (Hover states, headers)
Primary Light:     #C8E6C9   (Backgrounds, highlights)
```

### Secondary Colors
```
Orange:            #FF9800   (Alerts, warnings, calls-to-action)
Orange Dark:       #F57C00   (Hover states)
Orange Light:      #FFE0B2   (Warning backgrounds)
```

### Status Colors
```
Success Green:     #4CAF50   (Normal, on track)
Warning Yellow:    #FFC107   (Monitoring zone, attention needed)
Danger Red:        #F44336   (Critical, below cutoff, urgent)
Info Blue:         #2196F3   (Information, links)
```

### Neutral Colors
```
Background:        #F5F5F5   (Page background)
Surface:           #FFFFFF   (Cards, modals)
Border:            #E0E0E0   (Dividers, card borders)
Text Primary:      #212121   (Main text)
Text Secondary:    #757575   (Captions, labels)
Text Disabled:     #BDBDBD   (Placeholder, disabled)
```

---

## 3. Typography

### Font Family
```
Primary Font:   "Inter", sans-serif
Fallback:       -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
```

### Font Sizes
| Role | Size | Weight | Line Height | Use Case |
|------|------|--------|-------------|----------|
| H1 | 32px | 700 (Bold) | 40px | Page titles |
| H2 | 24px | 600 (SemiBold) | 32px | Section headers |
| H3 | 20px | 600 (SemiBold) | 28px | Card headers |
| H4 | 18px | 500 (Medium) | 24px | Subsection headers |
| Body Large | 16px | 400 (Regular) | 24px | Main content |
| Body | 14px | 400 (Regular) | 20px | Secondary content |
| Caption | 12px | 400 (Regular) | 16px | Labels, hints |
| Overline | 10px | 500 (Medium) | 16px | Category labels |

---

## 4. Spacing & Layout

### Spacing Scale
```
xs:    4px
sm:    8px
md:    16px
lg:    24px
xl:    32px
2xl:   48px
3xl:   64px
```

### Container
```
Max Width:        1280px
Padding:          24px (desktop), 16px (mobile)
Sidebar Width:    260px (desktop), collapsed 72px
```

### Grid System
```
Columns:          12 columns
Gutter:           24px
Breakpoints:
  - Mobile:       < 768px
  - Tablet:       768px - 1024px
  - Desktop:      > 1024px
```

---

## 5. Components

### 5.1 Buttons

#### Primary Button
```
Background:       #4CAF50
Text Color:       #FFFFFF
Border Radius:    8px
Padding:          12px 24px
Font Size:        14px
Font Weight:      600
Shadow:           0 2px 4px rgba(0,0,0,0.1)
Hover:            #388E3C
```

#### Secondary Button
```
Background:       transparent
Text Color:       #4CAF50
Border:           2px solid #4CAF50
Border Radius:    8px
Padding:          10px 22px
Hover:            Background #C8E6C9
```

#### Danger Button
```
Background:       #F44336
Text Color:       #FFFFFF
Hover:            #D32F2F
```

### 5.2 Cards

#### Standard Card
```
Background:       #FFFFFF
Border Radius:    12px
Border:           1px solid #E0E0E0
Padding:          20px
Shadow:           0 2px 8px rgba(0,0,0,0.08)
```

#### Stat Card
```
Background:       #FFFFFF
Border Radius:    12px
Padding:          24px
Shadow:           0 4px 12px rgba(0,0,0,0.1)
Icon Size:        48px
Stat Number:      32px font, Bold
Label:            14px font, Text Secondary
```

### 5.3 Form Inputs

#### Text Input
```
Height:           48px
Background:       #FFFFFF
Border:           1px solid #E0E0E0
Border Radius:    8px
Padding:          12px 16px
Focus Border:     2px solid #4CAF50
Error Border:     2px solid #F44336
```

#### Select Dropdown
```
Same as text input
Arrow Icon:       ChevronDown, #757575
```

### 5.4 Status Badges

#### Z-Score Badge
```
Normal (Green):   Background #E8F5E9, Text #2E7D32, Border #4CAF50
Warning (Yellow): Background #FFF8E1, Text #F57F17, Border #FFC107
Danger (Red):     Background #FFEBEE, Text #C62828, Border #F44336
```

---

## 6. Dashboard Layouts

### 6.1 Orang Tua (Parent) Dashboard

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER                                                    H:64px │
│ Logo | KREANOVA                    🔔 Notifikasi  👤 Profile    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  GREETING SECTION                                                │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ "Selamat Pagi, Bunda!" 👋                                │   │
│  │ 15 Desember 2025                                         │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  CHILD PROFILE CARDS (Horizontal Scroll)                         │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐       │
│  │ [Avatar]       │ │ [Avatar]       │ │   + Tambah    │       │
│  │ Ahmad          │ │ Siti           │ │     Anak      │       │
│  │ 2 thn 4 bln    │ │ 1 thn 2 bln    │ │               │       │
│  │ 🟢 Gizi Baik   │ │ 🟡 Monitoring  │ │               │       │
│  │                │ │                │ │               │       │
│  │ BB/U  TB/U  BB/TB                 │ │               │       │
│  │ -1.2  -0.8  -0.5                  │ │               │       │
│  └────────────────┘ └────────────────┘ └────────────────┘       │
│                                                                  │
│  QUICK ACTIONS                                                   │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐   │
│  │ 🍽️         │ │ 📏         │ │ 📊         │ │ 🧩         │   │
│  │ Input      │ │ Input      │ │ Lihat      │ │ Skrining   │   │
│  │ Asupan     │ │ BB/TB      │ │ Grafik     │ │ ASQ-3      │   │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘   │
│                                                                  │
│  DAILY TASKS                                                     │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 📋 Tugas Hari Ini                                        │   │
│  │ ┌──────────────────────────────────────────────────────┐ │   │
│  │ │ ○ Input Asupan Makan Pagi                        →  │ │   │
│  │ │   Belum diisi                                        │ │   │
│  │ ├──────────────────────────────────────────────────────┤ │   │
│  │ │ ✓ Lapor PMT Hari ke-15                           →  │ │   │
│  │ │   Sudah dilaporkan pukul 08:30                       │ │   │
│  │ └──────────────────────────────────────────────────────┘ │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  WEEKLY SUMMARY                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 📊 Ringkasan Minggu Ini                                  │   │
│  │                                                          │   │
│  │ Energi        ▓▓▓▓▓▓▓▓░░░░  75% dari target             │   │
│  │ Protein       ▓▓▓▓▓▓▓▓▓░░░  82% dari target             │   │
│  │ Karbohidrat   ▓▓▓▓▓▓▓░░░░░  65% dari target             │   │
│  │                                                          │   │
│  │                              [Lihat Detail →]            │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  BOTTOM NAVIGATION                                         H:64px│
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 🏠 Home  │  📝 Input  │  📊 Progress  │  📚 Edu  │  👤   │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

#### Visual Specification

**Header Bar**
- Height: 64px
- Background: #FFFFFF
- Shadow: 0 2px 4px rgba(0,0,0,0.08)
- Logo: Green (#4CAF50), left-aligned
- Notification bell: #757575, with red badge for unread
- Profile avatar: 36px circle

**Child Profile Card**
- Width: 280px
- Height: 180px
- Background: #FFFFFF
- Border: 1px solid #E0E0E0
- Border Radius: 16px
- Avatar: 64px circle with child's initial
- Status badge: Pill shape, color-coded
- Z-Score display: 3 columns with small labels

**Quick Action Buttons**
- Size: 80px × 80px
- Background: #F5F5F5
- Border Radius: 12px
- Icon: 32px, centered, colored
- Label: 12px, below icon

**Task List Items**
- Height: 64px per item
- Checkbox: 24px circle
- Completed: Green check mark
- Arrow: Right chevron, #757575

---

### 6.2 Nakes (Healthcare Worker) Dashboard

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ SIDEBAR (260px)          │ MAIN CONTENT                         │
│ ┌─────────────────────┐  │                                      │
│ │ [Logo] KREANOVA     │  │ HEADER                               │
│ │                     │  │ ┌──────────────────────────────────┐ │
│ │ 🏠 Dashboard        │  │ │ Dashboard        🔔  👤 dr. Sari │ │
│ │ 👥 Data Anak        │  │ └──────────────────────────────────┘ │
│ │ 📋 Program PMT      │  │                                      │
│ │ 🧩 Skrining         │  │ FACILITY INFO                        │
│ │ 📊 Laporan          │  │ ┌──────────────────────────────────┐ │
│ │ ⚙️ Pengaturan       │  │ │ 🏥 Puskesmas Sehat Sejahtera     │ │
│ │                     │  │ │    Kode: PKM-001                  │ │
│ │ ─────────────────── │  │ └──────────────────────────────────┘ │
│ │                     │  │                                      │
│ │ 📅 15 Des 2025      │  │ STAT CARDS ROW                       │
│ │                     │  │ ┌────────┐ ┌────────┐ ┌────────┐    │
│ │ ⏱️ 09:30 WIB        │  │ │  125   │ │   8    │ │  15    │    │
│ │                     │  │ │ Total  │ │ 🔴Kritis│ │ PMT    │    │
│ │ 🔄 Sync: 5 min ago  │  │ │ Anak   │ │ Review │ │ Aktif  │    │
│ └─────────────────────┘  │ └────────┘ └────────┘ └────────┘    │
│                          │                                      │
│                          │ URGENT ALERTS                        │
│                          │ ┌──────────────────────────────────┐ │
│                          │ │ 🚨 Perlu Tindakan Segera    8    │ │
│                          │ │ ┌────────────────────────────────┐│ │
│                          │ │ │ 👶 Budi (3 thn)               ││ │
│                          │ │ │ BB/U: -3.2  │  GIZI BURUK 🔴  ││ │
│                          │ │ │            [Review] [Intervensi]││ │
│                          │ │ ├────────────────────────────────┤│ │
│                          │ │ │ 👶 Citra (1 thn)              ││ │
│                          │ │ │ BB/TB: -2.5 │  GIZI KURANG 🟠 ││ │
│                          │ │ │            [Review] [Intervensi]││ │
│                          │ │ └────────────────────────────────┘│ │
│                          │ │                   [Lihat Semua →] │ │
│                          │ └──────────────────────────────────┘ │
│                          │                                      │
│                          │ CHARTS ROW                           │
│                          │ ┌─────────────────┐ ┌───────────────┐│
│                          │ │  PIE CHART      │ │  LINE CHART   ││
│                          │ │  Distribusi     │ │  Trend        ││
│                          │ │  Status Gizi    │ │  Bulanan      ││
│                          │ │                 │ │               ││
│                          │ │   [Donut]       │ │   [Line]      ││
│                          │ │                 │ │               ││
│                          │ │ 🟢 Normal: 85%  │ │               ││
│                          │ │ 🟡 Kurang: 10%  │ │               ││
│                          │ │ 🔴 Buruk:  5%   │ │               ││
│                          │ └─────────────────┘ └───────────────┘│
│                          │                                      │
│                          │ RECENT ACTIVITIES                    │
│                          │ ┌──────────────────────────────────┐ │
│                          │ │ 📋 Aktivitas Terbaru             │ │
│                          │ │                                  │ │
│                          │ │ • Budi - Antropometri diperbarui │ │
│                          │ │   2 jam yang lalu                │ │
│                          │ │ • Citra - PMT dimulai            │ │
│                          │ │   Kemarin                        │ │
│                          │ └──────────────────────────────────┘ │
│                          │                                      │
└──────────────────────────┴──────────────────────────────────────┘
```

#### Visual Specification

**Sidebar**
- Width: 260px
- Background: #FFFFFF
- Border-right: 1px solid #E0E0E0
- Logo area: 64px height
- Menu items: 48px height, 16px padding
- Active item: Background #E8F5E9, Left border 4px #4CAF50
- Icon: 24px, #757575 (inactive), #4CAF50 (active)

**Stat Cards**
- Width: Flex (3 columns)
- Height: 120px
- Background: #FFFFFF
- Border Radius: 12px
- Shadow: 0 4px 12px rgba(0,0,0,0.08)
- Number: 36px, Bold, Primary color
- Label: 14px, Text Secondary
- Icon: 48px background circle

**Urgent Alert Card**
- Background: #FFF3E0 (light orange)
- Border-left: 4px solid #FF9800
- Items: White background, hover #F5F5F5
- Badge: Red pill with count

**Charts**
- Background: #FFFFFF
- Border Radius: 12px
- Padding: 24px
- Title: H3, margin-bottom 16px
- Chart area: Responsive height

---

## 7. Interactive States

### Hover States
```
Buttons:          Darken by 10%
Cards:            Lift shadow (0 8px 24px rgba(0,0,0,0.12))
List items:       Background #F5F5F5
Links:            Underline, Primary Dark color
```

### Focus States
```
All focusable:    2px solid #4CAF50 outline
Offset:           2px
```

### Loading States
```
Skeleton:         #E0E0E0 to #F5F5F5 shimmer animation
Spinner:          #4CAF50, 24px size
Button loading:   Disabled with spinner
```

---

## 8. Icons

### Recommended Icon Set
```
Library:          Lucide Icons / Heroicons
Style:            Outline (stroke width 2px)
Size:             24px default, 20px small, 32px large
Color:            Inherit from text or explicit color
```

### Key Icons
| Function | Icon Name |
|----------|-----------|
| Home | House |
| Child | Baby |
| Weight | Scale |
| Height | Ruler |
| Food | Utensils |
| Chart | BarChart3 |
| ASQ-3 | ClipboardCheck |
| Alert | AlertTriangle |
| Success | CheckCircle |
| Warning | AlertCircle |
| Notification | Bell |
| Profile | User |
| Settings | Settings |
| Logout | LogOut |

---

## 9. Responsive Behavior

### Desktop (>1024px)
- Full sidebar visible
- 3-column stat cards
- 2-column chart layout

### Tablet (768px - 1024px)
- Collapsible sidebar (icon only)
- 2-column stat cards
- Stacked charts

### Mobile (<768px)
- Bottom navigation (hide sidebar)
- Full-width cards
- Single column layout
- Sticky header

---

## 10. Sample Prompts for Google Stitch

### Parent Dashboard Prompt
```
Create a modern healthcare dashboard for parents in Indonesia.
Light theme with white backgrounds and green (#4CAF50) accent color.
Show a greeting at top, horizontal scrollable child profile cards with 
health status badges (green/yellow/red), 4 quick action buttons in a row,
daily task checklist, and weekly nutrition progress bars.
Bottom navigation with 5 tabs. Clean, friendly, mobile-first design.
Use Inter font. Include subtle shadows and rounded corners (12px).
```

### Nakes Dashboard Prompt
```
Create a professional healthcare worker dashboard for monitoring 
child nutrition in Indonesia. Light theme with sidebar navigation on left.
Show 3 stat cards (total children, critical cases, active programs) 
at the top. Include an urgent alerts section with red/orange indicators
for children needing attention. Add a donut chart for nutrition status 
distribution and a line chart for monthly trends. Clean, data-dense,
professional look. Use green (#4CAF50) as primary color, white cards,
subtle shadows. Inter font family.
---

## 11. 📄 PAGES TO CREATE (For Stitch Export)

> **IMPORTANT**: Create all pages below. Each will be exported as Next.js React components.

### 11.1 Authentication Pages (Shared)

| # | Page Name | Route | Description |
|---|-----------|-------|-------------|
| 1 | **Login** | `/login` | Email/phone login form with green theme |
| 2 | **Register** | `/register` | Registration form (name, email, phone, password) |
| 3 | **OTP Verification** | `/verify-otp` | 6-digit OTP input with countdown timer |
| 4 | **Forgot Password** | `/forgot-password` | Email/phone input for password reset |

---

### 11.2 Orang Tua (Parent) Pages

| # | Page Name | Route | Description |
|---|-----------|-------|-------------|
| 5 | **Parent Dashboard** | `/parent/dashboard` | Greeting, child cards, quick actions, daily tasks, weekly summary |
| 6 | **Child Profile** | `/parent/children/[id]` | Child details, Z-score cards, growth chart preview |
| 7 | **Add Child** | `/parent/children/add` | Form: name, birth date, gender, photo upload |
| 8 | **Food Input** | `/parent/input/food` | Date picker, meal time tabs, food search, portion input |
| 9 | **Food Search Modal** | `/parent/input/food/search` | Search bar, food list with nutrition info |
| 10 | **Anthropometry Input** | `/parent/input/anthropometry` | Weight/height sliders, Z-score result display |
| 11 | **PMT Tracking** | `/parent/pmt` | Daily checklist, progress bar (90 days), statistics |
| 12 | **Growth Progress** | `/parent/progress` | Full growth charts (BB/U, TB/U, BB/TB), history table |
| 13 | **ASQ-3 Screening** | `/parent/screening/asq` | Domain cards (5), question list, result summary |
| 14 | **ASQ-3 Questions** | `/parent/screening/asq/[domain]` | 6 questions per domain, Yes/Sometimes/NotYet buttons |
| 15 | **ASQ-3 Results** | `/parent/screening/asq/results` | 5-domain score chart, recommendations |
| 16 | **Education List** | `/parent/education` | Category tabs, article cards |
| 17 | **Education Article** | `/parent/education/[id]` | Article content with images |
| 18 | **Notifications** | `/parent/notifications` | Notification list with icons |
| 19 | **Profile Settings** | `/parent/profile` | Edit profile, change password, logout |

---

### 11.3 Nakes (Healthcare Worker) Pages

| # | Page Name | Route | Description |
|---|-----------|-------|-------------|
| 20 | **Nakes Dashboard** | `/nakes/dashboard` | Stat cards, urgent alerts, charts, recent activities |
| 21 | **Children List** | `/nakes/patients` | Filterable table (status, age, name), search |
| 22 | **Child Detail** | `/nakes/patients/[id]` | Full profile, nutrition status, history, intervention form |
| 23 | **Intervention Form** | `/nakes/patients/[id]/intervention` | PMT decision, notes input, save button |
| 24 | **PMT Management** | `/nakes/pmt` | Active PMT list, progress tracking, graduation review |
| 25 | **PMT Detail** | `/nakes/pmt/[id]` | Child info, daily consumption chart, compliance rate |
| 26 | **ASQ-3 Screening Form** | `/nakes/screening/[id]` | Conduct screening for child, all 30 questions |
| 27 | **ASQ-3 Review** | `/nakes/screening/[id]/review` | View results, add recommendations |
| 28 | **Reports Dashboard** | `/nakes/reports` | Statistics cards, export buttons |
| 29 | **Generate Report** | `/nakes/reports/generate` | Date range, filters, preview, export options |
| 30 | **Settings** | `/nakes/settings` | Facility info, notification preferences |

---

### 11.4 Shared Components (Create as Reusable)

| # | Component | Description |
|---|-----------|-------------|
| C1 | **Header** | Logo, notification bell, profile avatar |
| C2 | **Sidebar** | Nakes navigation menu (6 items) |
| C3 | **Bottom Navigation** | Parent tabs (5 items) |
| C4 | **Stat Card** | Number + label + icon |
| C5 | **Child Profile Card** | Avatar, name, age, Z-scores, status badge |
| C6 | **Z-Score Badge** | Color-coded pill (green/yellow/red) |
| C7 | **Task Item** | Checkbox, title, subtitle, arrow |
| C8 | **Progress Bar** | Horizontal bar with percentage |
| C9 | **Alert Card** | Warning/danger with action buttons |
| C10 | **Chart Card** | Title + chart area (donut/line/bar) |
| C11 | **Food Item Row** | Food name, portion dropdown, delete button |
| C12 | **ASQ Domain Card** | Domain icon, score, status indicator |
| C13 | **Form Input** | Label, input field, error message |
| C14 | **Primary Button** | Green filled button |
| C15 | **Secondary Button** | Green outlined button |

---

## 12. 📝 Stitch Generation Prompts Per Page

### Auth Pages

**Login Page:**
```
Create a login page for a healthcare app. Light theme, white background.
Center-aligned form card with shadow. Logo at top (green leaf icon + "KREANOVA").
Email/phone input, password input with show/hide toggle, green "Masuk" button.
Link to register below. Footer: "Lupa password?". Use Inter font, 
green (#4CAF50) accent. Clean, minimal, professional.
```

**Register Page:**
```
Create a registration form page. Light theme, white card on #F5F5F5 background.
Fields: Nama Lengkap, Nomor HP, Email, Password, Konfirmasi Password.
All inputs 48px height with green focus border. Green submit button.
Link to login page at bottom. Clean form layout with proper spacing.
```

---

### Parent Pages

**Parent Dashboard:**
```
Create a parent dashboard for child nutrition monitoring app.
Light theme with #F5F5F5 background. Top: greeting "Selamat Pagi, Bunda!" 
with date. Horizontal scroll cards showing children with their nutrition 
status (green/yellow/red badges) and Z-scores. 4 quick action buttons 
in a row (Input Asupan, Input BB/TB, Lihat Grafik, Skrining ASQ-3).
Daily task checklist with checkboxes. Weekly nutrition progress bars.
Bottom navigation: Home, Input, Progress, Edu, Profile. Green accent color.
```

**Food Input Page:**
```
Create a food input form for tracking child meals.
Header with back button and title "Input Asupan Makan".
Date picker at top. 4 meal time tabs (Pagi, Siang, Sore, Malam).
Search input with icon. Selected foods list with portion dropdowns.
Add food button. Nutrition summary card at bottom showing 
calories, protein, fat, carbs with percentages. Green save button.
Light theme, white cards, Inter font.
```

**ASQ-3 Screening Page:**
```
Create a developmental screening results page with 5 domain cards.
Header: "Skrining Perkembangan (ASQ-3)". Child name and age below.
5 horizontal cards representing domains: Communication, Gross Motor,
Fine Motor, Problem Solving, Personal-Social. Each card shows icon,
domain name, score (e.g., 55/60), and color indicator (green/yellow/red).
Legend at bottom. Green accent, light theme, white cards with shadows.
```

---

### Nakes Pages

**Nakes Dashboard:**
```
Create a healthcare worker dashboard with sidebar navigation.
Left sidebar (260px): Logo, menu items (Dashboard, Data Anak, Program PMT,
Skrining, Laporan, Pengaturan), date/time at bottom.
Main area: Header with title and profile. Facility name card.
3 stat cards in row (Total Anak, Kasus Kritis, PMT Aktif).
Urgent alerts section with red/orange highlighted items.
2-column charts row (donut chart for nutrition distribution,
line chart for monthly trend). Recent activity list.
Light theme, green accent, professional healthcare look.
```

**Children List Page:**
```
Create a patient list page with filtering and search.
Header with title "Data Anak" and search input.
Filter row with dropdowns: Status Gizi, Usia, Kelurahan.
Data table with columns: Nama, Usia, BB/U, TB/U, BB/TB, Status, Aksi.
Status shown as colored badges. Action button for each row.
Pagination at bottom. Light theme, white table on gray background.
Professional, data-focused layout.
```

**Child Detail & Intervention:**
```
Create a child detail page for healthcare workers.
Back button and title. Profile card with photo, name, age, address.
3 Z-score cards showing BB/U, TB/U, BB/TB with colored status badges.
Growth chart section with chart preview. Nutrition intake section 
showing 7-day averages with warning if below target.
Intervention decision section: radio buttons (Perlu PMT / Tidak Perlu),
notes textarea, green save button. Light theme, organized layout.
```

---

## 13. Asset Requirements

### Images/Illustrations
- Empty state illustrations (no data, no children)
- Success state illustrations
- Error state illustrations
- Onboarding illustrations

### Avatars
- Default child avatar (gender neutral)
- Default parent avatar (male/female)
- Default healthcare worker avatar

---

## 14. File Export Structure

```
kreanova-stitch-export/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── verify-otp/page.tsx
│   │   └── forgot-password/page.tsx
│   ├── (parent)/
│   │   ├── dashboard/page.tsx
│   │   ├── children/
│   │   │   ├── [id]/page.tsx
│   │   │   └── add/page.tsx
│   │   ├── input/
│   │   │   ├── food/page.tsx
│   │   │   └── anthropometry/page.tsx
│   │   ├── pmt/page.tsx
│   │   ├── progress/page.tsx
│   │   ├── screening/
│   │   │   └── asq/
│   │   │       ├── page.tsx
│   │   │       ├── [domain]/page.tsx
│   │   │       └── results/page.tsx
│   │   ├── education/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── notifications/page.tsx
│   │   └── profile/page.tsx
│   └── (nakes)/
│       ├── dashboard/page.tsx
│       ├── patients/
│       │   ├── page.tsx
│       │   └── [id]/
│       │       ├── page.tsx
│       │       └── intervention/page.tsx
│       ├── pmt/
│       │   ├── page.tsx
│       │   └── [id]/page.tsx
│       ├── screening/
│       │   └── [id]/
│       │       ├── page.tsx
│       │       └── review/page.tsx
│       ├── reports/
│       │   ├── page.tsx
│       │   └── generate/page.tsx
│       └── settings/page.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   └── ProgressBar.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── BottomNav.tsx
│   ├── cards/
│   │   ├── StatCard.tsx
│   │   ├── ChildCard.tsx
│   │   ├── AlertCard.tsx
│   │   └── DomainCard.tsx
│   ├── charts/
│   │   ├── GrowthChart.tsx
│   │   ├── DonutChart.tsx
│   │   └── BarChart.tsx
│   └── forms/
│       ├── FoodInputForm.tsx
│       └── InterventionForm.tsx
└── styles/
    └── globals.css
```

---

*Document prepared for AI mockup generation with Google Stitch.*
*Export code feature compatible with Next.js 14+ App Router.*
*Last updated: 15 Desember 2025*


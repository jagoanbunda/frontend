# 🔧 Backend Architecture Planning
## Aplikasi Monitoring Tumbuh Kembang Anak (KREANOVA)
### Golang + PostgreSQL

---

## 1. 📋 Executive Summary

### Technology Stack
| Layer | Technology | Version |
|-------|------------|---------|
| **Language** | Go (Golang) | 1.21+ |
| **Framework** | Gin / Echo | Latest |
| **Database** | PostgreSQL | 15+ |
| **Cache** | Redis | 7+ |
| **Auth** | JWT + Refresh Token | - |
| **API Docs** | Swagger/OpenAPI | 3.0 |
| **Deployment** | Docker + Kubernetes | - |

### Architecture Pattern
```
┌─────────────────────────────────────────────────────────────────┐
│                    KREANOVA BACKEND ARCHITECTURE                 │
└─────────────────────────────────────────────────────────────────┘

            ┌─────────────────────────────────────────┐
            │         NEXT.JS WEB APP                 │
            │   (Orang Tua + Nakes - Role-based)      │
            │  ┌─────────────┐ ┌─────────────────┐   │
            │  │ /parent/*   │ │    /nakes/*     │   │
            │  │ Dashboard   │ │    Dashboard    │   │
            │  │ Input Data  │ │    Monitoring   │   │
            │  │ Progress    │ │    Intervention │   │
            │  └─────────────┘ └─────────────────┘   │
            └───────────────────┬─────────────────────┘
                                │
       ┌────────────────────────┼────────────────────────┐
       │                        │                        │
┌──────▼───────┐        ┌───────▼───────┐        ┌───────▼───────┐
│  Mobile App  │        │   API Gateway │        │   Admin Panel │
│(React Native)│        │  (Rate Limit) │        │   (Optional)  │
│  Orang Tua   │        └───────┬───────┘        └───────────────┘
│     ONLY     │                │
└──────┬───────┘        ┌───────▼───────┐
       │                │  Golang API   │
       └───────────────►│   Services    │
                        └───────┬───────┘
                                │
        ┌───────────────────────┼───────────────────┐
        │                       │                   │
┌───────▼───────┐       ┌───────▼───────┐   ┌───────▼───────┐
│  PostgreSQL   │       │     Redis     │   │   S3/Minio    │
│   (Primary)   │       │   (Cache)     │   │   (Storage)   │
└───────────────┘       └───────────────┘   └───────────────┘
```

---

## 2. 📁 Project Structure

```
backend/
├── cmd/
│   └── api/
│       └── main.go                 # Entry point
├── internal/
│   ├── config/
│   │   └── config.go               # App configuration
│   ├── domain/                     # Business entities
│   │   ├── user.go
│   │   ├── child.go
│   │   ├── anthropometry.go
│   │   ├── nutrition.go
│   │   ├── pmt.go
│   │   ├── milestone.go
│   │   └── screening.go
│   ├── repository/                 # Data access layer
│   │   ├── user_repository.go
│   │   ├── child_repository.go
│   │   └── ...
│   ├── service/                    # Business logic
│   │   ├── auth_service.go
│   │   ├── child_service.go
│   │   ├── zscore_service.go
│   │   └── ...
│   ├── handler/                    # HTTP handlers
│   │   ├── auth_handler.go
│   │   ├── child_handler.go
│   │   └── ...
│   ├── middleware/
│   │   ├── auth.go
│   │   ├── rate_limit.go
│   │   └── cors.go
│   └── utils/
│       ├── zscore_calculator.go
│       ├── nutrition_calculator.go
│       └── validator.go
├── pkg/
│   ├── database/
│   │   └── postgres.go
│   ├── cache/
│   │   └── redis.go
│   └── logger/
│       └── logger.go
├── migrations/
│   ├── 000001_create_users.up.sql
│   ├── 000001_create_users.down.sql
│   └── ...
├── api/
│   └── openapi.yaml               # API specification
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── go.mod
├── go.sum
└── Makefile
```

---

## 3. 🗄️ Database Schema

### 3.1 Entity Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    DATABASE SCHEMA (ERD)                         │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│    users     │       │   children   │       │anthropometry │
├──────────────┤       ├──────────────┤       ├──────────────┤
│ id (PK)      │◄──────│ parent_id(FK)│       │ id (PK)      │
│ email        │       │ id (PK)      │◄──────│ child_id(FK) │
│ phone        │       │ name         │       │ date         │
│ password     │       │ birth_date   │       │ weight       │
│ role         │       │ gender       │       │ height       │
│ nakes_id(FK) │       │ created_at   │       │ zscore_bbu   │
│ created_at   │       └──────────────┘       │ zscore_tbu   │
└──────────────┘              │               │ zscore_bbtb  │
       │                      │               │ recorded_by  │
       │               ┌──────┴──────┐        └──────────────┘
       │               │             │
       │        ┌──────▼─────┐ ┌─────▼─────────┐
       │        │food_intakes│ │ pmt_programs  │
       │        ├────────────┤ ├───────────────┤
       │        │ id (PK)    │ │ id (PK)       │
       │        │ child_id   │ │ child_id (FK) │
       │        │ date       │ │ nakes_id (FK) │
       │        │ meal_time  │ │ start_date    │
       │        │ foods JSON │ │ end_date      │
       │        │ total_cal  │ │ status        │
       │        └────────────┘ └───────────────┘
       │                              │
       │                       ┌──────▼──────┐
       │                       │pmt_daily    │
       │                       ├─────────────┤
       │                       │ id (PK)     │
       │                       │ program_id  │
       │                       │ date        │
       │                       │ consumed    │
       │                       └─────────────┘
       │
┌──────▼──────────┐     ┌──────────────┐
│     nakes       │     │kpsp_screening│
├─────────────────┤     ├──────────────┤
│ id (PK)         │◄────│ nakes_id(FK) │
│ user_id (FK)    │     │ id (PK)      │
│ facility_name   │     │ child_id (FK)│
│ facility_code   │     │ date         │
│ region          │     │ answers JSON │
│ created_at      │     │ result       │
└─────────────────┘     └──────────────┘
```

### 3.2 Table Definitions

```sql
-- migrations/000001_create_users.up.sql

CREATE TYPE user_role AS ENUM ('parent', 'nakes', 'admin');
CREATE TYPE gender AS ENUM ('male', 'female');
CREATE TYPE pmt_status AS ENUM ('active', 'completed', 'cancelled');
CREATE TYPE kpsp_result AS ENUM ('sesuai', 'meragukan', 'penyimpangan');
CREATE TYPE meal_time AS ENUM ('breakfast', 'lunch', 'snack', 'dinner');

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role user_role NOT NULL DEFAULT 'parent',
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Nakes profile
CREATE TABLE nakes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    facility_name VARCHAR(255) NOT NULL,
    facility_code VARCHAR(50),
    region VARCHAR(255),
    nik VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Children table
CREATE TABLE children (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    gender gender NOT NULL,
    nik VARCHAR(20),
    birth_weight DECIMAL(5,2),  -- kg
    birth_height DECIMAL(5,2),  -- cm
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Anthropometry records
CREATE TABLE anthropometry_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID REFERENCES children(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    weight DECIMAL(5,2) NOT NULL,        -- kg
    height DECIMAL(5,2) NOT NULL,        -- cm
    head_circumference DECIMAL(5,2),     -- cm (optional)
    age_months INTEGER NOT NULL,
    zscore_bbu DECIMAL(4,2),
    zscore_tbu DECIMAL(4,2),
    zscore_bbtb DECIMAL(4,2),
    status_bbu VARCHAR(50),
    status_tbu VARCHAR(50),
    status_bbtb VARCHAR(50),
    recorded_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(child_id, date)
);

-- Food intakes
CREATE TABLE food_intakes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID REFERENCES children(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    meal_time meal_time NOT NULL,
    foods JSONB NOT NULL,  -- Array of food items
    total_energy DECIMAL(8,2),     -- kcal
    total_protein DECIMAL(8,2),    -- gram
    total_fat DECIMAL(8,2),        -- gram
    total_carbohydrate DECIMAL(8,2), -- gram
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- PMT Programs
CREATE TABLE pmt_programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID REFERENCES children(id) ON DELETE CASCADE,
    nakes_id UUID REFERENCES nakes(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,  -- start_date + 90 days
    status pmt_status DEFAULT 'active',
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- PMT Daily Records
CREATE TABLE pmt_daily_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    program_id UUID REFERENCES pmt_programs(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    consumed BOOLEAN NOT NULL,
    notes TEXT,
    reported_by UUID REFERENCES users(id),
    reported_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(program_id, date)
);

-- ============================================
-- ASQ-3 (Ages & Stages Questionnaire) TABLES
-- ============================================

CREATE TYPE asq_domain AS ENUM (
    'communication',
    'gross_motor', 
    'fine_motor',
    'problem_solving',
    'personal_social'
);

CREATE TYPE asq_answer AS ENUM ('yes', 'sometimes', 'not_yet');
CREATE TYPE asq_result AS ENUM ('on_track', 'monitoring', 'below_cutoff');

-- ASQ-3 Questionnaire Templates (21 age-specific forms)
CREATE TABLE asq_questionnaires (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    age_months INTEGER NOT NULL UNIQUE,  -- 2,4,6,8,9,10,12,14,16,18,20,22,24,27,30,33,36,42,48,54,60
    age_range_min INTEGER NOT NULL,      -- Min age to use this form
    age_range_max INTEGER NOT NULL,      -- Max age to use this form
    version VARCHAR(20) DEFAULT '3.0',
    is_active BOOLEAN DEFAULT TRUE
);

-- ASQ-3 Questions (6 per domain = 30 per questionnaire)
CREATE TABLE asq_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    questionnaire_id UUID REFERENCES asq_questionnaires(id) ON DELETE CASCADE,
    domain asq_domain NOT NULL,
    question_number INTEGER NOT NULL,    -- 1-6 within domain
    question_text TEXT NOT NULL,
    question_text_id TEXT,               -- Indonesian translation
    illustration_url VARCHAR(500),
    how_to_check TEXT,                   -- Instructions for parent
    sort_order INTEGER DEFAULT 0,
    UNIQUE(questionnaire_id, domain, question_number)
);

-- ASQ-3 Cutoff Scores (per domain, per age)
CREATE TABLE asq_cutoffs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    questionnaire_id UUID REFERENCES asq_questionnaires(id) ON DELETE CASCADE,
    domain asq_domain NOT NULL,
    cutoff_score DECIMAL(4,1) NOT NULL,       -- Below this = refer
    monitoring_zone DECIMAL(4,1) NOT NULL,    -- Below this but above cutoff = monitor
    UNIQUE(questionnaire_id, domain)
);

-- ASQ-3 Screening Sessions (Parent fills this)
CREATE TABLE asq_screenings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    child_id UUID REFERENCES children(id) ON DELETE CASCADE,
    questionnaire_id UUID REFERENCES asq_questionnaires(id),
    screening_date DATE NOT NULL,
    age_at_screening INTEGER NOT NULL,        -- Child's age in months
    completed_by UUID REFERENCES users(id),   -- Parent who filled
    reviewed_by UUID REFERENCES nakes(id),    -- Nakes who reviewed (optional)
    status VARCHAR(20) DEFAULT 'completed',   -- draft, completed, reviewed
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- ASQ-3 Answers (30 answers per screening)
CREATE TABLE asq_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    screening_id UUID REFERENCES asq_screenings(id) ON DELETE CASCADE,
    question_id UUID REFERENCES asq_questions(id),
    answer asq_answer NOT NULL,
    score INTEGER NOT NULL,                   -- yes=10, sometimes=5, not_yet=0
    notes TEXT,
    UNIQUE(screening_id, question_id)
);

-- ASQ-3 Domain Results (5 results per screening)
CREATE TABLE asq_domain_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    screening_id UUID REFERENCES asq_screenings(id) ON DELETE CASCADE,
    domain asq_domain NOT NULL,
    total_score DECIMAL(4,1) NOT NULL,        -- Sum of 6 items (max 60)
    cutoff_score DECIMAL(4,1) NOT NULL,       -- From cutoffs table
    monitoring_zone DECIMAL(4,1) NOT NULL,
    result asq_result NOT NULL,               -- on_track, monitoring, below_cutoff
    UNIQUE(screening_id, domain)
);

-- ASQ-3 Overall Concerns (additional parent concerns section)
CREATE TABLE asq_concerns (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    screening_id UUID REFERENCES asq_screenings(id) ON DELETE CASCADE,
    has_vision_concern BOOLEAN DEFAULT FALSE,
    has_hearing_concern BOOLEAN DEFAULT FALSE,
    has_behavior_concern BOOLEAN DEFAULT FALSE,
    has_other_concern BOOLEAN DEFAULT FALSE,
    concern_details TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Stimulation Recommendations (for domains needing support)
CREATE TABLE asq_recommendations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    domain asq_domain NOT NULL,
    age_months_min INTEGER NOT NULL,
    age_months_max INTEGER NOT NULL,
    activity_title VARCHAR(255) NOT NULL,
    activity_description TEXT NOT NULL,
    video_url VARCHAR(500),
    sort_order INTEGER DEFAULT 0
);

-- Education Articles
CREATE TABLE education_articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    thumbnail_url VARCHAR(500),
    published_at TIMESTAMP,
    view_count INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Food Database
CREATE TABLE foods (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    portion_name VARCHAR(100) NOT NULL,
    portion_gram DECIMAL(8,2) NOT NULL,
    energy_kcal DECIMAL(8,2) NOT NULL,
    protein_g DECIMAL(8,2) NOT NULL,
    fat_g DECIMAL(8,2) NOT NULL,
    carbohydrate_g DECIMAL(8,2) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

-- Indexes for performance
CREATE INDEX idx_children_parent ON children(parent_id);
CREATE INDEX idx_anthropometry_child ON anthropometry_records(child_id);
CREATE INDEX idx_anthropometry_date ON anthropometry_records(date);
CREATE INDEX idx_food_intakes_child ON food_intakes(child_id);
CREATE INDEX idx_food_intakes_date ON food_intakes(date);
CREATE INDEX idx_pmt_child ON pmt_programs(child_id);
CREATE INDEX idx_pmt_status ON pmt_programs(status);
CREATE INDEX idx_asq_screenings_child ON asq_screenings(child_id);
CREATE INDEX idx_asq_answers_screening ON asq_answers(screening_id);
CREATE INDEX idx_asq_domain_results_screening ON asq_domain_results(screening_id);
```

---

## 4. 🌐 API Endpoints

### 4.1 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register new user (parent/nakes) |
| POST | `/api/v1/auth/login` | Login with email/phone + password |
| POST | `/api/v1/auth/verify-otp` | Verify OTP for phone registration |
| POST | `/api/v1/auth/refresh` | Refresh access token |
| POST | `/api/v1/auth/logout` | Logout and invalidate tokens |
| POST | `/api/v1/auth/forgot-password` | Request password reset |
| POST | `/api/v1/auth/reset-password` | Reset password with token |

### 4.2 Children Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/children` | List all children (parent: own, nakes: assigned) |
| POST | `/api/v1/children` | Create new child profile |
| GET | `/api/v1/children/:id` | Get child details |
| PUT | `/api/v1/children/:id` | Update child profile |
| DELETE | `/api/v1/children/:id` | Delete child profile |
| GET | `/api/v1/children/:id/summary` | Get child summary with latest Z-Score |

### 4.3 Anthropometry

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/children/:id/anthropometry` | List anthropometry history |
| POST | `/api/v1/children/:id/anthropometry` | Add new measurement |
| GET | `/api/v1/children/:id/anthropometry/:recordId` | Get specific record |
| PUT | `/api/v1/children/:id/anthropometry/:recordId` | Update measurement |
| GET | `/api/v1/children/:id/growth-chart` | Get growth chart data |

### 4.4 Food Intake

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/children/:id/food-intakes` | List food intake history |
| POST | `/api/v1/children/:id/food-intakes` | Add food intake record |
| GET | `/api/v1/children/:id/food-intakes/:date` | Get intakes for specific date |
| PUT | `/api/v1/children/:id/food-intakes/:recordId` | Update food intake |
| DELETE | `/api/v1/children/:id/food-intakes/:recordId` | Delete food intake |
| GET | `/api/v1/children/:id/nutrition-summary` | Weekly/monthly nutrition summary |
| GET | `/api/v1/foods/search` | Search food database |

### 4.5 PMT Program

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/pmt/programs` | List PMT programs |
| POST | `/api/v1/pmt/programs` | Create PMT program (Nakes only) |
| GET | `/api/v1/pmt/programs/:id` | Get PMT program details |
| PUT | `/api/v1/pmt/programs/:id` | Update PMT status |
| POST | `/api/v1/pmt/programs/:id/daily` | Report daily PMT consumption |
| GET | `/api/v1/pmt/programs/:id/progress` | Get PMT progress stats |

### 4.6 ASQ-3 Developmental Screening

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/asq/questionnaires` | List all questionnaire forms |
| GET | `/api/v1/asq/questionnaires/:ageMonths` | Get questionnaire for specific age |
| GET | `/api/v1/asq/questions/:questionnaireId` | Get all 30 questions for a questionnaire |
| GET | `/api/v1/asq/cutoffs/:questionnaireId` | Get cutoff scores for a questionnaire |

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/children/:id/asq` | Get ASQ screening history |
| POST | `/api/v1/children/:id/asq` | Start new ASQ screening |
| GET | `/api/v1/children/:id/asq/:screeningId` | Get screening details with results |
| PUT | `/api/v1/children/:id/asq/:screeningId` | Update/complete screening |
| DELETE | `/api/v1/children/:id/asq/:screeningId` | Delete draft screening |
| POST | `/api/v1/children/:id/asq/:screeningId/answers` | Submit answers (batch) |
| GET | `/api/v1/children/:id/asq/:screeningId/results` | Get domain results with recommendations |
| POST | `/api/v1/children/:id/asq/:screeningId/concerns` | Submit parent concerns |

### 4.7 ASQ-3 Recommendations

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/asq/recommendations/:domain` | Get activities for a domain |
| GET | `/api/v1/children/:id/asq/:screeningId/recommendations` | Get personalized recommendations |


### 4.8 Nakes Dashboard

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/nakes/dashboard` | Get dashboard statistics |
| GET | `/api/v1/nakes/children` | List all children with filters |
| GET | `/api/v1/nakes/children/priority` | Get priority cases (Z-Score < -2) |
| POST | `/api/v1/nakes/intervention/:childId` | Create intervention decision |
| GET | `/api/v1/nakes/reports` | Generate reports |

### 4.9 Education

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/education/articles` | List articles |
| GET | `/api/v1/education/articles/:id` | Get article detail |
| GET | `/api/v1/education/categories` | List categories |

### 4.10 Sync (Mobile)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/sync/push` | Push local changes to server |
| GET | `/api/v1/sync/pull` | Pull server changes |
| GET | `/api/v1/sync/status` | Get sync status |

---

## 5. 🔐 Authentication & Authorization

### 5.1 JWT Token Structure

```go
// Access Token Claims
type AccessTokenClaims struct {
    UserID    string `json:"user_id"`
    Email     string `json:"email"`
    Role      string `json:"role"`    // parent, nakes, admin
    NakesID   string `json:"nakes_id,omitempty"`
    jwt.RegisteredClaims
}

// Token Configuration
const (
    AccessTokenExpiry  = 15 * time.Minute
    RefreshTokenExpiry = 7 * 24 * time.Hour
)
```

### 5.2 Role-Based Access Control

```go
// Permission matrix
var permissions = map[string][]string{
    "parent": {
        "children:read:own",
        "children:write:own",
        "anthropometry:read:own",
        "anthropometry:write:own",
        "food_intake:read:own",
        "food_intake:write:own",
        "pmt:read:own",
        "pmt:daily:write:own",
        "milestones:read:own",
        "milestones:write:own",
        "education:read",
    },
    "nakes": {
        "children:read:assigned",
        "children:write:assigned",
        "anthropometry:read:all",
        "anthropometry:write:all",
        "pmt:read:all",
        "pmt:write:all",
        "screening:read:all",
        "screening:write:all",
        "reports:read",
        "dashboard:read",
    },
    "admin": {
        "*", // All permissions
    },
}
```

### 5.3 Auth Middleware

```go
// internal/middleware/auth.go

func AuthMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        authHeader := c.GetHeader("Authorization")
        if authHeader == "" {
            c.AbortWithStatusJSON(401, gin.H{"error": "missing authorization header"})
            return
        }

        tokenString := strings.TrimPrefix(authHeader, "Bearer ")
        claims, err := validateToken(tokenString)
        if err != nil {
            c.AbortWithStatusJSON(401, gin.H{"error": "invalid token"})
            return
        }

        c.Set("user_id", claims.UserID)
        c.Set("role", claims.Role)
        c.Set("nakes_id", claims.NakesID)
        c.Next()
    }
}

func RoleMiddleware(allowedRoles ...string) gin.HandlerFunc {
    return func(c *gin.Context) {
        role := c.GetString("role")
        for _, allowed := range allowedRoles {
            if role == allowed {
                c.Next()
                return
            }
        }
        c.AbortWithStatusJSON(403, gin.H{"error": "insufficient permissions"})
    }
}
```

---

## 6. 📊 Domain Models (Go Structs)

```go
// internal/domain/child.go

package domain

import (
    "time"
    "github.com/google/uuid"
)

type Gender string

const (
    Male   Gender = "male"
    Female Gender = "female"
)

type Child struct {
    ID          uuid.UUID  `json:"id" db:"id"`
    ParentID    uuid.UUID  `json:"parent_id" db:"parent_id"`
    Name        string     `json:"name" db:"name"`
    BirthDate   time.Time  `json:"birth_date" db:"birth_date"`
    Gender      Gender     `json:"gender" db:"gender"`
    NIK         *string    `json:"nik,omitempty" db:"nik"`
    BirthWeight *float64   `json:"birth_weight,omitempty" db:"birth_weight"`
    BirthHeight *float64   `json:"birth_height,omitempty" db:"birth_height"`
    CreatedAt   time.Time  `json:"created_at" db:"created_at"`
    UpdatedAt   time.Time  `json:"updated_at" db:"updated_at"`
}

func (c *Child) AgeInMonths() int {
    now := time.Now()
    years := now.Year() - c.BirthDate.Year()
    months := int(now.Month()) - int(c.BirthDate.Month())
    return years*12 + months
}
```

```go
// internal/domain/anthropometry.go

type AnthropometryRecord struct {
    ID                uuid.UUID `json:"id" db:"id"`
    ChildID           uuid.UUID `json:"child_id" db:"child_id"`
    Date              time.Time `json:"date" db:"date"`
    Weight            float64   `json:"weight" db:"weight"`
    Height            float64   `json:"height" db:"height"`
    HeadCircumference *float64  `json:"head_circumference,omitempty" db:"head_circumference"`
    AgeMonths         int       `json:"age_months" db:"age_months"`
    ZScoreBBU         float64   `json:"zscore_bbu" db:"zscore_bbu"`
    ZScoreTBU         float64   `json:"zscore_tbu" db:"zscore_tbu"`
    ZScoreBBTB        float64   `json:"zscore_bbtb" db:"zscore_bbtb"`
    StatusBBU         string    `json:"status_bbu" db:"status_bbu"`
    StatusTBU         string    `json:"status_tbu" db:"status_tbu"`
    StatusBBTB        string    `json:"status_bbtb" db:"status_bbtb"`
    RecordedBy        uuid.UUID `json:"recorded_by" db:"recorded_by"`
    CreatedAt         time.Time `json:"created_at" db:"created_at"`
}

type NutritionStatus string

const (
    StatusBBSangatKurang NutritionStatus = "Berat Badan Sangat Kurang"
    StatusBBKurang       NutritionStatus = "Berat Badan Kurang"
    StatusBBNormal       NutritionStatus = "Berat Badan Normal"
    StatusBBLebih        NutritionStatus = "Risiko Berat Badan Lebih"
    
    StatusTBSangatPendek NutritionStatus = "Sangat Pendek"
    StatusTBPendek       NutritionStatus = "Pendek"
    StatusTBNormal       NutritionStatus = "Normal"
    StatusTBTinggi       NutritionStatus = "Tinggi"
    
    StatusGiziBuruk      NutritionStatus = "Gizi Buruk"
    StatusGiziKurang     NutritionStatus = "Gizi Kurang"
    StatusGiziBaik       NutritionStatus = "Gizi Baik"
    StatusBerikoGiziLebih NutritionStatus = "Berisiko Gizi Lebih"
    StatusGiziLebih      NutritionStatus = "Gizi Lebih"
    StatusObesitas       NutritionStatus = "Obesitas"
)
```

```go
// internal/domain/food_intake.go

type MealTime string

const (
    Breakfast MealTime = "breakfast"
    Lunch     MealTime = "lunch"
    Snack     MealTime = "snack"
    Dinner    MealTime = "dinner"
)

type FoodItem struct {
    FoodID       uuid.UUID `json:"food_id"`
    Name         string    `json:"name"`
    PortionName  string    `json:"portion_name"`
    PortionCount float64   `json:"portion_count"`
    WeightGram   float64   `json:"weight_gram"`
    Energy       float64   `json:"energy"`
    Protein      float64   `json:"protein"`
    Fat          float64   `json:"fat"`
    Carbohydrate float64   `json:"carbohydrate"`
}

type FoodIntake struct {
    ID               uuid.UUID  `json:"id" db:"id"`
    ChildID          uuid.UUID  `json:"child_id" db:"child_id"`
    Date             time.Time  `json:"date" db:"date"`
    MealTime         MealTime   `json:"meal_time" db:"meal_time"`
    Foods            []FoodItem `json:"foods" db:"foods"`
    TotalEnergy      float64    `json:"total_energy" db:"total_energy"`
    TotalProtein     float64    `json:"total_protein" db:"total_protein"`
    TotalFat         float64    `json:"total_fat" db:"total_fat"`
    TotalCarbohydrate float64   `json:"total_carbohydrate" db:"total_carbohydrate"`
    CreatedBy        uuid.UUID  `json:"created_by" db:"created_by"`
    CreatedAt        time.Time  `json:"created_at" db:"created_at"`
}
```

```go
// internal/domain/asq.go - ASQ-3 Developmental Screening

package domain

type ASQDomain string

const (
    Communication   ASQDomain = "communication"
    GrossMotor      ASQDomain = "gross_motor"
    FineMotor       ASQDomain = "fine_motor"
    ProblemSolving  ASQDomain = "problem_solving"
    PersonalSocial  ASQDomain = "personal_social"
)

type ASQAnswer string

const (
    AnswerYes      ASQAnswer = "yes"       // 10 points
    AnswerSometimes ASQAnswer = "sometimes" // 5 points
    AnswerNotYet   ASQAnswer = "not_yet"   // 0 points
)

func (a ASQAnswer) Score() int {
    switch a {
    case AnswerYes:
        return 10
    case AnswerSometimes:
        return 5
    default:
        return 0
    }
}

type ASQResult string

const (
    ResultOnTrack     ASQResult = "on_track"      // ≥ monitoring zone
    ResultMonitoring  ASQResult = "monitoring"    // between cutoff and monitoring
    ResultBelowCutoff ASQResult = "below_cutoff"  // < cutoff (refer)
)

// ASQ-3 Questionnaire (21 forms, one per age interval)
type ASQQuestionnaire struct {
    ID          uuid.UUID `json:"id" db:"id"`
    AgeMonths   int       `json:"age_months" db:"age_months"`     // 2,4,6,8,9,10,12...60
    AgeRangeMin int       `json:"age_range_min" db:"age_range_min"`
    AgeRangeMax int       `json:"age_range_max" db:"age_range_max"`
    Version     string    `json:"version" db:"version"`
    IsActive    bool      `json:"is_active" db:"is_active"`
}

// ASQ-3 Question (6 per domain = 30 total per questionnaire)
type ASQQuestion struct {
    ID              uuid.UUID `json:"id" db:"id"`
    QuestionnaireID uuid.UUID `json:"questionnaire_id" db:"questionnaire_id"`
    Domain          ASQDomain `json:"domain" db:"domain"`
    QuestionNumber  int       `json:"question_number" db:"question_number"` // 1-6
    QuestionText    string    `json:"question_text" db:"question_text"`
    QuestionTextID  string    `json:"question_text_id" db:"question_text_id"` // Indonesian
    IllustrationURL *string   `json:"illustration_url,omitempty" db:"illustration_url"`
    HowToCheck      *string   `json:"how_to_check,omitempty" db:"how_to_check"`
    SortOrder       int       `json:"sort_order" db:"sort_order"`
}

// ASQ-3 Cutoff (per domain per age)
type ASQCutoff struct {
    ID              uuid.UUID `json:"id" db:"id"`
    QuestionnaireID uuid.UUID `json:"questionnaire_id" db:"questionnaire_id"`
    Domain          ASQDomain `json:"domain" db:"domain"`
    CutoffScore     float64   `json:"cutoff_score" db:"cutoff_score"`           // Below = refer
    MonitoringZone  float64   `json:"monitoring_zone" db:"monitoring_zone"`     // Gray zone
}

// ASQ-3 Screening Session (one per child per screening date)
type ASQScreening struct {
    ID              uuid.UUID  `json:"id" db:"id"`
    ChildID         uuid.UUID  `json:"child_id" db:"child_id"`
    QuestionnaireID uuid.UUID  `json:"questionnaire_id" db:"questionnaire_id"`
    ScreeningDate   time.Time  `json:"screening_date" db:"screening_date"`
    AgeAtScreening  int        `json:"age_at_screening" db:"age_at_screening"`
    CompletedBy     uuid.UUID  `json:"completed_by" db:"completed_by"`     // Parent
    ReviewedBy      *uuid.UUID `json:"reviewed_by,omitempty" db:"reviewed_by"` // Nakes
    Status          string     `json:"status" db:"status"`                 // draft, completed, reviewed
    CreatedAt       time.Time  `json:"created_at" db:"created_at"`
    UpdatedAt       time.Time  `json:"updated_at" db:"updated_at"`
}

// ASQ-3 Answer (30 per screening)
type ASQAnswerRecord struct {
    ID          uuid.UUID `json:"id" db:"id"`
    ScreeningID uuid.UUID `json:"screening_id" db:"screening_id"`
    QuestionID  uuid.UUID `json:"question_id" db:"question_id"`
    Answer      ASQAnswer `json:"answer" db:"answer"`
    Score       int       `json:"score" db:"score"`   // 0, 5, or 10
    Notes       *string   `json:"notes,omitempty" db:"notes"`
}

// ASQ-3 Domain Result (5 per screening)
type ASQDomainResult struct {
    ID             uuid.UUID `json:"id" db:"id"`
    ScreeningID    uuid.UUID `json:"screening_id" db:"screening_id"`
    Domain         ASQDomain `json:"domain" db:"domain"`
    TotalScore     float64   `json:"total_score" db:"total_score"`         // 0-60
    CutoffScore    float64   `json:"cutoff_score" db:"cutoff_score"`
    MonitoringZone float64   `json:"monitoring_zone" db:"monitoring_zone"`
    Result         ASQResult `json:"result" db:"result"`
}

// ASQ-3 Parent Concerns
type ASQConcerns struct {
    ID                uuid.UUID `json:"id" db:"id"`
    ScreeningID       uuid.UUID `json:"screening_id" db:"screening_id"`
    HasVisionConcern  bool      `json:"has_vision_concern" db:"has_vision_concern"`
    HasHearingConcern bool      `json:"has_hearing_concern" db:"has_hearing_concern"`
    HasBehaviorConcern bool     `json:"has_behavior_concern" db:"has_behavior_concern"`
    HasOtherConcern   bool      `json:"has_other_concern" db:"has_other_concern"`
    ConcernDetails    *string   `json:"concern_details,omitempty" db:"concern_details"`
}

// Stimulation Recommendation
type ASQRecommendation struct {
    ID                  uuid.UUID `json:"id" db:"id"`
    Domain              ASQDomain `json:"domain" db:"domain"`
    AgeMonthsMin        int       `json:"age_months_min" db:"age_months_min"`
    AgeMonthsMax        int       `json:"age_months_max" db:"age_months_max"`
    ActivityTitle       string    `json:"activity_title" db:"activity_title"`
    ActivityDescription string    `json:"activity_description" db:"activity_description"`
    VideoURL            *string   `json:"video_url,omitempty" db:"video_url"`
    SortOrder           int       `json:"sort_order" db:"sort_order"`
}
```

---

## 7. 📐 ASQ-3 Scoring Service

```go
// internal/service/asq_service.go

package service

type ASQService struct {
    repo         ASQRepository
    cutoffCache  map[string]ASQCutoff  // questionnaire_id:domain -> cutoff
}

// Calculate domain score from answers
func (s *ASQService) CalculateDomainScore(answers []ASQAnswerRecord, domain ASQDomain) float64 {
    var total float64
    count := 0
    
    for _, ans := range answers {
        if ans.Domain == domain {
            total += float64(ans.Score)
            count++
        }
    }
    
    // If missing answers, prorate the score
    if count < 6 && count > 0 {
        total = (total / float64(count)) * 6
    }
    
    return total
}

// Determine result based on cutoffs
func (s *ASQService) DetermineResult(score float64, cutoff ASQCutoff) ASQResult {
    if score >= cutoff.MonitoringZone {
        return ResultOnTrack
    }
    if score >= cutoff.CutoffScore {
        return ResultMonitoring
    }
    return ResultBelowCutoff
}

// Get color for UI display
func (s *ASQService) GetResultColor(result ASQResult) string {
    switch result {
    case ResultOnTrack:
        return "#4CAF50" // Green
    case ResultMonitoring:
        return "#FFC107" // Yellow
    case ResultBelowCutoff:
        return "#F44336" // Red
    default:
        return "#9E9E9E" // Gray
    }
}

// Process complete screening and calculate all domain results
func (s *ASQService) ProcessScreening(screeningID uuid.UUID) ([]ASQDomainResult, error) {
    screening, _ := s.repo.GetScreening(screeningID)
    answers, _ := s.repo.GetAnswers(screeningID)
    cutoffs, _ := s.repo.GetCutoffs(screening.QuestionnaireID)
    
    var results []ASQDomainResult
    domains := []ASQDomain{Communication, GrossMotor, FineMotor, ProblemSolving, PersonalSocial}
    
    for _, domain := range domains {
        score := s.CalculateDomainScore(answers, domain)
        cutoff := s.findCutoff(cutoffs, domain)
        
        results = append(results, ASQDomainResult{
            ScreeningID:    screeningID,
            Domain:         domain,
            TotalScore:     score,
            CutoffScore:    cutoff.CutoffScore,
            MonitoringZone: cutoff.MonitoringZone,
            Result:         s.DetermineResult(score, cutoff),
        })
    }
    
    return results, nil
}

// Get recommendations for domains that need support
func (s *ASQService) GetRecommendations(results []ASQDomainResult, ageMonths int) []ASQRecommendation {
    var recommendations []ASQRecommendation
    
    for _, result := range results {
        if result.Result != ResultOnTrack {
            recs, _ := s.repo.GetRecommendations(result.Domain, ageMonths)
            recommendations = append(recommendations, recs...)
        }
    }
    
    return recommendations
}
```

---

## 8. 📐 Z-Score Calculation Service

```go
// internal/service/zscore_service.go

package service

import "math"

// WHO Child Growth Standards lookup tables
type WHOStandard struct {
    AgeMonths int
    L         float64 // Lambda (power)
    M         float64 // Median
    S         float64 // Coefficient of variation
}

type ZScoreService struct {
    bbuMale    []WHOStandard
    bbuFemale  []WHOStandard
    tbuMale    []WHOStandard
    tbuFemale  []WHOStandard
    bbtbMale   []WHOStandard
    bbtbFemale []WHOStandard
}

// Calculate Z-Score using LMS method (PMK No. 2 Tahun 2020)
func (s *ZScoreService) CalculateZScore(measurement, L, M, S float64) float64 {
    if L != 0 {
        zScore := (math.Pow(measurement/M, L) - 1) / (L * S)
        return math.Round(zScore*100) / 100
    }
    // When L = 0, use logarithmic formula
    zScore := math.Log(measurement/M) / S
    return math.Round(zScore*100) / 100
}

func (s *ZScoreService) CalculateAll(
    gender string, 
    ageMonths int, 
    weight, height float64,
) (*ZScoreResult, error) {
    var bbuStandards, tbuStandards, bbtbStandards []WHOStandard
    
    if gender == "male" {
        bbuStandards = s.bbuMale
        tbuStandards = s.tbuMale
        bbtbStandards = s.bbtbMale
    } else {
        bbuStandards = s.bbuFemale
        tbuStandards = s.tbuFemale
        bbtbStandards = s.bbtbFemale
    }
    
    // Find matching age in standards
    bbu := s.findStandard(bbuStandards, ageMonths)
    tbu := s.findStandard(tbuStandards, ageMonths)
    bbtb := s.findStandardByHeight(bbtbStandards, height)
    
    return &ZScoreResult{
        BBU:  s.CalculateZScore(weight, bbu.L, bbu.M, bbu.S),
        TBU:  s.CalculateZScore(height, tbu.L, tbu.M, tbu.S),
        BBTB: s.CalculateZScore(weight, bbtb.L, bbtb.M, bbtb.S),
    }, nil
}

func (s *ZScoreService) GetStatusBBU(zScore float64) string {
    switch {
    case zScore < -3:
        return string(StatusBBSangatKurang)
    case zScore < -2:
        return string(StatusBBKurang)
    case zScore <= 1:
        return string(StatusBBNormal)
    default:
        return string(StatusBBLebih)
    }
}

func (s *ZScoreService) GetStatusTBU(zScore float64) string {
    switch {
    case zScore < -3:
        return string(StatusTBSangatPendek)
    case zScore < -2:
        return string(StatusTBPendek)
    case zScore <= 3:
        return string(StatusTBNormal)
    default:
        return string(StatusTBTinggi)
    }
}

func (s *ZScoreService) GetStatusBBTB(zScore float64) string {
    switch {
    case zScore < -3:
        return string(StatusGiziBuruk)
    case zScore < -2:
        return string(StatusGiziKurang)
    case zScore <= 1:
        return string(StatusGiziBaik)
    case zScore <= 2:
        return string(StatusBerikoGiziLebih)
    case zScore <= 3:
        return string(StatusGiziLebih)
    default:
        return string(StatusObesitas)
    }
}
```

---

## 8. 🔄 Sync Strategy (Mobile Integration)

### 8.1 Sync Endpoint

```go
// internal/handler/sync_handler.go

type SyncRequest struct {
    LastSyncTimestamp time.Time           `json:"last_sync_timestamp"`
    LocalChanges      []SyncChange        `json:"local_changes"`
}

type SyncChange struct {
    Entity    string          `json:"entity"`    // children, anthropometry, food_intakes, etc.
    Operation string          `json:"operation"` // create, update, delete
    LocalID   string          `json:"local_id"`
    Data      json.RawMessage `json:"data"`
    Timestamp time.Time       `json:"timestamp"`
}

type SyncResponse struct {
    ServerTimestamp time.Time           `json:"server_timestamp"`
    MergedChanges   []SyncResult        `json:"merged_changes"`
    ServerChanges   []SyncChange        `json:"server_changes"`
    Conflicts       []SyncConflict      `json:"conflicts,omitempty"`
}

type SyncResult struct {
    LocalID  string    `json:"local_id"`
    ServerID string    `json:"server_id"`
    Status   string    `json:"status"` // success, conflict, error
    Message  string    `json:"message,omitempty"`
}

func (h *SyncHandler) HandleSync(c *gin.Context) {
    var req SyncRequest
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(400, gin.H{"error": err.Error()})
        return
    }
    
    userID := c.GetString("user_id")
    
    // Process local changes
    results := h.syncService.ProcessLocalChanges(userID, req.LocalChanges)
    
    // Get server changes since last sync
    serverChanges := h.syncService.GetServerChanges(userID, req.LastSyncTimestamp)
    
    c.JSON(200, SyncResponse{
        ServerTimestamp: time.Now(),
        MergedChanges:   results,
        ServerChanges:   serverChanges,
    })
}
```

### 8.2 Conflict Resolution

```go
// Conflict resolution strategy: Server wins with local backup
type ConflictResolver struct{}

func (r *ConflictResolver) Resolve(local, server SyncChange) SyncChange {
    // Server data takes precedence
    // Log local change for audit
    return server
}
```

---

## 9. 🔔 Push Notification Service

```go
// internal/service/notification_service.go

type NotificationService struct {
    fcmClient *messaging.Client
}

type NotificationType string

const (
    NotifyDailyReminder     NotificationType = "daily_reminder"
    NotifyMonthlyAnthro     NotificationType = "monthly_anthropometry"
    NotifyPMTReminder       NotificationType = "pmt_reminder"
    NotifyNakesReview       NotificationType = "nakes_review"
    NotifyMilestoneReminder NotificationType = "milestone_reminder"
)

type PushNotification struct {
    UserID  string
    Title   string
    Body    string
    Type    NotificationType
    Data    map[string]string
}

func (s *NotificationService) SendPushNotification(notif PushNotification) error {
    // Get user's FCM token from database
    token, err := s.getUserFCMToken(notif.UserID)
    if err != nil {
        return err
    }
    
    message := &messaging.Message{
        Token: token,
        Notification: &messaging.Notification{
            Title: notif.Title,
            Body:  notif.Body,
        },
        Data: notif.Data,
        Android: &messaging.AndroidConfig{
            Priority: "high",
            Notification: &messaging.AndroidNotification{
                ChannelID: string(notif.Type),
            },
        },
        APNS: &messaging.APNSConfig{
            Payload: &messaging.APNSPayload{
                Aps: &messaging.Aps{
                    Sound: "default",
                },
            },
        },
    }
    
    _, err = s.fcmClient.Send(context.Background(), message)
    return err
}

// Scheduled jobs for reminders
func (s *NotificationService) ScheduleDailyReminders() {
    // Run at 10:00 AM every day
    c := cron.New()
    c.AddFunc("0 10 * * *", func() {
        s.sendDailyFoodReminders()
    })
    c.Start()
}
```

---

## 10. ⚡ Caching Strategy

```go
// pkg/cache/redis.go

type CacheService struct {
    client *redis.Client
}

// Cache keys
const (
    CacheChildSummary   = "child:summary:%s"      // child_id
    CacheFoodSearch     = "food:search:%s"        // query hash
    CacheArticles       = "articles:list:%s"      // category
    CacheZScoreStandard = "zscore:standard:%s:%s" // gender, type
)

// Cache TTL
const (
    TTLChildSummary = 5 * time.Minute
    TTLFoodSearch   = 24 * time.Hour
    TTLArticles     = 1 * time.Hour
    TTLZScoreSTD    = 24 * time.Hour
)

func (c *CacheService) GetChildSummary(childID string) (*ChildSummary, error) {
    key := fmt.Sprintf(CacheChildSummary, childID)
    data, err := c.client.Get(context.Background(), key).Bytes()
    if err == redis.Nil {
        return nil, nil // Cache miss
    }
    if err != nil {
        return nil, err
    }
    
    var summary ChildSummary
    if err := json.Unmarshal(data, &summary); err != nil {
        return nil, err
    }
    return &summary, nil
}

func (c *CacheService) SetChildSummary(childID string, summary *ChildSummary) error {
    key := fmt.Sprintf(CacheChildSummary, childID)
    data, err := json.Marshal(summary)
    if err != nil {
        return err
    }
    return c.client.Set(context.Background(), key, data, TTLChildSummary).Err()
}

func (c *CacheService) InvalidateChildCache(childID string) error {
    key := fmt.Sprintf(CacheChildSummary, childID)
    return c.client.Del(context.Background(), key).Err()
}
```

---

## 11. 🐳 Deployment Configuration

### 11.1 Docker Configuration

```dockerfile
# docker/Dockerfile

FROM golang:1.21-alpine AS builder

WORKDIR /app

# Install dependencies
COPY go.mod go.sum ./
RUN go mod download

# Build
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /app/server ./cmd/api

# Final image
FROM alpine:3.18

RUN apk --no-cache add ca-certificates tzdata

WORKDIR /app
COPY --from=builder /app/server .
COPY --from=builder /app/migrations ./migrations

ENV TZ=Asia/Jakarta

EXPOSE 8080

CMD ["./server"]
```

### 11.2 Docker Compose

```yaml
# docker/docker-compose.yml

version: '3.8'

services:
  api:
    build:
      context: ..
      dockerfile: docker/Dockerfile
    ports:
      - "8080:8080"
    environment:
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_USER=kreanova
      - DB_PASSWORD=${DB_PASSWORD}
      - DB_NAME=kreanova
      - REDIS_HOST=redis:6379
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: kreanova
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: kreanova
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

---

## 12. 📅 Development Timeline

### Phase 1: Foundation (Minggu 1-2)
- [ ] Setup Go project structure
- [ ] Configure PostgreSQL + migrations
- [ ] Implement auth (JWT + refresh token)
- [ ] Setup Redis caching

### Phase 2: Core APIs (Minggu 3-5)
- [ ] Children CRUD endpoints
- [ ] Anthropometry + Z-Score calculation
- [ ] Food intake APIs
- [ ] PMT program APIs

### Phase 3: Advanced Features (Minggu 6-7)
- [ ] Milestone tracking
- [ ] KPSP screening
- [ ] Nakes dashboard
- [ ] Reports generation

### Phase 4: Mobile Integration (Minggu 8)
- [ ] Sync endpoints
- [ ] Push notifications (FCM)
- [ ] Offline conflict resolution

### Phase 5: Testing & Deployment (Minggu 9-10)
- [ ] Unit tests
- [ ] Integration tests
- [ ] Docker deployment
- [ ] API documentation (Swagger)

---

## 13. 📚 References

1. **PMK No. 2 Tahun 2020** - Standar Antropometri Anak
2. **WHO Child Growth Standards** - LMS Method
3. **Gin Web Framework** - github.com/gin-gonic/gin
4. **GORM** - Object Relational Mapping for Go
5. **Firebase Cloud Messaging** - Push Notifications

---

*Dokumen ini dibuat sebagai panduan pengembangan Backend untuk Aplikasi KREANOVA - Monitoring Tumbuh Kembang Anak.*

**Last Updated:** 15 Desember 2025

-- DEVAMRUTAM Database Schema Migration
-- Migration: 20241102_initial_enquiries.sql
-- Description: Creates parent_enquiries and general_enquiries tables with Row Level Security (RLS)

-- 1. Create parent_enquiries table
CREATE TABLE IF NOT EXISTS public.parent_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_name TEXT NOT NULL,
    parent_email TEXT NOT NULL,
    parent_phone TEXT,
    course_slug TEXT,
    child_age_band TEXT,
    teaching_language TEXT,
    message TEXT,
    consent BOOLEAN NOT NULL DEFAULT true,
    status TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for efficient querying by status and date
CREATE INDEX IF NOT EXISTS idx_parent_enquiries_status ON public.parent_enquiries (status);
CREATE INDEX IF NOT EXISTS idx_parent_enquiries_created_at ON public.parent_enquiries (created_at DESC);

-- 2. Create general_enquiries table
CREATE TABLE IF NOT EXISTS public.general_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    category TEXT NOT NULL,
    message TEXT NOT NULL,
    consent BOOLEAN NOT NULL DEFAULT true,
    status TEXT NOT NULL DEFAULT 'new',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_general_enquiries_category ON public.general_enquiries (category);
CREATE INDEX IF NOT EXISTS idx_general_enquiries_created_at ON public.general_enquiries (created_at DESC);

-- 3. Row Level Security (RLS) Setup
ALTER TABLE public.parent_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.general_enquiries ENABLE ROW LEVEL SECURITY;

-- Note: Anonymous web users CANNOT view, modify, or delete any records.
-- Server-side Route Handlers use the SUPABASE_SERVICE_ROLE_KEY to perform inserts and administrative reads.

-- Allow service role to perform all actions
CREATE POLICY "Service role full access on parent_enquiries"
    ON public.parent_enquiries
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Service role full access on general_enquiries"
    ON public.general_enquiries
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

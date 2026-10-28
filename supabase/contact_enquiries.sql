-- Run in the approved Supabase project before enabling the website form.
create extension if not exists pgcrypto;

create table if not exists public.contact_enquiries (
  id uuid primary key default gen_random_uuid(),
  submission_id text not null unique,
  full_name text not null check (char_length(full_name) between 2 and 100),
  business_email text not null check (char_length(business_email) <= 160),
  company_name text not null check (char_length(company_name) <= 140),
  country text not null check (char_length(country) <= 100),
  service_required text not null check (char_length(service_required) <= 100),
  estimated_budget text,
  timeline text,
  requirements text not null check (char_length(requirements) between 20 and 4000),
  privacy_consent boolean not null default false,
  email_status text not null default 'pending' check (email_status in ('pending','sent','failed')),
  email_error text,
  source text not null default 'website',
  created_at timestamptz not null default now()
);

alter table public.contact_enquiries enable row level security;
-- Intentionally no public policies. Website inserts use the server-only service role.
create index if not exists contact_enquiries_created_at_idx on public.contact_enquiries (created_at desc);

-- Required for quote-popup phone/WhatsApp numbers. Safe for existing tables.
alter table public.contact_enquiries
  add column if not exists phone_whatsapp text
  check (char_length(phone_whatsapp) <= 32);

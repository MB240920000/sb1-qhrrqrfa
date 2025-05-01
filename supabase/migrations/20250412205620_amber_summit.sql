/*
  # Create demo schedule table

  1. New Tables
    - `demo_schedule`
      - `id` (uuid, primary key)
      - `business_name` (text)
      - `industry` (text)
      - `business_size` (text)
      - `website` (text)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `current_solution` (text)
      - `call_volume` (text)
      - `challenges` (text[])
      - `outbound_preference` (text)
      - `ai_tone` (text)
      - `integrations` (text[])
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `demo_schedule` table
    - Add policy for authenticated users to read their own data
    - Add policy for anon users to insert data
*/

CREATE TABLE IF NOT EXISTS demo_schedule (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name text NOT NULL,
  industry text NOT NULL,
  business_size text,
  website text,
  full_name text,
  email text,
  phone text,
  current_solution text,
  call_volume text,
  challenges text[],
  outbound_preference text,
  ai_tone text,
  integrations text[],
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_schedule ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert demo requests"
  ON demo_schedule
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own demos"
  ON demo_schedule
  FOR SELECT
  TO authenticated
  USING (email = auth.email());
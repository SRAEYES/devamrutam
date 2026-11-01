// Supabase client (server-side only)
// This module is safe to import in Server Components and API routes.
// It must NOT be imported in Client Components.

import { createClient } from '@supabase/supabase-js';

function createSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export const supabaseServer = createSupabaseServerClient();
export const isSupabaseConfigured = supabaseServer !== null;

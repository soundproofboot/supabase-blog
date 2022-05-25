import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://jjzeuaouaqnhgcqsurjz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqemV1YW91YXFuaGdjcXN1cmp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1MTg3NzYsImV4cCI6MTk2OTA5NDc3Nn0.d5Q_5Vfc_Z5tbfDOgIboydQdKnSd2Vl4N2XJqX42NAs'
);


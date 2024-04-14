import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lulybjdirjvvpfqgfbzk.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bHliamRpcmp2dnBmcWdmYnprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwNDMxNTcsImV4cCI6MjAyODYxOTE1N30.4Aoczgu7M2H3dX8zwBySn2tvr3YpR-2zf2gh88cMreY'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
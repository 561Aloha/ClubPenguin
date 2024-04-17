import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mokugrejkgzncxenxuij.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1va3VncmVqa2d6bmN4ZW54dWlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyODIyMTcsImV4cCI6MjAyODg1ODIxN30.-DPOZ11b0LJ2XbXjRl7hkrNtoqCj3XHD_QC1Q2Obe0Q'
export const supabase = createClient(supabaseUrl, supabaseKey);
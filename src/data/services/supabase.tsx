import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sgzsnilhuvppuidqrgwl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnenNuaWxodXZwcHVpZHFyZ3dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2NTE3NzUsImV4cCI6MjAwODIyNzc3NX0.o245qPpuVg7pnnsvP-0QJBKRsU7wuHoU6brv73K3Mf4';

const supabase = createClient(supabaseUrl, supabaseKey);    

export default supabase;
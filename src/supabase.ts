import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://hagzsrcppvtuserbghas.supabase.co";
const supabaseKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhZ3pzcmNwcHZ0dXNlcmJnaGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2MzE1NjEsImV4cCI6MjAwOTIwNzU2MX0.1aNDHTiMCLQiBalgW6pTD0GLDnTwh0tvzljFdX7JjCE";

export const supabase = createClient(supabaseURL, supabaseKEY);

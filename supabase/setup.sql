-- Run once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
-- One row per learner. family_id is the signed-in family account, so each family sees only its own learners.
create table if not exists public.profiles (
  family_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  id text not null,
  data jsonb not null,
  updated bigint not null default 0,
  primary key (family_id, id)
);

alter table public.profiles enable row level security;

drop policy if exists "family reads own learners" on public.profiles;
create policy "family reads own learners" on public.profiles
  for select to authenticated using (family_id = auth.uid());
drop policy if exists "family adds own learners" on public.profiles;
create policy "family adds own learners" on public.profiles
  for insert to authenticated with check (family_id = auth.uid());
drop policy if exists "family updates own learners" on public.profiles;
create policy "family updates own learners" on public.profiles
  for update to authenticated using (family_id = auth.uid()) with check (family_id = auth.uid());
drop policy if exists "family removes own learners" on public.profiles;
create policy "family removes own learners" on public.profiles
  for delete to authenticated using (family_id = auth.uid());

-- Live updates between devices.
alter table public.profiles replica identity full;
do $$ begin
  alter publication supabase_realtime add table public.profiles;
exception when duplicate_object then null; end $$;

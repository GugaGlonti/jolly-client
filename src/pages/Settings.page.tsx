import { DarkThemeToggle } from 'flowbite-react';

export default function SettingsPage() {
  return (
    <>
      <h1>Settings</h1>

      <DarkThemeToggle defaultValue='light' />
    </>
  );
}

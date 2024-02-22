export function getImagePath(file: string): string;
export function getImagePath(file?: null): undefined;
export function getImagePath(file?: string | null) {
  if (!file) return;

  try {
    new URL(file);
    return file;
  } catch {
    return `${import.meta.env.NG_APP_API_URL}/${file}`;
  }
}

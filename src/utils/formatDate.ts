import { format } from 'date-fns';

export function formatDateTime(date: Date): string {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

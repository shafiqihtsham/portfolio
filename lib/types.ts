interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

type Year = number | "last";

interface ApiResponse {
  total: {
    [year: number]: number;
    [year: string]: number;
  };
  contributions: Array<Activity>;
}

interface ApiErrorResponse {
  error: string;
}

export type { Activity, Year, ApiResponse, ApiErrorResponse };

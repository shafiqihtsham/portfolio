"use client";

import { ApiResponse, Activity } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";

interface CalendarProps {
  theme: string | undefined;
}

const GithubCalendar = (props: CalendarProps) => {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const username = "shafiqihtsham";
      const year = "last";
      const apiUrl = "https://github-contributions-api.jogruber.de/v4/";
      const response = await fetch(`${apiUrl}${username}?y=${year}`);
      const data = (await response.json()) as ApiResponse;
      setData(data as ApiResponse);
    };

    fetchData();
  }, []);

  const explicitTheme = {
    light: ["#c5e3ed", "darkblue"],
    dark: ["#08183a", "#71FACA"],
  };

  return (
    <div className="h-full">
      <ActivityCalendar
        blockRadius={1}
        data={data?.contributions as Activity[]}
        theme={explicitTheme}
        colorScheme={props.theme === "light" ? "light" : "dark"}
        loading={!data}
      />
    </div>
  );
};

export default GithubCalendar;

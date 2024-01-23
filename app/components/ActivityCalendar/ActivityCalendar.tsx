import React from "react";
import GitHubCalendar from "react-github-calendar";

interface CalendarProps {
  theme: string | undefined;
}

const ActivityCalendar = (props: CalendarProps) => {
  interface ThemeInput {
    light: string[];
    dark: string[];
  }

  const explicitTheme: ThemeInput = {
    light: ["#c5e3ed","darkblue"],
    dark: ["#08183a", "#71FACA"],
  };

  return (
    <div className="h-full">
      <GitHubCalendar
        blockRadius={1}
        username="shafiqihtsham"
        theme={explicitTheme}
        colorScheme={props.theme === "light" ? "light" : "dark"}
      />
    </div>
  );
};

export default ActivityCalendar;

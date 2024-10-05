import React from "react";
import "../../../styles/leaderboard.css";
function Leaderboard() {
  const leaderboardData = [
    { gameId: "20392309", number: 5, bigSmall: "Big", color: ["Red"] },
    { gameId: "23058308402", number: 2, bigSmall: "Small", color: ["Green"] },
    { gameId: "1123083", number: 8, bigSmall: "Big", color: ["Green"] },
    {
      gameId: "5506409",
      number: 1,
      bigSmall: "Small",
      color: ["violet", "red"],
    },
  ];

  return (
    <div className="leaderBoardContainer">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Period
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Number
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Big Small
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Color</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {entry.gameId}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                }}
                className="statsNumber"
              >
                <span
                  className="gradient-text"
                  style={{
                    "--dynamic-gradient": generateGradient(entry.color),
                  }}
                >
                  {entry.number}
                </span>
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {entry.bigSmall}
              </td>
              <td
                style={{ border: "1px solid black", padding: "8px" }}
                className="colorContainer"
              >
                {entry.color.map((color, i) => {
                  return (
                    <div
                      key={i}
                      className="circleColor"
                      style={{
                        backgroundColor: getColor(color),
                      }}
                    ></div>
                  );
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
function getColor(color) {
  switch (color.toLowerCase()) {
    case "violet":
      return "#c86eff";
    case "green":
      return "#17B660";
    case "red":
      return "#fb5b5b";
    default:
      break;
  }
}
function generateGradient(colors) {
  // Check the number of colors in the array
  if (colors.length === 2) {
    // Return gradient with both colors
    return `linear-gradient(to bottom, ${getColor(colors[0])}, ${getColor(
      colors[1]
    )})`;
  } else if (colors.length === 1) {
    // console.log("just 1");
    // Return gradient with the same color twice
    return `linear-gradient(to bottom, ${getColor(colors[0])}, ${getColor(
      colors[0]
    )})`;
  } else {
    // Handle case where there are no colors or more than 2 colors
    return "Invalid input: The array should contain 1 or 2 colors.";
  }
}

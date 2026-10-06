"use client";

import { ALL_ENV } from "../generated-env";

export default function Home() {
  const variables = Object.entries(ALL_ENV).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >
      <h1>Environment Variables</h1>

      <p>
        Found <strong>{variables.length}</strong> environment variables.
      </p>

      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Key</th>
            <th style={thStyle}>Value</th>
            <th style={{ ...thStyle, width: "100px" }}>Length</th>
          </tr>
        </thead>

        <tbody>
          {variables.map(([key, value]) => {
            const stringValue = String(value ?? "");

            return (
              <tr key={key}>
                <td style={tdStyle}>{key}</td>

                <td
                  style={{
                    ...tdStyle,
                    wordBreak: "break-all",
                  }}
                >
                  {stringValue}
                </td>

                <td
                  style={{
                    ...tdStyle,
                    textAlign: "right",
                  }}
                >
                  {stringValue.length}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left",
  background: "#f5f5f5",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
};

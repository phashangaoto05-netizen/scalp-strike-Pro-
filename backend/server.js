const express = require("express");
const app = express();

app.use(express.json({ limit: "10kb" }));

const PORT = process.env.PORT || 3000;

const ALLOWED_SYMBOLS = [
  "XAUUSD",
  "EURUSD",
  "GBPUSD",
  "USDJPY",
  "AUDUSD",
  "USDCHF",
  "USDCAD",
  "NZDUSD"
];

app.get("/", (req, res) => {
  res.json({
    name: "SCALP STRIKE V6 PRO",
    status: "online",
    trading: "disabled"
  });
});

app.post("/api/commands", (req, res) => {
  const { action, symbol, lot } = req.body || {};

  if (!["BUY", "SELL"].includes(action)) {
    return res.status(400).json({
      error: "Action must be BUY or SELL."
    });
  }

  if (!ALLOWED_SYMBOLS.includes(symbol)) {
    return res.status(400).json({
      error: "Unsupported trading symbol."
    });
  }

  if (
    typeof lot !== "number" ||
    !Number.isFinite(lot) ||
    lot !== 0.01
  ) {
    return res.status(400).json({
      error: "Lot size must be 0.01."
    });
  }

  return res.status(501).json({
    status: "trading_disabled",
    message: "MT5 connection has not been configured."
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found."
  });
});

app.listen(PORT, () => {
  console.log(
    `SCALP STRIKE V6 PRO listening on port ${PORT}`
  );
});

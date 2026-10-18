SCALP STRIKE V6 PRO

An in-development trading dashboard and MT5 Expert Advisor project.

Components

- "mt5-ea/ScalpStrikeV6.mq5" — starter MetaTrader 5 Expert Advisor.
- "backend/server.js" — starter Node.js and Express backend.
- "backend/package.json" — backend package configuration.
- "backend/.env.example" — example configuration.
- "public/index.html" — trading dashboard interface.

Current status

This project is under development.

The dashboard is a visual prototype. The backend does not execute trades, and the MT5 starter does not yet connect to the backend.

Planned development

1. Configure and test the backend.
2. Add authentication and secure command storage.
3. Connect the dashboard to the backend.
4. Implement authenticated command polling in the MT5 Expert Advisor.
5. Test trade execution, stop loss, take profit, and risk limits on an MT5 demo account.
6. Consider Android packaging after the web interface and backend work correctly.

Safety

- Use a demo account for development and testing.
- Never publish passwords, API secrets, or private credentials.
- Trading involves risk. No profits are guaranteed.
- Do not enable live trading until the system has been thoroughly tested.

Technology

- HTML, CSS, and JavaScript
- Node.js and Express
- MetaTrader 5 and MQL5

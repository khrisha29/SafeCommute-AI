# SafeCommute AI 🛡️🚦

SafeCommute AI is a next-generation smart route planner and safety navigator designed to prioritize commuter safety. It evaluates and recommends routes based on street illumination (lit/unlit roads), crowdsourced incident density, transit corridor coverage, and real-time risk predictions using artificial intelligence.

---

## 🌟 Key Features

- **Safe Route Planning:** Evaluates and compares routes using safety scores derived from lighting, transit coverage, historical incidents, and time-of-day risk.
- **Women Safety Mode:** Re-ranks routes dynamically to heavily prioritize well-lit commercial streets, busy transit corridors, and areas with high pedestrian presence.
- **Dynamic Live Transit:** Integrates real-world buses, metro, and train stations near your active location dynamically via the Mapbox Geocoding POI API.
- **Crowdsourced Incident Reporting:** Share real-time hazards (harassment, poorly lit areas, broken streetlights) immediately with other commuters via Socket.io.
- **Emergency Contacts Manager:**  users can add, view and remove their own custom emergency contacts saved to their account
- **Smart Check-in System:**  if user doesn't confirm arrival within 5 minutes of ETA, automated alert fires to emergency contacts
- **WhatsApp SOS Alert:** one-tap SOS sends real WhatsApp message with live location + Google Maps link + timestamp to saved emergency contacts
- **AI Risk Prediction:** plain English risk note generated for the route ("Low foot traffic after 10 PM on this stretch — metro is safer")
- **User Authentication:** individual accounts via Firebase so each user's contacts and preferences are saved and persistent across sessions

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Mapbox GL JS, TailwindCSS, Lucide Icons, Socket.io-client.
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), Socket.io.
- **AI Integrations:** NVIDIA NIM (Claude/OpenAI compatible SDK) for predictive risk analysis.
- **Notifications & Alerts:** Twilio WhatsApp Sandbox API, Twilio SMS API
---

## 🚀 Getting Started

If you want to contribute, test, or run the project locally, follow these steps to fork and set up the repository:

### 1. Fork & Clone the Repository

First, fork this repository to your own GitHub account. Then, clone the fork to your local machine:

```bash
git clone https://github.com/khrisha29/SafeCommute-AI.git
cd SafeCommute-AI
```

### 2. Install Dependencies

You can install the dependencies for the root, frontend, and backend components all at once using our pre-configured workspace script.

From the root directory, run:

```bash
npm run install-all
```

*Alternatively, you can install them manually inside each workspace directory:*
```bash
# Root workspace
npm install

# Client / Frontend
cd client && npm install

# Server / Backend
cd ../server && npm install
```

### 3. Environment Configuration

Create a `.env` file in the **root directory** of the project and populate it with your local credentials and keys


### 4. Seed Database

If you want to pre-populate your local database with default incidents, user profiles, trusted contacts, and transit schedules, run the database seeder from the root directory:

```bash
npm run server -- seed
```
*(or run `npm run seed` directly inside the `server` directory)*

### 5. Run the Project Locally

To run the client and server concurrently in development mode, run the following command in the root directory:

```bash
npm run dev
```

- **Frontend URL:** [http://localhost:5173](http://localhost:5173)
- **Backend Server:** [http://localhost:4000](http://localhost:4000)

---

## 🤝 How to Contribute

We welcome and appreciate all contributions! Here are the steps to follow to contribute to **SafeCommute AI**:

1. **Create a Branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Make Changes:** Implement your feature, fix lint errors (`npm run lint` inside `client`), and ensure code standards are maintained.
3. **Commit Your Work:** Keep your commit messages descriptive and clear.
   ```bash
   git commit -m "feat: add user-toggleable map incident layers"
   ```
4. **Push and Submit a Pull Request:**
   ```bash
   git push origin feature/your-feature-name
   ```
   Open a Pull Request (PR) from your branch to the main repository. Detail the changes you made, what issues they address, and how they were tested.

---

## 📜 License

This project is licensed under the MIT License.

# 🌤️ Weather App — Node.js CLI Weather Fetcher

A simple command-line Node.js app that fetches real-time weather data for any city using the OpenWeatherMap API.

---

## 🚀 Features

- Fetch current temperature, humidity, and weather condition for any city  
- Uses `axios` for clean and modern HTTP requests  
- Handles errors gracefully with `try/catch`  
- Supports dynamic city input from the command line (`node app.js nagpur`)  
- Uses `.env` file for secure API key storage  
- Demonstrates asynchronous programming with `async/await`

---

## 🎯 Why I Built This

- To learn **asynchronous JavaScript** (`async/await`, Promises)  
- To practice **API calls** and handle real-world JSON responses  
- To understand **dotenv** for environment variables  
- To build my first **backend-focused CLI app** in Node.js  
- To get comfortable with **project structure and developer workflow**

---

## 🧱 Tech Stack

| Layer | Choice |
| --- | --- |
| Runtime | Node.js |
| Language | JavaScript (ES6) |
| HTTP Client | Axios |
| Environment Management | Dotenv |
| External API | OpenWeatherMap |
| Version Control | Git & GitHub |

---

## ⚙️ How to Run

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/weather-app.git
cd weather-app

# 2. Install dependencies
npm install

# 3. Create a .env file and add your OpenWeather API key
echo "API_KEY=your_openweather_api_key_here" > .env

# 4. Run the app
node app.js <city-name>

# Example:
node app.js nagpur
````

---

## 📁 Folder Structure

```
weather-app/
├── app.js              # Main application file
├── .env                # Environment variables (API key)
├── package.json        # Dependencies and project metadata
└── node_modules/       # Installed dependencies
```

---

## 🧠 Key Learnings from the Project

* Understood how **HTTP requests** and **APIs** work under the hood
* Learned to manage **asynchronous operations** using `async/await`
* Practiced **secure key management** with environment variables
* Explored **CLI argument handling** using `process.argv`
* Improved code organization and readability through modular thinking
* Got a real taste of **backend workflows** — request, response, and data handling

---

## 🔮 Future Improvements

* Add support for multiple cities (`node app.js nagpur mumbai delhi`)
* Use `chalk` for colored CLI output
* Convert to a **REST API** using Fastify or Express
* Add caching for repeated city queries
* Include weather icons or emojis based on conditions
* Add a `--units` flag (Celsius/Fahrenheit)

---

## 👨‍💻 Author

**Nikhil Raj**
Student | Backend & AI Enthusiast | Aspiring Entrepreneur
📍 IIIT Nagpur, India
🔗 [LinkedIn](https://www.linkedin.com/in/nikhilraj) | [GitHub](https://github.com/nikhilraj) | ✉️ [nikhilraj@example.com](mailto:nikhilraj@example.com)



📁 Project: Photo Fetcher with Express and Fetch API

🧠 Description:
This project demonstrates a full-stack JavaScript application that fetches and displays data from an external API using an Express server on the backend and the Fetch API on the frontend. When the user clicks a button, the frontend requests a set of photos from a mock API (`JSONPlaceholder`) via a custom route (`/photos`) on the server. The data is then rendered dynamically into styled HTML tables.

🚀 Features:
- Express.js backend with a custom `/photos` route
- Data fetched from the JSONPlaceholder API (`/photos`)
- The server sends back the first 20 photo objects (id, title, url)
- Frontend with a single button to trigger the fetch and render process
- Dynamic creation of HTML tables to display photo data
- Fully static frontend served from the `assets` directory

🛠️ Technologies Used:
- Node.js
- Express.js
- Axios
- HTML5
- CSS3 (via Bootstrap classes in the frontend)
- JavaScript (Vanilla)
- Fetch API
- JSONPlaceholder (mock API)

📦 How to Use:
1. Clone the repository.
2. Navigate to the project folder.
3. Install dependencies:
   ```
   npm install express axios
   ```
4. Create an `assets` folder and place your `index.html` and related frontend files there.
5. Start the server:
   ```
   node index.js
   ```
6. Open your browser and go to:
   ```
   http://localhost:4000
   ```
7. Click the button labeled **"Adicionar"** (or similar) to load the photo data.

🔧 Notes:
- The `/photos` route fetches data from the external API every time it's called.
- Only the first 20 photo entries are returned to reduce payload.
- Data is displayed in a clean table format using Bootstrap styling.
- Ensure the `.btn` and `.container` classes exist in your HTML for the script to work properly.

🧪 Future Improvements:
- Pagination for more photos
- Search/filter feature on the frontend
- Error display for failed fetches
- Loading spinner while data is being fetched
- Option to switch between list and grid views

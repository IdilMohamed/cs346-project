                                                                                                                
                                                                                                            طموح 
### The backend project is located in the backend folder.
### Project description and installation instructions on GitHub

### Overview 
**Website Overview**: Our website serves as a collection site for university courses, hackathons, and clubs at Imam Muhammad bin Saud Islamic University.
Facilitating students' access to the latest events and activities at the university.

### Goals 
**Purpose**: The primary goal of the website is to provide an easy-to-use interface for students to stay informed of university events and opportunities.

#### About the system

### This project is a web application with three main interfaces:
1. **Home Page**: Displays information and images regarding available courses and boot camps, as well as a contact form.
2. **Administration Panel**: Allows administrators to manage course data, including adding new courses and deleting existing courses.
3. **User Registration**: Allows the user to log in to the site so that he can see the home page and user profile

### 1. Home page

#### Main page contents:
- **Main Section**: Contains the site logo and main navigation links such as “Home Page,” “Courses,” and “Log In.”
- **List of Training Courses and Training Camps**: Displays a list of training courses and training camps with images, brief descriptions and registration links.

- **List of Clubs**: Displays a list of training clubs with pictures, brief descriptions, and registration links.

- **Events and Activities**: Provides details about upcoming events and activities, such as meetings and seminars.
- **Contact Form**: Provides a form for visitors to communicate with the site administration by entering their email and messages.


### 2. Administration panel

#### Contents of the admin panel:
- **List of courses and hackathons**: Displays all courses and hackathons registered in the system with the option to delete any course or hackathon.
- **Add a new course or hackathon**: Provides a form for adding new courses or hackathons to the system.
- **Admin Actions**: Allows the administrator to perform various actions such as deleting training courses.

 **Club List**: Displays all clubs registered in the system with the option to delete any club.
- **Add a new club**: Provides a form for adding new clubs to the system.
- **Administrator Actions**: Allows the administrator to perform various actions such as deleting and deleting clubs

### 3. User Contents:
- **Create a new user and then log in to the site**
- ** Browse the user's profile**: When they register, they will learn about their course, hackathon or club on their page.

### Key Features
- **View and manage courses, clubs and hackathons**: Users can view a list of available courses, clubs and hackathons and log in to get more details. Administrators can manage everyone through the admin panel.
- **Contact Form**: Allows visitors to contact the administration’s website for more information or inquiries.
- **Add and delete training courses, clubs or hackathons**: The admin panel allows administrators to add new courses or delete unwanted courses.

### System Components Technologies
- **Frontend**: Built using HTML, CSS, and JavaScript, with EJS templates for data rendering.
- **Backend**: Developed using Node.js and Express.js to handle HTTP requests and interact with the database.
- **Database**: Uses MongoDB to store and manage course and bootcamp data.

### Installation and Usage Instructions

#### System Requirements
- Node.js (version 12 or later)
- MongoDB

#### Installation Steps:


1. **Install Dependencies**
   ```sh
   npm install --silent	
   ```

2. **Set Up the Database**
   - Ensure MongoDB is running on your system.
   - Create a new database in MongoDB.

3. **Configure Environment Variables**
   - Create a `.env` file in the project root and add the following:
     ```
     PORT=8000
     MONGODB_URI=mongodb://localhost:27017/hackathonDB
     SESSION_SECRET=your_secret_key
     ```

3. **Run the Application**
   ```sh
   npm start
   ```

4. **Access the Website**
   - Open your browser and navigate to `http://localhost:8000`.


 
 ### screenshots  
 
![photo_2024-05-22_23-51-47](https://github.com/IdilMohamed/cs346-project/assets/124617575/6a8a534a-bb52-4716-9b58-1172aa5e9bcc)
![photo_2024-05-22_23-51-54](https://github.com/IdilMohamed/cs346-project/assets/124617575/51049729-d1a3-415f-8c23-4f1a076921bf)
![photo_2024-05-22_23-52-00](https://github.com/IdilMohamed/cs346-project/assets/124617575/c1ea52a9-ab1e-45b7-9ad8-72ce379fa5a6)
![photo_2024-05-22_23-52-05](https://github.com/IdilMohamed/cs346-project/assets/124617575/2dd44172-5ca1-4f93-b4bc-97c01494ad0c)


### Flow chart 
Our use case for Tamouh website 
https://drive.google.com/file/d/1-lIjz17BaeqdQsIXxXiRSrBqIveW-UEG/view?usp=sharing



### Future work
Our goal in the future is to expand our site to all universities in the Kingdom,
and to develop the site by adding external hackathons that will benefit Imam Muhammad bin Saud Islamic University.


### Presentation 
https://www.canva.com/design/DAGFZS4SheU/5KTUS8KiCanBjX6dpG3F7A/view?utm_content=DAGFZS4SheU&utm_campaign=designshare&utm_medium=link&utm_source=editor
### Team members
-Fatmah amer Albariqe ,Taif Faris Al-atif , wujud bandar binmahaya
  

### Resources
1. https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax 
2. https://satr.codes/courses/ZlKLfufzmW/view
3. https://youtu.be/tkGTpdtJeeM?si=wQ-wMLcOjyJsGOaY
4.  https://www.canva.com/login/?redirect=%2Fdesign%2FDAF6Qulbwho%2F0yEXV49aWA0fLf7BXhYlJw%2Fedit


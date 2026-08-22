What this website does
This website is a special keepsake for Aarvik. It shows his live age (he was born on February 5, 2026 at 1:14 PM in Sitaram Bhartia Hospital, New Delhi). His parents are Abhijeet Kumar and Ritu Priya. The website will hold a gallery of photos of Aarvik as he grows. Family can see the photos, leave likes, and add comments.

PART 1 — Connect your Firebase project (so photos, likes, and comments can be saved)
1. Open your web browser and go to https://console.firebase.google.com
2. Sign in with your Google account (the one you use for Gmail, YouTube, etc.)
3. Look for the project named "Aarvik's growth story" and click on it.
4. In the project, find the gear icon (⚙️) in the top-left corner next to "Project Overview". Click it, then choose "Project settings".
5. On the settings page, scroll down until you see a section called "Your apps".
6. Under "Your apps", you will see icons for different platforms. Click the web icon (it looks like </>).
7. A form will appear. In the nickname box, type "website" (without quotes) and then click the button that says "Register app".
8. After registering, you will see a block of code that starts with:
   const firebaseConfig = {
   and ends with a closing brace.
   This block contains important values like apiKey, authDomain, projectId, storageBucket, messagingSenderId, and appId.
9. Copy the entire block (from const firebaseConfig = { to the closing }).
10. Now, open the project folder on your computer. Look for a file named firebaseConfig.ts inside the baby-photo folder.
11. Open firebaseConfig.ts in a text editor (like Notepad on Windows or TextEdit on Mac).
12. You will see a placeholder block that looks similar to the one you copied. Replace that entire placeholder block with the one you copied from Firebase.
13. Save the file and close the text editor.
14. Now, still in the Firebase console, we need to turn on three services:
    - Firestore Database: Click "Firestore Database" in the left menu, then click "Create database". Choose "Start in test mode" and then click "Enable".
    - Storage: Click "Storage" in the left menu, then click "Get started". Choose the default options and click "Done".
    - Authentication: Click "Authentication" in the left menu, then click "Get started". Click the "Sign-in method" tab, then click on "Email/Password", toggle it to enabled, and click "Save".

PART 2 — Put the website online for free with Vercel
1. Go to https://github.com
2. If you don't have an account, click "Sign up" and follow the steps to create one (it's free).
3. Once signed in, go to https://github.com/new to create a new repository.
4. In the "Repository name" box, type: aarviks-growth-story
5. Keep the repository as "Public" (so Vercel can access it for free).
6. Click the button that says "Create repository".
7. Now, you need to upload the project files:
    - On your computer, open the folder called baby-photo (inside the baby_photo project).
    - Select all the files and folders inside baby-photo, but DO NOT include the folder named node_modules (if you see one).
    - Drag and drop the selected files and folders into the GitHub repository page you just created (there should be an area that says "drag and drop files here").
    - After dropping, commit the files by clicking the "Commit changes" button at the bottom (you can leave the commit message as is).
8. Now, go to https://vercel.com and sign in using your GitHub account (click "Continue with GitHub").
9. After signing in, click the button that says "Add New Project".
10. Vercel will show you your GitHub repositories. Find the one you just created: aarviks-growth-story
11. Click the "Import" button next to that repository.
12. Vercel will automatically detect that this is a Next.js project. Just click the "Deploy" button (you don't need to change any settings).
13. Wait a minute or two while Vercel builds and deploys your site.
14. When the deployment is done, Vercel will show you a message like "Deployment ready" and give you a free link. It will look something like: aarviks-growth-story.vercel.app
15. Click that link to see your live website. Share this link with family so they can visit Aarvik's keepsake.

PART 3 — Welcome message
This website is a labor of love for Aarvik. It will always be free to host and maintain, thanks to the free tiers of Firebase and Vercel. If you get stuck at any step, remember that you can ask Claude for help. Claude can guide you through each part, even show you screenshots if needed. Just describe what you're trying to do and where you're stuck. We're here to help you keep Aarvik's memories safe and share them with the ones you love.

With love,
The Baby Photo Team
import Recipe from "../assets/projects/recipe.png";
import Tempest from "../assets/projects/tempest.jpeg";
import LockIn from "../assets/projects/LockinTasks.png";
import Squish from "../assets/projects/squish.png";

export const Projects = [
  {
    title: "Lock In Task Manager",
    image: LockIn,
    code: true,
    demo: true,
    codeLink: "https://github.com/artslimedev/lockin-taskmanager",
    demoLink: "https://lockin-taskmanager.vercel.app/",
    description: (
      <>
        I built this task management app using{" "}
        <strong>Next.js, Typescript</strong> and <strong>Supabase</strong>, with{" "}
        <strong>PostgreSQL</strong> as the database. Users can sign up, log in,
        and manage tasks with full <strong>CRUD</strong> functionality, and
        real-time updates are powered by <strong>Supabase Realtime</strong>. I
        used <strong>Supabase Auth</strong> for authentication and styled the UI
        with <strong>TailwindCSS</strong> to keep things clean and responsive.{" "}
        <strong>Server-side rendering</strong> is handled by Next.js, and I
        implemented <strong>row-level security</strong> and{" "}
        <strong>role-based access control (RBAC)</strong> to ensure users can
        only access their own data. I also added{" "}
        <strong>protected routes</strong>,{" "}
        <strong>custom error handling</strong>, and wrote{" "}
        <strong>unit tests</strong> with <strong>Jest</strong> and{" "}
        <strong>React Testing Library</strong> to ensure reliability and
        maintainability.
      </>
    ),
  },
  {
    title: "Cookbook Recipe Finder",
    image: Recipe,
    code: true,
    demo: false,
    codeLink: "https://github.com/artslimedev/cookbook",
    demoLink: "",
    description: (
      <>
        I built Slime Cookbook as a full-stack recipe app using{" "}
        <strong>
          Next.js, TypeScript, Tailwind CSS, and Supabase (PostgreSQL)
        </strong>{" "}
        to create a smooth, responsive experience for managing recipes. I chose{" "}
        <strong>Supabase</strong> and <strong>PostgreSQL</strong> for their
        powerful relational database capabilities, which allow me to structure
        data with <strong>foreign key relationships</strong> that efficiently
        link ingredient groups and instructions. Using{" "}
        <strong>server-side rendering with Next.js</strong> improves performance
        and SEO, while the <strong>MVC architecture</strong> keeps the codebase
        organized by separating data handling, logic, and presentation. The
        frontend uses <strong>Tailwind CSS and ShadCN</strong> for a polished
        and responsive UI. Though it’s currently a web app, I plan to develop
        native iOS versions with <strong>React Native</strong> or{" "}
        <strong>Flutter</strong>, and optimize the backend further with{" "}
        <strong>Go</strong>. This project strengthened my skills in scalable
        architecture, clean data modeling, and rapid development workflows.
      </>
    ),
  },
  {
    title: "Tempest Fitness Journal",
    image: Tempest,
    code: true,
    demo: false,
    codeLink: "https://github.com/artslimedev/fitness-app",
    demoLink: "",
    description: (
      <>
        I built Tempest Fitness Journal as a full-stack fitness tracking app
        using <strong>Node.js</strong>, <strong>Express</strong>,{" "}
        <strong>MongoDB</strong>, and <strong>EJS</strong>, with the goal of
        helping users visualize their long-term progress—not just daily stats.
        Users can log workouts, strength metrics, and cardio sessions, and the
        app presents that data in a way that makes trends and milestones easy to
        see. I used <strong>EJS</strong> for templating on the frontend, styled
        with <strong>TailwindCSS</strong> and <strong>DaisyUI</strong>, and
        handled authentication with <strong>Passport.js</strong>. The project
        follows an <strong>MVC architecture</strong>, with routes and
        controllers managing <strong>CRUD</strong> operations for all
        user-submitted fitness data. This app gave me hands-on experience with{" "}
        <strong>backend routing, MongoDB, and data modeling</strong>, while also
        pushing me to think more about user experience—especially when it comes
        to motivation and progress tracking in fitness apps.
      </>
    ),
  },
  {
    title: "Squish Mental Health Journal",
    image: Squish,
    code: true,
    demo: true,
    codeLink: "https://github.com/artslimedev/squish-journal",
    demoLink: "https://squish-production.up.railway.app",
    description: (
      <>
        I built <strong>Squish</strong>, a minimalist mental health journaling
        app, to give users a private, distraction-free space to reflect. I used{" "}
        <strong>Node.js</strong> and <strong>Express.js</strong> to build the
        backend, implementing full <strong>CRUD operations</strong> for journal
        entries and user management. For authentication, I used{" "}
        <strong>Passport.js</strong> and <strong>bcrypt</strong> to securely
        handle login and registration, ensuring all user data remains private. I
        chose <strong>MongoDB</strong> with <strong>Mongoose</strong> for
        flexible, schema-based storage of journal content. The frontend is
        rendered with <strong>EJS</strong>, keeping it lightweight and fast
        without needing a frontend framework. I deployed the app using{" "}
        <strong>Railway</strong> for streamlined hosting, and built a responsive
        layout to support journaling on any device. This project demonstrates my
        ability to build secure, user-focused full-stack applications using
        traditional web technologies.
      </>
    ),
  },
];

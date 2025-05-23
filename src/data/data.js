import Recipe from "../assets/projects/recipe.png";
import Tempest from "../assets/projects/tempest.jpeg";
import LockIn from "../assets/projects/LockinTasks.png";

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
        I built this task management app using <strong>Next.js</strong> and{" "}
        <strong>Supabase</strong>, with <strong>PostgreSQL</strong> as the
        database. Users can sign up, log in, and manage tasks with full{" "}
        <strong>CRUD</strong> functionality, and real-time updates are powered
        by <strong>Supabase Realtime</strong>. I used{" "}
        <strong>Supabase Auth</strong> for authentication and styled the UI with{" "}
        <strong>TailwindCSS</strong> to keep things clean and responsive.{" "}
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
        I built Slime Cookbook as a modern, full-stack recipe app using{" "}
        <strong>
          Next.js, TypeScript, Tailwind CSS, and Supabase (PostgreSQL)
        </strong>{" "}
        to make browsing, adding, and organizing recipes feel seamless and
        enjoyable. It includes user authentication, recipe creation and editing,
        keyword search, and custom categories—all styled with{" "}
        <strong>Tailwind CSS and ShadCN</strong> for a polished, responsive
        interface. The app follows an <strong>MVC-style architecture</strong>{" "}
        with <strong>server-side rendering via Next.js</strong>, and stores data
        securely in a <strong>relational PostgreSQL database</strong> using{" "}
        <strong>Supabase</strong>. I designed the schema to handle recipes with
        one or two sets of ingredients, using{" "}
        <strong>foreign key relationships</strong> to associate each recipe with
        its relevant ingredient groups and instructions. While it's currently a
        web app, I plan to build a native iOS version using{" "}
        <strong>React Native</strong> or <strong>Flutter</strong>, and
        eventually optimize the backend with <strong>Go</strong>. This project
        has been a great opportunity to focus on scalable architecture, clean
        data modeling, and fast development workflows.
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
];

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
        This task management app was built with <strong>Next</strong>.js and{" "}
        <strong>Supabase</strong>, using <strong>PostgreSQL</strong> as the
        database. It lets users sign up, log in, and manage their tasks with
        full <strong>CRUD</strong> functionality. Real-time updates are handled
        through Supabase's Realtime features, so task changes show up instantly.
        Authentication is powered by
        <strong> Supabase Auth</strong>, and the UI is styled with{" "}
        <strong>TailwindCSS</strong> to keep things clean and responsive.
        Server-side rendering is handled by
        <strong> Next.js</strong>, and the backend uses row-level security to
        make sure users can only access their own data. Testing was done with
        Jest and React Testing Library.
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
        Slime Cookbook is a modern, full-stack recipe app built with{" "}
        <strong>
          Next.js, TypeScript, Tailwind CSS, and Supabase (PostgreSQL)
        </strong>
        , designed to make browsing, adding, and organizing recipes intuitive
        and enjoyable. It features user authentication, recipe creation and
        editing, keyword search, and custom categories, all styled with{" "}
        <strong>TailwindCSS and ShadCN </strong> for a clean, responsive
        interface. The app uses an <strong>MVC-style structure</strong> with{" "}
        <strong>server-side rendering via Next.js</strong> and stores data
        securely with <strong>Supabase.</strong> While currently a web app,
        future plans include a native iOS version using React Native or Flutter
        and backend optimizations with Go. This project emphasizes scalable
        architecture, clean design, and fast iteration.
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
        Tempest Fitness Journal is a full-stack fitness tracking app built with{" "}
        <strong>Node.js</strong>, <strong>Express</strong>,{" "}
        <strong>MongoDB</strong>, and <strong>EJS</strong>. Designed to help
        users visualize their progress over time—not just current stats—it lets
        you log workouts, strength metrics, cardio sessions, and more. The
        frontend uses <strong>EJS</strong> templates styled with{" "}
        <strong>TailwindCSS</strong> and <strong>DaisyUI</strong>, while
        authentication is handled with <strong>Passport</strong>.js. Data is
        structured using an <strong>MVC architecture</strong>, with routes and
        controllers managing <strong>CRUD</strong> operations for user-submitted
        fitness data. This project deepened my understanding of{" "}
        <strong>backend routing, MongoDB, data modeling</strong> , and dynamic
        view rendering. It also reinforced the importance of user experience in
        fitness applications, making it easier for users to track their progress
        and stay motivated.
      </>
    ),
  },
];

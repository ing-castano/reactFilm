import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  
  
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')


  let environmentFile;

  switch (mode) {
    case "qa":
      environmentFile = path.join("environments", "environment.qa.js");
      break;

    case "uat":
      environmentFile = path.join("environments", "environment.uat.js");
      break;

    case "prod":
      environmentFile = path.join("environments", "environment.prod.js");
      break;

    default:
      environmentFile = path.join("environments", "environment.js");
      break;
  }

  console.log("--------------------------------------------");
  console.log("VITE CONFIGURATION");
  console.log("COMMAND: ", command);
  console.log("MODE: ", mode);
  console.log("ENVIRONMENT FILE: ", environmentFile);
  console.log("--------------------------------------------");

  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup.js",
    },
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        "@environments": path.resolve(__dirname, environmentFile),
      },
    },
  };
});

/*

import { defineConfig, loadEnv } from 'vite' }: This imports the defineConfig and loadEnv functions from the Vite library. These are used to set up Vite's configuration and load environment variables, respectively.
export default defineConfig(({ command, mode }) => { ... }): The defineConfig function is used to export Vite's configuration. Inside it, an arrow function is passed which receives command and mode as parameters.
const env = loadEnv(mode, process.cwd(), ''):
loadEnv is called to load environment variables based on the mode. The mode parameter refers to the Vite mode (e.g., development, production, etc.).
process.cwd() specifies the current working directory to look for the .env file.
'' as the third parameter specifies a prefix filter. If set to an empty string, it loads all environment variables regardless of the prefix (VITE_ or any other prefix).
return { ... }:
Inside the defineConfig, a configuration object is returned.
define is a configuration option in Vite that allows defining global variables accessible in your code during the build process.
__APP_ENV__ is defined as a global variable using JSON.stringify(env.APP_ENV). This takes the value of the APP_ENV environment variable and assigns it to __APP_ENV__.
In summary, this setup dynamically loads environment variables based on the Vite mode and defines a global variable __APP_ENV__ with the value of the APP_ENV environment variable. This global variable can be accessed in your code during the Vite build process.

*/
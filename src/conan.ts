const completionSpec: Fig.Spec = {
  name: "conan",
  description:
    "The open source, decentralized and multi-platform package manager to create and share all your native binaries",
  subcommands: [
    {
      name: "install",
      description:
        "Installs the requirements specified in a recipe (conanfile.py or conanfile.txt)",
    },
    {
      name: "config",
      description: "Manages Conan configuration",
    },
    {
      name: "get",
      description:
        "Gets a file or list a directory of a given reference or package",
    },
    {
      name: "info",
      description: "Gets information about the dependency graph of a recipe",
    },
    {
      name: "search",
      description:
        "Searches package recipes and binaries in the local cache or a remote. Unless a remote is specified only the local cache is searched",
    },
    {
      name: "new",
      description:
        "Creates a new package recipe template with a 'conanfile.py' and optionally, 'test_package' testing files",
    },
    {
      name: "create",
      description: "Builds a binary package for a recipe (conanfile.py)",
    },
    {
      name: "upload",
      description: "Uploads a recipe and binary packages to a remote",
    },
    {
      name: "export",
      description:
        "Copies the recipe (conanfile.py & associated files) to your local cache",
    },
    {
      name: "export-pkg",
      description:
        "Exports a recipe, then creates a package from local source and build folders",
    },
    {
      name: "test",
      description:
        "Tests a package consuming it from a conanfile.py with a test() method",
    },
    {
      name: "source",
      description: "Calls your local conanfile.py 'source()' method",
    },
    {
      name: "build",
      description: "Calls your local conanfile.py 'build()' method",
    },
    {
      name: "package",
      description: "Calls your local conanfile.py 'package()' method",
    },
    {
      name: "editable",
      description:
        "Manages editable packages (packages that reside in the user workspace, but are consumed as if they were in the cache)",
    },
    {
      name: "workspace",
      description:
        "Manages a workspace (a set of packages consumed from the user workspace that belongs to the same project)",
    },
    {
      name: "profile",
      description:
        "Lists profiles in the '.conan/profiles' folder, or shows profile details",
    },
    {
      name: "remote",
      description:
        "Manages the remote list and the package recipes associated with a remote",
    },
    {
      name: "user",
      description:
        "Authenticates against a remote with user/pass, caching the auth token",
    },
    {
      name: "imports",
      description:
        "Calls your local conanfile.py or conanfile.txt 'imports' method",
    },
    {
      name: "copy",
      description: "Copies conan recipes and packages to another user/channel",
    },
    {
      name: "remove",
      description:
        "Removes packages or binaries matching pattern from local cache or remote",
    },
    {
      name: "alias",
      description: "Creates and exports an 'alias package recipe'",
    },
    {
      name: "download",
      description:
        "Downloads recipe and binaries to the local cache, without using settings",
    },
    {
      name: "inspect",
      description:
        "Displays conanfile attributes, like name, version, and options. Works locally, in local cache and remote",
    },
    {
      name: "help",
      description: "Shows help for a specific command",
    },
    {
      name: "lock",
      description: "Generates and manipulates lock files",
    },
    {
      name: "frogarian",
      description:
        "Displays an intimidating man-frog holding a double-edged sword",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for conan",
    },
  ],
  // Only uncomment if conan takes an argument
  // args: {}
};
export default completionSpec;

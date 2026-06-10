type Snippet = {
  label: string;
  code: string;
};

type Item = {
  id: string;
  title: string;
  desc: string;
  badge: string;
  snippets: Snippet[];
};

type Section = {
  id: string;
  title: string;
  subtitle: string;
  items: Item[];
};

const data: Section[] = [
  {
    id: "setup",
    title: "Setup",
    subtitle: "Library",
    items: [
      {
        id: "library",
        title: "Library",
        desc: "Load the UI library from GitHub.",
        badge: "Main loader",
        snippets: [
          {
            label: "Method",
            code: `local Library = loadstring(game:HttpGet("https://github.com/sokpanha10000-oss/SKUI/releases/latest/download/main.lua"))()`
          }
        ]
      }
    ]
  }
];

export default data;
const data = [
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
  },
  {
    id: "ui",
    title: "UI",
    subtitle: "Window, Minimizer, Tab, Section, Dialog, Notification",
    items: [
      {
        id: "window",
        title: "Window",
        desc: "Create the main window.",
        badge: "Window",
        snippets: [
          {
            label: "Method",
            code: `local Window = Library:MakeWindow({
  Name = "Nice Hub : Cool Game",
  Author = "dev by real_redz",
  ScriptFolder = "redz-library-V5-remake-mod",
  SearchBar = true,
  UserInfoTop = true,
  UserInfoTitle = game:GetService("Players").LocalPlayer.DisplayName,
  UserInfoSubtitle = "Advanced User",
})`
          }
        ]
      },
      {
        id: "minimizer",
        title: "Minimizer",
        desc: "Create desktop and mobile minimizer buttons.",
        badge: "2 methods",
        snippets: [
          {
            label: "Desktop minimizer",
            code: `local Minimizer = Window:NewMinimizer({
  KeyCode = Enum.KeyCode.LeftControl
})`
          },
          {
            label: "Mobile button",
            code: `local MobileButton = Minimizer:CreateMobileMinimizer({
  Image = "rbxassetid://0",
  BackgroundColor3 = Color3.fromRGB(0, 0, 0)
})`
          }
        ]
      },
      {
        id: "tab",
        title: "Tab",
        desc: "Create tabs in two styles.",
        badge: "2 methods",
        snippets: [
          {
            label: "Style 1",
            code: `local Tab = Window:MakeTab({
  Title = "Cool Tab",
  Icon = "Home"
})`
          },
          {
            label: "Style 2",
            code: `local Tab = Window:MakeTab({ "Cool Tab", "Home" })`
          }
        ]
      },
      {
        id: "section",
        title: "Section",
        desc: "Add a section header inside a tab.",
        badge: "Section",
        snippets: [
          {
            label: "Method",
            code: `Tab:AddSection("Section")`
          }
        ]
      },
      {
        id: "dialog",
        title: "Dialog",
        desc: "Show a choice dialog.",
        badge: "Dialog",
        snippets: [
          {
            label: "Method",
            code: `Window:Dialog({
  Title = "Hello!",
  Content = "do you like Coffee?",
  Options = {
    { Name = "No" },
    {
      Name = "Yes!",
      Callback = function(self)
        print("Yes, i like Coffee")
      end
    }
  }
})`
          }
        ]
      },
      {
        id: "notification",
        title: "Notification",
        desc: "Show a popup notification.",
        badge: "Notification",
        snippets: [
          {
            label: "Method",
            code: `Window:Notify({
  Title = "Notification",
  Content = "this is a Notification",
  Image = "rbxassetid://10734953451",
  Duration = 5
})`
          }
        ]
      }
    ]
  },
  {
    id: "elements",
    title: "Elements",
    subtitle: "Button, Toggle, Slider, Dropdown, TextBox, Paragraph, Discord UI, Scale, Flags",
    items: [
      {
        id: "button",
        title: "Button",
        desc: "Create a normal button.",
        badge: "Button",
        snippets: [
          {
            label: "Method",
            code: `Tab:AddButton({
  Name = "My Button",
  Debounce = 0.5,
  Callback = function()

  end
})`
          }
        ]
      },
      {
        id: "toggle",
        title: "Toggle",
        desc: "Create a toggle or checkbox.",
        badge: "Toggle",
        snippets: [
          {
            label: "Method",
            code: `Tab:AddToggle({
  Name = "Toggle",
  Type = "Toggle", -- or "Checkbox"
  Default = false,
  Callback = function(Value)

  end
})`
          }
        ]
      },
      {
        id: "slider",
        title: "Slider",
        desc: "Create a numeric slider.",
        badge: "Slider",
        snippets: [
          {
            label: "Method",
            code: `Tab:AddSlider({
  Name = "Cool Title",
  Min = -5,
  Max = 5,
  Increment = 0.25,
  Default = 0,
  Callback = function(Value)

  end
})`
          }
        ]
      },
      {
        id: "dropdown-single",
        title: "Dropdown",
        desc: "Single-select dropdown.",
        badge: "Single select",
        snippets: [
          {
            label: "Method",
            code: `Tab:AddDropdown({
  Name = "Dropdown",
  Options = {"one", "two", "three", "four", "five"},
  Default = "one",
  Callback = function(Value)

  end
})`
          }
        ]
      },
      {
        id: "dropdown-multi",
        title: "Dropdown",
        desc: "Multi-select dropdown.",
        badge: "Multi select",
        snippets: [
          {
            label: "Method",
            code: `Tab:AddDropdown({
  Name = "Dropdown",
  MultiSelect = true,
  Options = {"one", "two", "three", "four", "five"},
  Default = {"one", "four"},
  Callback = function(Value)

  end
})`
          }
        ]
      },
      {
        id: "textbox",
        title: "TextBox",
        desc: "Create a textbox input.",
        badge: "TextBox",
        snippets: [
          {
            label: "Method",
            code: `Tab:AddTextBox({
  Name = "My TextBox",
  Default = "text",
  Placeholder = "input text...",
  ClearOnFocus = true,
  Callback = function(Value)

  end
})`
          }
        ]
      },
      {
        id: "paragraph",
        title: "Paragraph",
        desc: "Show a text paragraph.",
        badge: "Paragraph",
        snippets: [
          {
            label: "Method",
            code: `Tab:AddParagraph("Paragraph", "This is a Paragraph\\nSecond Line")`
          }
        ]
      },
      {
        id: "discord",
        title: "Discord UI",
        desc: "Add a Discord invite card.",
        badge: "Discord",
        snippets: [
          {
            label: "Method",
            code: `Tab:AddDiscordInvite({
  Title = "redz Hub | Community",
  Description = "A community for redz Hub Users -- official scripts, updates, and suport in one place.",
  Banner = "rbxassetid://17382040552",
  Logo = "rbxassetid://17382040552",
  Invite = "https://discord.gg/redz-hub",
  Members = 470000,
  Online = 20000
})`
          }
        ]
      },
      {
        id: "scale",
        title: "UI scale",
        desc: "Set and print UI scale values.",
        badge: "Scale",
        snippets: [
          {
            label: "Method",
            code: `Library:SetUIScale(1.0)`
          },
          {
            label: "Check scale limits",
            code: `print("UI Max Scale is:", Library:GetMaxScale(), "and the minimum is:", Library:GetMinScale())`
          }
        ]
      },
      {
        id: "flags",
        title: "Flags",
        desc: "Save and read toggle flags.",
        badge: "Flags",
        snippets: [
          {
            label: "Set flag",
            code: `Tab:AddToggle({
  Name = "Cool Toggle",
  Flag = "toggle_flag"
})`
          },
          {
            label: "Read and reuse flag",
            code: `local ToggleValue = Window:GetFlag("toggle_flag") or false

Tab:AddToggle({
  Name = "Cool Toggle",
  Default = ToggleValue,
  Callback = function(Value)
    Window:SetFlag("toggle_flag", Value)
  end
})`
          }
        ]
      }
    ]
  }
];

const cards = document.getElementById("cards");
const sectionsList = document.getElementById("sectionsList");
const sectionTitle = document.getElementById("sectionTitle");
const sectionSubtitle = document.getElementById("sectionSubtitle");
const sectionCounter = document.getElementById("sectionCounter");
const menu = document.getElementById("menu");
const toast = document.getElementById("toast");

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn2 = document.getElementById("backBtn2");
const nextBtn2 = document.getElementById("nextBtn2");
const dotsBtn = document.getElementById("dotsBtn");
const dotsBtn2 = document.getElementById("dotsBtn2");

let currentSectionIndex = 0;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 1200);
}

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderSidebar() {
  sectionsList.innerHTML = data.map((section, idx) => `
    <div class="section-group ${idx === currentSectionIndex ? "open" : ""}" data-section-group="${section.id}">
      <button class="section-head" data-section-head="${section.id}">
        <span>${section.title}</span>
        <span>${section.items.length} items</span>
      </button>
      <div class="section-items">
        ${section.items.map(item => `
          <button class="section-item ${idx === currentSectionIndex && item.id === data[currentSectionIndex].items[0].id ? "active" : ""}"
                  data-item="${section.id}:${item.id}">
            ${item.title}
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");

  sectionsList.querySelectorAll("[data-section-head]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-section-head");
      selectSection(data.findIndex(s => s.id === id));
    });
  });

  sectionsList.querySelectorAll("[data-item]").forEach(btn => {
    btn.addEventListener("click", () => {
      const [sectionId, itemId] = btn.getAttribute("data-item").split(":");
      const sectionIndex = data.findIndex(s => s.id === sectionId);
      const section = data[sectionIndex];
      const itemIndex = section.items.findIndex(i => i.id === itemId);
      selectSection(sectionIndex, itemIndex);
    });
  });
}

function renderCards() {
  const section = data[currentSectionIndex];
  sectionTitle.textContent = section.title;
  sectionSubtitle.textContent = section.subtitle;
  sectionCounter.textContent = `${currentSectionIndex + 1} / ${data.length}`;

  cards.innerHTML = section.items.map(item => `
    <article class="card">
      <div class="card-top">
        <div>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
        <div class="pill">${item.badge}</div>
      </div>

      ${item.snippets.map(snippet => `
        <div class="snippet">
          <div class="snippet-head">
            <strong>${snippet.label}</strong>
            <button class="copy-btn" data-copy="${encodeURIComponent(snippet.code)}">Copy</button>
          </div>
          <pre>${escapeHtml(snippet.code)}</pre>
        </div>
      `).join("")}
    </article>
  `).join("");

  cards.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const code = decodeURIComponent(btn.getAttribute("data-copy"));
      try {
        await navigator.clipboard.writeText(code);
        showToast("Copied to clipboard");
      } catch {
        showToast("Copy failed");
      }
    });
  });
}

function selectSection(index) {
  currentSectionIndex = (index + data.length) % data.length;
  renderSidebar();
  renderCards();
  menu.classList.remove("open");
}

function toggleMenu(force) {
  const open = typeof force === "boolean" ? force : !menu.classList.contains("open");
  menu.classList.toggle("open", open);
}

backBtn.addEventListener("click", () => selectSection(currentSectionIndex - 1));
nextBtn.addEventListener("click", () => selectSection(currentSectionIndex + 1));
backBtn2.addEventListener("click", () => selectSection(currentSectionIndex - 1));
nextBtn2.addEventListener("click", () => selectSection(currentSectionIndex + 1));
dotsBtn.addEventListener("click", () => toggleMenu());
dotsBtn2.addEventListener("click", () => toggleMenu());

menu.querySelectorAll("[data-menu-section]").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-menu-section");
    selectSection(data.findIndex(section => section.id === id));
  });
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !dotsBtn.contains(e.target) && !dotsBtn2.contains(e.target)) {
    menu.classList.remove("open");
  }
});

renderSidebar();
renderCards();
const snippets = [
  {
    id: "library",
    section: "Setup",
    tag: "setup",
    title: "Library",
    code: `local Library = loadstring(game:HttpGet("https://github.com/sokpanha10000-oss/SKUI/releases/latest/download/main.lua"))()`
  },
  {
    id: "window",
    section: "UI",
    tag: "ui",
    title: "Window",
    code: `local Window = Library:MakeWindow({
    Name = "Nice Hub : Cool Game",
    Author = "dev by real_redz",
    ScriptFolder = "redz-library-V5-remake-mod",
    SearchBar = true,
    UserInfoTop = true,
    UserInfoTitle = game:GetService("Players").LocalPlayer.DisplayName,
    UserInfoSubtitle = "Advanced User",
})`
  },
  {
    id: "minimizer",
    section: "UI",
    tag: "ui",
    title: "Minimizer",
    code: `local Minimizer = Window:NewMinimizer({
    KeyCode = Enum.KeyCode.LeftControl
})

local MobileButton = Minimizer:CreateMobileMinimizer({
    Image = "rbxassetid://0",
    BackgroundColor3 = Color3.fromRGB(0, 0, 0)
})`
  },
  {
    id: "tab-title-icon",
    section: "UI",
    tag: "ui",
    title: "Tab (Title + Icon)",
    code: `local Tab = Window:MakeTab({
    Title = "Cool Tab",
    Icon = "Home"
})`
  },
  {
    id: "tab-simple",
    section: "UI",
    tag: "ui",
    title: "Tab (Simple)",
    code: `local Tab = Window:MakeTab({
    "Cool Tab",
    "Home"
})`
  },
  {
    id: "section",
    section: "UI",
    tag: "ui",
    title: "Section",
    code: `Tab:AddSection("Section")`
  },
  {
    id: "dialog",
    section: "UI",
    tag: "ui",
    title: "Dialog",
    code: `Window:Dialog({
    Title = "Hello!",
    Content = "do you like Coffee?",
    Options = {
        {
            Name = "No"
        },
        {
            Name = "Yes!",
            Callback = function(self)
                print("Yes, i like Coffee")
            end
        }
    }
})`
  },
  {
    id: "notification",
    section: "UI",
    tag: "ui",
    title: "Notification",
    code: `Window:Notify({
    Title = "Notification",
    Content = "this is a Notification",
    Image = "rbxassetid://10734953451",
    Duration = 5
})`
  },
  {
    id: "button",
    section: "Elements",
    tag: "elements",
    title: "Button",
    code: `Tab:AddButton({
    Name = "My Button",
    Debounce = 0.5,
    Callback = function()
    end
})`
  },
  {
    id: "toggle",
    section: "Elements",
    tag: "elements",
    title: "Toggle",
    code: `Tab:AddToggle({
    Name = "Toggle",
    Type = "Toggle",
    Default = false,
    Callback = function(Value)
    end
})`
  },
  {
    id: "slider",
    section: "Elements",
    tag: "elements",
    title: "Slider",
    code: `Tab:AddSlider({
    Name = "Cool Title",
    Min = -5,
    Max = 5,
    Increment = 0.25,
    Default = 0,
    Callback = function(Value)
    end
})`
  },
  {
    id: "dropdown-single",
    section: "Elements",
    tag: "elements",
    title: "Dropdown",
    code: `Tab:AddDropdown({
    Name = "Dropdown",
    Options = {"one", "two", "three", "four", "five"},
    Default = "one",
    Callback = function(Value)
    end
})`
  },
  {
    id: "dropdown-multi",
    section: "Elements",
    tag: "elements",
    title: "Dropdown (MultiSelect)",
    code: `Tab:AddDropdown({
    Name = "Dropdown",
    MultiSelect = true,
    Options = {"one", "two", "three", "four", "five"},
    Default = {"one", "four"},
    Callback = function(Value)
    end
})`
  },
  {
    id: "textbox",
    section: "Elements",
    tag: "elements",
    title: "Textbox",
    code: `Tab:AddTextBox({
    Name = "My TextBox",
    Default = "text",
    Placeholder = "input text...",
    ClearOnFocus = true,
    Callback = function(Value)
    end
})`
  },
  {
    id: "paragraph",
    section: "Elements",
    tag: "elements",
    title: "Paragraph",
    code: `Tab:AddParagraph("Paragraph", "This is a Paragraph\\nSecond Line")`
  },
  {
    id: "discord",
    section: "Elements",
    tag: "elements",
    title: "Discord UI",
    code: `MainTab:AddDiscordInvite({
    Title = "redz Hub | Community",
    Description = "A community for redz Hub Users -- official scripts, updates, and suport in one place.",
    Banner = "rbxassetid://17382040552",
    Logo = "rbxassetid://17382040552",
    Invite = "https://discord.gg/redz-hub",
    Members = 470000,
    Online = 20000
})`
  },
  {
    id: "scale",
    section: "Elements",
    tag: "elements",
    title: "UI Scale",
    code: `Library:SetUIScale(1.0)

print("UI Max Scale is: ", Library:GetMinScale(), "and the minimum is: ", Library:GetMaxScale())`
  },
  {
    id: "flags",
    section: "Elements",
    tag: "elements",
    title: "Flags",
    code: `Tab:AddToggle({
    Name = "Cool Toggle",
    Flag = "toggle_flag"
})

local ToggleValue = Window:GetFlag("toggle_flag") or false

Tab:AddToggle({
    Name = "Cool Toggle",
    Default = ToggleValue,
    Callback = function(Value)
        Window:SetFlag("toggle_flag", Value)
    end
})`
  }
];

const setupItems = document.getElementById("setupItems");
const uiItems = document.getElementById("uiItems");
const elementsItems = document.getElementById("elementsItems");
const codeOutput = document.getElementById("codeOutput");
const activeSectionLabel = document.getElementById("activeSectionLabel");
const activeSnippetTitle = document.getElementById("activeSnippetTitle");
const snippetTag = document.getElementById("snippetTag");
const copyBtn = document.getElementById("copyBtn");
const overlay = document.getElementById("overlay");
const sideMenu = document.getElementById("sideMenu");
const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function makeSnippetButton(snippet, index) {
  const btn = document.createElement("button");
  btn.className = "snippet-btn";
  btn.type = "button";
  btn.dataset.index = String(index);
  btn.textContent = snippet.title;
  btn.addEventListener("click", () => {
    setSnippet(index);
    closeMenu();
  });
  return btn;
}

snippets.forEach((snippet, index) => {
  const button = makeSnippetButton(snippet, index);
  if (snippet.section === "Setup") setupItems.appendChild(button);
  else if (snippet.section === "UI") uiItems.appendChild(button);
  else elementsItems.appendChild(button);
});

function renderActiveStyles() {
  document.querySelectorAll(".snippet-btn").forEach((btn) => {
    btn.classList.toggle("active", Number(btn.dataset.index) === currentIndex);
  });
}

function setSnippet(index) {
  const total = snippets.length;
  currentIndex = (index + total) % total;
  const snippet = snippets[currentIndex];

  activeSectionLabel.textContent = snippet.section;
  activeSnippetTitle.textContent = snippet.title;
  snippetTag.textContent = snippet.tag;
  codeOutput.textContent = snippet.code;

  renderActiveStyles();
}

function copyCurrentCode() {
  const text = snippets[currentIndex].code;
  navigator.clipboard.writeText(text).then(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = original;
    }, 1200);
  });
}

function openMenu() {
  sideMenu.classList.add("open");
  overlay.classList.remove("hidden");
}

function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.add("hidden");
}

menuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

backBtn.addEventListener("click", () => setSnippet(currentIndex - 1));
nextBtn.addEventListener("click", () => setSnippet(currentIndex + 1));
copyBtn.addEventListener("click", copyCurrentCode);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
  if (e.key === "ArrowLeft") setSnippet(currentIndex - 1);
  if (e.key === "ArrowRight") setSnippet(currentIndex + 1);
});

setSnippet(0);

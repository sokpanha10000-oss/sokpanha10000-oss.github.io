const snippets = {
  library: {
    title: "Setup / Library",
    desc: "Library loader",
    code: `local Library = loadstring(game:HttpGet("https://github.com/sokpanha10000-oss/SKUI/releases/latest/download/main.lua"))()`
  },
  window: {
    title: "UI / Window",
    desc: "Window setup",
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
  minimizer: {
    title: "UI / Minimizer",
    desc: "Minimizer and mobile button",
    code: `local Minimizer = Window:NewMinimizer({
  KeyCode = Enum.KeyCode.LeftControl
})

local MobileButton = Minimizer:CreateMobileMinimizer({
  Image = "rbxassetid://0",
  BackgroundColor3 = Color3.fromRGB(0, 0, 0)
})`
  },
  tab: {
    title: "UI / Tab",
    desc: "Tab styles",
    code: `local Tab = Window:MakeTab({
  Title = "Cool Tab",
  Icon = "Home"
})

local Tab = Window:MakeTab({ "Cool Tab", "Home" })`
  },
  section: {
    title: "UI / Section",
    desc: "Section example",
    code: `Tab:AddSection("Section")`
  },
  dialog: {
    title: "UI / Dialog",
    desc: "Dialog example",
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
  notification: {
    title: "UI / Notification",
    desc: "Notification popup",
    code: `Window:Notify({
  Title = "Notification",
  Content = "this is a Notification",
  Image = "rbxassetid://10734953451",
  Duration = 5
})`
  },
  button: {
    title: "Elements / Button",
    desc: "Button element",
    code: `Tab:AddButton({
  Name = "My Button",
  Debounce = 0.5,
  Callback = function()
    
  end
})`
  },
  toggle: {
    title: "Elements / Toggle",
    desc: "Toggle / checkbox",
    code: `Tab:AddToggle({
  Name = "Toggle",
  Type = "Toggle", -- or "Checkbox"
  Default = false,
  Callback = function(Value)
    
  end
})`
  },
  slider: {
    title: "Elements / Slider",
    desc: "Slider element",
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
  dropdown: {
    title: "Elements / Dropdown",
    desc: "Dropdown examples",
    code: `Tab:AddDropdown({
  Name = "Dropdown",
  Options = {"one", "two", "three", "four", "five"},
  Default = "one",
  Callback = function(Value)
    
  end
})

Tab:AddDropdown({
  Name = "Dropdown",
  MultiSelect = true,
  Options = {"one", "two", "three", "four", "five"},
  Default = {"one", "four"},
  Callback = function(Value)
    
  end
})`
  },
  textbox: {
    title: "Elements / Textbox",
    desc: "Textbox element",
    code: `Tab:AddTextBox({
  Name = "My TextBox",
  Default = "text",
  Placeholder = "input text...",
  ClearOnFocus = true,
  Callback = function(Value)
    
  end
})`
  },
  paragraph: {
    title: "Elements / Paragraph",
    desc: "Paragraph element",
    code: `Tab:AddParagraph("Paragraph", "This is a Paragraph\\nSecond Line")`
  },
  discord: {
    title: "Elements / Discord",
    desc: "Discord invite card",
    code: `MainTab:AddDiscordInvite({
  Title = "redz Hub | Community",
  Description = "A community for redz Hub Users -- official scripts, updates, and suport in one place.",
  Banner = "rbxassetid://17382040552",
  Logo = "rbxassetid://17382040552",
  Invite = "https://discord.gg/redz-hub",
  Members = 470000,
  Online = 20000,
})`
  },
  uiscale: {
    title: "Elements / UI scale",
    desc: "UI scale example",
    code: `Library:SetUIScale(1.0)

print(("UI Min Scale is: %s and the maximum is: %s"):format(
  Library:GetMinScale(),
  Library:GetMaxScale()
))`
  },
  flags: {
    title: "Elements / Flags",
    desc: "Flag saving example",
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
};

const cardsByPage = [
  ["library"],
  ["window", "minimizer", "tab", "section", "dialog", "notification"],
  ["button", "toggle", "slider", "dropdown", "textbox", "paragraph", "discord", "uiscale", "flags"]
];

const pageInfo = [
  {
    title: "Description",
    text: "Welcome page. Use the buttons to browse your library pages."
  },
  {
    title: "UI",
    text: "Window, minimizer, tab, section, dialog, and notification."
  },
  {
    title: "Elements",
    text: "Buttons, toggles, sliders, dropdowns, textboxes, paragraphs, Discord, UI scale, and flags."
  }
];

const setupGrid = document.getElementById("setupGrid");
const uiGrid = document.getElementById("uiGrid");
const elementsGrid = document.getElementById("elementsGrid");
const pageEls = [...document.querySelectorAll(".page")];
const pageTitle = document.getElementById("pageTitle");
const pageText = document.getElementById("pageText");

function cardHTML(id) {
  const item = snippets[id];
  return `
    <div class="card">
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
      <button onclick="openSnippet('${id}')">Open code</button>
    </div>
  `;
}

setupGrid.innerHTML = cardsByPage[0].map(cardHTML).join("");
uiGrid.innerHTML = cardsByPage[1].map(cardHTML).join("");
elementsGrid.innerHTML = cardsByPage[2].map(cardHTML).join("");

let currentPage = 0;

function renderPage(index) {
  currentPage = (index + pageEls.length) % pageEls.length;
  pageEls.forEach((page, i) => page.classList.toggle("active", i === currentPage));
  pageTitle.textContent = pageInfo[currentPage].title;
  pageText.textContent = pageInfo[currentPage].text;
}

document.getElementById("backBtn").addEventListener("click", () => renderPage(currentPage - 1));
document.getElementById("nextBtn").addEventListener("click", () => renderPage(currentPage + 1));

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const menuBackdrop = document.getElementById("menuBackdrop");

function toggleMenu(open) {
  menu.classList.toggle("open", open);
  menuBackdrop.classList.toggle("open", open);
}

menuBtn.addEventListener("click", () => toggleMenu(!menu.classList.contains("open")));
menuBackdrop.addEventListener("click", () => toggleMenu(false));

document.querySelectorAll(".menuItem").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.open;
    const pageMap = {
      library: 0,
      window: 1,
      minimizer: 1,
      tab: 1,
      section: 1,
      dialog: 1,
      notification: 1,
      button: 2,
      toggle: 2,
      slider: 2,
      dropdown: 2,
      textbox: 2,
      paragraph: 2,
      discord: 2,
      uiscale: 2,
      flags: 2
    };

    toggleMenu(false);
    renderPage(pageMap[id] ?? 0);
    document.querySelector(`[data-page="${pageMap[id] ?? 0}"]`).scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => openSnippet(id), 300);
  });
});

const modalBackdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const codeText = document.getElementById("codeText");
const copyBtn = document.getElementById("copyBtn");
const closeModal = document.getElementById("closeModal");
const toast = document.getElementById("toast");

let currentCode = "";

function openSnippet(id) {
  const item = snippets[id];
  if (!item) return;
  currentCode = item.code;
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;
  codeText.textContent = item.code;
  modalBackdrop.classList.add("open");
}

window.openSnippet = openSnippet;

function closeCodeModal() {
  modalBackdrop.classList.remove("open");
}

closeModal.addEventListener("click", closeCodeModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeCodeModal();
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentCode || codeText.textContent);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = currentCode || codeText.textContent;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1200);
});

renderPage(0);
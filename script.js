// Upgraded Data Dictionary supporting MULTIPLE code boxes per feature
const features = [
    {
        section: "Setup",
        items: [
            {
                name: "Library",
                snippets: [
                    {
                        subtitle: "Load Library",
                        code: `local Library = loadstring(game:HttpGet("https://github.com/sokpanha10000-oss/SKUI/releases/latest/download/main.lua"))()`
                    }
                ]
            }
        ]
    },
    {
        section: "UI",
        items: [
            {
                name: "Window",
                snippets: [
                    {
                        subtitle: "Main Window Creation",
                        code: `local Window = Library:MakeWindow({\n    Name = "Nice Hub : Cool Game",\n    Author = "dev by real_redz",\n    ScriptFolder = "redz-library-V5-remake-mod",\n    SearchBar = true,\n    UserInfoTop = true,\n    UserInfoTitle = game:GetService("Players").LocalPlayer.DisplayName,\n    UserInfoSubtitle = "Advanced User",\n})`
                    }
                ]
            },
            {
                name: "Minimizer",
                snippets: [
                    {
                        subtitle: "PC Minimizer Keybind",
                        code: `local Minimizer = Window:NewMinimizer({\n    KeyCode = Enum.KeyCode.LeftControl\n})`
                    },
                    {
                        subtitle: "Mobile Minimizer Button",
                        code: `local MobileButton = Minimizer:CreateMobileMinimizer({\n    Image = "rbxassetid://0",\n    BackgroundColor3 = Color3.fromRGB(0, 0, 0)\n})`
                    }
                ]
            },
            {
                name: "Tab",
                snippets: [
                    {
                        subtitle: "Standard Tab Creation",
                        code: `local Tab = Window:MakeTab({\n    Title = "Cool Tab",\n    Icon = "Home"\n})`
                    },
                    {
                        subtitle: "Short Version",
                        code: `local Tab = Window:MakeTab({ "Cool Tab", "Home" })`
                    }
                ]
            },
            {
                name: "Section",
                snippets: [{ subtitle: "Add Section", code: `Tab:AddSection("Section")` }]
            },
            {
                name: "Dialog",
                snippets: [
                    {
                        subtitle: "Dialog Prompt",
                        code: `Window:Dialog({\n    Title = "Hello!",\n    Content = "do you like Coffee?",\n    Options = {\n        { Name = "No" },\n        {\n            Name = "Yes!",\n            Callback = function(self)\n                print("Yes, i like Coffee")\n            end\n        }\n    }\n})`
                    }
                ]
            },
            {
                name: "Notification",
                snippets: [{ subtitle: "Notify User", code: `Window:Notify({\n    Title = "Notification",\n    Content = "this is a Notification",\n    Image = "rbxassetid://10734953451",\n    Duration = 5\n})` }]
            }
        ]
    },
    {
        section: "Elements",
        items: [
            {
                name: "Button",
                snippets: [{ subtitle: "Standard Button", code: `Tab:AddButton({\n    Name = "My Button",\n    Debounce = 0.5,\n    Callback = function()\n        -- logic here\n    end\n})` }]
            },
            {
                name: "Toggle",
                snippets: [{ subtitle: "Checkbox / Toggle", code: `Tab:AddToggle({\n    Name = "Toggle",\n    Type = "Toggle", -- or [Checkbox]\n    Default = false,\n    Callback = function(Value)\n        -- logic here\n    end\n})` }]
            },
            {
                name: "Slider",
                snippets: [{ subtitle: "Number Slider", code: `Tab:AddSlider({\n    Name = "Cool Title",\n    Min = -5,\n    Max = 5,\n    Increment = 0.25,\n    Default = 0,\n    Callback = function(Value)\n        -- logic here\n    end\n})` }]
            },
            {
                name: "Dropdown",
                snippets: [
                    {
                        subtitle: "Single Select Dropdown",
                        code: `Tab:AddDropdown({\n    Name = "Dropdown",\n    Options = {"one", "two", "three", "four", "five"},\n    Default = "one",\n    Callback = function(Value)\n        -- logic here\n    end\n})`
                    },
                    {
                        subtitle: "Multi Select Dropdown",
                        code: `Tab:AddDropdown({\n    Name = "Dropdown",\n    MultiSelect = true,\n    Options = {"one", "two", "three", "four", "five"},\n    Default = {"one", "four"},\n    Callback = function(Value)\n        -- logic here\n    end\n})`
                    }
                ]
            },
            {
                name: "Textbox",
                snippets: [{ subtitle: "Text Input", code: `Tab:AddTextBox({\n    Name = "My TextBox",\n    Default = "text",\n    Placeholder = "input text...",\n    ClearOnFocus = true,\n    Callback = function(Value)\n        -- logic here\n    end\n})` }]
            },
            {
                name: "Paragraph",
                snippets: [{ subtitle: "Text Block", code: `Tab:AddParagraph("Paragraph", "This is a Paragraph\\nSecond Line")` }]
            },
            {
                name: "Discord",
                snippets: [{ subtitle: "Server Invite Box", code: `MainTab:AddDiscordInvite({\n    Title = "redz Hub | Community",\n    Description = "A community for redz Hub Users.",\n    Banner = "rbxassetid://17382040552",\n    Logo = "rbxassetid://17382040552",\n    Invite = "https://discord.gg/redz-hub",\n    Members = 470000,\n    Online = 20000,\n})` }]
            },
            {
                name: "UI scale",
                snippets: [{ subtitle: "Scale Adjustments", code: `Library:SetUIScale(1.0)\n\nprint(\`UI Max Scale is: {Library:GetMinScale()} and the minimum is: {Library:GetMaxScale()}\`)` }]
            },
            {
                name: "Flags",
                snippets: [
                    {
                        subtitle: "Step 1: Set Flag",
                        code: `Tab:AddToggle({ Name = "Cool Toggle", Flag = "toggle_flag" })`
                    },
                    {
                        subtitle: "Step 2: Get and Apply Flag",
                        code: `local ToggleValue = Window:GetFlag("toggle_flag") or false\n\nTab:AddToggle({\n    Name = "Cool Toggle",\n    Default = ToggleValue,\n    Callback = function(Value)\n        Window:SetFlag("toggle_flag", Value)\n    end\n})`
                    }
                ]
            }
        ]
    }
];

// Flatten array for sequential Next/Back navigation
const flatList = [];
features.forEach((sec) => {
    sec.items.forEach((item) => {
        flatList.push({ sectionName: sec.section, ...item });
    });
});

let currentIndex = -1;

// DOM Elements
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const menuContent = document.getElementById('menu-content');
const welcomeMsg = document.getElementById('welcome-msg');
const contentContainer = document.getElementById('content-container');
const featureTitle = document.getElementById('current-feature-title');
const snippetsContainer = document.getElementById('snippets-container');

// 1. Initialize Menu UI
function renderMenu() {
    menuContent.innerHTML = '';
    
    features.forEach((sec, sIdx) => {
        const secDiv = document.createElement('div');
        secDiv.className = 'menu-section';
        secDiv.innerHTML = `<h3>${sec.section}</h3>`;
        
        sec.items.forEach((item, iIdx) => {
            const btn = document.createElement('button');
            btn.className = 'menu-btn';
            btn.textContent = item.name;
            
            // Calculate global index for this button
            let globalIndex = 0;
            for(let i=0; i < sIdx; i++) globalIndex += features[i].items.length;
            globalIndex += iIdx;
            
            btn.dataset.index = globalIndex;
            
            btn.addEventListener('click', () => {
                selectFeature(globalIndex);
                if(window.innerWidth <= 768) toggleSidebar();
            });
            secDiv.appendChild(btn);
        });
        menuContent.appendChild(secDiv);
    });
}

// 2. Select and display feature (Dynamically create boxes)
function selectFeature(index) {
    currentIndex = index;
    const data = flatList[index];
    
    // Update main UI states
    welcomeMsg.style.display = 'none';
    contentContainer.classList.remove('hidden');
    featureTitle.textContent = `${data.sectionName} > ${data.name}`;
    
    // Clear out old boxes
    snippetsContainer.innerHTML = '';

    // Loop through the snippets array and generate a box for each one
    data.snippets.forEach((snippet, idx) => {
        // Create main box
        const box = document.createElement('div');
        box.className = 'snippet-box';

        // Create header
        const header = document.createElement('div');
        header.className = 'snippet-header';

        const subtitle = document.createElement('span');
        subtitle.className = 'snippet-subtitle';
        subtitle.textContent = snippet.subtitle || `Snippet ${idx + 1}`;

        // Create copy button specific to this box
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy Code';
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(snippet.code).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = 'Copy Code', 2000);
            });
        };

        header.appendChild(subtitle);
        header.appendChild(copyBtn);

        // Create code area
        const pre = document.createElement('pre');
        const codeEl = document.createElement('code');
        codeEl.textContent = snippet.code;
        pre.appendChild(codeEl);

        // Assemble box
        box.appendChild(header);
        box.appendChild(pre);

        // Add to page
        snippetsContainer.appendChild(box);
    });
    
    // Update active button styling in sidebar
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.index) === index);
    });
    
    updateNavButtons();
}

// 3. Navigation Controls
function updateNavButtons() {
    backBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= flatList.length - 1;
}

backBtn.addEventListener('click', () => {
    if (currentIndex > 0) selectFeature(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < flatList.length - 1) selectFeature(currentIndex + 1);
});

// 4. Sidebar Toggle (Three dots button)
function toggleSidebar() {
    sidebar.classList.toggle('hidden');
}
menuBtn.addEventListener('click', toggleSidebar);

// Init
renderMenu();
updateNavButtons();

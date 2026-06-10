// Feature Data Dictionary based on your exact requirements
const features = [
    {
        section: "Setup",
        items: [
            {
                name: "Library",
                code: `local Library = loadstring(game:HttpGet("https://github.com/sokpanha10000-oss/SKUI/releases/latest/download/main.lua"))()`
            }
        ]
    },
    {
        section: "UI",
        items: [
            {
                name: "Window",
                code: `local Window = Library:MakeWindow({\n    Name = "Nice Hub : Cool Game",\n    Author = "dev by real_redz",\n    ScriptFolder = "redz-library-V5-remake-mod",\n    SearchBar = true,\n    UserInfoTop = true,\n    UserInfoTitle = game:GetService("Players").LocalPlayer.DisplayName,\n    UserInfoSubtitle = "Advanced User",\n})`
            },
            {
                name: "Minimizer",
                code: `local Minimizer = Window:NewMinimizer({\n    KeyCode = Enum.KeyCode.LeftControl\n})\n\nlocal MobileButton = Minimizer:CreateMobileMinimizer({\n    Image = "rbxassetid://0",\n    BackgroundColor3 = Color3.fromRGB(0, 0, 0)\n})`
            },
            {
                name: "Tab",
                code: `local Tab = Window:MakeTab({\n    Title = "Cool Tab",\n    Icon = "Home"\n})\n-- OR shorter version\nlocal Tab = Window:MakeTab({ "Cool Tab", "Home" })`
            },
            {
                name: "Section",
                code: `Tab:AddSection("Section")`
            },
            {
                name: "Dialog",
                code: `Window:Dialog({\n    Title = "Hello!",\n    Content = "do you like Coffee?",\n    Options = {\n        { Name = "No" },\n        {\n            Name = "Yes!",\n            Callback = function(self)\n                print("Yes, i like Coffee")\n            end\n        }\n    }\n})`
            },
            {
                name: "Notification",
                code: `Window:Notify({\n    Title = "Notification",\n    Content = "this is a Notification",\n    Image = "rbxassetid://10734953451",\n    Duration = 5\n})`
            }
        ]
    },
    {
        section: "Elements",
        items: [
            {
                name: "Button",
                code: `Tab:AddButton({\n    Name = "My Button",\n    Debounce = 0.5,\n    Callback = function()\n        -- add function logic here\n    end\n})`
            },
            {
                name: "Toggle",
                code: `Tab:AddToggle({\n    Name = "Toggle",\n    Type = "Toggle", -- or [Checkbox]\n    Default = false,\n    Callback = function(Value)\n        -- logic here\n    end\n})`
            },
            {
                name: "Slider",
                code: `Tab:AddSlider({\n    Name = "Cool Title",\n    Min = -5,\n    Max = 5,\n    Increment = 0.25,\n    Default = 0,\n    Callback = function(Value)\n        -- logic here\n    end\n})`
            },
            {
                name: "Dropdown",
                code: `Tab:AddDropdown({\n    Name = "Dropdown",\n    Options = {"one", "two", "three", "four", "five"},\n    Default = "one",\n    Callback = function(Value)\n        -- logic here\n    end\n})\n\n-- Multi Select Variant:\nTab:AddDropdown({\n    Name = "Dropdown",\n    MultiSelect = true,\n    Options = {"one", "two", "three", "four", "five"},\n    Default = {"one", "four"},\n    Callback = function(Value)\n        -- logic here\n    end\n})`
            },
            {
                name: "Textbox",
                code: `Tab:AddTextBox({\n    Name = "My TextBox",\n    Default = "text",\n    Placeholder = "input text...",\n    ClearOnFocus = true,\n    Callback = function(Value)\n        -- logic here\n    end\n})`
            },
            {
                name: "Paragraph",
                code: `Tab:AddParagraph("Paragraph", "This is a Paragraph\\nSecond Line")`
            },
            {
                name: "Discord",
                code: `MainTab:AddDiscordInvite({\n    Title = "redz Hub | Community",\n    Description = "A community for redz Hub Users -- official scripts, updates, and suport in one place.",\n    Banner = "rbxassetid://17382040552", -- You can put an RGB Color: Color3.fromRGB(233, 37, 69)\n    Logo = "rbxassetid://17382040552",\n    Invite = "https://discord.gg/redz-hub",\n    Members = 470000, -- Optional\n    Online = 20000, -- Optional\n})`
            },
            {
                name: "UI scale",
                code: `Library:SetUIScale(1.0)\n\nprint(\`UI Max Scale is: {Library:GetMinScale()} and the minimum is: {Library:GetMaxScale()}\`)`
            },
            {
                name: "Flags",
                code: `Tab:AddToggle({ Name = "Cool Toggle", Flag = "toggle_flag" })\n\nlocal ToggleValue = Window:GetFlag("toggle_flag") or false\n\nTab:AddToggle({\n    Name = "Cool Toggle",\n    Default = ToggleValue,\n    Callback = function(Value)\n        Window:SetFlag("toggle_flag", Value)\n    end\n})`
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
const codeContainer = document.getElementById('code-container');
const codeBlock = document.getElementById('code-block');
const featureTitle = document.getElementById('current-feature-title');
const copyBtn = document.getElementById('copy-btn');

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
                if(window.innerWidth <= 768) toggleSidebar(); // Auto-close on mobile
            });
            secDiv.appendChild(btn);
        });
        menuContent.appendChild(secDiv);
    });
}

// 2. Select and display feature
function selectFeature(index) {
    currentIndex = index;
    const data = flatList[index];
    
    // UI states
    welcomeMsg.style.display = 'none';
    codeContainer.classList.remove('hidden');
    featureTitle.textContent = `${data.sectionName} > ${data.name}`;
    codeBlock.textContent = data.code;
    
    // Update active button styling
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.index) === index);
    });
    
    updateNavButtons();
    copyBtn.textContent = "Copy Code";
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

// 5. Copy Code functionality
copyBtn.addEventListener('click', () => {
    const textToCopy = codeBlock.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
            copyBtn.textContent = "Copy Code";
        }, 2000);
    });
});

// Init
renderMenu();
updateNavButtons();

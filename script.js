// ==========================================
// LIBRARY 1: WAND UI SNIPPETS & MENU
// ==========================================
const wandUIFeatures = [
    {
        section: "Setup",
        items: [
            {
                name: "Loadstring",
                snippets: [{ subtitle: "Load Library", code: `local Library = loadstring(game:HttpGet("https://github.com/sokpanha10000-oss/SKUI/releases/latest/download/main.lua"))()` }]
            }
        ]
    },
    {
        section: "UI Framework",
        items: [
            {
                name: "Window",
                snippets: [{ subtitle: "Main Window Creation", code: `local Window = Library:MakeWindow({\n    Name = "Nice Hub : Cool Game",\n    Author = "dev by real_redz",\n    ScriptFolder = "redz-library-V5-remake-mod",\n    SearchBar = true,\n    UserInfoTop = true,\n    UserInfoTitle = game:GetService("Players").LocalPlayer.DisplayName,\n    UserInfoSubtitle = "Advanced User",\n})` }]
            },
            {
                name: "Minimizer",
                snippets: [
                    { subtitle: "PC Minimizer Keybind", code: `local Minimizer = Window:NewMinimizer({\n    KeyCode = Enum.KeyCode.LeftControl\n})` },
                    { subtitle: "Mobile Minimizer Button", code: `local MobileButton = Minimizer:CreateMobileMinimizer({\n    Image = "rbxassetid://0",\n    BackgroundColor3 = Color3.fromRGB(0, 0, 0)\n})` }
                ]
            },
            {
                name: "Tab",
                snippets: [{ subtitle: "Create Tab", code: `local Tab = Window:MakeTab({ "Cool Tab", "Home" })` }]
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
                snippets: [{ subtitle: "Checkbox / Toggle", code: `Tab:AddToggle({\n    Name = "Toggle",\n    Type = "Toggle",\n    Default = false,\n    Callback = function(Value)\n        -- logic here\n    end\n})` }]
            },
            {
                name: "Slider",
                snippets: [{ subtitle: "Number Slider", code: `Tab:AddSlider({\n    Name = "Cool Title",\n    Min = -5,\n    Max = 5,\n    Increment = 0.25,\n    Default = 0,\n    Callback = function(Value)\n        -- logic here\n    end\n})` }]
            },
            {
                name: "Dropdown",
                snippets: [{ subtitle: "Single Select Dropdown", code: `Tab:AddDropdown({\n    Name = "Dropdown",\n    Options = {"one", "two", "three", "four", "five"},\n    Default = "one",\n    Callback = function(Value)\n        -- logic here\n    end\n})` }]
            },
            {
                name: "Textbox",
                snippets: [{ subtitle: "Text Input", code: `Tab:AddTextBox({\n    Name = "My TextBox",\n    Default = "text",\n    Placeholder = "input text...",\n    ClearOnFocus = true,\n    Callback = function(Value)\n        -- logic here\n    end\n})` }]
            }
        ]
    }
];

// ==========================================
// LIBRARY 2: P4LIB SNIPPETS & MENU
// ==========================================
const p4LibFeatures = [
    {
        section: "Getting Started",
        items: [
            {
                name: "Loadstring",
                snippets: [{ subtitle: "Load P4Lib Library", code: `local P4Lib = loadstring(game:HttpGet("https://raw.githubusercontent.com/sokpanha10000-oss/P4Lib/refs/heads/main/main.lua"))()` }]
            }
        ]
    },
    {
        section: "Core Interface",
        items: [
            {
                name: "Window",
                snippets: [{ subtitle: "Create Main Hub", code: `local Window = P4Lib:CreateWindow({\n\tTitle = "My Super Hub",\n\tImage = "rbxassetid://110407336936647",\n\tColor = "Red",\n\tSubtitle = "by .ftgs and .ftgs",\n\tSearchBar = true\n})` }]
            },
            {
                name: "Minimize Button",
                snippets: [{ subtitle: "Screen Minimizer", code: `local MinimizeBtn = Window:CreateMinimizeBtn({\n\tImage = "rbxassetid://110407336936647",\n\tShape = "Square",\n})` }]
            },
            {
                name: "Notification",
                snippets: [{ subtitle: "Push Notification", code: `P4Lib:Notify({\n    Title = "Notification Title",\n    Content = "Notification Content example!",\n    Duration = 3, -- 3 seconds\n    Icon = "bird",\n})` }]
            }
        ]
    },
    {
        section: "Interactive Elements",
        items: [
            {
                name: "Tab",
                snippets: [{ subtitle: "Create Category Tab", code: `local Tab = Window:CreateTab({ "Main", "home", "Red" })` }]
            },
            {
                name: "Button",
                snippets: [{ subtitle: "Clickable Button", code: `Tab:CreateButton({\n\tTitle = "Button",\n\tLocked = false,\n\tCallback = function()\n\t\tprint("Button clicked")\n\tend\n})` }]
            },
            {
                name: "Dropdown",
                snippets: [{ subtitle: "Dropdown & Refresh Function", code: `local Dropdown = Tab:CreateDropdown({\n\tTitle = "Dropdown",\n\tValues = { "A", "B", "C" },\n\tValue = "A",\n\tCallback = function(option)\n\t\tprint("Category selected: " .. option)\n\tend\n})\n\n-- Call to refresh table values\nDropdown:Refresh({ "A", "B" })` }]
            },
            {
                name: "Toggle",
                snippets: [{ subtitle: "Checkbox Switch", code: `Tab:CreateToggle({\n\tTitle = "Toggle",\n\tDesc = "Toggle Description",\n\tValue = false,\n\tCallback = function(state)\n\t\tprint("Toggle Activated " .. tostring(state))\n\tend\n})` }]
            },
            {
                name: "Slider",
                snippets: [{ subtitle: "Value Slider", code: `Tab:CreateSlider({\n\tTitle = "Slider",\n\tStep = 1,\n\tValue = {\n\t\tMin = 20,\n\t\tMax = 120,\n\t\tDefault = 70,\n\t},\n\tCallback = function(value)\n\t\tprint(value)\n\tend\n})` }]
            },
            {
                name: "Input Box",
                snippets: [{ subtitle: "Text Box Entry", code: `Tab:CreateInput({\n\tTitle = "Input",\n\tValue = "Default value",\n\tPlaceholder = "Enter text...",\n\tCallback = function(input)\n\t\tprint("text entered: " .. input)\n\tend\n})` }]
            }
        ]
    }
];

// ==========================================
// CORE LOGIC & EVENT HANDLING
// ==========================================
let activeLibraryName = 'WandUI';
let currentFeatures = wandUIFeatures;
let flatList = [];
let currentIndex = -1;

// Elements DOM
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const menuContent = document.getElementById('menu-content');
const paginationContainer = document.getElementById('nav-pagination');

const landingView = document.getElementById('landing-view');
const continueCardBtn = document.getElementById('continue-card-btn');
const contentContainer = document.getElementById('content-container');
const featureTitle = document.getElementById('current-feature-title');
const snippetsContainer = document.getElementById('snippets-container');

// Text/UI Switcher Elements
const navTitle = document.getElementById('main-nav-title');
const introTitle = document.getElementById('intro-title');
const descTitle = document.getElementById('desc-title');
const descText1 = document.getElementById('desc-text-1');
const libToggleBtn = document.getElementById('lib-toggle-btn');
const toggleCardTitle = document.getElementById('toggle-card-title');
const toggleCardDesc = document.getElementById('toggle-card-desc');
const thumbnailShowcase = document.getElementById('thumbnail-showcase');

function buildFlatList() {
    flatList = [];
    currentFeatures.forEach((sec) => {
        sec.items.forEach((item) => {
            flatList.push({ sectionName: sec.section, ...item });
        });
    });
}

function updatePageText() {
    if (activeLibraryName === 'WandUI') {
        navTitle.textContent = "Wand UI Docs";
        introTitle.textContent = "About Wand UI";
        descTitle.textContent = "About Wand UI";
        descText1.innerHTML = `<strong>Wand UI</strong> is a Redz Library V5 remake, modified and expanded by <strong>Pirath_4 & STEVEKHMER</strong> and other contributors.`;
        toggleCardTitle.innerHTML = "Switch to P4Lib &gt;";
        toggleCardDesc.textContent = "Currently viewing Wand UI";
        thumbnailShowcase.style.display = "flex"; // Show thumbnail for WandUI
    } else {
        navTitle.textContent = "P4Lib Docs";
        introTitle.textContent = "About P4Lib";
        descTitle.textContent = "About P4Lib Framework";
        descText1.innerHTML = `<strong>P4Lib</strong> is a modular, high-performance UI framework engineered for building streamlined, customizable interfaces directly within your scripting environment.`;
        toggleCardTitle.innerHTML = "Switch to Wand UI &gt;";
        toggleCardDesc.textContent = "Currently viewing P4Lib";
        thumbnailShowcase.style.display = "none"; // Hide thumbnail for P4Lib to look clean
    }
}

// Library Toggle Event Click
libToggleBtn.addEventListener('click', () => {
    if (activeLibraryName === 'WandUI') {
        activeLibraryName = 'P4Lib';
        currentFeatures = p4LibFeatures;
    } else {
        activeLibraryName = 'WandUI';
        currentFeatures = wandUIFeatures;
    }
    
    updatePageText();
    buildFlatList();
    renderMenu();
    
    // Automatically return to the landing screen when changing libraries
    const homeBtn = document.querySelector('.menu-btn');
    if(homeBtn) showLandingMenu(homeBtn);
});

continueCardBtn.addEventListener('click', () => {
    selectFeature(0);
});

function renderMenu() {
    menuContent.innerHTML = '';
    
    const baseDiv = document.createElement('div');
    baseDiv.className = 'menu-section';
    baseDiv.innerHTML = `<h3>Introducing</h3>`;
    const homeBtn = document.createElement('button');
    homeBtn.className = 'menu-btn active';
    homeBtn.textContent = `About ${activeLibraryName}`;
    homeBtn.onclick = () => showLandingMenu(homeBtn);
    baseDiv.appendChild(homeBtn);
    menuContent.appendChild(baseDiv);

    currentFeatures.forEach((sec, sIdx) => {
        const secDiv = document.createElement('div');
        secDiv.className = 'menu-section';
        secDiv.innerHTML = `<h3>${sec.section}</h3>`;
        
        sec.items.forEach((item, iIdx) => {
            const btn = document.createElement('button');
            btn.className = 'menu-btn';
            btn.textContent = item.name;
            
            let globalIndex = 0;
            for(let i=0; i < sIdx; i++) globalIndex += currentFeatures[i].items.length;
            globalIndex += iIdx;
            
            btn.dataset.index = globalIndex;
            
            btn.addEventListener('click', () => {
                selectFeature(globalIndex);
                if(window.innerWidth <= 768) sidebar.classList.remove('active-mobile');
            });
            secDiv.appendChild(btn);
        });
        menuContent.appendChild(secDiv);
    });
}

function showLandingMenu(activeBtnElement) {
    currentIndex = -1;
    contentContainer.classList.add('hidden');
    paginationContainer.classList.add('hiden-element');
    landingView.classList.remove('hidden');
    
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    activeBtnElement.classList.add('active');
}

function selectFeature(index) {
    currentIndex = index;
    const data = flatList[index];
    
    landingView.classList.add('hidden');
    contentContainer.classList.remove('hidden');
    paginationContainer.classList.remove('hiden-element');
    featureTitle.textContent = data.name;
    
    snippetsContainer.innerHTML = '';

    data.snippets.forEach((snippet) => {
        const box = document.createElement('div');
        box.className = 'snippet-box animate-fade';

        const header = document.createElement('div');
        header.className = 'snippet-header';

        const subtitle = document.createElement('span');
        subtitle.className = 'snippet-subtitle';
        subtitle.textContent = snippet.subtitle;

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy';
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(snippet.code).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = 'Copy', 1500);
            });
        };

        header.appendChild(subtitle);
        header.appendChild(copyBtn);

        const pre = document.createElement('pre');
        const codeEl = document.createElement('code');
        codeEl.textContent = snippet.code;
        pre.appendChild(codeEl);

        box.appendChild(header);
        box.appendChild(pre);
        snippetsContainer.appendChild(box);
    });
    
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.index) === index);
    });
    
    updateNavButtons();
}

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

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active-mobile');
});

// Run framework initialization
buildFlatList();
renderMenu();
updateNavButtons();

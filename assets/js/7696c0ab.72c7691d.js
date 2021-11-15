"use strict";(self.webpackChunkqb_docs=self.webpackChunkqb_docs||[]).push([[626],{3633:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),s=["components"],o={sidebar_position:3},l="Shared Config",d={unversionedId:"shared",id:"shared",isDocsHomePage:!1,title:"Shared Config",description:"The shared.lua file inside qb-core contains all the information for your jobs, vehicles, items & more! You will spend a lot of time in this file configuring everything to your exact specifications. Jenkins hashes are used frequently, you can find more information on those here",source:"@site/docs/shared.md",sourceDirName:".",slug:"/shared",permalink:"/qb-docs/docs/shared",editUrl:"https://github.com/qbcore-framework/qb-docs/edit/main/docs/docs/shared.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Server Config",permalink:"/qb-docs/docs/config"},next:{title:"Player Data",permalink:"/qb-docs/docs/player"}},m=[],h={toc:m};function c(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shared-config"},"Shared Config"),(0,r.kt)("p",null,"The shared.lua file inside qb-core contains all the information for your jobs, vehicles, items & more! You will spend a lot of time in this file configuring everything to your exact specifications. Jenkins hashes are used frequently, you can find more information on those ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cookbook.fivem.net/2019/06/23/lua-support-for-compile-time-jenkins-hashes/"},"here"))),(0,r.kt)("p",null,"Here is a simplified example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"QBShared = {}\n\n-- Utility (can be ignored)\n\nlocal StringCharset = {}\nlocal NumberCharset = {}\n\nfor i = 48,  57 do NumberCharset[#NumberCharset+1] = string.char(i) end\nfor i = 65,  90 do StringCharset[#StringCharset+1] = string.char(i) end\nfor i = 97, 122 do StringCharset[#StringCharset+1] = string.char(i) end\n\nQBShared.RandomStr = function(length)\n    if length <= 0 then return '' end\n    return QBShared.RandomStr(length - 1) .. StringCharset[math.random(1, #StringCharset)]\nend\n\nQBShared.RandomInt = function(length)\n    if length <= 0 then return '' end\n    return QBShared.RandomInt(length - 1) .. NumberCharset[math.random(1, #NumberCharset)]\nend\n\nQBShared.SplitStr = function(str, delimiter)\n    local result = { }\n    local from = 1\n    local delim_from, delim_to = string.find(str, delimiter, from)\n    while delim_from do\n        result[#result+1] = string.sub(str, from, delim_from - 1)\n        from = delim_to + 1\n        delim_from, delim_to = string.find(str, delimiter, from)\n    end\n    result[#result+1] = string.sub(str, from)\n    return result\nend\n\n-- Utility (can be ignored)\n\nQBShared.StarterItems = { -- The items given to the player on first creation\n    ['phone'] = {amount = 1, item = 'phone'},\n    ['id_card'] = {amount = 1, item = 'id_card'},\n    ['driver_license'] = {amount = 1, item = 'driver_license'},\n}\n\nQBShared.Items = {\n    ['id_card'] = {\n        ['name'] = 'id_card', -- Actual item name for spawning/giving/removing\n        ['label'] = 'ID Card', -- Label of item that is shown in inventory slot\n        ['weight'] = 0, -- How much the items weighs\n        ['type'] = 'item', -- What type the item is (ex: item, weapon)\n        ['image'] = 'id_card.png', -- This item image that is found in qb-inventory/html/images (must be same name as ['name'] from above)\n        ['unique'] = true, -- Is the item unique (true|false) - Cannot be stacked & accepts item info to be assigned\n        ['useable'] = true, -- Is the item useable (true|false) - Must still be registered as useable\n        ['shouldClose'] = false, -- Should the item close the inventory on use (true|false)\n        ['combinable'] = nil, -- Is the item able to be combined with another? (nil|table)\n        ['description'] = 'A card containing all your information to identify yourself' -- Description of time in inventory\n    }\n}\n\n-- Example of an item that is combinable and not nil\n\n['combinable'] = {\n    accept = {'snspistol_part_1'}, -- The other item that can be it can be combined with\n    reward = 'snspistol_stage_1', -- The item that is rewarded upon successful combine\n    anim = { -- Set the animation, progressbar text and length of time it takes to combine\n        ['dict'] = 'anim@amb@business@weed@weed_inspecting_high_dry@', -- The animation dictionary\n        ['lib'] = 'weed_inspecting_high_base_inspector', -- The animation library\n        ['text'] = 'Atttaching attachments', -- Text that will be displayed in the progress bar\n        ['timeOut'] = 15000,} -- How long the animation should take to complete\n    }\n}\n\n-- Weapons are added to the items table as well as here for hashes (possibly deprecated soon to prevent duplicate entry)\n\nQBShared.Weapons = {\n    [`weapon_pistol`] = { -- Weapon hash (uses compile-time Jenkins hashes - See link at bottom of page)\n        ['name'] = 'weapon_pistol', -- Actual item name for spawning/giving/removing\n        ['label'] = 'Walther P99', -- Label of item that is shown in inventory slot\n        ['weight'] = 1000, -- How much the items weighs\n        ['type'] = 'weapon', -- What type the item is (ex: item, weapon)\n        ['ammotype'] = 'AMMO_PISTOL', -- The type of ammo this weapon accepts\n        ['image'] = 'weapon_pistol.png', -- This item image that is found in qb-inventory/html/images (must be same name as ['name'] from above)\n        ['unique'] = true, -- Is the item unique (true|false) - Cannot be stacked & accepts item info to be assigned\n        ['useable'] = false, -- Is the item useable (true|false) - Must still be registered as useable\n        ['description'] = 'A small firearm designed to be held in one hand' -- Description of time in inventory\n    }\n}\n\nQBShared.Gangs = {\n    ['mynewgang'] = { -- (table index)\n        label = 'My Fancy Gang Name', -- Label of the gang (string)\n        grades = {\n            ['0'] = { -- The grade to assign with /setgang id gangname grade (table index)\n                name = 'I am grade 0'\n            },\n            ['1'] = {\n                name = 'I am grade 1' -- Label of the gang grade (string)\n            },\n            ['2'] = {\n                name = 'I am grade 2'\n            },\n            ['3'] = {\n                name = 'I am grade 3',\n                isboss = true -- Indicated this grade as a boss level for certain access (boolean|true)\n            },\n        },\n    }\n}\n\nQBShared.Vehicles = {\n    ['adder'] = { -- Vehicle model/spawn name (string)\n        ['name'] = 'Adder', -- Desired name/label for the vehicle (string)\n        ['brand'] = 'Truffade', -- The brand of vehicle (string)\n        ['model'] = 'adder', -- Vehicle model/spawn name (string)\n        ['price'] = 280000, -- How much the vehicle costs at the dealership (integer)\n        ['category'] = 'super', -- The category the vehicle will display in at the dealership (string)\n        ['hash'] = `adder`, -- Vehicle hash key (jenkins hash || GetHashKey(model))\n        ['shop'] = 'pdm', -- The desired shop the vehicle is available for sale at (string)\n    }\n}\n\n-- Jobs\nQBShared.ForceJobDefaultDutyAtLogin = true -- true: Force duty state to jobdefaultDuty | false: set duty state from database last saved\nQBShared.Jobs = {\n    ['unemployed'] = {\n        label = 'Civilian',\n        defaultDuty = true,\n        grades = {\n            ['0'] = {\n                name = 'Freelancer',\n                payment = 10\n            },\n        },\n    },\n    ['police'] = {\n        label = 'Law Enforcement',\n        defaultDuty = true,\n        grades = {\n            ['0'] = {\n                name = 'Recruit',\n                payment = 50\n            },\n            ['1'] = {\n                name = 'Officer',\n                payment = 75\n            },\n            ['2'] = {\n                name = 'Sergeant',\n                payment = 100\n            },\n            ['3'] = {\n                name = 'Lieutenant',\n                payment = 125\n            },\n            ['4'] = {\n                name = 'Chief',\n                isboss = true,\n                payment = 150\n            },\n        },\n    },\n")))}c.isMDXComponent=!0}}]);
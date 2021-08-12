_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{"76XO":function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"default",(function(){return h}));var o=n("Ff2n"),i=n("rePB"),r=(n("q1tI"),n("7ljp")),a=n("aArQ");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c,b={__resourcePath:"docs/modding/creating-textures.md",__scans:{},title:"Creating custom textures for Plutonium",layout:"index"},d=(c="Alert",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",p({},e))}),s={frontMatter:b},u=a.a;function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(u,p(p(p({},s),n),{},{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",p({},{id:"creating-custom-textures-for-plutonium"}),"Creating custom textures for Plutonium"),Object(r.b)("h2",p({},{id:"requirements"}),"Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",p({parentName:"li"},{href:"https://drive.google.com/file/d/1NEEvbvLOatItpMIyWyQ9ytkk1bvgKQMD/view?usp=sharing"}),"Texture Toolkit")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",p({parentName:"li"},{href:"https://www.getpaint.net/download.html"}),"Paint.NET")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",p({parentName:"li"},{href:"https://7-zip.org/"}),"7Zip")," or ",Object(r.b)("a",p({parentName:"li"},{href:"https://www.rarlab.com/download.htm"}),"WinRAR"))),Object(r.b)(d,{variant:"tip",mdxType:"Alert"},Object(r.b)("p",null,"Photoshop can be used as an alternative to Paint.NET but since it's not free we're not going to provide a download link here. When using Photoshop you need the ",Object(r.b)("a",p({parentName:"p"},{href:"https://software.intel.com/content/www/us/en/develop/articles/intel-texture-works-plugin.html"}),"Intel Texture Works Plugin")," installed to be able to load and save .dds textures.")),Object(r.b)("h3",p({},{id:"getting-started"}),"Getting Started"),Object(r.b)("p",null,"1","."," Create a new folder anywhere on your pc, this is going to be used to store files while creating your custom texture."),Object(r.b)("p",null,"2","."," Download and extract the Texture Toolkit into the folder you created, your folder should now look like this:"),Object(r.b)("p",null,Object(r.b)("img",p({parentName:"p"},{src:"https://i.imgur.com/wPdsCNN.png",alt:"CustomCamosFolder"}))),Object(r.b)("p",null,"3","."," Install Paint.NET or install Photoshop and the Intel Texture Works Plugin."),Object(r.b)("p",null,"4","."," Locate the folder of the game you want to create a custom texture/camo for."),Object(r.b)("h2",p({},{id:"exporting-the-texture-you-want-to-modify"}),"Exporting the Texture you want to modify"),Object(r.b)("p",null,"To modify a texture we first have to export it from the corresponding game files. This works pretty much the same for T4 and IW5 but works differently for T6."),Object(r.b)("h3",p({},{id:"t4-and-iw5"}),"T4 and IW5"),Object(r.b)("p",null,"1","."," Navigate to the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," folder in your game folder."),Object(r.b)("p",null,"2","."," Open one or more of the .iwd files (iw_xx.iwd) with 7Zip or WinRAR (right click the file -> open with... -> select 7Zip or WinRAR)."),Object(r.b)("p",null,"3","."," Locate the texture you want to modify inside the .iwd file and extract it to the folder you created earlier (simply drag and drop it out of the 7Zip/WinRAR window)."),Object(r.b)("p",null,"4","."," Open the folder that contains the files from the Texture Toolkit in a new explorer window."),Object(r.b)("p",null,"5","."," Open ",Object(r.b)("inlineCode",{parentName:"p"},"IWI_X_DDS.exe")," and Drag and drop the previously extracted .iwi file onto the IWI_X_DDS window, this will convert the .iwi file to .dds"),Object(r.b)(d,{variant:"warning",mdxType:"Alert"},Object(r.b)("p",null,"If the filename of the .iwi file contains ",Object(r.b)("inlineCode",{parentName:"p"},"~")," or similar symbols the converter will replace those with ",Object(r.b)("inlineCode",{parentName:"p"},"_"),", this means you need to change the name of the .dds so the filename is exactly the same as the one of the original .iwi file.")),Object(r.b)("h3",p({},{id:"t6"}),"T6"),Object(r.b)("p",null,"1","."," Navigate to the ",Object(r.b)("inlineCode",{parentName:"p"},"all")," folder located inside the ",Object(r.b)("inlineCode",{parentName:"p"},"zone")," folder in your T6 game folder."),Object(r.b)("p",null,"2","."," Open the ",Object(r.b)("inlineCode",{parentName:"p"},"T6 iPak Exporter")," folder included in the Texture Toolkit in a new explorer window."),Object(r.b)("p",null,"3","."," Drag and drop an .ipak file from the ",Object(r.b)("inlineCode",{parentName:"p"},"all")," folder onto ",Object(r.b)("inlineCode",{parentName:"p"},"Tom_BO2_iPak.exe"),", this will export all textures from the .ipak directly to .dds."),Object(r.b)(d,{variant:"tip",mdxType:"Alert"},Object(r.b)("p",null,"Most game textures are located in base.ipak, the dlc-specific ones are located in dlc0/1/2/3/4.ipak.")),Object(r.b)(d,{variant:"tip",mdxType:"Alert"},Object(r.b)("p",null,"Finding the correct texture can be tedious, you may have to convert and look at multiple textures before you find the one you're looking for. The best way is to simply look at the filenames and filesizes of the .iwi's, weapon camos usually start with ",Object(r.b)("inlineCode",{parentName:"p"},"weapon_")," or ",Object(r.b)("inlineCode",{parentName:"p"},"wpn_")," and are >1MB in size.")),Object(r.b)("h2",p({},{id:"modifying-your-texture"}),"Modifying your Texture"),Object(r.b)("p",null,"1","."," Open the .dds file with Paint.NET or Photoshop and edit it to your liking"),Object(r.b)("p",null,"2","."," As soon as you're done editing it save the file:"),Object(r.b)("h3",p({},{id:"exportingsaving-the-file-in-paintnet"}),"Exporting/Saving the file in Paint.NET"),Object(r.b)("p",null,"In Paint.NET simply click ",Object(r.b)("inlineCode",{parentName:"p"},"File -> save as")," and save the file in the folder you created earlier, you can overwrite the original .dds file."),Object(r.b)("h3",p({},{id:"exportingsaving-the-file-in-photoshop"}),"Exporting/Saving the file in Photoshop"),Object(r.b)("p",null,"1","."," In Photoshop check if the texture contains an alpha channel, you can check in the menu on the right, switch to the ",Object(r.b)("inlineCode",{parentName:"p"},"Channels")," tab."),Object(r.b)("p",null,Object(r.b)("img",p({parentName:"p"},{src:"https://i.imgur.com/XLu1OXu.png",alt:"PhotoshopChannels"}))),Object(r.b)("p",null,"2","."," Go to ",Object(r.b)("inlineCode",{parentName:"p"},"file -> save as")," and select ",Object(r.b)("inlineCode",{parentName:"p"},'Intel Texture Works (*.DDS, *,DDS)" Format')," (below ",Object(r.b)("inlineCode",{parentName:"p"},"File Name"),"), select the previously created folder as your destination and hit save (you can overwrite the original .dds file)."),Object(r.b)("p",null,"3","."," A dialogue should pop up that lets you define different compression settings, depending on if your texture contains an alpha channel, no alpha channel or is a normal map select the texture type and compression like so:"),Object(r.b)("p",null,Object(r.b)("img",p({parentName:"p"},{src:"https://i.imgur.com/pl2Yl5A.png",alt:"PhotoshopIntelTextureWorks"}))),Object(r.b)("p",null,"4","."," Hit ",Object(r.b)("inlineCode",{parentName:"p"},"Ok")," to save the file."),Object(r.b)("h2",p({},{id:"converting-the-texture-back-to-iwi-and-loading-it-in-game"}),"Converting the Texture back to iwi and loading it in-game"),Object(r.b)("p",null,"1","."," Drag and drop your modified .dds file onto ",Object(r.b)("inlineCode",{parentName:"p"},"iwi_dds_fast_converter.exe")," which also comes with the Texture Toolkit."),Object(r.b)("p",null,"2","."," Type in the number that corresponds to the game you're creating a texture for and hit enter."),Object(r.b)("p",null,Object(r.b)("img",p({parentName:"p"},{src:"https://i.imgur.com/lbpMNSK.png",alt:"IwiDDSConverter"}))),Object(r.b)("p",null,"3","."," The converter will create an .iwi file next to your .dds file, ",Object(r.b)("a",p({parentName:"p"},{href:"./loading-textures.md"}),"click here to get to the part of the documentation that explains how to load your modified texture in-game"),"."),Object(r.b)(d,{variant:"warning",mdxType:"Alert"},Object(r.b)("p",null,"Do not attempt to load your modified textures by putting them back into the original .iwd file, use our designated folders which is explained in the link above.")))}h.isMDXComponent=!0},VLsy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/modding/creating-textures",function(){return n("76XO")}])}},[["VLsy",0,1,2,3,4,5]]]);
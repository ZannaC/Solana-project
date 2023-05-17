"use strict";
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("container");
  var infoData = [
    {
      theme: "Solana Cookbook",
      info: "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
    },
    {
      theme: "Solana Stack Exchange",
      info: "Solana Stack Exchange is a question and answer site for Solana software users and developers.",
    },
    {
      theme: "Solana Playground",
      info: "Easily build, deploy and test Solana programs and smart contracts from a browser IDE.",
    },
    {
      theme: "create-solana-dapp",
      info: "Get up and running fast with Solana dApps, generate a project template in seconds.",
    },
    {
      theme: "Anchor Docs",
      info: "Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.",
    },
    {
      theme: "Solana Program Library",
      info: "The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.",
    },
    {
      theme: "Program Examples",
      info: "A list of curated examples for a wide range of use cases implemented using on-chain programs.",
    },
  ];

  infoData.forEach(function (data) {
    var infoBlock = document.createElement("div");
    infoBlock.classList.add("dig_deeper_info_block");

    var libraryElement = document.createElement("h6");
    libraryElement.classList.add("library");
    libraryElement.textContent = "tool / library";

    var themeElement = document.createElement("div");
    themeElement.classList.add("dig_deeper_info_block_theme");
    themeElement.textContent = data.theme;

    var infoElement = document.createElement("div");
    infoElement.classList.add("dig_deeper_info_block_info");
    infoElement.textContent = data.info;

    var learnElement = document.createElement("div");
    learnElement.classList.add("dig_deeper_learn-more");
    learnElement.textContent = "Learn more";

    var btnLinkElement = document.createElement("a");
    btnLinkElement.classList.add("btn_arrow45");
    btnLinkElement.href = "#";

    var btnImageElement = document.createElement("img");
    btnLinkElement.classList.add("btn_arrow45_image");

    btnImageElement.src = "images/dig_deeper_image/arrow45.svg";

    learnElement.appendChild(btnImageElement);
    infoBlock.appendChild(libraryElement);
    infoBlock.appendChild(themeElement);
    infoBlock.appendChild(infoElement);
    infoBlock.appendChild(learnElement);

    container.appendChild(infoBlock);
  });
});

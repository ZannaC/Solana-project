"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("dig-deeper");
  const infoData = [
    {
      theme: "Core Documentation",
      info: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",
    },
    {
      theme: "Core Documentation",
      info: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",
    },

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
    const infoBlock = document.createElement("div");
    infoBlock.classList.add("dig-deeper-info-block");

    const libraryElement = document.createElement("h6");
    libraryElement.classList.add("library");
    libraryElement.textContent = "tool / library";

    const themeElement = document.createElement("div");
    themeElement.classList.add("dig-deeper-info-block-theme");
    themeElement.textContent = data.theme;

    const infoElement = document.createElement("div");
    infoElement.classList.add("dig-deeper-info-block-info");
    infoElement.textContent = data.info;

    const learnElement = document.createElement("div");
    learnElement.classList.add("dig-deeper-learn-more");
    learnElement.textContent = "Learn more";

    const btnLinkElement = document.createElement("a");
    btnLinkElement.classList.add("btn-arrow45");
    btnLinkElement.href = "#";

    const btnImageElement = document.createElement("img");
    btnLinkElement.classList.add("btn-arrow45-image");

    btnImageElement.src = "images/dig-deeper-image/arrow45.svg";

    learnElement.appendChild(btnImageElement);
    infoBlock.appendChild(libraryElement);
    infoBlock.appendChild(themeElement);
    infoBlock.appendChild(infoElement);
    infoBlock.appendChild(learnElement);

    container.appendChild(infoBlock);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sourceContainer = document.getElementById("go-to-the-source-container");
  const sourceData = [
    {
      title: "Solana Docs",
      info: "Learn how Solana works and get a high-level understanding of Solana's architecture.",
    },
    {
      title: "Metaplex Docs",
      info: "Learn what you build with Metaplex, make the process of creating and launching NFTs easier.",
    },
  ];

  // sourceData.forEach(function (data) {
  //   const sourceSection = document.createElement("div");
  //   sourceSection.classList.add("source-section-docs");

  //   const titleBtn = document.createElement("div");
  //   titleBtn.classList.add("source-title-btn");

  //   const docsTitle = document.createElement("div");
  //   docsTitle.classList.add("source-section-docs-title");
  //   docsTitle.textContent = data.title;

  //   const docsViewAll = document.createElement("div");
  //   docsViewAll.classList.add("source-section-docs-view-all");
  //   docsViewAll.textContent = "View all";

  //   const sourceBtnLink = document.createElement("a");
  //   sourceBtnLink.classList.add("btn-arrow45");
  //   sourceBtnLink.href = "#";

  //   const sourceBtnImage = document.createElement("img");
  //   sourceBtnImage.classList.add("btn-arrow45-source");
  //   sourceBtnImage.src = "images/dig-deeper-image/arrow45.svg";

  //   const docsLine = document.createElement("div");
  //   docsLine.classList.add("source-section-docs-line");
  //   docsLine.textContent = data.theme;

  //   const rectangleImage = document.createElement("img");
  //   rectangleImage.classList.add("rectangle-image");
  //   rectangleImage.src = "images/source-section-image/Rectangle.svg";

  //   const sourceDocsInfo = document.createElement("div");
  //   sourceDocsInfo.classList.add("source-section-docs-info");

  //   const docsInfo = document.createElement("h4");
  //   docsInfo.classList.add("docs-info");
  //   docsInfo.textContent = data.info;

  //   docsLine.appendChild(rectangleImage);
  //   docsViewAll.appendChild(sourceBtnImage);
  //   sourceSection.appendChild(docsTitle);
  //   sourceSection.appendChild(docsViewAll);
  //   sourceSection.appendChild(docsLine);
  //   sourceSection.appendChild(docsInfo);

  //   sourceContainer.appendChild(sourceSection);
  // });
});

const fs = require("fs");
const path = require("path");

const postsDir = path.join(process.cwd(), "posts");
const amazonTag = "kitchenease35-20";

function addAffiliateTag(url) {
  if (url.includes("tag=")) return url;
  return url.includes("?")
    ? `${url}&tag=${amazonTag}`
    : `${url}?tag=${amazonTag}`;
}

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");

  const amazonLinkRegex = /https?:\/\/(?:www\.)?amazon\.com\/[^\s)"]+/g;
  const updated = content.replace(amazonLinkRegex, (match) => addAffiliateTag(match));

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, "utf-8");
    console.log(`✅ Updated: ${path.basename(filePath)}`);
  } else {
    console.log(`ℹ️ No changes needed: ${path.basename(filePath)}`);
  }
}

fs.readdirSync(postsDir).forEach((file) => {
  if (file.endsWith(".md")) {
    updateFile(path.join(postsDir, file));
  }
});

console.log("🎉 Done adding Amazon affiliate tags!");

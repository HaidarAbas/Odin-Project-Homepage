// REMINDER!! appened script:deploy in package.json with branch name

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function generateSVGPlaceholder() {
    const bgColor = generateRandomColor();

    const ns = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "project-screenshot");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("style", `fill:contrast-color(${bgColor});`);

    const svgRect = document.createElementNS(ns, "rect");
    svgRect.setAttribute("width", "100%");
    svgRect.setAttribute("height", "100%");
    svgRect.setAttribute("style", `fill:${bgColor}`);
    
    const svgText = document.createElementNS(ns, "text");
    svgText.setAttribute("y", "50%");

    const svgTspan1 = document.createElementNS(ns, "tspan");
    svgTspan1.setAttribute("x", "50%");
    svgTspan1.setAttribute("style", "text-anchor:middle;");
    svgTspan1.textContent = "screenshot";

    const svgTspan2 = document.createElementNS(ns, "tspan");
    svgTspan2.setAttribute("x", "50%");
    svgTspan2.setAttribute("dy", "60");
    svgTspan2.setAttribute("style", "text-anchor:middle;");
    svgTspan2.textContent = "of project";

    svgText.append(svgTspan1, svgTspan2);
    svg.append(svgRect, svgText);

    return svg;
}

const pss = document.getElementsByClassName("project-screenshot");

for (const shot of pss) {
    if (shot.hasAttribute("src") && shot.getAttribute("src") === "") {
        shot.replaceWith(generateSVGPlaceholder());
    }
}
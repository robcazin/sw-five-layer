async function fetchColors() {
    try {
        const response = await fetch('colors.json');
        const colors = await response.json();
        displayColors(colors);
    } catch (error) {
        console.error('Error fetching color data:', error);
    }
}

function displayColors(colors) {
    const colorList = document.getElementById('color-list');
    colors.forEach(color => {
        const colorItem = document.createElement('div');
        colorItem.className = 'color-item';
        colorItem.style.backgroundColor = `#${color.hex}`;
        colorItem.textContent = `${color.color_name} (#${color.hex})`;
        colorList.appendChild(colorItem);
    });
}

fetchColors();

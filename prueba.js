
 try {
        // Cache-busting: fuerza descarga fresca de base.html en cada carga
        const response = await fetch("../php/base.php?v=" + Date.now());
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();

const = "prueba de pushh !!!
"

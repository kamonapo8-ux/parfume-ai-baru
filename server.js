async function analisis(){

    let text = document.getElementById("input").value;

    const API_KEY = "ISI_API_KEY_OPENAI_KAMU";

    let response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Kamu adalah master perfumer dan marketing parfum Indonesia."
                },
                {
                    role: "user",
                    content: `
Analisis parfum berikut:

${text}

Berikan:
1. Karakter aroma
2. Kesan parfum
3. Target market Indonesia
4. Saran formula
5. Nama brand parfum
6. Ketahanan jam
7. Harga jual Indonesia
8. Cocok cuaca tropis atau tidak
                    `
                }
            ]
        })
    });

    let data = await response.json();

    document.getElementById("hasil").innerText =
        data.choices[0].message.content;
}
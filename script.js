document.getElementById('sessionForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const sessionId = generateSessionId();
    document.getElementById('sessionId').textContent = sessionId;
    document.getElementById('result').classList.remove('hidden');
});

function generateSessionId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let sessionId = '';
    for (let i = 0; i < 16; i++) {
        sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return sessionId;
}

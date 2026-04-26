document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    const successBox = document.getElementById('success');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect data
        const orderData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            roblox: document.getElementById('roblox').value,
            country: document.getElementById('country').value,
            idea: document.getElementById('idea').value,
            payment: document.getElementById('payment').value,
            discord: document.getElementById('discord').value,
            date: new Date().toLocaleString()
        };
        
        // Hide form, show success
        form.style.display = 'none';
        successBox.style.display = 'block';
        
        // Email (manual fallback)
        const subject = `🆕 NEW ROBLOX ORDER: ${orderData.name}`;
        const body = `
NAME: ${orderData.name}
EMAIL: ${orderData.email}
ROBLOX: ${orderData.roblox}
COUNTRY: ${orderData.country}
GAME IDEA: ${orderData.idea}
PAYMENT: ${orderData.payment}
DISCORD: ${orderData.discord}
ORDER TIME: ${orderData.date}

=== SEND THEM PAYMENT INFO ===
🇵🇰 280 PKR → Easypaisa/JazzCash: 03XXXXXXXXX
🌍 $1 USD → PayPal: adilmaxhar@gmail.com
        `.trim();
        
        // Open email client
        window.location.href = `mailto:adilmaxhar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Scroll to top
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    
    // Smooth scroll
    document.querySelector('.cta-btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('order').scrollIntoView({behavior: 'smooth'});
    });
    
    // Copy email on click
    document.body.addEventListener('click', function(e) {
        if (e.target.textContent.includes('adilmaxhar@gmail.com')) {
            navigator.clipboard.writeText('adilmaxhar@gmail.com');
            const original = e.target.textContent;
            e.target.textContent = '✅ Copied!';
            setTimeout(() => e.target.textContent = original, 1500);
        }
    });
});

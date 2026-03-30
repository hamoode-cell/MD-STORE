// --- إعدادات المتجر المركزية ---
const shopSettings = {
    walletNumber: "09887777", // ضع رقم محفظتك هنا
    exchangeRate: 1500,       // ضع سعر صرف الدولار مقابل الليرة هنا
};

// --- الوظيفة التي تحدد البيانات في التطبيق تلقائياً ---
function updateStoreData() {
    // 1. تحديث رقم المحفظة في كل الأقسام
    const walletElements = document.querySelectorAll('.wallet-link');
    walletElements.forEach(el => {
        el.innerText = shopSettings.walletNumber;
    });

    // 2. تحديث وتحويل الأسعار تلقائياً
    const priceElements = document.querySelectorAll('.convert-price');
    priceElements.forEach(el => {
        // نأخذ السعر بالدولار الموجود في خاصية data-usd
        let usdAmount = parseFloat(el.getAttribute('data-usd'));
        if (!isNaN(usdAmount)) {
            let finalPrice = usdAmount * shopSettings.exchangeRate;
            // إظهار النتيجة مع تنسيق الفواصل (مثلاً 15,000)
            el.innerText = finalPrice.toLocaleString() + " ل.س";
        }
    });
}

// تشغيل التحديث بمجرد فتح الصفحة
window.onload = updateStoreData;

// Translations object for each language
const translations = {
    en: {
        // Header
        download_app_button: "Download the app",
        about_button: "About",
        search_placeholder: "Search...",
        login_button: "Login",

        // Main Content Items
        fashion_title: "Fashion & Accessories",
        fashion_description: "Witness the evolution of style in our new collection.",
        fragrance_title: "Fragrance & Beauty",
        fragrance_description: "Discover exquisite scents and beauty products.",
        bridal_title: "Bridal Fashion",
        bridal_description: "Experience elegant, sophisticated bridal fashion.",
        shop_now_button: "Shop Now",

        // Footer
        customer_care_title: "Customer Care",
        faqs_link: "FAQs",
        shipping_link: "Shipping & Delivery",
        returns_link: "Return & Exchange",
        company_info_title: "Company Info",
        about_us_link: "About Us",
        privacy_policy_link: "Privacy Policy",
        terms_conditions_link: "Terms and Conditions",
        quick_link_title: "Quick Link",
        track_order_link: "Track Order",
        write_review_link: "How To Write A Review",
        newsletter_title: "Newsletter",
        newsletter_description: "Check your email to confirm your subscription.",
        email_placeholder: "Enter Your Email Address",
        subscribe_button: "Subscribe"
    },
    si: { // Sinhala translations
        // Header
        download_app_button: "යෙදුම බාගන්න",
        about_button: "ගැන",
        search_placeholder: "සොයන්න...",
        login_button: "පිවිසෙන්න",

        // Main Content Items
        fashion_title: "විලාසිතා සහ උපාංග",
        fashion_description: "අපගේ නව එකතුවෙහි විලාසිතා පරිණාමය සාක්ෂාත් කරගන්න.",
        fragrance_title: "සුවඳ විලවුන් සහ රූපලාවණ්‍ය",
        fragrance_description: "විශිෂ්ට සුවඳ විලවුන් සහ රූපලාවණ්‍ය නිෂ්පාදන සොයා ගන්න.",
        bridal_title: "මනාලියන්ගේ විලාසිතා",
        bridal_description: "අලංකාර, නවීන මනාලියන්ගේ විලාසිතා අත්විඳින්න.",
        shop_now_button: "දැන් මිලදී ගන්න",

        // Footer
        customer_care_title: "පාරිභෝගික සේවය",
        faqs_link: "නිතර අසන ප්‍රශ්න",
        shipping_link: "නැව්ගත කිරීම සහ බෙදා හැරීම",
        returns_link: "ආපසු ලබා දීම් සහ හුවමාරු",
        company_info_title: "සමාගම් තොරතුරු",
        about_us_link: "අපි ගැන",
        privacy_policy_link: "රහස්‍යතා ප්‍රතිපත්තිය",
        terms_conditions_link: "නියම සහ කොන්දේසි",
        quick_link_title: "ඉක්මන් සබැඳි",
        track_order_link: "ඇණවුම් තත්ත්වය",
        write_review_link: "සමාලෝචනයක් ලියන්නේ කෙසේද",
        newsletter_title: "පුවත් පත්‍රිකාව",
        newsletter_description: "ඔබේ දායකත්වය තහවුරු කිරීමට ඔබේ විද්‍යුත් තැපෑල පරීක්ෂා කරන්න.",
        email_placeholder: "ඔබේ විද්‍යුත් තැපැල් ලිපිනය ඇතුළත් කරන්න",
        subscribe_button: "දායක වන්න"
    },
    ta: { // Tamil translations
        // Header
        download_app_button: "பயன்பாட்டைப் பதிவிறக்குங்கள்",
        about_button: "பற்றி",
        search_placeholder: "தேடு...",
        login_button: "உள்நுழை",

        // Main Content Items
        fashion_title: "பேஷன் மற்றும் ஆக்சஸரீஸ்",
        fashion_description: "எங்கள் புதிய தொகுப்பில் பாணியின் பரிணாம வளர்ச்சியைக் காணுங்கள்.",
        fragrance_title: "வாசனை திரவியம் மற்றும் அழகு",
        fragrance_description: "அழகிய வாசனை திரவியங்கள் மற்றும் அழகு சாதனப் பொருட்களைக் கண்டறியவும்.",
        bridal_title: "திருமண பேஷன்",
        bridal_description: "நேர்த்தியான, அதிநவீன திருமண பேஷனை அனுபவியுங்கள்.",
        shop_now_button: "இப்போது வாங்குங்கள்",

        // Footer
        customer_care_title: "வாடிக்கையாளர் சேவை",
        faqs_link: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        shipping_link: "கப்பல் போக்குவரத்து மற்றும் விநியோகம்",
        returns_link: "திரும்பப் பெறுதல் மற்றும் பரிமாற்றம்",
        company_info_title: "நிறுவன தகவல்",
        about_us_link: "எங்களை பற்றி",
        privacy_policy_link: "தனியுரிமைக் கொள்கை",
        terms_conditions_link: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
        quick_link_title: "விரைவு இணைப்பு",
        track_order_link: "ஆர்டரை கண்காணிக்கவும்",
        write_review_link: "விமர்சனம் எழுதுவது எப்படி",
        newsletter_title: "செய்திமடல்",
        newsletter_description: "உங்கள் சந்தாவை உறுதிப்படுத்த உங்கள் மின்னஞ்சலைச் சரிபார்க்கவும்.",
        email_placeholder: "உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்",
        subscribe_button: "சந்தா செலுத்து"
    },
    ja: { // Japanese translations
        // Header
        download_app_button: "アプリをダウンロード",
        about_button: "について",
        search_placeholder: "検索...",
        login_button: "ログイン",

        // Main Content Items
        fashion_title: "ファッション＆アクセサリー",
        fashion_description: "私たちの新しいコレクションでスタイルの進化を目撃してください。",
        fragrance_title: "フレグランス＆ビューティー",
        fragrance_description: "絶妙な香りと美容製品を発見してください。",
        bridal_title: "ブライダルファッション",
        bridal_description: "エレガントで洗練されたブライダルファッションを体験してください。",
        shop_now_button: "今すぐ購入",

        // Footer
        customer_care_title: "カスタマーケア",
        faqs_link: "よくある質問",
        shipping_link: "配送と配達",
        returns_link: "返品と交換",
        company_info_title: "会社情報",
        about_us_link: "私たちについて",
        privacy_policy_link: "プライバシーポリシー",
        terms_conditions_link: "利用規約",
        quick_link_title: "クイックリンク",
        track_order_link: "注文を追跡",
        write_review_link: "レビューの書き方",
        newsletter_title: "ニュースレター",
        newsletter_description: "購読を確認するためにメールをチェックしてください。",
        email_placeholder: "メールアドレスを入力してください",
        subscribe_button: "購読"
    }
};

// Function to set the language
function setLanguage(lang) {
    // Store selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Update the dropdown to reflect the current language
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.value = lang;
    }

    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            // Fallback to English or the key itself if translation is missing
            element.textContent = translations['en'][key] || key;
        }
    });

    // Apply placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        } else {
            // Fallback to English or the key itself
            element.setAttribute('placeholder', translations['en'][key] || key);
        }
    });

    // Update document title if needed (optional)
    if (translations[lang] && translations[lang].document_title) {
        document.title = translations[lang].document_title;
    }
}

// Function to redirect to other pages
function redirectTo(page) {
    window.location.href = page;
}

// Load language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Get saved language from localStorage, default to 'en' if not found
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLanguage(savedLang); // Apply the saved or default language
});
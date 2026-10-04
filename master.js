// ================================================
// 🧠 MASTER LINK DICTIONARY (GitHub Par Save Hogi)
// ================================================

const affiliateLinks = {
  // Yahan apne offers ke links dalein
  "secret-obsession": "https://hissecretobsession.com/freepresentation.php?&shield=a16b6l68xl7udu87qjv-kijm6v&traffic_source=cfi", // Relationship Niche
  "health-tips": "https://aapka-affiliate-link-2.com",      // Health Niche
  "manifestation": "https://aapka-affiliate-link-3.com",    // Manifestation Niche
  "gift-ideas": "https://amazon.com/your-affiliate-link",
  
  // Default offer agar URL me kuch mistake ho
  "fallback": "https://hissecretobsession.com/freepresentation.php?&shield=a16b6l68xl7udu87qjv-kijm6v&traffic_source=cfi"
};

// ================================================
// ⚙️ SYSTEM (Neeche kuch edit mat karna)
// ================================================

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const target = urlParams.get('go');
  const actionButton = document.getElementById('affiliateButton');
  
  if (actionButton) {
    if (target && affiliateLinks[target]) {
      actionButton.href = affiliateLinks[target];
    } else {
      actionButton.href = affiliateLinks["fallback"];
    }
  }
};

// ================================================
// 🧠 MASTER LINK DICTIONARY (GitHub Par Save Hogi)
// ================================================

const affiliateLinks = {
  // Yahan apne offers ke links dalein
  "secret-obsession": "https://hissecretobsession.com/why-men-pull-away/?\&shield=789adiabtwfw8nf1ji5cphio6p\&traffic\_source=c6gb
", // Relationship Niche
  "health-tips": "https://e03c7dj9yn2k9m5av0ui8bj9oe.hop.clickbank.net?tid=gh5j\&p=f",      // Relationship Niche
  "manifestation": "https://aapka-affiliate-link-3.com",    // Manifestation Niche
  "gift-ideas": "https://amazon.com/your-affiliate-link",
  
  // Default offer agar URL me kuch mistake ho
  "fallback": "https://www.textchemistry.com/?\&shield=97ec2dalvibpfm3lti80s2tw6v\&traffic\_source=as32d1"
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

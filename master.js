const affiliateLinks = {
  "mera-offer": ["https://www.textchemistry.com/?\&shield=97ec2dalvibpfm3lti80s2tw6v\&traffic\_source=as32d1", "Watch The Video"],
  "love-guide": ["https://hissecretobsession.com/why-men-pull-away/?\&shield=789adiabtwfw8nf1ji5cphio6p\&traffic\_source=c6gb
", "Download Free Guide"],
  "ex-back": ["https://e03c7dj9yn2k9m5av0ui8bj9oe.hop.clickbank.net?tid=gh5j\&p=f", "Learn More Here"],
  "health-tips": ["https://aapka-link-4.com", "Read The Secret"],
  "gift-ideas": ["https://aapka-link-5.com", "Buy Gift Now"],
  "fallback": ["https://www.textchemistry.com/?\&shield=97ec2dalvibpfm3lti80s2tw6v\&traffic\_source=as32d1", "Click Here To Continue"]
};

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const target = urlParams.get('go');
  const actionButton = document.getElementById('affiliateButton');
  
  if (actionButton) {
    let data = affiliateLinks[target] || affiliateLinks["fallback"];
    actionButton.href = data[0];       
    actionButton.innerText = data[1];  
  }
};

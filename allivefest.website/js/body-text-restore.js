/**
 * Restores Framer CMS Body Text after hydration / client-side navigation.
 */
(function () {
  var PAGE_CONFIGS = {
    "classes": { marker: "Come join us", html: "<p dir=\"auto\" class=\"framer-text framer-styles-preset-2x4isa\">Come join us for a day of movement, music, local food and drinks, and wellness samples!</p><ul dir=\"auto\" class=\"framer-text\"><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83d\udccd Washington Park, Burlingame, CA</p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83d\udcc6 Saturday, September 19 </p></li></ul><p dir=\"auto\" class=\"framer-text framer-styles-preset-2x4isa\"><strong class=\"framer-text\">SCHEDULE</strong>: </p><ul dir=\"auto\" class=\"framer-text\"><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\u23f0 10am\u20132pm Fitness Programming Open</p></li></ul><p dir=\"auto\" class=\"framer-text framer-styles-preset-2x4isa\"><strong class=\"framer-text\">WHO\u2019S COMING:</strong> </p><ul dir=\"auto\" class=\"framer-text\"><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\"><strong class=\"framer-text\">\ud83d\ude46\ud83c\udffb\u200d\u2640\ufe0f</strong> <strong class=\"framer-text\">Reformer Pilates</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.instagram.com/westcorestudio\" target=\"_blank\" rel=\"noopener\">Westcore Studio</a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83d\udcaa\ud83c\udffb <strong class=\"framer-text\">Glute Camp</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.instagram.com/thekatelync\" target=\"_blank\" rel=\"noopener\">The Strength Akademy</a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\"><strong class=\"framer-text\">\ud83e\uddd1\ud83c\udffb\u200d\ud83e\ude70 Yoga Ballet</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.instagram.com/lyriyoga\" target=\"_blank\" rel=\"noopener noreferrer\">Lyri Yoga</a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83e\uddd8\ud83c\udffb <strong class=\"framer-text\">Yoga &amp; Breathwork</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.integrativehealing.care/\" target=\"_blank\" rel=\"noopener noreferrer\">Integrative Healing</a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83c\udfa7 <strong class=\"framer-text\">Sound Bath</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.instagram.com/the_innerpeaceseeker\" target=\"_blank\" rel=\"noopener noreferrer\">The Inner Peace Seeker</a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83e\uddcd\ud83c\udffb\u200d\u2640\ufe0f <strong class=\"framer-text\">Qigong</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.hanumanholisticliving.com/\" target=\"_blank\" rel=\"noopener\">Hanuman Holistic Living</a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">and more</p></li></ul>" },
    "vendors": { marker: "Come join us", html: "<p dir=\"auto\" class=\"framer-text framer-styles-preset-2x4isa\">Come join us for a day of movement, music, local food and drinks, and wellness samples!</p><ul dir=\"auto\" class=\"framer-text\"><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83d\udccd Washington Park, Burlingame, CA</p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83d\udcc6 Saturday, September 19 </p></li></ul><p dir=\"auto\" class=\"framer-text framer-styles-preset-2x4isa\"><strong class=\"framer-text\">SCHEDULE</strong>: </p><ul dir=\"auto\" class=\"framer-text\"><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\u23f0 10am\u20132pm Vendor Village Open</p></li></ul><p dir=\"auto\" class=\"framer-text framer-styles-preset-2x4isa\"><strong class=\"framer-text\">WHO\u2019S COMING:</strong> </p><ul dir=\"auto\" class=\"framer-text\"><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83d\udc86\ud83c\udffc\u200d\u2640\ufe0f <strong class=\"framer-text\">Massages</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.instagram.com/squeeze_sanmateo\" target=\"_blank\" rel=\"noopener\">Squeeze Massage</a><!--/$--> </p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83e\uddd8\ud83c\udffb <strong class=\"framer-text\">Breathwork</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.integrativehealing.care/\" target=\"_blank\" rel=\"noopener noreferrer\">Integrative Healing</a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\"><strong class=\"framer-text\">\ud83d\ude46\ud83c\udffb\u200d\u2640\ufe0f Stretches</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.instagram.com/stretchlabburlingame\" target=\"_blank\" rel=\"noopener noreferrer\">StretchLab</a><!--/$--> </p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83e\udd52 <strong class=\"framer-text\">Skin Consultations</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.instagram.com/playlabbeauty?igsh=NTc4MTIwNjQ2YQ==\" target=\"_blank\" rel=\"noopener\">Playlab Beauty </a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83d\udc89 <strong class=\"framer-text\">IV</strong> <strong class=\"framer-text\">Drips</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.instagram.com/blissfusionsf?igsh=NTc4MTIwNjQ2YQ==\" target=\"_blank\" rel=\"noopener noreferrer\">Blissfusion</a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83c\udf72 <strong class=\"framer-text\">Gift Card Raffles</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.instagram.com/eatmazra?igsh=NTc4MTIwNjQ2YQ==https://www.instagram.com/eatmazra?igsh=NTc4MTIwNjQ2YQ==\" target=\"_blank\" rel=\"noopener\">Mazra</a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83e\udd63 <strong class=\"framer-text\">Gift Card Raffles</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.instagram.com/palmettosuperfoods?igsh=NTc4MTIwNjQ2YQ==\" target=\"_blank\" rel=\"noopener noreferrer\">Palmetto Superfoods</a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83c\udf66 <strong class=\"framer-text\">Gift Card Raffle</strong> by <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.instagram.com/palmettosuperfoods?igsh=NTc4MTIwNjQ2YQ==\" target=\"_blank\" rel=\"noopener noreferrer\">Bonjour Bakehouse </a><!--/$--></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\u2615 <strong class=\"framer-text\">Coffee &amp; Matcha</strong></p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">\ud83d\udca7 <strong class=\"framer-text\">Electrolytes</strong> </p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">and more</p></li></ul>" },
    "rare-cancer-research": { marker: "If you cannot attend", html: "<p dir=\"auto\" class=\"framer-text framer-styles-preset-2x4isa\">All event proceeds benefits <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.hope4moc.org/WendyTam/\" target=\"_blank\" rel=\"noopener\">The Wendy Tam MOC Research Fund</a><!--/$--> to help advance research for Mucinous ovarian cancer.</p><p dir=\"auto\" class=\"framer-text framer-styles-preset-2x4isa\">If you cannot attend ALIVE and would like to contribute to MOC research, there are 2 other ways you can get involved:</p><ul dir=\"auto\" class=\"framer-text\"><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">Donate directly to Wendy's Research Fund at <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://www.hope4moc.org/donate/\" target=\"_blank\" rel=\"noopener\">Mucinous Ovarian Cancer Coalition.</a><!--/$--> In the \u201cComments\u201d field, simply note that your gift is for the Wendy Tam MOC Research Fund.</p></li><li data-preset-tag=\"p\" class=\"framer-text framer-styles-preset-2x4isa\"><p class=\"framer-text framer-styles-preset-2x4isa\">Join <!--$--><a class=\"framer-text framer-styles-preset-1fcc3c7\" href=\"https://fundraise.thetealrun.org/team/824356\" target=\"_blank\" rel=\"noopener\">Team ALIVE for Wendy </a><!--/$-->on September 20, 2026 at the Teal Run sponsored by The Teal Foundation. All Team ALIVE funding goes towards Wendy's Research Fund.</p></li></ul>" }
  };

  function normalizePath(pathname) {
    var p = pathname || "/";
    if (p.endsWith("/index.html")) p = p.slice(0, -"/index.html".length) || "/";
    if (p.endsWith(".html")) p = p.slice(0, -5);
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    return p;
  }

  function getPageKey() {
    var p = normalizePath(window.location.pathname);
    if (p === "/day/classes" || p.endsWith("/classes")) return "classes";
    if (p === "/day/vendors" || p.endsWith("/vendors")) return "vendors";
    if (p === "/day/rare-cancer-research" || p.endsWith("/rare-cancer-research")) return "rare-cancer-research";
    return null;
  }

  function restoreBodyText() {
    var key = getPageKey();
    if (!key) return;
    var config = PAGE_CONFIGS[key];
    if (!config) return;
    document.querySelectorAll('[data-framer-name="Body Text"]').forEach(function (el) {
      var text = el.textContent || "";
      if (!text || text.indexOf(config.marker) === -1) {
        el.innerHTML = config.html;
      }
      var opacity = window.getComputedStyle(el).opacity;
      if (opacity !== "1" || el.style.transform) {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.willChange = "auto";
      }
    });
  }

  function scheduleBurst() {
    [0, 50, 150, 300, 500, 1000, 2000, 3000, 5000].forEach(function (ms) {
      setTimeout(restoreBodyText, ms);
    });
  }

  function hookHistory(method) {
    var original = history[method];
    history[method] = function () {
      var result = original.apply(this, arguments);
      scheduleBurst();
      return result;
    };
  }

  function startRestoring() {
    restoreBodyText();
    scheduleBurst();

    setInterval(function () {
      if (getPageKey()) restoreBodyText();
    }, 250);

    var observer = new MutationObserver(function () {
      if (getPageKey()) restoreBodyText();
    });
    var main = document.getElementById("main");
    if (main) {
      observer.observe(main, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class"]
      });
    }

    hookHistory("pushState");
    hookHistory("replaceState");
    window.addEventListener("popstate", scheduleBurst);
    window.addEventListener("load", function () {
      restoreBodyText();
      scheduleBurst();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startRestoring);
  } else {
    startRestoring();
  }
})();

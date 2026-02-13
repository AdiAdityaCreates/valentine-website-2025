const config = {
  // 💖 Basic Information
  valentineName: "My Baby 💖",
  pageTitle: "Hey Baby.. I Have Something For You 💝", 

  // 💕 Floating Background Elements
  floatingEmojis: {
    hearts: ["❤️", "💖", "💝", "💗", "💓"],
    bears: ["🧸", "🐻"]
  },

  // 💌 Questions and Buttons
  questions: {
    first: {
      text: "Baby.. do you like me? 🥺",
      yesBtn: "Yes baby 😍",
      noBtn: "No 🙄",
      secretAnswer: "I don’t like you… I LOVE YOU BABY 💖💋"
    },
    second: {
      text: "How much do you love me? 💕",
      startText: "This much baby!",
      nextBtn: "Next ❤️"
    },
    third: {
      text: "Will you be my Valentine, my baby? 💝",
      yesBtn: "Yes forever 💖",
      noBtn: "Never 🙄"
    }
  },

  // 💘 Love Meter Messages
  loveMessages: {
    extreme: "WOOOW 😍 you love me sooo much 💝🚀",
    high: "To infinity and beyond 🚀💖",
    normal: "And beyond 🥰"
  },

  // 🎉 Final Celebration
  celebration: {
    title: "Yaaay! 💖",
    message: "Now come get your hug & kiss 😘",
    emojis: "🎁💖🤗💝💋❤️💕"
  },

  // 🎨 Colors
  colors: {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757"
  },

  // 🎵 Music Settings
  music: {
    enabled: true,
    autoplay: false,   // MUST be false
    musicUrl: "https://files.catbox.moe/miqegt.mp3",
    startText: "🎵 Play Our Song",
    stopText: "🔇 Stop Music",
    volume: 0.5
  }
};

export default config;

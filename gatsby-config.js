module.exports = {
    siteMetadata: {
        title: "Sergii Vorobei",
        description: "Sergii Vorobei - Full Stack Developer",
        url: "https://sergiivorobei.com",
        locale: "en",
        formspreeEndpoint: "https://formspree.io/f/mwkwgvkw",
        showThemeLogo: false,
        image: "",
        twitterUsername: "",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          theme: "dark-blue",
        //   showThemeLogo: false,
        },
      },
    ],
  }
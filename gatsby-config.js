module.exports = {
    siteMetadata: {
        description: "Personal page of Sergii Vorobei",
        locale: "en",
        title: "Sergii Vorobei",
        formspreeEndpoint: "https://formspree.io/f/{your-id}",
        showThemeLogo: false,
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
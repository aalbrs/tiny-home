export default {
    // background image can be updated: /assets/background.jpg
    useBackgroundImage: true,
    theme: "dark", // light | dark
    header: {
        title: "David Aalbers",
        subtitle: "Web and Geospatial Developer / New Zealand",
        style: {
            // add additional CSS for header here
            "color": 'white'
        }
    },
    // add main content here
    posts: [
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/d-aalbers",
            description: "View profile",
            style: {
                "background-color": 'rgba(0, 0, 200, 0.55)'
            }
        },
        {
            title: "Code",
            link: "https://gitlab.com/users/aalbs/projects",
            description: "View projects on GitLab",
            style: {
                "background-color": 'rgba(130, 50, 80, 0.6)'
            }
        },
        {
            title: "Instagram",
            link: "https://www.instagram.com/aalbe.rs/",
            description: "@aalbe.rs",
            style: {
                "background-color": 'rgba(250, 0, 0, 0.7)'
            }
        },   
        {
            title: "Twitter",
            link: "https://twitter.com/aalbs",
            description: "@aalbs",
            style: {
                "background-color": 'rgba(215, 88, 0, 0.8)'
            }
        },   
        // {
        //     title: "Next item",
        //     link: null,
        //     description: "My description",
        //     style: {
        //         "background-color": 'rgb(70, 70, 70, 0.85)'
        //     }
        // }
    ]
    
}


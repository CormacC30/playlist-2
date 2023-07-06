export const aboutController = {
  index(request, response) {
    const viewData = {
      title: "About Playlist 5",
    };
    console.log("about rendering");
    response.render("about-view", viewData);
  },
};

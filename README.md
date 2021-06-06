# github-bot
<!-- Github-Bot for creating a lot of commits, modify their dates and push it on github to a private repository.
Github then generates a Contribution Graph accordingly. You can even make creative art on your Github profile. Do check out my GitHub profile for one such.

The more commits we make on the same date, the deeper the color becomes. You can even add different shades to the Github commit contribution graph.  -->
GitHub Apps can listen to webhook events sent by a repository or organization. Bot uses its internal event emitter to perform actions based on those events.
A Github-bot App might look like this:

``` node
module.exports = (app) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.onAny(async (context) => {
    context.log.info({ event: context.name, action: context.payload.action });
  });

  app.onError(async (error) => {
    context.log.error(error);
  });
};
```

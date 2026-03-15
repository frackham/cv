# Portfolio Site

This repository contains the source code for my portfolio site, hosted on GitHub Pages.

## Managing Content

The website content has been separated from the HTML markup. 
To update any text on the site (experience, skills, about me), edit the `github-page-source/js/data.js` file.

## Publishing to GitHub Pages

The deployment pipeline is fully automated but requires a manual trigger. This allows you to push changes to the repository, test them locally, and only publish when you are ready.

1. Navigate to the **Actions** tab in this GitHub repository.
2. Under "All workflows" on the left sidebar, click on **Deploy static content to Pages**.
3. Click the **Run workflow** dropdown button on the right side of the screen.
4. Select the branch you want to deploy from (usually `main`) and click **Run workflow**.

Once the workflow completes successfully, your site will be live at your GitHub pages URL usually formatted as `https://<your-username>.github.io/<repository-name>/`.

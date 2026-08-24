# shiyunliu.com

My personal site — engineering write-ups, CV, and the games and experiments that got me here.

**Live at [shiyunliu.com](https://shiyunliu.com)** (`navigatebycloud.github.io` redirects there).

Built with [Jekyll](https://jekyllrb.com/) on the [al-folio](https://github.com/alshedivat/al-folio) theme, deployed to GitHub Pages by the `Deploy site` workflow on every push to `main`. The theme's own documentation is preserved in [THEME.md](THEME.md), [CUSTOMIZE.md](CUSTOMIZE.md), [INSTALL.md](INSTALL.md), and [FAQ.md](FAQ.md).

## Where things live

| Path              | What it holds                                                                       |
| ----------------- | ----------------------------------------------------------------------------------- |
| `_pages/about.md` | The landing page                                                                    |
| `_data/cv.yml`    | Everything on `/cv/`                                                                |
| `_projects/`      | One file per project card; `importance:` sets order within `category: work` / `fun` |
| `assets/img/`     | Images, including `prof_pic.jpg` and the `favicon.ico` cropped from it              |
| `_config.yml`     | Site settings                                                                       |

## Running it locally

Requires Ruby, and ImageMagick for the image-processing plugin.

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. Markdown and `_data` changes rebuild automatically; **`_config.yml` changes need a restart.**

### Two gotchas

**ImageMagick.** The `jekyll-imagemagick` plugin shells out to a command named `convert`. ImageMagick 7 installs only `magick`, and Windows ships an unrelated `convert.exe` in `System32` that will be found first. Either install ImageMagick with the "legacy utilities" option, or put a `convert` shim earlier on `PATH` than `System32`.

**Prettier.** CI runs `npx prettier . --check`. On a Windows checkout the working tree has CRLF line endings while Prettier expects LF, so a local `--check` reports nearly every file. Git normalizes on commit, so this is noise — scope Prettier to the specific files CI names rather than running `--write` across the repo.

## Notes

The CV page reads `_data/cv.yml` **only when no JSON Resume exists**. `_layouts/cv.liquid` wraps that whole branch in `{% unless site.data.resume %}`, so defining a `resume` source in `jekyll_get_json` silently overrides the YAML.

export const webfonts = () => {
    return app.gulp.src(app.path.src.webfonts)
    .pipe(app.gulp.dest(app.path.build.webfonts))
}
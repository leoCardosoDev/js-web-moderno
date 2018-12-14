const gulp = require('gulp');

gulp.task('default', () => {
    gulp.start('copiar', 'fim');
});

gulp.task('copiar', ['antes1', 'antes2'], () => {
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'));
});

gulp.task('antes1', () => {
    console.log('ANTES 1')
});

gulp.task('antes2', () => {
    console.log('ANTES 2')
});

gulp.task('fim', () => {
    console.log('FIM!')
});
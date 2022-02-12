const path = require('node:path');
const del = require('del');
const gulp = require('gulp');
const copy = require('gulp-copy');
const through = require('through2');
const ts = require('gulp-typescript')
const sourcemaps = require('gulp-sourcemaps')


const SRC = './src';
const BUILD = './build';
const PUBLIC = './public';

const paths = {
    build: {
        root: `${BUILD}/`,
    },
    src: {
        ts: `${SRC}/ts/index.ts`,
        public: `${PUBLIC}/**/*`,
    },
    compileWatch: {
        ts: `${SRC}/ts/**/*.ts`,
    },
    reloadWatch: {
        js: `${BUILD}/**/*.js`,
    },
};

function verify() {
    const write = (file, enc, cb) => {
        console.log('file', file.path);
        cb(null, file);
    };

    const end = (cb) => {
        console.log('done');
        cb();
    };

    return through({objectMode: true}, write, end);
}

const tsProject = ts.createProject(path.resolve(process.cwd(), './tsconfig.json'))
const project = tsProject()

function compileTypescript() {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(project)
        .pipe(sourcemaps.write({
            sourceRoot: (file) => {
                const sourceFile = path.join(file.cwd, 'src', file.sourceMap.file)
                return path.relative(path.dirname(sourceFile), file.cwd)
            }
        }))
        .pipe(gulp.dest(paths.build.root))
}

gulp.task('clean', (cb) => {
    del.sync([paths.build.root])
    cb()
});

gulp.task('copy', (cb) => {
    gulp
        .src(paths.src.public)
        .pipe(copy(paths.build.root, {prefix: 1}))
        .pipe(verify());
    cb()
});


gulp.task('scripts', (cb) => {
    compileTypescript()
    cb();
});


gulp.task('build', gulp.series('clean', gulp.parallel('copy', 'scripts')));

gulp.task('watch', () => {
    gulp.watch(paths.compileWatch.ts, gulp.series('scripts'));
});


gulp.task('default', gulp.series('build','watch'));
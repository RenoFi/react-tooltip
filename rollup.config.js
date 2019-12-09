import typescript from 'rollup-plugin-typescript2'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    copy({
      targets: [
        { src: 'src/styles.css', dest: 'dist' },
      ]
    })
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ]
}

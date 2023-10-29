# eslint-config-bitrefill

The eslint-plugin peerDependencies listed in package.json must be installed as devDependencies in the project extending this configuration

Add the following to your .eslintrc:
```
{
  "extends": [
    "bitrefill",
    "bitrefill/node",
    "bitrefill/react"
  ]
}
```

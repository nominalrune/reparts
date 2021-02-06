yarn create react-app reparts --template pwa-typescript
yarn add -D storybook
yarn sb init --story-format csf-ts
yarn storybook

wsl rm -R ./src/stories

yarn add @material-ui/core
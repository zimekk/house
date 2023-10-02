# hello

[zimekk.github.io/house](https://zimekk.github.io/house)

- [x] Edit repository details / Website
- [x] Settings / GitHub Pages / Select Branch
- [x] Clone repository
- [x] Update package.json
- [x] Update README.md
- [x] Push changes

```sh
git commit --amend -am "chore: initial commit"
git push -f
```

## install

```sh
nvm install v16
npm i -g yarn
```

```sh
node -v # v16.19.1
yarn -v # 1.22.19
```

## run

```sh
yarn
yarn start # ⚡️[server]: Server is running at http://localhost:8080
```

```sh
curl http://localhost:8080 # <!DOCTYPE html>
```

## docker

```sh
docker-compose config # services:
docker-compose up --build # app_1  | ⚡️[server]: Server is running at http://localhost:8080
```

```sh
curl http://localhost:8080 # <!DOCTYPE html>
```

```sh
docker system prune -f # Deleted Containers:
```

## hooks

```sh
yarn husky install
yarn husky add .husky/pre-commit "yarn pretty-quick --staged"
yarn husky add .husky/commit-msg "yarn commitlint --edit \$1"
```

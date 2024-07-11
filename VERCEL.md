### Деплой с бекендом

#### Деплой бекенда

-  Добавляем из гита проект с беком.
-  выбираем корневую папку для бека (если в общей и фронт и бек)
-  добавляем переменные окружения.
-  деплоим.
-  если https, то указываем в беке `main.ts` для cors набор путей (в том числе и фронтенда выложенного на vercel)

```javascript
const option = [
   'https://heat-academy-dev-frontend.vercel.app', // после деплоя фронтенда
   'https://127.0.0.1:3000',
   'https://localhost',
];
```

-  добавляем конфиг для настройки `vercel.json`
-  c [cors](https://vercel.com/guides/how-to-enable-cors#enabling-cors-using-vercel.json)

```javascript
{ // HTTP
  "version": 2,
  "builds": [
    {
      "src": "./index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "./index.js"
    }
  ]
}
{ // HTTPS
  "version": 2,
  "builds": [
    {
      "src": "*.js",
      "use": "@vercel/node"
    }
  ],
  "headers": [ // cors
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Credentials", "value": "true" },
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
        }
      ]
    }
  ]
}
```

#### Деплой фронта

-  Добавляем из гита проект с беком.
-  выбираем корневую папку для бека (если в общей и фронт и бек)
-  добавляем переменные окружения.
-  деплоим.
-  используем чистый адрес без хешей деплоя `'https://heat-academy-dev-frontend.vercel.app'`, а не `https://heat-academy-dev-frontend-5sjg7sy8u-vik163s-projects.vercel.app`
-  указываем в конфиге webpack devServer

```javascript
      host: // всегда 127.0.0.1
      https: true,
      allowedHosts: disableFirewall
         ? 'all'
         : ['localhost', 'https://heat-academy-dev-frontend.vercel.app'],
      headers: { // если https, добавляем как в конфиге vercel
         'Access-Control-Allow-Credentials': 'true',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
         'Access-Control-Allow-Headers':
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
      },
```

-  в api вставляем `baseURL: 'https://localhost/api`
-  все изменения вносим в github

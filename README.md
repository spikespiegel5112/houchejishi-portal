# houchejishi-portal

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
server
{
    listen 80;
    server_name antisony.org;
    index index.php index.html index.htm default.php default.htm default.html;
    root /www/wwwroot/antisony.org;

    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    #SSL-END

    #ERROR-PAGE-START  错误页配置，可以注释、删除或修改
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END

    #PHP-INFO-START  PHP引用配置，可以注释或修改
    include enable-php-00.conf;
    #PHP-INFO-END

    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
    include /www/server/panel/vhost/rewrite/antisony.org.conf;
    #REWRITE-END

    #禁止访问的文件或目录
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.env|\.svn|\.project|LICENSE|README.md)
    {
        return 404;
    }

    #一键申请SSL证书验证目录相关设置
    location ~ \.well-known{
        allow all;
    }

    #禁止在证书验证目录放入敏感文件
    if ( $uri ~ "^/\.well-known/.*\.(php|jsp|py|js|css|lua|ts|go|zip|tar\.gz|rar|7z|sql|bak)$" ) {
        return 403;
    }

    # location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
    # {
    #     expires      30d;
    #     error_log /dev/null;
    #     access_log /dev/null;
    # }

    # location ~ .*\.(js|css)?$
    # {
    #     expires      12h;
    #     error_log /dev/null;
    #     access_log /dev/null;
    # }
    
    location / {
        alias /www/wwwroot/houchejishi-portal/dist/;
        index  index.html;
        try_files $uri $uri/ index.html =404;
    }
    
    location /h5 {
        alias /www/wwwroot/pengpai-chuntianzaichufa/dist/;
        index  index.html;
        try_files $uri $uri/ index.html =404;
    }
    
    access_log  /www/wwwlogs/antisony.org.log;
    error_log  /www/wwwlogs/antisony.org.error.log;
}
```

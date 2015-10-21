# ImageViewer

#nginx配置
###MAC 下进入/usr/local/etc/nginx
`vi nginx.conf`

启动nginx

`nginx`

编辑nginx.conf文件

server {

		listen       3932;
		server_name  localhost;
        #charset koi8-r;
        #access_log  logs/host.access.log  main;
        location / {
            root   [绝对路径]/ImageViewer/;
            index  index.html index.htm;
      	}
      	...
      	
现在重启nginx

`nginx -s reload`

在浏览器中访问

`http://localhost:3932`

或局域网中访问

`http://hostIP:3932`
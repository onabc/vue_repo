import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
    base: './', //打包路径
    plugins: [
        vue(),
        // gzip压缩 生产环境生成 .gz 文件
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz'
        })
    ],
    // 配置别名
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/styles/mixin.scss";'
            }
        }
    },
    //启动服务配置
    server: {
        //host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
        port: 8000,
        open: true,
        https: false,
        hmr: {
            host: 'localhost',
            port: 8080
        },
        // 设置代理
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    },
    // 生产环境打包配置
    //去除 console debugger
    build: {
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
})

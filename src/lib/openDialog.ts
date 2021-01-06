import { createApp } from 'vue'
import Dialog from './Dialog.vue'
import { h } from 'vue';
export const openDialog = (options) => {
    const { title, content, confirm, cancel } = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                closeOnClickOverlay: true,
                'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                        close()
                    }
                }, confirm, cancel

            }, {
                title: title,
                content: content
            })
        }
    })
    app.mount(div)
}
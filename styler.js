const Styled = {}

window.styled = []

const Supar = (name, tag, Style) => {
    window.styled[name.toLowerCase()] = {
        styler: '',
        el: '',
        tag: ''
    }
    window.styled[name.toLowerCase()].styler = Style
    window.styled[name.toLowerCase()].el = document.querySelectorAll(name)
    window.styled[name.toLowerCase()].tag = tag
    document.querySelector('body').setAttribute('created', '???')
    return window.styled[name.toLowerCase()]
}

class Styler {
    constructor(name = '???') {
        console.info(`Created by ${name}`)
        this.mounted();
    }
    nameClass(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    createClass(name, rules) {
        var style = document.createElement('style');
        style.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(style);
        if (!(style.sheet || {}).insertRule)
            (style.styleSheet || style.sheet).addRule(name, rules);
        else
            style.sheet.insertRule('.' + name + " { " + rules + " }", 0);
    }
    mounted() {
        let loops = 0
        const timer = setInterval(() => {
            try {
                document.querySelectorAll('*').forEach((item) => {
                    if (window.styled[item.tagName.toLowerCase()]) {
                        window.styled[item.tagName.toLowerCase()].el.forEach((el, index) => {
                            el.outerHTML = `<${window.styled[el.tagName.toLowerCase()].tag}
                            id='${el.tagName.toLocaleLowerCase()}${index}'>
                                            ${el.innerHTML}
                            </${window.styled[item.tagName.toLowerCase()].tag}/>`
                            const classe = this.nameClass(25)
                            let stylerd = window.styled[el.tagName.toLowerCase()].styler
                            const array = stylerd.split('\n')
                            array.forEach((variable) => {
                                let arrayV = variable.split('$')
                                if (arrayV[1]) {
                                    let variable_ = arrayV[1].replace(';', '')
                                    const booVariable_ = el.getAttribute(variable_)
                                    stylerd = stylerd.replaceAll(`$${variable_}`, `${booVariable_}`)
                                }
                            })
                            this.createClass(`${classe}`, stylerd)
                            document.querySelector(`#${el.tagName.toLocaleLowerCase()}${index}`).classList.add(classe)
                            document.querySelector(`#${el.tagName.toLocaleLowerCase()}${index}`).removeAttribute('id')
                        })
                    }
                })
            } catch (error) {
                //
            }
            if (loops >= document.querySelectorAll('*').length * 2) {
                clearInterval(timer)
                document.querySelector('body').setAttribute('created', 'true')
            } else {
                loops++
                window.styled = undefined
            }
        }, 100);
    }
}

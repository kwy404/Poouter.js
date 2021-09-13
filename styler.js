const Styled = {}
window.styled = {}
window.styledClass = []
const style = document.createElement('style')
style.setAttribute('name', 'Poouter')
style.type = 'text/css'
document.getElementsByTagName('head')[0].appendChild(style)
const Style = (name, tag, Style) => {
    window.styled[name.toLowerCase()] = {
        styler: '',
        el: '',
        tag: '',
        styleClass: '',
    }
    window.styled[name.toLowerCase()].styler = Style
    window.styled[name.toLowerCase()].el = document.querySelectorAll(name)
    window.styled[name.toLowerCase()].tag = tag
    document.querySelector('body').setAttribute('created', 'Poouter')
    return window.styled[name.toLowerCase()]
}
class Styler {
    constructor(name = '???') {
        this.attrsDenied = [
            'src',
            'class',
            'id',
            'name',
            'placeholder',
            'title',
            'autocomplete',
            'autofocus',
            'draggable',
            'href',
            'min',
            'max',
            'poster',
            'rel',
            'style',
            'width',
            'bind',
            'blur',
            'change',
            'click',
            'dblclick',
            'delegate',
            'die',
            'error',
            'hover',
            'mousedown',
            'mouseenter',
            'mouseleave',
            'mousemove',
            'mouseout',
            'mouseover',
            'mouseup',
            'ready',
            'resize',
            'toggle',
            'load',
            'unload',
            'submit'
        ]
        this.events = [
            'blur',
            'change',
            'click',
            'dblclick',
            'delegate',
            'die',
            'error',
            'hover',
            'mousedown',
            'mouseenter',
            'mouseleave',
            'mousemove',
            'mouseout',
            'mouseover',
            'mouseup',
            'ready',
            'resize',
            'toggle',
            'load',
            'unload',
            'submit'
        ]
        this.mounted()
        this.styled = window.styled
    }

    nameClass(code) {
        /** This is from original styled-components. Source: https://github.com/styled-components/styled-components/blob/30dab74acedfd26d227eebccdcd18c92a1b3bd9b/packages/styled-components/src/utils/generateAlphabeticName.ts */
        AD_REPLACER_R = /(a)(d)/gi;

        /* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
        * counterparts */
            charsLength = 52;
        
        /* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
            getAlphabeticChar = (code) => String.fromCharCode(code + (code > 25 ? 39 : 97));
        
        /* input a number, usually a hash and convert it to base-52 */
        let name = '';
        let x;

        /* get a char and divide by alphabet-length */
        for (x = Math.abs(code); x > charsLength; x = (x / charsLength) | 0) {
            name = getAlphabeticChar(x % charsLength) + name;
        }

        return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
    }
    nameClass(length) {
        var result = ''
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-'
        var charactersLength = characters.length
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }
    /**
    * Break stylis in rules and inject them via CSSOM.
    * 
    * @param {string} name Generated HASH for class name, such as 'fmwOTC'
    * @param {string} css Resolved CSS as string
    * @returns 
    */
    injectCss(name, rules) {
        if (!window.styledClass.find((e) => e === name)) {
            window.styledClass.push(name)
            const otherRules = this.sassLogic(name, rules)
            if (!(style.sheet || {}).insertRule) {
                ; (style.styleSheet || style.sheet).addRule(name, rules)
            } else {
                style.sheet.insertRule(`.${name} { ${rules} }`, 0)
                otherRules.forEach((rule, index) => {
                    style.sheet.insertRule(
                        `.${name}${rule.type}{ ${rule.styleB} }`,
                        index + 1
                    )
                })
            }
        }
    }
    sassLogic(name, rules) {
        const regex = /:[a-zA-Z]/gm
        let n = rules.search(regex)
        let rule = ''
        let type = ''
        let rulesObject = []
        let style = {}
        for (let i = n; i < rules.length; i++) {
            rule += rules[i]
        }
        let arrayRules = rule.split('{').forEach((ruleB) => {
            ruleB.split('}').forEach((ruleC, index) => {
                if (!ruleC.trim().search(regex)) {
                    type = ruleC.trim()
                }
                const regexStyle = /type{/gm
                if (ruleC.trim().search(regexStyle)) {
                    if (ruleC.includes(';')) {
                        style[type] = ruleC
                    }
                }
                if (
                    style[type] &&
                    !rulesObject.find((e) => e.name === name && e.type === type)
                ) {
                    const styleB = style[type]
                    rulesObject.push({
                        type,
                        styleB,
                        name,
                    })
                }
            })
        })
        return rulesObject
    }
    mounted(loops = 0, timer = null) {
        timer = setInterval(() => {
            try {
                document.querySelectorAll('*').forEach((item) => {
                    if (window.styled[item.tagName.toLowerCase()]) {
                        document.querySelectorAll('*').forEach((el, index) => {
                            if (!window.styled[el.tagName.toLowerCase()]) {
                                return
                            }
                            const TAG = window.styled[el.tagName.toLowerCase()].tag || ''
                            const attrs = el.attributes
                            el.outerHTML = `<${TAG}
                            id='${el.tagName.toLocaleLowerCase()}${index}'>
                                            ${el.innerHTML}
                            </${TAG}/>`
                            const classe = this.nameClass(25)
                            let stylerd = window.styled[el.tagName.toLowerCase()].styler
                            const array = stylerd.split('\n')
                            array.forEach((variable) => {
                                let arrayV = variable.split('$')
                                if (arrayV[1]) {
                                    let variable_ = arrayV[1].replace(';', '')
                                    const booVariable_ = el.getAttribute(variable_)
                                    stylerd = stylerd.replaceAll(
                                        `$${variable_}`,
                                        `${booVariable_}`
                                    )
                                }
                            })
                            this.injectCss(`${classe}`, stylerd)
                            document
                                .querySelector(`#${el.tagName.toLocaleLowerCase()}${index}`)
                                .classList.add(classe)
                            window.styled[el.tagName.toLowerCase()].class = classe
                            for (let i = 0; i < attrs.length; i++) {
                                if (this.attrsDenied.find((e) => e == attrs[i].name)) {
                                    if (attrs[i].name == 'class') {
                                        document
                                            .querySelector(
                                                `#${el.tagName.toLocaleLowerCase()}${index}`
                                            )
                                            .classList.add(attrs[i].value)
                                    } else {
                                        document
                                            .querySelector(
                                                `#${el.tagName.toLocaleLowerCase()}${index}`
                                            )
                                            .setAttribute(attrs[i].name, attrs[i].value)
                                        if (this.events.find((e) => e == attrs[i].name)) {
                                            document
                                                .querySelector(
                                                    `#${el.tagName.toLocaleLowerCase()}${index}`
                                                )
                                                .addEventListener(attrs[i].name, () => {
                                                    eval(attrs[i].value)
                                                })
                                            document
                                                .querySelector(
                                                    `#${el.tagName.toLocaleLowerCase()}${index}`
                                                )
                                                .removeAttribute(attrs[i].name)
                                        }
                                    }
                                }
                            }
                            document
                                .querySelector(`#${el.tagName.toLocaleLowerCase()}${index}`)
                                .removeAttribute('id')
                        })
                    }
                })
            } catch (error) {
                //console.log(error);
            }
            if (loops >= document.querySelectorAll('*').length * 2) {
                clearInterval(timer)
                document.querySelector('body').setAttribute('created', 'true')
            } else {
                loops++
                this.mounted()
            }
        }, 100)
    }
}

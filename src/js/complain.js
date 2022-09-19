function buildComplainWindow(pinId) {
    const complainWindow = document.createElement('div')
    complainWindow.classList.add('complainWindow')
    let complainWindowTitle = document.createElement('div')
    complainWindowTitle.classList.add('complainWindowTitle')
    let title = document.createElement('h1')
    title.append(document.createTextNode('Pin complaint'))

    complainWindowTitle.prepend(title)
    complainWindow.appendChild(complainWindowTitle)


    let arrComplain = [{
            value: 'spam',
            title: 'Spam',
            description: 'Misleading or repetitive posts'
        },
        {
            value: 'nudityOrPornography',
            title: 'Nudity or pornography',
            description: 'Content of a sexual nature'
        },
        {
            value: 'selfMutilation',
            title: 'Self-mutilation',
            description: 'Eating disorders, self-injury, suicide'
        },
        {
            value: 'fakeInformation',
            title: 'Fake information',
            description: 'False information about health, climate, voting or conspiracy theory'
        },
        {
            value: 'aggressiveAction',
            title: 'Aggressive actions',
            description: 'Prejudices, stereotypes, white supremacy, insults'
        },
        {
            value: 'dangerousGoods',
            title: 'Dangerous Goods',
            description: 'Drugs, weapons, regulated goods'
        },
        {
            value: 'harassment',
            title: 'Harassment or privacy violation',
            description: 'Insults, threats, publication of personal data'
        },
        {
            value: 'scenesOfViolence',
            title: 'Scenes of violence',
            description: 'Graphic depiction or propaganda of violence'
        },
        {
            value: 'intellectualProperty',
            title: 'This is my intellectual property',
            description: 'Copyright or trademark infringement'
        }
    ]
    let mainComplain = document.createElement('div')
    mainComplain.classList.add('mainComplain')
    let radioButtons = []
    let furtherButton = document.createElement('button')

    for (let complaintData of arrComplain) {
        let elem = document.createElement('div')
        elem.classList.add('mainComplain__elem')

        let inpElem = document.createElement('input')
        inpElem.setAttribute('type', 'radio')
        inpElem.setAttribute('name', 'elementComplain')
        inpElem.setAttribute('id', complaintData['value'])
        inpElem.addEventListener('change', () => {
            furtherButton.classList.add('further-red')
        })
        radioButtons.push(inpElem)



        let spanElem = document.createElement('span')
        spanElem.append(document.createTextNode(complaintData['title']))
        spanElem.append(document.createElement('br'))
        spanElem.append(document.createTextNode(complaintData['description']))

        let labelElem = document.createElement('label')
        labelElem.classList.add('custom-radio')
        labelElem.append(inpElem)
        labelElem.append(spanElem)

        elem.append(labelElem)
        mainComplain.append(elem)
    }


    complainWindow.append(mainComplain)


    let windowButtons = document.createElement('div')
    windowButtons.classList.add('windowButtons')
    let cancelButton = document.createElement('button')

    let textCancelButton = document.createTextNode('Cancel')

    cancelButton.append(textCancelButton)
    cancelButton.classList.add('canselButton__class')

    furtherButton.append(document.createTextNode('Further'))
    furtherButton.classList.add('furtherButton__class')

    windowButtons.appendChild(cancelButton)
    windowButtons.appendChild(furtherButton)
    complainWindow.appendChild(windowButtons)
    let wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    wrapper.appendChild(complainWindow)

    furtherButton.addEventListener('click', () => {
        sendData(pinId, radioButtons);
        wrapper.remove()
        document.body.style.overflow = "";
    })
    cancelButton.addEventListener('click', () => {
        wrapper.remove()
        document.body.style.overflow = "";
    })

    return wrapper
}

function sendData(cardId, radioButtons) {
    const checkedButton = radioButtons.find((value, index, obj) => { return value.checked })
    console.log(`{\n    "Id": "${cardId}",\n    "reason": "${checkedButton['id']}"\n}`)
}

export {buildComplainWindow};
const Event = {
    add(element, type, handle) {
        if (element.addEventListener) {
            element.addEventListener(type, handle, false);
        } else if (element.attatchEvent) {
            element.attachEvent('on' + type, handle);
        } else {
            element['on' + type] = handle;
        }
    },

    remove(element, type, handle) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handle, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handle);
        } else {
            element['on' + type] = null;
        }
    },

    getEvent(event) {
        return event || window.event;
    },

    getTarget(event) {
        event = this.getEvent(event);
        return event.target || event.srcElement;
    },

    preventDefault(event) {
        event = this.getEvent(event);
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    cancleBubble(event) {
        event = this.getEvent(event);
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancleBubble = true;
        }
    }
}
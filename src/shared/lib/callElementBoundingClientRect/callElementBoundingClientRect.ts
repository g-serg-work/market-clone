export const callElementBoundingClientRect = (elem: HTMLElement): DOMRect => {
    const box = elem.getBoundingClientRect();

    const {body} = document;
    const docEl = document.documentElement;

    const scrollTop = window.scrollY || docEl.scrollTop || body.scrollTop;
    const scrollLeft = window.scrollX || docEl.scrollLeft || body.scrollLeft;

    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;

    const left = Math.round(box.left + scrollLeft - clientLeft);
    const top = Math.round(box.top + scrollTop - clientTop);

    return new DOMRect(left, top, box.width, box.height);
};

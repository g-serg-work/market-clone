import { useBool } from '../useBool/useBool';

type doModal = () => void;
type modalContent = JSX.Element | null;

type useJSXModalResult = [doModal, modalContent];
type JSXComponentType<T> = {
    isOpen: boolean;
    onClose: () => void;
} & Partial<T>;

export function useJSXModal<T extends JSXComponentType<T>>(
    jsx: (props: T) => JSX.Element,
    getProps: () => Partial<T> = () => ({}),
): useJSXModalResult {
    const [isOpen, { on: doModal, off: onClose }] = useBool();

    return [
        doModal,
        isOpen ? jsx({ isOpen, onClose, ...getProps() } as T) : null,
    ];
}

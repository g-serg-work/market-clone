import { useBool } from '../useBool';

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
    const [isOpen, setIsOpen] = useBool();
    const onClose = setIsOpen.off;

    return [
        setIsOpen.on,
        isOpen ? jsx({ isOpen, onClose, ...getProps() } as T) : null,
    ];
}

import { FormEventHandler, memo, useCallback, useRef } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './HeaderSearch.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

// TODO: change on raw load file
// import Svg from '../../../assets/icons/search-button-clear.svg';
const svgTxt = encodeURIComponent(
    `<svg viewBox="0 0 10 10" width="10" height="10" xmlns="http://www.w3.org/2000/svg">
<polygon points="10,0.7 9.3,0 5,4.3 0.7,0 0,0.7 4.3,5 0,9.3 0.7,10 5,5.7 9.3,10 10,9.3 5.7,5"/>
</svg>`,
);
const svgStyle = {
    backgroundImage: `url(data:image/svg+xml;charset=US-ASCII,${svgTxt})`,
};

export interface HeaderSearchProps {
    className?: string;
    autoFocus?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
}

export const HeaderSearch = memo((props: HeaderSearchProps) => {
    const { className, autoFocus, value, onChange, onSubmit } = props;
    const ref = useRef<HTMLInputElement>(null);

    const onInput = useCallback(
        (value: string) => {
            onChange?.(value);
        },
        [onChange],
    );

    const onReset = useCallback(() => {
        onChange?.('');
        ref.current?.focus();
    }, [onChange]);

    const onFormSubmit: FormEventHandler<HTMLFormElement> = useCallback(
        (event) => {
            event.preventDefault();

            const value: string = (event.target as HTMLFormElement).search
                .value;

            if (value.trim().length == 0) return;
            onSubmit?.(value);
        },
        [onSubmit],
    );

    const inputBlock = (
        <div className={cls.inputBlockWrapper}>
            <div className={cls.inputBlock}>
                <div className={cls.inputBlockInner}>
                    <div
                        className={cls.searchInput}
                        data-zone-name="search-input"
                    >
                        <Input
                            ref={ref}
                            autoFocus={autoFocus}
                            className={classNames(cls.inputField, {}, [
                                'mini-suggest__input',
                            ])}
                            type="text"
                            name="search"
                            data-auto="search-input"
                            placeholder="Найти товары"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            value={value}
                            onInput={onInput}
                        />
                    </div>
                    <Button
                        className={cls.inputClearButton}
                        unselectable="on"
                        type="button"
                        aria-label="Стереть"
                        onClick={onReset}
                    >
                        <div className={cls.svg} style={svgStyle}></div>
                    </Button>
                </div>
            </div>
        </div>
    );

    return (
        <div className={classNames(cls.HeaderSearch, {}, [className])}>
            <div
                className={cls.searchBlock}
                data-zone-name="search_block"
                data-baobab-name="searchBlock"
            >
                <div className={cls.searchRow} data-auto="search-row">
                    <form
                        className={cls.form}
                        role="search"
                        onSubmit={onFormSubmit}
                    >
                        <div className={cls.formContent}>
                            {inputBlock}
                            <button
                                className={classNames(cls.searchButton, {}, [
                                    'button-focus-ring',
                                ])}
                                type="submit"
                                data-auto="search-button"
                            >
                                <span>Найти</span>
                            </button>
                        </div>
                    </form>
                    <div
                        className={classNames(cls.overlay, {}, [
                            'mini-suggest__overlay',
                        ])}
                    ></div>
                </div>
            </div>
        </div>
    );
});

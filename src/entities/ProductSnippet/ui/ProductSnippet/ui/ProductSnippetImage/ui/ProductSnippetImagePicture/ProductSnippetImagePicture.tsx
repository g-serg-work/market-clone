import { scrSetAttributesConfigure } from '@/shared/lib/helpers/scrSetAttributes';
import cls from './ProductSnippetImagePicture.module.scss';

export interface ProductSnippetImagePictureProps {
    className?: string;
    title: string;
    img: string;
    imgTest: string | undefined;
}

const sizes = '(max-width: 1456px) 12vw, 200px';

export const ProductSnippetImagePicture = (
    props: ProductSnippetImagePictureProps,
) => {
    const { title, img, imgTest } = props;

    const imgAttr = imgTest
        ? { src: imgTest }
        : scrSetAttributesConfigure(img, '_multiply');

    return (
        <div data-apiary-widget-name="@marketfront/SnippetConstructor/SimpleGallery/Gallery">
            <div className={cls.pictureWrapper}>
                <div
                    className={cls.picture}
                    data-zone-name="picture"
                    data-baobab-name="picture"
                >
                    <div className={cls.content}>
                        <div className={cls.imageWrapper}>
                            <img
                                {...imgAttr}
                                sizes={sizes}
                                alt={title}
                                fetchpriority="low"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

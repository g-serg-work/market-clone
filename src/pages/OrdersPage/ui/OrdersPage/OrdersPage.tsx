import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './OrdersPage.module.scss';
import { Page } from '@/widgets/Page';
import PurchaseItemSvg from '../../assets/icons/purchase-item.svg';
import OrderCopySvg from '../../assets/icons/order-copy.svg';
import OrderReorderSvg from '../../assets/icons/order-reorder.svg';
import { ApiError } from '@/shared/ui/ApiError';
import { useOrdersPage } from '../../api/ordersPageApi';
import { getUserData } from '@/entities/User';
import { Order } from '@/entities/Order';
import { OrdersPageLoader } from '../OrdersPageLoader/OrdersPageLoader';

interface OrdersPageProps {
    className?: string;
}

interface OrderNumberButtonCopyProps {
    number: string;
}

const OrderNumberButtonCopy = (props: OrderNumberButtonCopyProps) => {
    const { number } = props;

    const parts = number.match(/.{1,3}/g);

    return (
        <button
            type="button"
            className={cls.orderNumberCopy}
            aria-label="Скопировать номер заказа"
        >
            <div className={cls.orderNumberParts}>
                <span className={cls.orderNumberPart}>
                    {parts?.map((part, idx) => (
                        <span key={idx}>
                            {part}
                            <span className={cls.xxx} />
                        </span>
                    ))}
                </span>
                <div className={cls.orderNumberCopyIconWrapper}>
                    <OrderCopySvg />
                </div>
            </div>
        </button>
    );
};

interface OrderNumberProps {
    number: string;
}

const OrderNumber = (props: OrderNumberProps) => {
    const { number } = props;

    return (
        <div
            data-apiary-widget-id={`/content/orderContent/order_${number}/orderNumber`}
            data-apiary-widget-name="@marketfront/OrderNumber"
        >
            <div data-zone-name="order-number">
                <OrderNumberButtonCopy number={number} />
            </div>
        </div>
    );
};

interface OrderReorderProps {
    number: string;
}

const OrderReorder = (props: OrderReorderProps) => {
    const { number } = props;

    return (
        <div
            data-apiary-widget-id={`/content/orderContent/order_${number}/orderReorder`}
            data-apiary-widget-name="@marketfront/OrderReorder"
        >
            <div data-zone-name="reorder-order">
                <button
                    type="button"
                    className={cls.orderReorderButton}
                    aria-label="Повторить заказ"
                >
                    <div className={cls.orderReorderWrapper}>
                        <span className={cls.orderReorderSpan}>Повторить</span>
                        <div className={cls.orderReorderIconWrapper}>
                            <OrderReorderSvg />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

interface OrderCardTitleProps {
    order: Order;
}

const OrderCardTitle = (props: OrderCardTitleProps) => {
    const { order } = props;

    const Splitter = <span className={cls.orderCardSplitter}>•</span>;

    return (
        <div className={cls.orderCardWrapper}>
            <div className={cls.orderCardInfo}>
                <div className={cls.orderCardFromDate}>
                    <span className={cls.xxx}>{order.fromDate}</span>
                </div>
                {Splitter}
                <OrderNumber number={order.number} />
                {Splitter}
                <OrderReorder number={order.number} />
            </div>
            <span className={cls.orderCostWrapper}>
                <span className={cls.costValue}>{order.cost}</span>
                <span className={cls.costCurrency}>₽</span>
            </span>
        </div>
    );
};

interface GradeItemsProps {
    number: string;
}

const GradeItems = (props: GradeItemsProps) => {
    const { number } = props;

    return (
        <div className={cls.gradeItems}>
            <div
                data-apiary-widget-id="/content/orderContent/order_547750624/grade_items"
                data-apiary-widget-name="@marketfront/GradeItemsButton"
            >
                <div data-zone-name="grade_items">
                    <Link
                        role="button"
                        tabIndex={0}
                        to={`/my/order/${number}`}
                        className={cls.gradeItemsLink}
                    >
                        <span className={cls.gradeItemsSpan}>
                            Оценить товары
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

interface OrderItemsGalleryProps {
    images: string[];
}

const OrderItemsGallery = (props: OrderItemsGalleryProps) => {
    const { images } = props;

    const contentItems = images
        .slice(0, 3)
        .map((image, idx) => <img src={image} alt="" />)
        .concat(
            images.length > 3 ? (
                <span className={cls.orderImagesMore3}>
                    +{images.length - 3}
                </span>
            ) : (
                []
            ),
        );

    return (
        <div className={cls.orderItemsGallery}>
            <div
                data-apiary-widget-id="/content/orderContent/order_547750624/orderItemsGallery"
                data-apiary-widget-name="@marketfront/OrderItemsGallery"
            >
                <ul>
                    {contentItems.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

interface OrderDetailProps {
    order: Order;
}

const OrderDetail = (props: OrderDetailProps) => {
    const { order } = props;

    return (
        <div className={cls.orderDetailWrapper}>
            <div className={cls.orderDetailContent}>
                <div className={cls.orderStatus}>
                    <h3 className={cls.description}>{order.status}</h3>
                    <span className={cls.date}>{order.statusDate} </span>
                </div>
                <GradeItems number={order.number} />
            </div>
            <OrderItemsGallery images={order.images} />
        </div>
    );
};

interface OrderCardProps {
    order: Order;
}

const OrderCard = (props: OrderCardProps) => {
    const { order } = props;

    return (
        <div
            data-apiary-widget-id={`/content/orderContent/order_${order.number}`}
            data-apiary-widget-name="@marketfront/OrderCardView"
        >
            <div data-zone-name="order-card-view">
                <div
                    className={cls.orderCardView}
                    aria-label={`Заказ ${order.number}`}
                >
                    <OrderCardTitle order={order} />
                    <Link
                        className={cls.orderDetailLink}
                        to={`/my/order/${order.number}`}
                        aria-label="Детали заказа"
                    >
                        &nbsp;
                    </Link>
                    <OrderDetail order={order} />
                </div>
            </div>
        </div>
    );
};

interface OrderListProps {
    orders: Order[];
}

const OrderList = (props: OrderListProps) => {
    const { orders } = props;

    return (
        <div data-zone-name="ordersList">
            {orders.map((order) => (
                <OrderCard key={order.number} order={order} />
            ))}
        </div>
    );
};

const MoreButton = () => {
    return (
        <div className={cls.moreButton}>
            <button type="button">
                <span>Показать еще</span>
            </button>
        </div>
    );
};

const PurchasedItems = () => {
    return (
        <div
            data-apiary-widget-id="/content/orderNavigateTabs"
            data-apiary-widget-name="@marketfront/OrderNavigateTabs"
        >
            <nav className={cls.nav} aria-label="Типы заказов">
                <Link
                    className={cls.purchaseItems}
                    type="link"
                    to="/my/purchased-items"
                    aria-label="Купленные товары"
                >
                    <span className={cls.purchaseItem}>
                        <span>Купленные товары</span>
                        <PurchaseItemSvg />
                    </span>
                </Link>
            </nav>
        </div>
    );
};

const OrdersPageData = (props: Omit<OrdersPageProps, 'className'>) => {
    const userData = useSelector(getUserData);

    const {
        data: orders,
        isLoading,
        isError,
        error,
    } = useOrdersPage({
        userId: userData?.id ?? '',
    });

    if (isLoading) {
        return (
            <div>
                <OrdersPageLoader />
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                <OrdersPageLoader>
                    <ApiError error={error} />
                </OrdersPageLoader>
            </div>
        );
    }

    if (!orders) return <div>No data</div>;

    return (
        <div className={cls.orderContent}>
            <div
                data-apiary-widget-id="/content/orderContent"
                data-apiary-widget-name="@marketfront/OrderList"
            >
                <div data-auto="orders-list-page-1">
                    <OrderList orders={orders} />
                    <MoreButton />
                </div>
            </div>
        </div>
    );
};

const OrdersPage = (props: OrdersPageProps) => {
    const { className, ...rest } = props;

    return (
        <Page
            data-testid="OrdersPage"
            className={classNames(cls.OrdersPage, {}, [className])}
        >
            <div id="myOrders" className={cls.wrapper}>
                <main className={cls.main}>
                    <div className={cls.title}>
                        <h1>Заказы</h1>
                    </div>
                    <PurchasedItems />
                    <OrdersPageData {...rest} />
                </main>
            </div>
        </Page>
    );
};

export default OrdersPage;

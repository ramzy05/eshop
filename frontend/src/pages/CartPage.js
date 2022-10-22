import React, { useEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import { Message } from '../components';
import { addToCart } from '../actions/cartActions';

const CartPage = () => {
	const params = useParams().id;
	const productId = params.id;
	const location = useLocation();
	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [dispatch, productId, qty]);

	return <div>Cart</div>;
};

export default CartPage;

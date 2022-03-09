import AsyncStorage from '@react-native-async-storage/async-storage'

import { useGetProductsQuery, useGetCategoriesQuery } from '../api/ApiSlice'
import { selectProducts, selectCategories, getProducts, getCategories } from '../screens/CatalogScreen/CatalogSlice'
import { setToken, selectToken, setData } from '../screens/UserScreen/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

export const beforeLoadApp = () => {
	const dispatch = useDispatch()
	const token = useSelector(selectToken)

	const loadProducts = () => {
		const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery()
		dispatch(getProducts(data))
	}
	const loadCategories = () => {
		const { data, isLoading, isSuccess, isError, error } = useGetCategoriesQuery()
		dispatch(getCategories(data))
	}

	loadProducts()
	loadCategories()

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem('@storage_Key')
			if (value !== null) {
				dispatch(setToken(value))
				// value previously stored
			}
		} catch (e) {
			// error reading value
		}
	}

	getData()

	const userCheck = async (token) => {
		try {
			const response = await fetch(`https://test.cafekolhida.ru/app-users?token=${token}`)
			const res = await response.json()
			dispatch(setData(res))
			//TODO: записываем данные пользователя в стейт
		} catch (error) {
			// TODO: сбрасываем стейт пользователя
			console.error(error)
		}
	}

	userCheck(token)

}

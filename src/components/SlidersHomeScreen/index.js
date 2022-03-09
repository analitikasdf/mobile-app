import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import tw from 'twrnc';

import { width } from '../../api/Kit';

const arr = [
	{
		id: '1',
		header: 'Акции',
		slides: [
			{ id: '1', name: 'name1', img: '' },
			{ id: '2', name: 'name2', img: '' },
			{ id: '3', name: 'name3', img: '' }
		]
	},
	{
		id: '2',
		header: 'Акции',
		slides: [
			{ id: '13', name: 'name1', img: '' },
			{ id: '23', name: 'name2', img: '' },
			{ id: '33', name: 'name3', img: '' }
		]
	},
	{
		id: '3',
		header: 'Акции',
		slides: [
			{ id: '12', name: 'name1', img: '' },
			{ id: '22', name: 'name2', img: '' },
			{ id: '32', name: 'name3', img: '' }
		]
	},
	{
		id: '4',
		header: 'Акции',
		slides: [
			{ id: '11', name: 'name1111', img: '' },
			{ id: '21', name: 'name22', img: '' },
			{ id: '31', name: 'name3', img: '' }
		]
	}
];

export const SlidersHomeScreen = () => {
	const ItemSlider = ({ header, slides }) => {
		return (
			<>
				<Text h2 style={tw.style('text-center', 'py-5')}>
					{header}
				</Text>
				<Swiper nextButton={<Text>123</Text>} showsButtons={true} loop={false} style={{ height: (width * 2) / 3 }}>
					{slides.map(i => (
						<View key={i.id} style={tw.style('flex-1', 'items-center', 'justify-center', 'bg-white')}>
							<Text>{i.name}</Text>
						</View>
					))}
				</Swiper>
			</>
		);
	};

	const listSliders = arr.map(item => {
		return <ItemSlider key={item.id} header={item.header} slides={item.slides} />;
	});

	return <View style={tw.style('mb-10', 'flex-1')}>{listSliders}</View>;
};

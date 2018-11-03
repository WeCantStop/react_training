import {
	types
} from 'mobx-state-tree';


const RootStore = types
	.model({
		name: types.string,
	})
	.actions(self => {
		function changeName() {
			self.name = 'lucy';
		}

		return { changeName };
	});


export const store = RootStore.create({
	name: 'will'
});

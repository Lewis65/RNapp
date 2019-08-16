import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import countReducer from './reducers/countReducer'

const config = {
    key: 'countApp',
    storage
}

const persistedReducer = persistReducer(config, countReducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}
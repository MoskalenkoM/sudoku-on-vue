export default {
  namespaced: true,
  state: {
    blocks: {
      a: {
        a1: '1',
        a2: '',
        a3: '',
        a4: '',
        a5: '',
        a6: '',
        a7: '',
        a8: '',
        a9: ''
      },
      b: {
        b1: '',
        b2: '',
        b3: '',
        b4: '2',
        b5: '',
        b6: '',
        b7: '',
        b8: '',
        b9: ''
      },
      c: {
        c1: '',
        c2: '',
        c3: '',
        c4: '',
        c5: '',
        c6: '',
        c7: '3',
        c8: '',
        c9: ''
      },
      d: {
        d1: '',
        d2: '4',
        d3: '',
        d4: '',
        d5: '',
        d6: '',
        d7: '',
        d8: '',
        d9: ''
      },
      e: {
        e1: '',
        e2: '',
        e3: '',
        e4: '',
        e5: '5',
        e6: '',
        e7: '',
        e8: '',
        e9: ''
      },
      f: {
        f1: '',
        f2: '',
        f3: '',
        f4: '',
        f5: '',
        f6: '',
        f7: '',
        f8: '6',
        f9: ''
      },
      g: {
        g1: '',
        g2: '',
        g3: '7',
        g4: '',
        g5: '',
        g6: '',
        g7: '',
        g8: '',
        g9: ''
      },
      h: {
        h1: '',
        h2: '',
        h3: '',
        h4: '',
        h5: '',
        h6: '8',
        h7: '',
        h8: '',
        h9: ''
      },
      k: {
        k1: '',
        k2: '',
        k3: '',
        k4: '',
        k5: '',
        k6: '',
        k7: '',
        k8: '',
        k9: '9'
      }
    }
  },
  getters: {
    blocks(state) {
      return state.blocks;
    }
  },
  mutations: {
    updateBlocks(state, data) {
      // console.log(data);
      for (let itBlock in state.blocks) {
        if (data.block === itBlock) {
          for (let it in state.blocks[data.block]) {
            if (it === data.item) {
              state.blocks[data.block][it] = data.value;
              // console.log('значение пришло в store:', data.value, 'блок:', itBlock);
              // console.log('значение обновилось в store на:', state.blocks[data.block][it]);
            }
          }
        }
      }
    }
  },
  actions: {
    changeBlocks(store, data) {
      store.commit('updateBlocks', data);
    }
  }
};

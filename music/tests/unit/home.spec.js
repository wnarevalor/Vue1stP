import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import SongItem from '@/components/SongItem.vue';
import IconSecondary from '@/directives/icon-secondary';
jest.mock('@/includes/firebase', () => {});

describe('Home.vue', () => {
  test('renders list of songs', () => {
    const songs = [{}, {}, {}];

    Home.methods.getSongs = () => false;

    const component = shallowMount(Home, {
      directives: {
        'icon-secondary': IconSecondary,
      },
      data() {
        return {
          songs,
        };
      },
      global: {
        mocks: {
          $t: (message) => message,
        },
      },
    });

    const items = component.findAllComponents(SongItem);
    expect(items).toHaveLength(songs.length);

    items.forEach((wrapper, i) => {
      expect(wrapper.props().song).toStrictEqual(songs[i]);
    });
  });
});

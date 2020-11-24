import {
  request
} from '@/network/request'

export function getHomeMulidata() {
  return request({
    url: '/index.json'
  });
}

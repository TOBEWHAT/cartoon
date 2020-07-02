import request from '../utils/request'
const getCartoonList = query => {
  return request({
    url: '/user/classlist',
    method: 'POST',
    data: query
  })
}
const getListPage = query => {
  return request({
    url: '/user/filelist',
    method: 'POST',
    data: query
  })
}
const getdetail = query => {
  return request({
    url: '/user/filedata?path=' + query.path,
    method: 'GET'
    // ,
    // data: query
  })
}
const getNextchapter = query => {
  return request({
    url: '/user/filelist',
    method: 'POST',
    data: query
  })
}
const tests = query => {
  return request({
    url: '/user/filedatac?path=bEhaUDdleDdSYWlId3hOZ3l0Z2Y4cm1zQXlhWUJWeXFNalNEY1ZPTCs2NHl1MXo1K2RWVElEdDVYbGZ1bk9ZMjRQaDJuc2VsMWlkWjdnbzNmQmN4bEZ3TWZtalhVMWxKeUNOZUhscHFKOCtxSDJ1bnJadjk3Y0VwUWcvRFlRNHZzTFFabUJXbXNUUVN3aG16UEZzRFprcnlrcm1BRTZRMW9wc2U5NWdoUHBSbUUza0E4eFVTRkhDVmticlNmZ2hVMU0rV2ZOSmRhYnRVMklvQkdYelNEOTloeXYxVFZKcGRUbEUwc05ZNG93aGJ3c0s5MDdVWXNkUVRKMVlYYmlRc2RoWFo3K285NGY5R0NxZ1p1KzNvWjlVekdZeExpdE03bmxJMDBNRmFKZ3VGdG9ManBlczRxMnJEYkRCNEdFclhtYVhmYStuYUVhcmdvS2VvdnNXbnpnPT0=',
    method: 'GET',
    data: query
  })
}
export {
  getCartoonList,
  getListPage,
  getdetail,
  getNextchapter,
  tests
}

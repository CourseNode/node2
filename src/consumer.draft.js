const slugger=require('./index')
const marker = require('@ajar/marker')

const string1="I would like this to run"
const string2="properly please"

const result=slugger(string1, string2)

marker.info('before:', string1)
marker.info('before:', string2)

marker.info('after',result)

import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({
  serviceName: 'superdiva-2',

  serverUrl: 'http://localhost:8200',

  serviceVersion: '',

  environment: 'my-environment'
})

export default apm
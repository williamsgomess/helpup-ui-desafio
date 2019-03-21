const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/calls', component: () => import('pages/Calls.vue') },
      { path: '/calls/call', component: () => import('pages/Call.vue') },
      { path: '/caregivers', component: () => import('pages/Caregivers.vue') },
      { path: '/caregivers/profile', component: () => import('pages/Profile.vue') },
      { path: '/contacts', component: () => import('pages/Contacts.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

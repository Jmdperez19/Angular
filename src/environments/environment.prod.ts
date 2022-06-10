import { Environment } from '@abp/ng.core';

const baseUrl = 'https://perez-bookstore.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://perezjei-001-site1.dtempurl.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false
  },
  apis: {
    default: {
      url: 'http://perezjei-001-site1.dtempurl.com',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;

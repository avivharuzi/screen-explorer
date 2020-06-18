import { NgxSeo } from '@avivharuzi/ngx-seo';

interface AppSeo {
  HOME: NgxSeo;
  PAGE_NOT_FOUND: NgxSeo;
}

export const APP_SEO: AppSeo = {
  HOME: {
    title: 'Screen Explorer',
  },
  PAGE_NOT_FOUND: {
    title: 'Page Not Found',
  },
};

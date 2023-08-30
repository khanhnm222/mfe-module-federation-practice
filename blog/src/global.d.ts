declare module 'mixitup';
declare module '@dafcoe/vue-notification';
declare let $: any;

declare module '*.module.css';
declare module '*.module.scss';

declare global {
  interface JQuery {
    owlCarousel(options?: any): JQuery;
    slicknav(options?: any): JQuery;
    niceSelect(): JQuery
  }
}

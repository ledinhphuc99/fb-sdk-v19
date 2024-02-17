import { defaults } from 'lodash';

export default function initFactory(FB) {
  /**
   * Used to initialize and setup the SDK. All other SDK methods must be called
   * after this one.
   *
   * https://developers.facebook.com/docs/javascript/reference/FB.init/v7.0
   * https://developers.facebook.com/apps/
   *
   * @param {Object} params - Params object
   */
  return function init(params = {}) {
    params = defaults({}, params, {
      autoLogAppEvents : true,
      xfbml            : true,
      version: 'v15.0',
    });
    FB.init(params);
  };
}

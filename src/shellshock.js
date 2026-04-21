(function () {
  const LOCAL_NOTICE = 'Local fallback mode: this snapshot is missing the original Shell Shockers runtime and backend services.';

  const noop = function () {};
  const loc = new Proxy(
    {
      signin_auth_title: 'Sign-in unavailable locally',
      signin_auth_msg: 'This local copy can render the menu shell, but login, matchmaking, inventory, and gameplay need the original Shell Shockers services.',
      ui_game_loading: 'Loading local fallback',
      ui_game_waitforit: 'Preparing the offline diagnostics shell',
      server: 'Server',
      p_servers_title: 'Servers',
      p_egg_shop_title: 'Shop',
      eq_inventory: 'Inventory',
      eq_shop: 'Shop',
      footer_privacypolicy: 'Privacy Policy',
      footer_termsofservice: 'Terms of Service',
      footer_bluewizard: 'Blue Wizard Digital',
      account_vip: 'VIP',
      account_title_shop: 'Shop',
      account_title_invite: 'Invite',
      account_title_settings: 'Settings',
      account_title_fullscreen: 'Fullscreen',
      home_play: 'Play',
      play: 'Play',
      p_changelog_title: 'Changelog',
      changelog_title: 'Changelog',
      chw_btn_free_reward: 'Reward unavailable locally',
      no_anon_title: 'Unavailable locally',
      uh_oh: 'Heads up',
      ok: 'OK',
    },
    {
      get(target, prop) {
        if (typeof prop !== 'string') return target[prop];
        return Object.prototype.hasOwnProperty.call(target, prop) ? target[prop] : prop.replace(/_/g, ' ');
      },
    }
  );

  function stubItem(id, type) {
    return {
      id,
      item_id: id,
      item_type_id: type,
      is_available: true,
      unlock: 'default',
      name: 'Local Placeholder',
    };
  }

  const externTarget = {
    inGame: false,
    gameType: 0,
    adBlocker: false,
    productBlockAds: false,
    getPwaEvent: null,
    account: {
      upgradeIsExpired: true,
      upgradeExpiryDate: null,
      isSubscriber: false,
    },
    catalog: {
      findItemById(id) {
        return stubItem(id, 1);
      },
    },
    continueStartup: noop,
    getLanguageData(languageCode, callback) {
      if (typeof callback === 'function') callback(languageCode || 'en', loc);
    },
    play() {
      if (window.vueApp) {
        window.vueApp.showGenericPopup('uh_oh', 'signin_auth_msg', 'ok');
      }
      return false;
    },
    getItemsOfType() {
      return [];
    },
    getTaggedItems() {
      return [];
    },
    getPremiumItems() {
      return [];
    },
    getEquippedItems() {
      return {};
    },
    getHouseAd() {
      return { link: '#', id: 'local', imageExt: '.png' };
    },
    isItemOwned() {
      return false;
    },
    filterUnicode(value) {
      return value;
    },
    fixStringWidth(value) {
      return value;
    },
    api_checkBalance: noop,
    api_buy(item, success) {
      if (typeof success === 'function') success();
    },
    api_redeem(code, success) {
      if (typeof success === 'function') success(code || '');
    },
    api_inGameReward(success) {
      if (typeof success === 'function') success(0);
    },
    api_incentivizedVideoRewardRequested: noop,
    api_feedback(type, email, feedback) {
      console.info('Feedback unavailable in local fallback', { type, email, feedback });
    },
    checkStartChicknWinner: noop,
    poseWithItem: noop,
    saveEquipment: noop,
    closeEquipInGame: noop,
    openEquipInGame: noop,
    removeItemType: noop,
    tryEquipItem: noop,
    setShellColor: noop,
    setSafeNames: noop,
    setVolume: noop,
    setMouseSpeed: noop,
    setControllerSpeed: noop,
    setDeadzone: noop,
    setMusicVolume: noop,
    setMusicStatus: noop,
    applyUiSettings: noop,
    resetSettings: noop,
    changeClass: noop,
    clickedWebFeedItem: noop,
    socialReward: noop,
    settingsMenuOpened: noop,
    showSignInDialog() {
      if (window.vueApp) window.vueApp.showGenericPopup('uh_oh', 'signin_auth_msg', 'ok');
    },
    signOut: noop,
    sendFirebaseVerificationEmail: noop,
    toggleFullscreen: noop,
    inviteFriends: noop,
    showMainMenuConfirm: noop,
    showFeedbackForm: noop,
    openSettingsMenu: noop,
    leaveGame(callback) {
      if (typeof callback === 'function') callback();
    },
    copyFriendCode: noop,
    switchTeam: noop,
    respawn: noop,
    enterSpectatorMode: noop,
    pokiRewardedBreak(success) {
      if (typeof success === 'function') success(0);
    },
    buyProductForMoney: noop,
    openUrlAndGiveReward: noop,
    chwRadialProgress: noop,
    setOfAge: noop,
    setTargetedAds: noop,
    selectServer: noop,
    selectGameType(value) {
      this.gameType = value;
    },
    renderItemToCanvas: noop,
    clickedHouseLink: noop,
    clickedHouseAdBig: noop,
    clickedHouseAdSmall: noop,
    doConsent: noop,
    doNotConsent: noop,
    releaseKeys: noop,
    captureKeys: noop,
    onChatKeyDown: noop,
  };

  window.extern = new Proxy(externTarget, {
    get(target, prop) {
      if (prop in target) return target[prop];
      return noop;
    },
  });

  window.BAWK = window.BAWK || { play: noop };

  function ensureNotice() {
    if (document.getElementById('local-shellshock-notice')) return;
    const notice = document.createElement('div');
    notice.id = 'local-shellshock-notice';
    notice.style.cssText =
      'position:fixed;top:1rem;right:1rem;z-index:9999;max-width:28rem;padding:.9rem 1rem;background:rgba(21,33,56,.94);color:#fff;border:2px solid #ffd25a;border-radius:.75rem;font:14px/1.4 system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.35);';
    notice.textContent = LOCAL_NOTICE;
    document.body.appendChild(notice);
  }

  function startFallback() {
    ensureNotice();
    if (typeof window.startVue === 'function') {
      window.startVue('en', loc);
      if (window.vueApp) {
        window.vueApp.accountSettled = false;
        window.vueApp.ready = true;
        window.vueApp.playerName = window.vueApp.playerName || 'Local Player';
      }
    }
    if (window.Loader && typeof window.Loader.hide === 'function') {
      window.Loader.hide();
    }
  }

  window.handleShellShockLocalFallback = function () {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startFallback, { once: true });
      return;
    }
    startFallback();
  };

  window.onloadingcomplete = function () {
    startFallback();
  };
})();

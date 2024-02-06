import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import FollowersPage from "../pages/followers";
import LibraryPage from "../pages/library";
import LikedPage from "../pages/liked";
import MusicPage from "../pages/music";
import LoginPage from "../pages/login";
import ReelsPage from "../pages/reels";
import NewsPage from "../pages/news";
import SubscriptionHomePage from "../pages/subscription";
import SubscriptionVideoPage from "../pages/subscription/videos";
import SubscriptionPlaylistPage from "../pages/subscription/playlist";
import PodcastPage from "../pages/podcast";
import ChannelMainPage from "../pages/channel";
import ChannelDashboardPage from "../pages/channel/dashboard";
import ChannelContentPage from "../pages/channel/content";
import ChannelAnalyticsPage from "../pages/channel/analytics";
import ChannelCommentsMentionPage from "../pages/channel/comments.mentions";
import ChannelSubtitlesPage from "../pages/channel/subtitles";
import ChannelCopyrightPage from "../pages/channel/copyright";
import ChannelEarningPage from "../pages/channel/earn";
import ChannelCustomizationPage from "../pages/channel/customization";
import ReportHistoryPage from "../pages/report-history";
import StorePage from "../pages/store";
import FashionPage from "../pages/fashionAndBeauty";
import SportsPage from "../pages/sports";
import ProductDetailsPage from "../pages/product-details";
import SettingsAccountPage from "../pages/settings/Account";
import SettingsNotificationPage from "../pages/settings/notification";
import PerformanceAndPlaybackPage from "../pages/settings/playbackAndPerformance";
import DownloadsPage from "../pages/settings/downloads";
import PrivacyPage from "../pages/settings/privacy";
import ConnectedAppsPage from "../pages/settings/connected-apps";
import BillingsAndPaymentPage from "../pages/settings/billings-and-payment";
import AdvanceSettingPage from "../pages/settings/advance-setting";
import ChannelAudioLibraryPage from "../pages/channel/audio-library";
import SubscriptionCommunityPage from "../pages/subscription/community";
import SubscriptionChannelPage from "../pages/subscription/channel";
import SubscriptionAboutPage from "../pages/subscription/about";
import ParentalControlPage from "../pages/parentalControl";
import TrendingPage from "../pages/trending";
import GamingPage from "../pages/gaming";
import FeedbackPage from "../pages/feedback";
import HelpNotificationPage from "../pages/help-notification";
import CopyRightPage from "../pages/copyright";
import LiveStreamPage from "../pages/live-streaming";
import VideoPage from "../pages/video";
import HistoryPage from "../pages/History";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/followers" element={<FollowersPage />}></Route>
      <Route path="/library" element={<LibraryPage />}></Route>
      <Route path="/liked" element={<LikedPage />}></Route>
      <Route path="/music" element={<MusicPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/news" element={<NewsPage />}></Route>
      <Route path="/trending" element={<TrendingPage />}></Route>
      <Route path="/gaming" element={<GamingPage />}></Route>
      <Route path="/podcast" element={<PodcastPage />}></Route>
      <Route path="/feedback" element={<FeedbackPage />}></Route>
      <Route path="/copyright" element={<CopyRightPage />}></Route>
      <Route path="/video" element={<VideoPage />}></Route>
      <Route path="/history" element={<HistoryPage />}></Route>
      <Route path="/live-stream" element={<LiveStreamPage />}></Route>
      <Route
        path="/help-notification"
        element={<HelpNotificationPage />}
      ></Route>
      <Route path="/channel/main" element={<ChannelMainPage />}></Route>
      <Route
        path="/channel/dashboard"
        element={<ChannelDashboardPage />}
      ></Route>
      <Route path="/channel/content" element={<ChannelContentPage />}></Route>
      <Route
        path="/channel/analytics"
        element={<ChannelAnalyticsPage />}
      ></Route>
      <Route
        path="/channel/comments/mentions"
        element={<ChannelCommentsMentionPage />}
      ></Route>
      <Route
        path="/channel/subtitles"
        element={<ChannelSubtitlesPage />}
      ></Route>
      <Route
        path="/channel/copyrights"
        element={<ChannelCopyrightPage />}
      ></Route>
      <Route path="/channel/earn" element={<ChannelEarningPage />}></Route>
      <Route
        path="/channel/customization"
        element={<ChannelCustomizationPage />}
      ></Route>
      <Route
        path="/channel/audio-library"
        element={<ChannelAudioLibraryPage />}
      ></Route>
      <Route path="/subscription" element={<SubscriptionHomePage />}></Route>
      <Route
        path="/subscription/videos"
        element={<SubscriptionVideoPage />}
      ></Route>
      <Route
        path="/subscription/playlist"
        element={<SubscriptionPlaylistPage />}
      ></Route>
      <Route
        path="/subscription/community"
        element={<SubscriptionCommunityPage />}
      ></Route>
      <Route
        path="/subscription/channels"
        element={<SubscriptionChannelPage />}
      ></Route>
      <Route
        path="/subscription/about"
        element={<SubscriptionAboutPage />}
      ></Route>
      <Route path="/report-history" element={<ReportHistoryPage />}></Route>
      <Route path="/store" element={<StorePage />}></Route>
      <Route path="/fashion&beauty" element={<FashionPage />}></Route>
      <Route path="/sports" element={<SportsPage />}></Route>
      <Route path="/product/details" element={<ProductDetailsPage />}></Route>
      <Route path="/settings/account" element={<SettingsAccountPage />}></Route>
      <Route
        path="/settings/notifications"
        element={<SettingsNotificationPage />}
      ></Route>
      <Route
        path="/settings/performance&playback"
        element={<PerformanceAndPlaybackPage />}
      ></Route>
      <Route path="/settings/downloads" element={<DownloadsPage />}></Route>
      <Route path="/settings/privacy" element={<PrivacyPage />}></Route>
      <Route
        path="/settings/connected-apps"
        element={<ConnectedAppsPage />}
      ></Route>
      <Route
        path="/settings/billing&payment"
        element={<BillingsAndPaymentPage />}
      ></Route>
      <Route path="/settings/advance" element={<AdvanceSettingPage />}></Route>
      <Route path="/parental-control" element={<ParentalControlPage />}></Route>
      {/* <Route path='/reels' element={<ReelsPage />}></Route> */}
    </Routes>
  );
};

export default AppRouter;

import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import FollowersPage from "../pages/followers";
import LibraryPage from "../pages/library";
import LikedPage from "../pages/liked";
import MusicPage from "../pages/music";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
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
import Public from "../components/Route/PublicRoute";
import Protected from "../components/Route/ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/login"
        element={
          <Public>
            <LoginPage />
          </Public>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <Public>
            <SignupPage />
          </Public>
        }
      ></Route>
      <Route path="/trending" element={<TrendingPage />}></Route>
      <Route path="/news" element={<NewsPage />}></Route>

      <Route
        path="/followers"
        element={
          <Protected>
            <FollowersPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/library"
        element={
          <Protected>
            <LibraryPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/liked"
        element={
          <Protected>
            <LikedPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/music"
        element={
          <Protected>
            <MusicPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/gaming"
        element={
          <Protected>
            <GamingPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/podcast"
        element={
          <Protected>
            <PodcastPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/feedback"
        element={
          <Protected>
            <FeedbackPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/copyright"
        element={
          <Protected>
            <CopyRightPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/video/id"
        element={
          <Protected>
            <VideoPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/history"
        element={
          <Protected>
            <HistoryPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/live-stream"
        element={
          <Protected>
            <LiveStreamPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/help-notification"
        element={
          <Protected>
            <HelpNotificationPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/channel/main"
        element={
          <Protected>
            <ChannelMainPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/channel/dashboard"
        element={
          <Protected>
            <ChannelDashboardPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/channel/content"
        element={
          <Protected>
            <ChannelContentPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/channel/analytics"
        element={
          <Protected>
            <ChannelAnalyticsPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/channel/comments/mentions"
        element={
          <Protected>
            <ChannelCommentsMentionPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/channel/subtitles"
        element={
          <Protected>
            <ChannelSubtitlesPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/channel/copyrights"
        element={
          <Protected>
            <ChannelCopyrightPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/channel/earn"
        element={
          <Protected>
            <ChannelEarningPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/channel/customization"
        element={
          <Protected>
            <ChannelCustomizationPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/channel/audio-library"
        element={
          <Protected>
            <ChannelAudioLibraryPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/subscription"
        element={
          <Protected>
            <SubscriptionHomePage />
          </Protected>
        }
      ></Route>
      <Route
        path="/subscription/videos"
        element={
          <Protected>
            <SubscriptionVideoPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/subscription/playlist"
        element={
          <Protected>
            <SubscriptionPlaylistPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/subscription/community"
        element={
          <Protected>
            <SubscriptionCommunityPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/subscription/channels"
        element={
          <Protected>
            <SubscriptionChannelPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/subscription/about"
        element={
          <Protected>
            <SubscriptionAboutPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/report-history"
        element={
          <Protected>
            <ReportHistoryPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/store"
        element={
          <Protected>
            <StorePage />
          </Protected>
        }
      ></Route>
      <Route
        path="/fashion&beauty"
        element={
          <Protected>
            <FashionPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/sports"
        element={
          <Protected>
            <SportsPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/product/details"
        element={
          <Protected>
            <ProductDetailsPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/settings/account"
        element={
          <Protected>
            <SettingsAccountPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/settings/notifications"
        element={
          <Protected>
            <SettingsNotificationPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/settings/performance&playback"
        element={
          <Protected>
            <PerformanceAndPlaybackPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/settings/downloads"
        element={
          <Protected>
            <DownloadsPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/settings/privacy"
        element={
          <Protected>
            <PrivacyPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/settings/connected-apps"
        element={
          <Protected>
            <ConnectedAppsPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/settings/billing&payment"
        element={
          <Protected>
            <BillingsAndPaymentPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/settings/advance"
        element={
          <Protected>
            <AdvanceSettingPage />
          </Protected>
        }
      ></Route>
      <Route
        path="/parental-control"
        element={
          <Protected>
            <ParentalControlPage />
          </Protected>
        }
      ></Route>
      {/* <Route path='/reels' element={
        <Protected>
        <ReelsPage />
        </Protected>
        }></Route> */}
    </Routes>
  );
};

export default AppRouter;

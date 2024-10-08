const Routes = {
  login: "/login",
  register: "/register",
  forgot_password: "/forgot-password",
  dashboard: "/dashboard",
  dashboard_new: "/dashboard/new",
  settings: "/settings",
  settings_team: "/settings/team",
  settings_billing: "/settings/billing",
  profile: "/profile",
  widget_detail_customize: (id: string | number) => `/dashboard/widgets/${id}/customize`,
  widget_detail_submission: (id: string | number) => `/dashboard/widgets/${id}/submissions`,
  widget_detail_content: (id: string | number) => `/dashboard/widgets/${id}/content`,
  widget_preview: (id: string | number) => `/preview/${id}/`,
  widget_create: `/dashboard/widgets/create`,
};

export default Routes;

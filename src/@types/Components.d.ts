declare namespace MenuItem {
  type Props = {
    icon: import('@material-ui/icons').SvgIconComponent
    small?: boolean
    path: string
    primaryText: string
    onClick?: () => void
  }
}

declare namespace Navigation {
  type Props = {
    open: boolean
    isCollapsed: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  }
}

declare namespace Header {
  type Props = {
    setIsNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>
    isNavigationCollapsed: boolean
  }
}

declare namespace PageLayoutContainer {
  type Props = {
    isNavigationCollapsed: boolean
    children: React.ReactNode
  }
}

declare namespace NewsItem {
  type News = {
      id: string;
      title: string;
      description: string;
      image: string;
      postedAt: Date;
  }

  type Props = {
    news: News
  }
}

declare namespace MetricCard {
  type Props = {
    color: React.CSSProperties['color']
    labelPrimary: string
    labelSecondary?: string
    icon: import('@material-ui/icons').SvgIconComponent
  }
}

declare namespace OrderTimelineItem {
  type Timeline = {
    id: string,
    title: string,
    time: Date,
    type: 'order1' | 'order2' | 'order3' | 'order4' | 'order5'
  }

  type Props = {
    timeline: Timeline
    isLast?: boolean
  }
}

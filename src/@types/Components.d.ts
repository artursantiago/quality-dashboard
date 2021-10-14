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

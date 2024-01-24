import { useEffect } from 'react'

const usePreferredTheme = () => {
    useEffect(() => {
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
        document.documentElement.setAttribute('data-theme', preferredTheme)
    }, [])
}

export default usePreferredTheme

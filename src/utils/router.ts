import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

export function navigateTo(path: string) {
    history.push(path)
}
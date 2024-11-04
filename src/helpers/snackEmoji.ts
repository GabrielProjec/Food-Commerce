export function snackEmoji(name: string){
    switch (name.toLowerCase()) {
        case 'burguer':
        return '🍔'
          case 'pizza':
        return '🍕'
          case 'drink':
        return '🥤'
          case 'ice-cream':
        return '🍨'
        default:
            return '🔍'
    }
}
export function increase(number) {
    return {
        type: 'INCREASE',
        payload: number
    }
}
export function decrease(number){
    return{
        type:'DECREASE',
        payload:number
    }
}
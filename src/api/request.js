
export const getCurrenciesReq = async()=>{
    const header = new Headers();
    header.mode = 'no-cors'
    const response = await fetch('https://openexchangerates.org/api/latest.json?app_id=1e40163c4ed64ba2b86f2148e7c27f23')
    const json = await response.json();
    return json;
}

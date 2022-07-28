export const importSvg = async(path, svgIcon, call)=>{
    let data = null 
    switch(path){
        case 'md':  data = await import('react-icons/md'); break;
        case 'vsc': data = await import('react-icons/vsc'); break;
        case 'tb':  data = await import('react-icons/tb'); break;
        default: data = await import('react-icons/ri')
    }
    call(data[svgIcon])
}
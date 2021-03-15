
import { get } from "lodash";
import data from "~/assets/data.json"

export const state = () => ({
    list: [
        
    ]
})
  
export const mutations = {
    
    
}

export const actions = {
    async runQuery({ commit, state }, query) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)    
            }, 3000);
        });
    },
}
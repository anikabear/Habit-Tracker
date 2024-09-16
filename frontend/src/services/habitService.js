import habitServiceConfig from '../apiconfig'
const habitService = { 
    fetchHabits: async ()=>{
        try {
            const response = await fetch(`${habitServiceConfig.getApiUrl()}/api/habits`)
            
            return await response.json()

            
        } catch (error) {
            console.log(error)
        }
    },

    addHabit: async (name, completed) => {
        try {
            const response = await fetch(
                `${habitServiceConfig.getApiUrl()}/api/habits`, 
                {
                    method:"POST",
                    headers:{"content-type": "application/json"},
            
                    body: JSON.stringify({
                        "name": name,
                        "completed": completed
                    })
                })
                return await response.json();
        } catch (error) {
            console.log(error)
        }
    },

    setComplete: async (habit) => {
        try {
            const response = await fetch(
                `${habitServiceConfig.getApiUrl()}/api/habits/${habit.id}`, 
                {
                    method:"PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "completed": !habit.completed
                    })
                }
            )
            return await response.json();
        }
        catch (error) {
            console.log(error);
        }
    } ,
    deleteHabit: async (id) => {
        try {
            const response = await fetch(
                `${habitServiceConfig.getApiUrl()}/api/habits/${id}`, 
                {
                    method: "DELETE",
                }
            )
        } catch (error) {
            
        }
    }
   
   }
   
   export default habitService;
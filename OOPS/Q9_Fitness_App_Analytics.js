const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }

        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(record => record.steps > 7000);
    }

    getAverageCalories() {
        const totalCalories = this.data.reduce((total, record) => total + record.calories, 0);
        return totalCalories / this.data.length;
    }

    getUserSummary() {
        return this.data.map(record =>
            `${record.user} walked ${record.steps} steps and burned ${record.calories} calories.`
        );
    }
}

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active users (more than 7000 steps):");
    console.log(analytics.getActiveUsers());

    console.log(`Average calories burned: ${analytics.getAverageCalories().toFixed(2)}`);

    console.log("User summaries:");
    analytics.getUserSummary().forEach(summary => console.log(summary));
} catch (error) {
    console.log(`Analytics error: ${error.message}`);
}

try {
    const emptyAnalytics = new FitnessAnalytics([]);
    console.log(emptyAnalytics.getAverageCalories());
} catch (error) {
    console.log(`Analytics error: ${error.message}`);
}

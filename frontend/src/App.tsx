import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Playground } from "./components/pages/Chatbot";
import { LandingPage } from "./components/pages/LandingPage";
import PrakrutiAnalyzerPage from "./components/pages/PrakrutiAnalyzerPage";


function App() {
  const queTexts =['Body Built', 'Hairs', 'Skin', 'Complexion', 'Body Weight', 'Nails', 'Size and Color of Teeth', 'Nature of Doing Work', 'Mental Behavior', 'Memory', 'Grasping Power', 'Sleep Pattern', 'Intolerence to Weather Conditions', 'Reactions Under Adverse Situation', 'Mood', 'Eating Habit', 'Hunger', 'Body Temperature', 'Joints', 'Nature', 'Body Energy', 'Eyeball', 'Quality of Voice', 'Dreams', 'Social Relations', 'Wealth', 'Bowel Movements', 'Walking Pace', 'Communication Skills'];
       
  const ansTexts =  [
            ['Thin and Lean', 'Medium', 'Heavy, Well Built'],
            ['Dry and Dull, Split-ended, Hairfall', 'Normal, Thin, Premature Greying', 'Oily, Heavy and Long Black'],
            ['Dry, Rough, Thin', 'Soft, Sweating, Acne', 'Smooth, Oily, Thick'],
            ['Dark or Blackish', 'Pink to Red', 'Glowing White'],
            ['Underweight, Difficult to Gain Weight', 'Balanced, Can Easily Lose or Gain Weight', 'Overweight, Difficult to Lose Weight'],
            ['Blackish, Small, Brittle', 'Reddish, Small', 'Pinkish, Big, Smooth'],
            ['Irregularly Formed Teeth, Blackish', 'Medium Sized, Yellowish', 'Balanced, Shinning White'],
            ['Fast Speed, Always in Hurry', 'Medium Speed, Focused, Energetic', 'Slow Speed, Steady with Deep Thinking'],
            ['Fast, Very Responsive, Restless', 'Sharp, Logical, Aggressive', 'Peaceful, Calm, Highly Stable'],
            ['Short-Term Good, Long-Term Bad', 'Both Short-Term and Long-Term Good', 'Short-Term Bad, Long-Term Good'],
            ['Grasps Quickly but not Completely and Forgets Quickly', 'Grasps Quickly, Completely and Retains for Longer Time', 'Grasps Late and Retains for Longer Time'],
            ['Restless, Interrupted and Less Sleep', 'Peaceful, Sound and Optimum Sleep', 'Deep, Calm and More Sleep'],
            ['Cannot Tolerate Winters', 'Cannot Tolerate Summers', 'Cannot Tolerate Rain and Winters'],
            ['Anxiety, Restlessness, Irritability', 'Anger, Aggression', 'Calm, Depressive and Likes Solitude'],
            ['Changes Quickly', 'Changes Slowly', 'Stable and Constant Mood'],
            ['Eats Quickly Without Chewing Properly', 'Eats at a Moderate Speed', 'Eats Slowly'],
            ['Sometimes Good, Sometimes Bad and at Irregular Times', 'Sharp Hunger, at Times, Sometimes Strong Desire to Eat', 'Less Appetite, Can Skip any Meal Easily'],
            ['Less than Normal, Hands and Feet generally Cold', 'More than Normal, Face and Forehead generally Hot', 'Normal, Hands and Feet Slightly Cold'],
            ['Weak and Emerged Joints, Noise on Movement', 'Healthy with Optimal Strength', 'Heavy and Weight Bearing'],
            ['Lacking Courage, Fearful and Jealous', 'Courageous, Fearless and Egoistic', 'Forgiving, Greatful and Not Greedy'],
            ['Gets Tired till Evening and even after Little Work', 'Moderate Energy, Gets Tired After Medium Work', 'Excellent Energy Throughout Day, Not Easily Tired'],
            ['Unsteady, Fast Moving', 'Moving Slowly', 'Steady'],
            ['Rough with Broken Words', 'Fast, Commanding', 'Soft and Deep'],
            ['Sky, Wind, Flying Objects and Confusion', 'Fire, Light, Bright Colors, Violence', 'Water Pools, Gardens and Good Relationships'],
            ['Less Friends, Prefers Solitude', 'Good No. of Friends', 'Love to Socialize,Long Lasting Relationships'],
            ['Spends Without Much Thinking', 'Saves but Spends on Valuable Things', 'Prefers More Savings and Makes Wealth'],
            ['Dry, Hard, Blackish, Less Stool', 'Soft, Yellowish, Loose Motion', 'Heavy, Thick, Sticky Motion'],
            ['Quick, Fast With long Steps', 'Average, Steady', 'Slow with Short Steps'],
            ['Fast, Irrelevant Talk, Speech not Clear', 'Good Speakers with Genuine Argumentative Skills', 'Authoritative, Firm and Little Speech']
        ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="chatbot" element={<Playground/>} />
        <Route path="prakruti-analyzer" element={<PrakrutiAnalyzerPage queTexts={queTexts} ansTexts={ansTexts}/>} />
      </Routes>
    </Router>
  );
}

export default App;

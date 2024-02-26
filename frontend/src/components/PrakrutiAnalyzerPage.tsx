// import { useState } from 'react';
import { AutoscrollRunner } from "@tripetto/runner-autoscroll";

const que_texts = ['Body Built', 'Hairs', 'Skin', 'Complexion', 'Body Weight', 'Nails', 'Size and Color of Teeth', 'Nature of Doing Work', 'Mental Behavior', 'Memory', 'Grasping Power', 'Sleep Pattern', 'Intolerance to Weather Conditions', 'Reactions Under Adverse Situation', 'Mood', 'Eating Habit', 'Hunger', 'Body Temperature', 'Joints', 'Nature', 'Body Energy', 'Eyeball', 'Quality of Voice', 'Dreams', 'Social Relations', 'Wealth', 'Bowel Movements', 'Walking Pace', 'Communication Skills'];
const ans_texts = [
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
    ['Lacking Courage, Fearful and Jealous', 'Courageous, Fearless and Egoistic', 'Forgiving, Grateful and Not Greedy'],
    ['Gets Tired till Evening and even after Little Work', 'Moderate Energy, Gets Tired After Medium Work', 'Excellent Energy Throughout Day, Not Easily Tired'],
    ['Unsteady, Fast Moving', 'Moving Slowly', 'Steady'],
    ['Rough with Broken Words', 'Fast, Commanding', 'Soft and Deep'],
    ['Sky, Wind, Flying Objects and Confusion', 'Fire, Light, Bright Colors, Violence', 'Water Pools, Gardens and Good Relationships'],
    ['Less Friends, Prefers Solitude', 'Good No. of Friends', 'Love to Socialize, Long Lasting Relationships'],
    ['Spends Without Much Thinking', 'Saves but Spends on Valuable Things', 'Prefers More Savings and Makes Wealth'],
    ['Dry, Hard, Blackish, Less Stool', 'Soft, Yellowish, Loose Motion', 'Heavy, Thick, Sticky Motion'],
    ['Quick, Fast With long Steps', 'Average, Steady', 'Slow with Short Steps'],
    ['Fast, Irrelevant Talk, Speech not Clear', 'Good Speakers with Genuine Argumentative Skills', 'Authoritative, Firm and Little Speech']
];

export const PrakrutiAnalyzerPage = () => {
    return (
    <AutoscrollRunner definition={{"name":"Prakruti Assessment Test","description":"Prakriti literally meaning constitution or nature, and consists of the tridoshas (vata, pitta, and kapha). The three striking constitutions of prakriti (vata, pitta, and kapha) present a set of metabolic tendencies which help in determining the reaction of body and mind when confronted by a stimulus.","language":"en","prologue":{"title":"Welcome to Prakruti Analyzer","description":"Proceed to answer the questionnaire to get your results.","button":"Take test"},"epilogue":{"title":"End of demo","description":"Thanks for checking out this example. We won't use the data you entered.","button":{"label":"See more examples","url":"https://tripetto.com/examples/","target":"blank"},"repeatable":true},"sections":[{"id":"b3b9d1ceda6e57757e326c0a39dfd318455beb07747057d0215736b72259c489","name":"Login","nodes":[{"id":"ba1937e98adf583c047288f31d026e923a9ff18af90419f823bf7c86f0d449ad","explanation":"","name":"How would you describe your body-build?","nameVisible":true,"placeholder":"Enter the password...","description":"Select one out of the following","slots":[{"id":"dad3c70d68877552fae78adbff5ce90623b6c618a13722b3da5aef678f36bd42","type":"string","kind":"static","reference":"choice","label":"Choice"}],"block":{"type":"@tripetto/block-multiple-choice","version":"7.0.1","choices":[{"id":"c988dbc227cb94e75c8b617f6fd4e2e779c18027b62b9cf716ffc24cd48629ef","name":"Thin and Lean"},{"id":"ba8e7be7d5f50330623eae081311d5a18c40bdf775b30b8a2a783e4462aea9cd","name":"Medium"},{"id":"02f092cb2e14896516985359c9ed16f08bc4cff5ee6f064773e2392299aa99d7","name":"Heavy","description":"","url":"","target":"blank","color":""},{"id":"293c049ff1025106d3ef9ada5b165f1e2f99b90f23f9591eeea147e0932f45e7","name":"Well Built"}]}},{"id":"ee934c2c3be42b6570237bca3709c318dd066cdd03ec01bf88e1019047433b75"}]},{"id":"65703d2ed89e145edf532dcae91619124819bdc9c6cc7feb117a699ef189bd90","nodes":[{"id":"81c54b0abc7e52fb88efbc9857474a8f8a8bbc0f2dd63f2dcba7512d244fc0ad","name":"How would you describe your hair condition ?","nameVisible":true,"description":"Select one out of the following","slots":[{"id":"872939bf3246f1e9fd7a3e4fc4dab3f2634beac370d723ab935182da9845f30a","type":"string","kind":"static","reference":"choice","label":"Choice"}],"block":{"type":"@tripetto/block-multiple-choice","version":"7.0.1","choices":[{"id":"f4d359418ac9e20e0f6456e9ffea7163da40691d8b6317b6747395369c99c190","name":"Dry and Dull, Split-ended, Hair fall"},{"id":"d08f815c6c5eb4f997e863f9e4606f76fd225b06165f6649b71b3b64b44ef0ae","name":"Normal, Thin, Premature Greying"},{"id":"4c7b44b6e52ecfdc551ed89e9d4a98c347a15f2d6ed1468ec5426c8b29c7ca72","name":"Oily, Heavy and Long Black"}]}}]}],"builder":{"name":"@tripetto/builder","version":"6.1.0"}}} />
    );
};

export default PrakrutiAnalyzerPage;

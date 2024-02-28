// import { useState } from 'react';
import { AutoscrollRunner } from "@tripetto/runner-autoscroll";

export const PrakrutiAnalyzerPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
          <div className="max-w-lg w-full p-4 rounded">
            <AutoscrollRunner definition={{
              "name": "Prakruti Assessment Test",
              "description": "Prakriti literally meaning constitution or nature, and consists of the tridoshas (vata, pitta, and kapha). The three striking constitutions of prakriti (vata, pitta, and kapha) present a set of metabolic tendencies which help in determining the reaction of body and mind when confronted by a stimulus.",
              "language": "en",
              "prologue": {
                "title": "Welcome to Prakruti Analyzer",
                "description": "Proceed to answer the questionnaire to get your results.",
                "button": "Take test"
              },
              "epilogue": {
                "title": "End of demo",
                "description": "Thanks for checking out this example. We won't use the data you entered.",
                "button": {
                  "label": "See more examples",
                  "url": "https://tripetto.com/examples/",
                  "target": "blank"
                },
                "repeatable": true
              },
              "sections": [
                {
                  "id": "b3b9d1ceda6e57757e326c0a39dfd318455beb07747057d0215736b72259c489",
                  "name": "Login",
                  "nodes": [
                    {
                      "id": "ba1937e98adf583c047288f31d026e923a9ff18af90419f823bf7c86f0d449ad",
                      "explanation": "",
                      "name": "How would you describe your body-build?",
                      "nameVisible": true,
                      "placeholder": "Enter the password...",
                      "description": "Select one out of the following",
                      "slots": [
                        {
                          "id": "dad3c70d68877552fae78adbff5ce90623b6c618a13722b3da5aef678f36bd42",
                          "type": "string",
                          "kind": "static",
                          "reference": "choice",
                          "label": "Choice"
                        }
                      ],
                      "block": {
                        "type": "@tripetto/block-multiple-choice",
                        "version": "7.0.1",
                        "choices": [
                          {
                            "id": "c988dbc227cb94e75c8b617f6fd4e2e779c18027b62b9cf716ffc24cd48629ef",
                            "name": "Thin and Lean"
                          },
                          {
                            "id": "ba8e7be7d5f50330623eae081311d5a18c40bdf775b30b8a2a783e4462aea9cd",
                            "name": "Medium"
                          },
                          {
                            "id": "02f092cb2e14896516985359c9ed16f08bc4cff5ee6f064773e2392299aa99d7",
                            "name": "Heavy",
                            "description": "",
                            "url": "",
                            "target": "blank",
                            "color": ""
                          },
                          {
                            "id": "293c049ff1025106d3ef9ada5b165f1e2f99b90f23f9591eeea147e0932f45e7",
                            "name": "Well Built"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "id": "65703d2ed89e145edf532dcae91619124819bdc9c6cc7feb117a699ef189bd90",
                  "nodes": [
                    {
                      "id": "81c54b0abc7e52fb88efbc9857474a8f8a8bbc0f2dd63f2dcba7512d244fc0ad",
                      "name": "How would you describe your hair condition ?",
                      "nameVisible": true,
                      "description": "Select one out of the following",
                      "slots": [
                        {
                          "id": "872939bf3246f1e9fd7a3e4fc4dab3f2634beac370d723ab935182da9845f30a",
                          "type": "string",
                          "kind": "static",
                          "reference": "choice",
                          "label": "Choice"
                        }
                      ],
                      "block": {
                        "type": "@tripetto/block-multiple-choice",
                        "version": "7.0.1",
                        "choices": [
                          {
                            "id": "f4d359418ac9e20e0f6456e9ffea7163da40691d8b6317b6747395369c99c190",
                            "name": "Dry and Dull, Split-ended, Hair fall"
                          },
                          {
                            "id": "d08f815c6c5eb4f997e863f9e4606f76fd225b06165f6649b71b3b64b44ef0ae",
                            "name": "Normal, Thin, Premature Greying"
                          },
                          {
                            "id": "4c7b44b6e52ecfdc551ed89e9d4a98c347a15f2d6ed1468ec5426c8b29c7ca72",
                            "name": "Oily, Heavy and Long Black"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "builder": {
                "name": "@tripetto/builder",
                "version": "6.1.0"
              }
            }} />
          </div>
        </div>
      );
    };

export default PrakrutiAnalyzerPage;

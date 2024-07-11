export const json = {
 "title": "CTGP Track Rating Form",
 "logoPosition": "right",
 "pages": [
  {
   "name": "player_info",
   "elements": [
    {
     "type": "text",
     "name": "name",
     "title": "Name",
     "isRequired": true
    },
    {
     "type": "text",
     "name": "discord",
     "startWithNewLine": false,
     "title": "Discord Username",
     "description": "This is for your username, NOT for your display name / nickname.\n(e.x. chadderz121, as opposed to Chadderz)",
     "isRequired": true,
     "validators": [
      {
       "type": "regex",
       "text": "Invalid discord username (you might have accidentally put a space at the end).",
       "regex": "^[a-zA-Z0-9_\\.]{2,32}$"
      }
     ],
     "maxLength": 32
    },
    {
     "type": "text",
     "name": "country",
     "title": "Country",
     "isRequired": true,
     "autocomplete": "country-name"
    },
    {
     "type": "boolean",
     "name": "jp_comm",
     "startWithNewLine": false,
     "title": "Are you part of the Japanese CT community?",
     "isRequired": true,
     "labelTrue": "Yes",
     "labelFalse": "No",
     "swapOrder": true
    },
    {
     "type": "text",
     "name": "years_played",
     "title": "How many years have you been actively playing the game for?",
     "isRequired": true,
     "inputType": "range",
     "min": 0,
     "max": 16,
     "step": 1
    },
    {
     "type": "boolean",
     "name": "author",
     "title": "Are you a Custom Track author?",
     "isRequired": true,
     "swapOrder": true
    },
    {
     "type": "boolean",
     "name": "comp",
     "startWithNewLine": false,
     "title": "Do you play Mario Kart Wii competitively online?",
     "isRequired": true,
     "swapOrder": true
    },
    {
     "type": "boolean",
     "name": "wr_holder",
     "startWithNewLine": false,
     "title": "Have you ever held a World Record on any track, regular or custom?",
     "isRequired": true,
     "swapOrder": true
    },
    {
     "type": "panel",
     "name": "comp_panel",
     "elements": [
      {
       "type": "panel",
       "name": "gsc_panel",
       "elements": [
        {
         "type": "boolean",
         "name": "gsc",
         "title": "Grand Star Cup",
         "titleLocation": "left",
         "isRequired": true,
         "swapOrder": true
        },
        {
         "type": "tagbox",
         "name": "gsc_format",
         "visibleIf": "{gsc} = true",
         "isRequired": true,
         "choices": [
          {
           "value": "rt_run",
           "text": "Regular Tracks"
          },
          {
           "value": "rt_bag",
           "text": "Regular Tracks (Bagger)"
          },
          {
           "value": "ct_run",
           "text": "Custom Tracks"
          },
          {
           "value": "ct_bag",
           "text": "Custom Tracks (Bagger)"
          }
         ],
         "colCount": 2
        },
        {
         "type": "dropdown",
         "name": "gsc_rank_copythis",
         "visibleIf": "{gsc_format} contains 'rt_run'",
         "title": "RT Tier",
         "titleLocation": "left",
         "isRequired": true,
         "choices": [
          {
           "value": "D1",
           "text": "Division 1"
          },
          {
           "value": "D2",
           "text": "Division 2"
          },
          {
           "value": "D3",
           "text": "Division 3"
          },
          {
           "value": "D4",
           "text": "Division 4"
          },
          {
           "value": "D5",
           "text": "Division 5"
          },
          {
           "value": "D6",
           "text": "Division 6+"
          }
         ]
        }
       ],
       "questionTitleLocation": "hidden",
       "isRequired": true
      },
      {
       "type": "panel",
       "name": "lounge_panel",
       "elements": [
        {
         "type": "boolean",
         "name": "lounge",
         "title": "Mogi Lounge",
         "titleLocation": "left",
         "isRequired": true,
         "swapOrder": true
        },
        {
         "type": "tagbox",
         "name": "lounge_format",
         "visibleIf": "{lounge} = true",
         "isRequired": true,
         "choices": [
          {
           "value": "rts",
           "text": "Regular Tracks"
          },
          {
           "value": "cts",
           "text": "Custom Tracks"
          }
         ],
         "colCount": 2
        },
        {
         "type": "dropdown",
         "name": "lounge_tier_copythis",
         "visibleIf": "{lounge_format} contains 'rts'",
         "title": "RT Tier",
         "titleLocation": "left",
         "isRequired": true,
         "choices": [
          {
           "value": "Iron",
           "text": "RT Iron"
          },
          {
           "value": "Bronze",
           "text": "RT Bronze"
          },
          {
           "value": "Silver",
           "text": "RT Silver"
          },
          {
           "value": "Gold",
           "text": "RT Gold"
          },
          {
           "value": "Platinum",
           "text": "RT Platinum"
          },
          {
           "value": "Ruby",
           "text": "RT Ruby"
          },
          {
           "value": "Diamond",
           "text": "RT Diamond"
          },
          {
           "value": "Master",
           "text": "RT Master"
          },
          {
           "value": "Grandmaster",
           "text": "RT Grandmaster"
          }
         ]
        }
       ],
       "questionTitleLocation": "hidden",
       "isRequired": true,
       "startWithNewLine": false
      }
     ],
     "visibleIf": "{comp} = true",
     "title": "Select all places you play the game competitively:",
     "isRequired": true
    },
    {
     "type": "panel",
     "name": "wr_panel",
     "elements": [
      {
       "type": "checkbox",
       "name": "wrs",
       "titleLocation": "hidden",
       "isRequired": true,
       "choices": [
        {
         "value": "150rt",
         "text": "150cc RT No-Shortcut"
        },
        {
         "value": "150rtg",
         "text": "150cc RT Glitch / Shortcut"
        },
        {
         "value": "150rtk",
         "text": "150cc RT Kart WR (any category)"
        },
        {
         "value": "150ct",
         "text": "150cc CT No-Shortcut"
        },
        {
         "value": "150cts",
         "text": "150cc CT Shortcut"
        },
        {
         "value": "150ctg",
         "text": "150cc CT Glitch"
        },
        {
         "value": "150ctk",
         "text": "150cc CT Kart WR (any category)"
        },
        {
         "value": "200",
         "text": "200cc RT/CT (any category)"
        }
       ]
      }
     ],
     "visibleIf": "{wr_holder} = true",
     "questionTitleLocation": "top",
     "title": "Which of the following World Records have you held?",
     "isRequired": true
    },
    {
     "type": "radiogroup",
     "name": "question1",
     "startWithNewLine": false,
     "title": "What is the most amount of Gold Stars you have ever achieved",
     "isRequired": true,
     "choices": [
      {
       "value": "Item 1",
       "text": "250"
      },
      {
       "value": "Item 2",
       "text": "200 - 249"
      },
      {
       "value": "Item 3",
       "text": "100 - 199"
      },
      {
       "value": "Item 4",
       "text": "Less than 100"
      },
      {
       "value": "Item 5",
       "text": "Not interested in gold stars"
      }
     ]
    }
   ],
   "title": "Player Information",
   "description": "This section contains required information about you as a player.\n"
  }
 ],
 "showQuestionNumbers": "off",
 "checkErrorsMode": "onValueChanged",
 "autoGrowComment": true,
 "completeText": "Submit",
 "width": "900"
}
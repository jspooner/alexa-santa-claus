require 'active_support/all'
require 'json'

QUESTIONS = JSON.parse(File.read('speechAssets/q_and_a.json'))

def gen_intent str
  "#{str} Intent".gsub(" ", "_").camelize
end

def gen_intent_schema
  QUESTIONS.collect do |i|
    {
      "intent": gen_intent(i["q"])
    }
  end
end

# CountDownIntent when is christmas
# CountDownIntent when christmas is here
def gen_utterances
  QUESTIONS.collect do |i|
    gen_intent(i["q"]) + " " + i["q"]
  end
end

def gen_claus_utterances
  QUESTIONS.collect do |i|
    gen_intent(i["q"]) + " claus " + i["q"]
  end
end

def gen_js_code
  QUESTIONS.collect do |i|
    intent = gen_intent(i["q"])
    answer = i["a"].gsub('"', "\"")
    code = <<-EOF
"#{intent}": function (intent, session, response) {
  response.tellWithCard("#{answer}", "#{answer}", "#{answer}");
},
    EOF
  end
end

def gen_docs
  QUESTIONS.collect { |i| "Alexa ask Santa " + i["q"] }
end

puts ""
puts "Generating Intent Schema"
puts ""
puts gen_intent_schema.to_json.gsub("[", "").gsub("]", "")


puts ""
puts "Generating Utterances"
puts ""
puts gen_utterances
puts gen_claus_utterances

puts ""
puts "Generating JS Code"
puts ""
puts gen_js_code

puts ""
puts "Generating Docs"
puts ""
puts gen_docs



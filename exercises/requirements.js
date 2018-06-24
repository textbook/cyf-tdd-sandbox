function smsSender(messageBody) {
  return `Sending "${messageBody}" via SMS`;
}

function emailSender(messageBody) {
  return `Sending "${messageBody}" via email`;
}

function getSender(messageType) {
  if (messageType === 'sms') {
    return smsSender;
  } else if (messageType === 'email') {
    return emailSender;
  }
}

module.exports = function (message) {
  const sender = getSender(message.type);
  return sender(message.body);
}

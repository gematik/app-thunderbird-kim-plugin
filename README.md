# FDK KIM Thunderbird plugin

fork of the famous GEMATIK KIM Thunderbird plugin + some additions, updates and fixes.

## Purpose

Plugin for setting `X-KIM-Dienstkennung` and `Content-Description` message header on sending a message 
and showing the value of this header on received messages.

## Installation

This plugin uses an experimental api therefore there is no signature present.
To install the plugin you may have to set the following parameter
`xpinstall.signatures.required` to `false` in the advanced config.

Download the build plugin [here](dist/kim-thunderbird-plugin.xpi).

1. From the tools menu, select *Add-ons*.
2. Click on the tools icon, click on *Install Add-on from file* option and select the 
addon file from above.
3. Select *Install Now* in the confirmation window that comes up and the addon will be installed
into Thunderbird.
    




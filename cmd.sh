#!/usr/bin/env bash
youtube-dl --extract-audio --audio-format mp3 --restrict-filenames -o "%(title)s.%(ext)s"  https://www.youtube.com/watch?v=LRP8d7hhpoQ | perl -e 'use JSON; @in=grep(s/\n$//, <>); print encode_json(\@in)."\n";'
youtube-dl --extract-audio --audio-format mp3 --restrict-filenames -o "youtube/%(title)s.%(ext)s" https://www.youtube.com/watch?v=EKL86h3CpdU > fileName.txt;
mkdir src/tmp-messages
for f in src/messages/*.js
do
    target_dir=`echo $f | sed -e 's/.\+\(\/[a-zA-Z\_]\+.js\)/\1/'`
    cat $f | sed -e '1i  /* eslint-disable */' > \
        src/tmp-messages/$target_dir
done

rm -rf src/messages && mv src/tmp-messages src/messages

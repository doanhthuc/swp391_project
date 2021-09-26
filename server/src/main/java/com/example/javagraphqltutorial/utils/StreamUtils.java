package com.example.javagraphqltutorial.utils;

import java.util.Collection;
import java.util.stream.Stream;

public final class StreamUtils {
    public static <T> Stream<T> collectionStream(Collection<T> collection) {
        return collection == null || collection.isEmpty() ? Stream.empty() : collection.stream();
    }
}

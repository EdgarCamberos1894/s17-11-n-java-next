package com.nocountry.retrueque.model.dto.response;


import java.util.List;

public record ServiceRes(
        Long id,
        String title,
        String description,
        String rules,
        String imgUrl,
        UserResShort user,
        CategoryRes category,
        List<Integer> days,
        List<Integer> shiftTime
) {
}

import 'package:flutter/material.dart';

class AnimeResponse {
  AnimeResponse({
    required this.pagination,
    required this.listaAnimes,
  });
  late final Pagination pagination;
  late final List<Anime> listaAnimes;

  AnimeResponse.fromJson(Map<String, dynamic> json){
    if(json['pagination'] != null)
      pagination = Pagination.fromJson(json['pagination']);
    if(json['data'] != null)
      listaAnimes = List.from(json['data']).map((e)=>Anime.fromJson(e)).toList();
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['pagination'] = pagination.toJson();
    _data['data'] = listaAnimes.map((e)=>e.toJson()).toList();
    return _data;
  }
}

class Pagination {
  Pagination({
    required this.lastVisiblePage,
    required this.hasNextPage,
    required this.currentPage,
    required this.items,
  });
  late final int lastVisiblePage;
  late final bool hasNextPage;
  late final int currentPage;
  late final Items items;

  Pagination.fromJson(Map<String, dynamic> json){
    lastVisiblePage = json['last_visible_page'];
    hasNextPage = json['has_next_page'];
    currentPage = json['current_page'];
    items = Items.fromJson(json['items']);
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['last_visible_page'] = lastVisiblePage;
    _data['has_next_page'] = hasNextPage;
    _data['current_page'] = currentPage;
    _data['items'] = items.toJson();
    return _data;
  }
}

class Items {
  Items({
    required this.count,
    required this.total,
    required this.perPage,
  });
  late final int count;
  late final int total;
  late final int perPage;

  Items.fromJson(Map<String, dynamic> json){
    count = json['count'];
    total = json['total'];
    perPage = json['per_page'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['count'] = count;
    _data['total'] = total;
    _data['per_page'] = perPage;
    return _data;
  }
}

class Anime {
  Anime({
    required this.malId,
    required this.url,
    required this.images,
    required this.title,
    this.titleEnglish,
    required this.titleJapanese,
    required this.titleSynonyms,
    required this.type,
    required this.source,
    required this.episodes,
    required this.status,
    required this.airing,
    required this.aired,
    required this.duration,
    required this.rating,
    required this.score,
    required this.scoredBy,
    required this.rank,
    required this.popularity,
    required this.members,
    required this.favorites,
    required this.synopsis,
    this.background,
    this.season,
    this.year,
    required this.broadcast,
    required this.producers,
    required this.licensors,
    required this.studios,
    required this.genres,
    required this.explicitGenres,
    required this.themes,
    required this.demographics,
  });
  late final int malId;
  late final String url;
  late final Images images;
  late final String title;
  late final String? titleEnglish;
  late final String titleJapanese;
  late final List<String> titleSynonyms;
  late final String type;
  late final String source;
  int episodes = 0;
  late final String status;
  late final bool airing;
  late final Aired aired;
  late final String duration;
  late final String rating;
  late final double score;
  late final int scoredBy;
  late final int rank;
  late final int popularity;
  late final int members;
  late final int favorites;
  late final String synopsis;
  late final String? background;
  late final String? season;
  late final int? year;
  late final Broadcast broadcast;
  late final List<Producers> producers;
  late final List<Licensors> licensors;
  late final List<Studios> studios;
  late final List<Genres> genres;
  late final List<dynamic> explicitGenres;
  late final List<Themes> themes;
  late final List<Demographics> demographics;

  Anime.fromJson(Map<String, dynamic> json){
    malId = json['mal_id'];
    url = json['url'];
    images = Images.fromJson(json['images']);
    title = json['title'];
    titleEnglish = null;
    if(json['title_japanese'] != null)
      titleJapanese = json['title_japanese'];
    else
      titleJapanese = json['title'];
    titleSynonyms = List.castFrom<dynamic, String>(json['title_synonyms']);
    type = json['type'];
    source = json['source'];
    if(json['episodes'] != null){
      episodes = json['episodes'];
    }
    status = json['status'];
    airing = json['airing'];
    aired = Aired.fromJson(json['aired']);
    duration = json['duration'];
    rating = json['rating'];
    if(json['score'] != null)
      score =  json['score'];
    else
      score = 0;
    if(json['scored_by'] != null)
      scoredBy = json['scored_by'];
    else
      scoredBy = 0;
    if(json['rank'] != null)
      rank = json['rank'];
    else
      rank = 0;
    popularity = json['popularity'];
    members = json['members'];
    favorites = json['favorites'];
    if(json['synopsis'] != null)
      synopsis = json['synopsis'];
    else
      synopsis = 'No synopsis avaiable';
    background = null;
    season = null;
    year = null;
    broadcast = Broadcast.fromJson(json['broadcast']);
    producers = List.from(json['producers']).map((e)=>Producers.fromJson(e)).toList();
    licensors = List.from(json['licensors']).map((e)=>Licensors.fromJson(e)).toList();
    studios = List.from(json['studios']).map((e)=>Studios.fromJson(e)).toList();
    genres = List.from(json['genres']).map((e)=>Genres.fromJson(e)).toList();
    explicitGenres = List.castFrom<dynamic, dynamic>(json['explicit_genres']);
    themes = List.from(json['themes']).map((e)=>Themes.fromJson(e)).toList();
    demographics = List.from(json['demographics']).map((e)=>Demographics.fromJson(e)).toList();
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['mal_id'] = malId;
    _data['url'] = url;
    _data['images'] = images.toJson();
    _data['title'] = title;
    _data['title_english'] = titleEnglish;
    _data['title_japanese'] = titleJapanese;
    _data['title_synonyms'] = titleSynonyms;
    _data['type'] = type;
    _data['source'] = source;
    _data['episodes'] = episodes;
    _data['status'] = status;
    _data['airing'] = airing;
    _data['aired'] = aired.toJson();
    _data['duration'] = duration;
    _data['rating'] = rating;
    _data['score'] = score;
    _data['scored_by'] = scoredBy;
    _data['rank'] = rank;
    _data['popularity'] = popularity;
    _data['members'] = members;
    _data['favorites'] = favorites;
    _data['synopsis'] = synopsis;
    _data['background'] = background;
    _data['season'] = season;
    _data['year'] = year;
    _data['broadcast'] = broadcast.toJson();
    _data['producers'] = producers.map((e)=>e.toJson()).toList();
    _data['licensors'] = licensors.map((e)=>e.toJson()).toList();
    _data['studios'] = studios.map((e)=>e.toJson()).toList();
    _data['genres'] = genres.map((e)=>e.toJson()).toList();
    _data['explicit_genres'] = explicitGenres;
    _data['themes'] = themes.map((e)=>e.toJson()).toList();
    _data['demographics'] = demographics.map((e)=>e.toJson()).toList();
    return _data;
  }
}

class Images {
  Images({
    required this.jpg,
    required this.webp,
  });
  late final Jpg jpg;
  late final Webp webp;

  Images.fromJson(Map<String, dynamic> json){
    jpg = Jpg.fromJson(json['jpg']);
    webp = Webp.fromJson(json['webp']);
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['jpg'] = jpg.toJson();
    _data['webp'] = webp.toJson();
    return _data;
  }
}

class Jpg {
  Jpg({
    required this.imageUrl,
    required this.smallImageUrl,
    required this.largeImageUrl,
  });
  late final String imageUrl;
  late final String smallImageUrl;
  late final String largeImageUrl;

  Jpg.fromJson(Map<String, dynamic> json){
    imageUrl = json['image_url'];
    smallImageUrl = json['small_image_url'];
    largeImageUrl = json['large_image_url'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['image_url'] = imageUrl;
    _data['small_image_url'] = smallImageUrl;
    _data['large_image_url'] = largeImageUrl;
    return _data;
  }
}

class Webp {
  Webp({
    required this.imageUrl,
    required this.smallImageUrl,
    required this.largeImageUrl,
  });
  late final String imageUrl;
  late final String smallImageUrl;
  late final String largeImageUrl;

  Webp.fromJson(Map<String, dynamic> json){
    imageUrl = json['image_url'];
    smallImageUrl = json['small_image_url'];
    largeImageUrl = json['large_image_url'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['image_url'] = imageUrl;
    _data['small_image_url'] = smallImageUrl;
    _data['large_image_url'] = largeImageUrl;
    return _data;
  }
}



class Aired {
  Aired({
    required this.from,
    this.to,
    required this.prop,
    required this.string,
  });
  late final String from;
  late final String? to;
  late final Prop prop;
  late final String string;

  Aired.fromJson(Map<String, dynamic> json){
    if(json['from'] != null)
      from = json['from'];
    to = json['to'];
    prop = Prop.fromJson(json['prop']);
    string = json['string'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['from'] = from;
    _data['to'] = to;
    _data['prop'] = prop.toJson();
    _data['string'] = string;
    return _data;
  }
}

class Prop {
  Prop({
    required this.from,
    required this.to,
  });
  late final From from;
  late final To to;

  Prop.fromJson(Map<String, dynamic> json){
    from = From.fromJson(json['from']);
    to = To.fromJson(json['to']);
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['from'] = from.toJson();
    _data['to'] = to.toJson();
    return _data;
  }
}

class From {
  From({
    required this.day,
    required this.month,
    required this.year,
  });
  late final int day;
  late final int month;
  late final int year;

  From.fromJson(Map<String, dynamic> json){
    if(json['day'] != null)
      day = json['day'];
    else
      day = 0;
    if(json['month'] != null)
      month = json['month'];
    else
      month = 0;

    if(json['year'] != null)
      year = json['year'];
    else
      year = 0;
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['day'] = day;
    _data['month'] = month;
    _data['year'] = year;
    return _data;
  }
}

class To {
  To({
    this.day,
    this.month,
    this.year,
  });
  late final int? day;
  late final int? month;
  late final int? year;

  To.fromJson(Map<String, dynamic> json){
    day = null;
    month = null;
    year = null;
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['day'] = day;
    _data['month'] = month;
    _data['year'] = year;
    return _data;
  }
}

class Broadcast {
  Broadcast({
    this.day,
    this.time,
    this.timezone,
    this.string,
  });
  late final String? day;
  late final String? time;
  late final String? timezone;
  late final String? string;

  Broadcast.fromJson(Map<String, dynamic> json){
    day = null;
    time = null;
    timezone = null;
    string = null;
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['day'] = day;
    _data['time'] = time;
    _data['timezone'] = timezone;
    _data['string'] = string;
    return _data;
  }
}

class Producers {
  Producers({
    required this.malId,
    required this.type,
    required this.name,
    required this.url,
  });
  late final int malId;
  late final String type;
  late final String name;
  late final String url;

  Producers.fromJson(Map<String, dynamic> json){
    malId = json['mal_id'];
    type = json['type'];
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['mal_id'] = malId;
    _data['type'] = type;
    _data['name'] = name;
    _data['url'] = url;
    return _data;
  }
}

class Licensors {
  Licensors({
    required this.malId,
    required this.type,
    required this.name,
    required this.url,
  });
  late final int malId;
  late final String type;
  late final String name;
  late final String url;

  Licensors.fromJson(Map<String, dynamic> json){
    malId = json['mal_id'];
    type = json['type'];
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['mal_id'] = malId;
    _data['type'] = type;
    _data['name'] = name;
    _data['url'] = url;
    return _data;
  }
}

class Studios {
  Studios({
    required this.malId,
    required this.type,
    required this.name,
    required this.url,
  });
  late final int malId;
  late final String type;
  late final String name;
  late final String url;

  Studios.fromJson(Map<String, dynamic> json){
    malId = json['mal_id'];
    type = json['type'];
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['mal_id'] = malId;
    _data['type'] = type;
    _data['name'] = name;
    _data['url'] = url;
    return _data;
  }
}

class Genres {
  Genres({
    required this.malId,
    required this.type,
    required this.name,
    required this.url,
  });
  late final int malId;
  late final String type;
  late final String name;
  late final String url;

  Genres.fromJson(Map<String, dynamic> json){
    malId = json['mal_id'];
    type = json['type'];
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['mal_id'] = malId;
    _data['type'] = type;
    _data['name'] = name;
    _data['url'] = url;
    return _data;
  }
}

class Themes {
  Themes({
    required this.malId,
    required this.type,
    required this.name,
    required this.url,
  });
  late final int malId;
  late final String type;
  late final String name;
  late final String url;

  Themes.fromJson(Map<String, dynamic> json){
    malId = json['mal_id'];
    type = json['type'];
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['mal_id'] = malId;
    _data['type'] = type;
    _data['name'] = name;
    _data['url'] = url;
    return _data;
  }
}

class Demographics {
  Demographics({
    required this.malId,
    required this.type,
    required this.name,
    required this.url,
  });
  late final int malId;
  late final String type;
  late final String name;
  late final String url;

  Demographics.fromJson(Map<String, dynamic> json){
    malId = json['mal_id'];
    type = json['type'];
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['mal_id'] = malId;
    _data['type'] = type;
    _data['name'] = name;
    _data['url'] = url;
    return _data;
  }
}
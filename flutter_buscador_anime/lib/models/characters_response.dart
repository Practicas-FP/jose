class CharactersResponse {
  CharactersResponse({
    required this.data,
  });
  late final List<CharacterData> data;

  CharactersResponse.fromJson(Map<String, dynamic> json) {
    data = List.from(json['data']).map((e) => CharacterData.fromJson(e)).toList();
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['data'] = data.map((e) => e.toJson()).toList();
    return _data;
  }
}

class CharacterData {
  CharacterData({
    required this.character,
    required this.role,
    required this.voiceActors,
  });
  late final Character character;
  late final String role;
  late final List<VoiceActors> voiceActors;

  CharacterData.fromJson(Map<String, dynamic> json) {
    character = Character.fromJson(json['character']);
    role = json['role'];
    voiceActors = List.from(json['voice_actors'])
        .map((e) => VoiceActors.fromJson(e))
        .toList();
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['character'] = character.toJson();
    _data['role'] = role;
    _data['voice_actors'] = voiceActors.map((e) => e.toJson()).toList();
    return _data;
  }
}

class Character {
  Character({
    required this.malId,
    required this.url,
    required this.images,
    required this.name,
  });
  late final int malId;
  late final String url;
  late final Images images;
  late final String name;

  Character.fromJson(Map<String, dynamic> json) {
    malId = json['mal_id'];
    url = json['url'];
    images = Images.fromJson(json['images']);
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['mal_id'] = malId;
    _data['url'] = url;
    _data['images'] = images.toJson();
    _data['name'] = name;
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

  Images.fromJson(Map<String, dynamic> json) {
    jpg = Jpg.fromJson(json['jpg']);
    if(json['webp'] != null)
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
  });
  late final String imageUrl;

  Jpg.fromJson(Map<String, dynamic> json) {
    imageUrl = json['image_url'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['image_url'] = imageUrl;
    return _data;
  }
}

class Webp {
  Webp({
    required this.imageUrl,
    required this.smallImageUrl,
  });
  late final String imageUrl;
  late final String smallImageUrl;

  Webp.fromJson(Map<String, dynamic> json) {
    imageUrl = json['image_url'];
    smallImageUrl = json['small_image_url'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['image_url'] = imageUrl;
    _data['small_image_url'] = smallImageUrl;
    return _data;
  }
}

class VoiceActors {
  VoiceActors({
    required this.person,
    required this.language,
  });
  late final Person person;
  late final String language;

  VoiceActors.fromJson(Map<String, dynamic> json) {
    person = Person.fromJson(json['person']);
    language = json['language'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['person'] = person.toJson();
    _data['language'] = language;
    return _data;
  }
}

class Person {
  Person({
    required this.malId,
    required this.url,
    required this.images,
    required this.name,
  });
  late final int malId;
  late final String url;
  late final Images images;
  late final String name;

  Person.fromJson(Map<String, dynamic> json) {
    malId = json['mal_id'];
    url = json['url'];
    images = Images.fromJson(json['images']);
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['mal_id'] = malId;
    _data['url'] = url;
    _data['images'] = images.toJson();
    _data['name'] = name;
    return _data;
  }
}

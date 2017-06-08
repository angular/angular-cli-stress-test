/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service938Service } from './service-938.service';

describe('Service938Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service938Service]
    });
  });

  it('should ...', inject([Service938Service], (service: Service938Service) => {
    expect(service).toBeTruthy();
  }));
});

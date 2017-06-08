/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service296Service } from './service-296.service';

describe('Service296Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service296Service]
    });
  });

  it('should ...', inject([Service296Service], (service: Service296Service) => {
    expect(service).toBeTruthy();
  }));
});

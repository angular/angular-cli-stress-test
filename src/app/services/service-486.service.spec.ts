/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service486Service } from './service-486.service';

describe('Service486Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service486Service]
    });
  });

  it('should ...', inject([Service486Service], (service: Service486Service) => {
    expect(service).toBeTruthy();
  }));
});

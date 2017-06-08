/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service710Service } from './service-710.service';

describe('Service710Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service710Service]
    });
  });

  it('should ...', inject([Service710Service], (service: Service710Service) => {
    expect(service).toBeTruthy();
  }));
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service714Service } from './service-714.service';

describe('Service714Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service714Service]
    });
  });

  it('should ...', inject([Service714Service], (service: Service714Service) => {
    expect(service).toBeTruthy();
  }));
});

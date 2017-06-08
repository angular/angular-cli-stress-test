/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service996Service } from './service-996.service';

describe('Service996Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service996Service]
    });
  });

  it('should ...', inject([Service996Service], (service: Service996Service) => {
    expect(service).toBeTruthy();
  }));
});

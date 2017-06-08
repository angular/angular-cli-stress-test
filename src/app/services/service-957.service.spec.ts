/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service957Service } from './service-957.service';

describe('Service957Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service957Service]
    });
  });

  it('should ...', inject([Service957Service], (service: Service957Service) => {
    expect(service).toBeTruthy();
  }));
});

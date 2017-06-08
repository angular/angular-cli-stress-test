/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service678Service } from './service-678.service';

describe('Service678Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service678Service]
    });
  });

  it('should ...', inject([Service678Service], (service: Service678Service) => {
    expect(service).toBeTruthy();
  }));
});

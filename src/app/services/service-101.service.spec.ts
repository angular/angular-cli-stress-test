/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service101Service } from './service-101.service';

describe('Service101Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service101Service]
    });
  });

  it('should ...', inject([Service101Service], (service: Service101Service) => {
    expect(service).toBeTruthy();
  }));
});

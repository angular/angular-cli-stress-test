/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service12Service } from './service-12.service';

describe('Service12Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service12Service]
    });
  });

  it('should ...', inject([Service12Service], (service: Service12Service) => {
    expect(service).toBeTruthy();
  }));
});

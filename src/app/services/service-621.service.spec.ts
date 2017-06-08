/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service621Service } from './service-621.service';

describe('Service621Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service621Service]
    });
  });

  it('should ...', inject([Service621Service], (service: Service621Service) => {
    expect(service).toBeTruthy();
  }));
});

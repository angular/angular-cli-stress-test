/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service663Service } from './service-663.service';

describe('Service663Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service663Service]
    });
  });

  it('should ...', inject([Service663Service], (service: Service663Service) => {
    expect(service).toBeTruthy();
  }));
});

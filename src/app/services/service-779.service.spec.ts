/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service779Service } from './service-779.service';

describe('Service779Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service779Service]
    });
  });

  it('should ...', inject([Service779Service], (service: Service779Service) => {
    expect(service).toBeTruthy();
  }));
});

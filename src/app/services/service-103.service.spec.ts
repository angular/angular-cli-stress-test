/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service103Service } from './service-103.service';

describe('Service103Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service103Service]
    });
  });

  it('should ...', inject([Service103Service], (service: Service103Service) => {
    expect(service).toBeTruthy();
  }));
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service832Service } from './service-832.service';

describe('Service832Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service832Service]
    });
  });

  it('should ...', inject([Service832Service], (service: Service832Service) => {
    expect(service).toBeTruthy();
  }));
});

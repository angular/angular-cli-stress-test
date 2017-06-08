/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service204Service } from './service-204.service';

describe('Service204Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service204Service]
    });
  });

  it('should ...', inject([Service204Service], (service: Service204Service) => {
    expect(service).toBeTruthy();
  }));
});

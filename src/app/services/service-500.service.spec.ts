/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service500Service } from './service-500.service';

describe('Service500Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service500Service]
    });
  });

  it('should ...', inject([Service500Service], (service: Service500Service) => {
    expect(service).toBeTruthy();
  }));
});

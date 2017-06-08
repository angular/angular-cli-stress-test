/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service200Service } from './service-200.service';

describe('Service200Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service200Service]
    });
  });

  it('should ...', inject([Service200Service], (service: Service200Service) => {
    expect(service).toBeTruthy();
  }));
});

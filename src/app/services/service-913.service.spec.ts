/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service913Service } from './service-913.service';

describe('Service913Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service913Service]
    });
  });

  it('should ...', inject([Service913Service], (service: Service913Service) => {
    expect(service).toBeTruthy();
  }));
});

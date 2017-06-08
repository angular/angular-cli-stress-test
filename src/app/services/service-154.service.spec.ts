/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service154Service } from './service-154.service';

describe('Service154Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service154Service]
    });
  });

  it('should ...', inject([Service154Service], (service: Service154Service) => {
    expect(service).toBeTruthy();
  }));
});

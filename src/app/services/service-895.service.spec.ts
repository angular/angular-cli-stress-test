/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service895Service } from './service-895.service';

describe('Service895Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service895Service]
    });
  });

  it('should ...', inject([Service895Service], (service: Service895Service) => {
    expect(service).toBeTruthy();
  }));
});

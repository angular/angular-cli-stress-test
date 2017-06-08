/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service104Service } from './service-104.service';

describe('Service104Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service104Service]
    });
  });

  it('should ...', inject([Service104Service], (service: Service104Service) => {
    expect(service).toBeTruthy();
  }));
});

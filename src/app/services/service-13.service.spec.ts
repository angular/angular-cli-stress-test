/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service13Service } from './service-13.service';

describe('Service13Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service13Service]
    });
  });

  it('should ...', inject([Service13Service], (service: Service13Service) => {
    expect(service).toBeTruthy();
  }));
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service597Service } from './service-597.service';

describe('Service597Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service597Service]
    });
  });

  it('should ...', inject([Service597Service], (service: Service597Service) => {
    expect(service).toBeTruthy();
  }));
});

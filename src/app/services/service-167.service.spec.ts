/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service167Service } from './service-167.service';

describe('Service167Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service167Service]
    });
  });

  it('should ...', inject([Service167Service], (service: Service167Service) => {
    expect(service).toBeTruthy();
  }));
});

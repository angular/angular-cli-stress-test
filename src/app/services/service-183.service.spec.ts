/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service183Service } from './service-183.service';

describe('Service183Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service183Service]
    });
  });

  it('should ...', inject([Service183Service], (service: Service183Service) => {
    expect(service).toBeTruthy();
  }));
});

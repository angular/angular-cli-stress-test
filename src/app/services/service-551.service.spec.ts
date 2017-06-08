/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service551Service } from './service-551.service';

describe('Service551Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service551Service]
    });
  });

  it('should ...', inject([Service551Service], (service: Service551Service) => {
    expect(service).toBeTruthy();
  }));
});

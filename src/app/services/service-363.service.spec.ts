/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service363Service } from './service-363.service';

describe('Service363Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service363Service]
    });
  });

  it('should ...', inject([Service363Service], (service: Service363Service) => {
    expect(service).toBeTruthy();
  }));
});

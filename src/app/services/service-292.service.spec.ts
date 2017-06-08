/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service292Service } from './service-292.service';

describe('Service292Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service292Service]
    });
  });

  it('should ...', inject([Service292Service], (service: Service292Service) => {
    expect(service).toBeTruthy();
  }));
});

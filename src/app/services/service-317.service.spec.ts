/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service317Service } from './service-317.service';

describe('Service317Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service317Service]
    });
  });

  it('should ...', inject([Service317Service], (service: Service317Service) => {
    expect(service).toBeTruthy();
  }));
});

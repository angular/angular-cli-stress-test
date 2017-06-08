/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service809Service } from './service-809.service';

describe('Service809Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service809Service]
    });
  });

  it('should ...', inject([Service809Service], (service: Service809Service) => {
    expect(service).toBeTruthy();
  }));
});
